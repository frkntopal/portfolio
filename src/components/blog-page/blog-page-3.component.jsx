import React from 'react'
import './blog-page.styles.scss'
import { useTranslation } from 'react-i18next';

function BlogPageThree() {
    const {t} = useTranslation();
    return (
        <div className="blog-container">
          <img className="blog-image" src="https://firebasestorage.googleapis.com/v0/b/furkantopal-portfolio-1845f.appspot.com/o/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg?alt=media&token=d98b2222-74eb-4403-b4c7-841d8570e624&_gl=1*1kq97bj*_ga*NzAxMDg4NDIzLjE2NzA3NDk3NDg.*_ga_CW55HF8NVT*MTY4NTc5NDYzNi41My4xLjE2ODU3OTQ3MTEuMC4wLjA." alt="blog-writee" />
            <div className="blog-info">
                <h2>{t('Project Development Stages for Front-End Developers')}</h2>
                    <div className="blog-info-card">
                        <ul>
                            <p>{t('Front-end developers are responsible for developing the user interface of websites or applications. This process requires following a project development lifecycle with specific steps. In this blog post, I will explain the typical stages that a front-end developer goes through during a project.')}</p>
                        </ul>
                        <h3>{t('Understanding Requirements')}</h3>
                        <ul>          
                            <p>{t('The first step to successfully completing a project is to understand the requirements by establishing good communication with the client or project owner. In this stage, it is important to determine information such as the target audience, project goals, design preferences, and technical requirements. Understanding the client\'s expectations is crucial for the successful completion of the project.')}</p>
                        </ul>                        
                        <h3>{t('Design')}</h3>
                        <ul>          
                            <p>{t('During the design stage, the visual appearance of the user interface is determined. This stage often involves collaborating with graphic designers. Graphic designers establish the project\'s overall look and style, and the front-end developer brings the design to life by analyzing design documentation and implementing it using technologies like HTML, CSS, and JavaScript.')}</p> 
                        </ul>
                        <h3>{t('Technology Selection')}</h3>
                            <ul>          
                                <p>{t('The front-end developer is responsible for selecting the appropriate technologies for the project. In this stage, programming languages, frameworks, and libraries that best fit the project requirements are chosen. For example, JavaScript frameworks like React.js or Vue.js may be preferred for developing complex user interfaces.')}</p>                                 
                            </ul>
                        <h3>{t('Coding')}</h3>
                            <ul>          
                                <p>{t('The coding stage involves building the user interface based on the design and technology choices. The front-end developer implements the design elements and styling properties using HTML, CSS, and JavaScript. Attention is also given to browser compatibility, performance, and accessibility during this stage.')}</p>                                 
                            </ul>
                        <h3>{t('Testing')}</h3>
                            <ul>          
                                <p>{t('The developed user interface should be thoroughly tested across different browsers and devices. During this stage, front-end developers employ various testing techniques to ensure that the user interface functions as expected. This helps in identifying and fixing any bugs or compatibility issues.')}</p>   
                            </ul>
                        <h3>{t('Optimization')}</h3>
                            <ul>          
                                <p>{t('During the optimization stage, the front-end developer optimizes the code to improve user experience and performance. This involves removing unnecessary resources, reducing file sizes, and implementing techniques such as caching. These optimizations result in faster loading times and better performance of the user interface.')}</p>   
                            </ul>
                        <h3>{t('Deployment')}</h3>
                            <ul>          
                                <p>{t('Lastly, the front-end developer deploys the developed user interface to a live environment. This stage involves configuring web servers, handling file uploads, and establishing database connections. This ensures that users can interact with the project through a functioning website or application.')}</p>   
                            </ul>
                            <br /><br />
                            <ul>
                                <p>{t('Front-end developers follow project development stages to successfully create user interfaces. Understanding requirements, implementing the design, testing, optimization, and deployment are essential components of a front-end developer\'s workflow. Working meticulously and attentively at each stage is the key to providing an excellent user experience for end users.')}</p>
                            </ul>
                    </div>      
            </div>
        </div>
      );
}

export default BlogPageThree