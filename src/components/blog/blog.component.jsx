import React from 'react';
import './blog.styles.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const posts = [
    {
        id: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/furkantopal-portfolio-1845f.appspot.com/o/jackson-sophat-_t-l5FFH8VA-unsplash.jpg?alt=media&token=f7942ff9-b09a-4be1-bb78-cf21d1bde0b3&_gl=1*w58e58*_ga*NzAxMDg4NDIzLjE2NzA3NDk3NDg.*_ga_CW55HF8NVT*MTY4NTc4MDEwMC41MC4xLjE2ODU3ODAxMzguMC4wLjA.',
        title: 'Keys to Success in Front-End Projects...',
        excerpt: 'Front-end development plays a crucial role in designing and ensuring the usability of the user interface. A successful front-end project not only offers an impressive user experience but also takes into account functionality and performance. In this blog post, we will discuss important points to consider in front-end projects and provide tips on how to execute them successfully.'
    },
    {
        id: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/furkantopal-portfolio-1845f.appspot.com/o/drew-beamer-xU5Mqq0Chck-unsplash.jpg?alt=media&token=80cfb98f-2217-4440-8514-4eb2a85afc12&_gl=1*mf55ad*_ga*NzAxMDg4NDIzLjE2NzA3NDk3NDg.*_ga_CW55HF8NVT*MTY4NTc5MDg5NS41Mi4xLjE2ODU3OTE3MTAuMC4wLjA.',
        title: 'The Future of Front-End Software...',
        excerpt: 'Front-end software development is a crucial discipline that evolves rapidly in the ever-changing landscape of the web. To enhance user experience, improve performance, and adapt to new technologies, front-end developers need to constantly embrace new tools, techniques, and trends. In this article, we will focus on some key points regarding the future direction of front-end software.'
    },
    {
        id: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/furkantopal-portfolio-1845f.appspot.com/o/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg?alt=media&token=d98b2222-74eb-4403-b4c7-841d8570e624&_gl=1*1kq97bj*_ga*NzAxMDg4NDIzLjE2NzA3NDk3NDg.*_ga_CW55HF8NVT*MTY4NTc5NDYzNi41My4xLjE2ODU3OTQ3MTEuMC4wLjA.',
        title: 'Project Development Stages for Front-End Developers...',
        excerpt: 'Front-end developers are responsible for developing the user interface of websites or applications. This process requires following a project development lifecycle with specific steps. In this blog post, I will explain the typical stages that a front-end developer goes through during a project.'
    },
    // Diğer blog yazıları...
];

const Blog = ({post}) => {
    const { t } = useTranslation();
    return (
        <div className="blogPost">
            <img src={post.image} alt={post.title} />
            <h2>{t(post.title)}</h2>
            <p>{t(post.excerpt)}</p>
            <Link to={`/blog/${post.id}`}>{t('Read more')}</Link>
        </div>
    );
}

const BlogSection = () => {
    return (
        <div className="blogSection">
            <div className="blogPosts">
                {posts.map(post => <Blog post={post} key={post.id}/>)}
            </div>
        </div>
    );
}

export default BlogSection;