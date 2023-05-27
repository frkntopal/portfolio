import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, writeBatch, doc, getDoc } from "firebase/firestore";
import PROJECTS_DATA from "../../projects-data";


const firebaseConfig = {
  apiKey: "AIzaSyC8BDTjtpIKHTpsfuLnjm4NCdppmLhRUl8",
  authDomain: "furkantopal-portfolio-1845f.firebaseapp.com",
  projectId: "furkantopal-portfolio-1845f",
  storageBucket: "furkantopal-portfolio-1845f.appspot.com",
  messagingSenderId: "262456114455",
  appId: "1:262456114455:web:f095a0de9947257c4c8b52",
  measurementId: "G-M47LP2B8Y3"
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
