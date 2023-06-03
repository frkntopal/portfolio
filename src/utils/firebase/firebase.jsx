import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, writeBatch, doc, getDoc } from "firebase/firestore";
import PROJECTS_DATA from "../../projects-data";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export async function uploadGifToFirestore () {
    try {
        const batch = writeBatch(db);
        PROJECTS_DATA.forEach((gifCategory) =>{
            const gifCategoryRef  = doc(collection(db,"gifCategories"), gifCategory.title.toLowerCase());
            batch.set(gifCategoryRef,{title: gifCategory.title});

            const gifsRef = collection(gifCategoryRef,"gifs");
            gifCategory.items.forEach((gif) => {
                const gifDocRef = doc(gifsRef, `${gif.id}`);
                batch.set(gifDocRef,gif);
            });
        });
        await batch.commit();
    } catch (error) {
    }
}

export async function fetchGifCategories() {
    const gifCategoriesRef = collection(db, "gifCategories");
    const gifCategoriesSnapshot = await getDocs(gifCategoriesRef);
    const gifCategories = [];

    for (const categoryDoc of gifCategoriesSnapshot.docs) {
        const categoryData = categoryDoc.data();
        const gifsRef = collection(categoryDoc.ref, "gifs");
        const gifsSnapshot = await getDocs(gifsRef);
        const gifs = gifsSnapshot.docs.map((gifDoc) => ({
            id: gifDoc.id,
            ...gifDoc.data(),
        }));

        gifCategories.push({
            id: categoryDoc.id,
            title: categoryData.title,
            gifs: gifs,
        });
    }

    console.log(gifCategories); // Opsiyonel: Verileri konsola yazdırabilirsiniz.

    return gifCategories;
}
