import React from 'react'
import './blog-page.styles.scss'
import { useTranslation } from 'react-i18next';

function BlogPageTwo() {
    const { t} = useTranslation();
    return (
        <div className="blog-container">
          <img className="blog-image" src="https://firebasestorage.googleapis.com/v0/b/furkantopal-portfolio-1845f.appspot.com/o/drew-beamer-xU5Mqq0Chck-unsplash.jpg?alt=media&token=80cfb98f-2217-4440-8514-4eb2a85afc12&_gl=1*mf55ad*_ga*NzAxMDg4NDIzLjE2NzA3NDk3NDg.*_ga_CW55HF8NVT*MTY4NTc5MDg5NS41Mi4xLjE2ODU3OTE3MTAuMC4wLjA." alt="blog-write" />
            <div className="blog-info">
                <h2>{t('The Future of Front-End Software: Insights into Emerging Trends and Technological Advancements')}</h2>
                    <div className="blog-info-card">
                        <ul>
                            <p>{t('Front-end software development is a crucial discipline that evolves rapidly in the ever-changing landscape of the web. To enhance user experience, improve performance, and adapt to new technologies, front-end developers need to constantly embrace new tools, techniques, and trends. In this article, we will focus on some key points regarding the future direction of front-end software.')}</p>
                        </ul>
                        <h3>{t('Web Components and Reusability')}</h3>
                        <ul>          
                            <p>{t('In the future, the importance of web components and reusable elements will continue to grow. Web components are independent, reusable, and interactive building blocks. They empower developers to create applications more efficiently and rapidly. Component-based front-end frameworks and tools will become more widespread in the future, offering developers greater flexibility.')}</p>
                        </ul>                        
                        <h3>{t('Enhanced User Experience')}</h3>
                        <ul>          
                            <p>{t('Front-end development has always been a field that constantly strives to enhance user experience. In the future, developers will adopt new technologies to deliver more interactive and responsive user experiences. These technologies may include innovative solutions such as augmented reality (AR), virtual reality (VR), and mixed reality (AR/VR). Additionally, applications that offer smarter, personalized experiences and faster loading times will gain significance.')}</p> 
                        </ul>
                        <h3>{t('Advanced UI/UX Design')}</h3>
                            <ul>          
                                <p>{t('User interface (UI) and user experience (UX) design are integral parts of the front-end development process, and their significance will remain in the future. Developers need to closely follow design trends and optimize their applications accordingly to provide users with a better interactive experience. In the future, minimalist and intuitive user interfaces, richer animations and transitions, micro-interactions, and voice commands may become more preferred.')}</p>                                 
                            </ul>
                        <h3>{t('New Front-End Programming Languages and Tools')}</h3>
                            <ul>          
                                <p>{t('New programming languages and tools continue to emerge in the field of front-end development. In the future, these languages and tools may offer developers more flexibility, efficiency, and performance. For instance, the popularity of statically typed languages like TypeScript alongside JavaScript could increase. Moreover, editors, development environments, and tools that facilitate and expedite the front-end development process may also emerge.')}</p>                                 
                            </ul>
                        <h3>{t('Integration of Mobile App Development')}</h3>
                            <ul>          
                                <p>{t('In the future, the lines between mobile app development and web application development may become even more blurred. Developers may utilize tools and frameworks that allow them to build applications that can work across multiple platforms (web, iOS, Android) with a single codebase. Such tools save developers time and effort while providing a consistent user experience.')}</p>                                 
                            </ul>
                        <br /><br />
                            <ul>          
                                <p>{t('In the future, front-end software development will continue to be an exciting field that requires constant adaptation to innovative trends and technologies in a rapidly changing environment. Key areas that front-end developers need to focus on include web components, user experience, UI/UX design, new programming languages and tools, and mobile app integration. The future of front-end development will prioritize innovative approaches that emphasize fast, interactive, and responsive user experiences.')}</p>                                 
                            </ul>
                    </div>      
            </div>
        </div>
      );
}

export default BlogPageTwo