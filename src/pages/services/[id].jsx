import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";

import { useEffect } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";

import Link from "next/link";


import PricingSection from "@components/sections/Pricing";

const ServiceDetail = ( { data, related } ) => {
  const postData = {
    "id": "service-1",
    "contentHtml": "",
    "title": "Smart Cities and Mobility",
    "preview_title": "Branding and <br>Identity Design",
    "short": "Our creative agency is a team of professionals focused on helping your brand grow.",
    "introTitle": "service1IDPageName",
    "description": {
        "title": "Your <span class=\"mil-thin\">Approach</span> <br>and <span class=\"mil-thin\">Work Specifics</span>",
        "content": "At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.",
        "button": {
            "link": "/projects",
            "label": "View works"
        }
    },
    "list": {
        "items": [
            {
                "label": "UX Audits",
                "value": " <p>A UX audit is a service that evaluates the user experience (UX) of a website. It involves analyzing the website's design, functionality, and content to identify areas of improvement that can enhance the user's overall experience.</p> <p>During a UX audit, a team of UX experts will conduct a thorough review of the website and provide a comprehensive report that outlines specific recommendations for improving the website's usability, accessibility, and overall user experience.</p> <p>The audit may cover various aspects of the website, such as navigation, layout, visual design, content structure, and mobile responsiveness. The goal is to identify any pain points or obstacles that users may encounter while browsing the website and provide actionable recommendations to improve their experience.</p> <p>In summary, a UX audit can help website owners identify areas of improvement that can enhance their website's user experience and increase user engagement and satisfaction.</p> "
            },
            {
                "label": "Design thinking",
                "value": " <p>Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, identifying and defining the problem, generating multiple possible solutions, prototyping and testing those solutions, and iterating based on feedback.</p> <p>Design thinking encourages a human-centered approach to innovation and is often used in fields such as product design, user experience (UX) design, and business strategy to create user-centric and innovative solutions. It promotes a mindset that embraces experimentation, iteration, and continuous learning throughout the design process.</p> "
            },
            {
                "label": "Wireframing",
                "value": " <p>Wireframing is a vital step in web design where a visual representation of a website's structure is created. It focuses on layout and user experience, using basic shapes and lines to outline elements like headers, menus, and content sections. Wireframes establish the website's architecture and functionality, facilitating communication between designers, developers, and clients. They serve as a blueprint for user-friendly websites, setting the foundation for design and development.</p> "
            },
            {
                "label": "Methodologies",
                "value": " <p>Libero quam alias tempora facilis necessitatibus quis officiis voluptatem architecto harum exercitationem quidem illum eligendi. Veniam non vitae, nemo dolor tempora, necessitatibus enim sapiente quam voluptas architecto minima omnis sequi aperiam aliquam vel quo reprehenderit, tempore tenetur. Architecto dolorem assumenda voluptas, odio nemo vero illo praesentium pariatur, ut perspiciatis, est itaque minus ratione vitae laboriosam molestiae.</p> "
            }
        ]
    }
};
  const {activeLocale , t} = useLocale();

  useEffect(() => {
    Accordion();
  }, []);

  return (
    <Layouts>
      <PageBanner pageTitle={t(postData.introTitle)} breadTitle={postData.title} anchorLabel={"About service"} anchorLink={"#service"} />

      {/* service */}
      <section id="service">
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
                  <div className="col-lg-4 mil-relative mil-mb-90">

                      <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : postData.description.title}} />
                      <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                      <div className="mil-up">
                          <Link href={postData.description.button.link} className="mil-link mil-dark mil-arrow-place">
                              <span>{postData.description.button.label}</span>
                          </Link>
                      </div>

                  </div>
                  <div className="col-lg-6">
                  {postData.list != undefined &&
                  <>
                      {postData.list.items.map((item, key) => (
                      <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                          <div className="mil-accordion-menu">

                              <p className="mil-accordion-head">{item.label}</p>

                              <div className="mil-symbol mil-h3">
                                  <div className="mil-plus">+</div>
                                  <div className="mil-minus">-</div>
                              </div>

                          </div>
                          <div className="mil-accordion-content mil-text" dangerouslySetInnerHTML={{__html : item.value}} />
                      </div>
                      ))}
                  </>
                  }
                  </div>
              </div>
          </div>
      </section>
      {/* service end */}
      
      <PricingSection />

      {/* <RelatedServices services={related} /> */}
      
    </Layouts>
  );
};
export default ServiceDetail;

// export async function getStaticPaths() {
//     const paths = getAllServicesIds()

//     return {
//       paths,
//       fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const postData ={
//       "id": "service-1",
//       "contentHtml": "",
//       "title": "Smart Cities and Mobility",
//       "preview_title": "Branding and <br>Identity Design",
//       "short": "Our creative agency is a team of professionals focused on helping your brand grow.",
//       "introTitle": "service1IDPageName",
//       "description": {
//           "title": "Your <span class=\"mil-thin\">Approach</span> <br>and <span class=\"mil-thin\">Work Specifics</span>",
//           "content": "At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.",
//           "button": {
//               "link": "/projects",
//               "label": "View works"
//           }
//       },
//       "list": {
//           "items": [
//               {
//                   "label": "UX Audits",
//                   "value": " <p>A UX audit is a service that evaluates the user experience (UX) of a website. It involves analyzing the website's design, functionality, and content to identify areas of improvement that can enhance the user's overall experience.</p> <p>During a UX audit, a team of UX experts will conduct a thorough review of the website and provide a comprehensive report that outlines specific recommendations for improving the website's usability, accessibility, and overall user experience.</p> <p>The audit may cover various aspects of the website, such as navigation, layout, visual design, content structure, and mobile responsiveness. The goal is to identify any pain points or obstacles that users may encounter while browsing the website and provide actionable recommendations to improve their experience.</p> <p>In summary, a UX audit can help website owners identify areas of improvement that can enhance their website's user experience and increase user engagement and satisfaction.</p> "
//               },
//               {
//                   "label": "Design thinking",
//                   "value": " <p>Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, identifying and defining the problem, generating multiple possible solutions, prototyping and testing those solutions, and iterating based on feedback.</p> <p>Design thinking encourages a human-centered approach to innovation and is often used in fields such as product design, user experience (UX) design, and business strategy to create user-centric and innovative solutions. It promotes a mindset that embraces experimentation, iteration, and continuous learning throughout the design process.</p> "
//               },
//               {
//                   "label": "Wireframing",
//                   "value": " <p>Wireframing is a vital step in web design where a visual representation of a website's structure is created. It focuses on layout and user experience, using basic shapes and lines to outline elements like headers, menus, and content sections. Wireframes establish the website's architecture and functionality, facilitating communication between designers, developers, and clients. They serve as a blueprint for user-friendly websites, setting the foundation for design and development.</p> "
//               },
//               {
//                   "label": "Methodologies",
//                   "value": " <p>Libero quam alias tempora facilis necessitatibus quis officiis voluptatem architecto harum exercitationem quidem illum eligendi. Veniam non vitae, nemo dolor tempora, necessitatibus enim sapiente quam voluptas architecto minima omnis sequi aperiam aliquam vel quo reprehenderit, tempore tenetur. Architecto dolorem assumenda voluptas, odio nemo vero illo praesentium pariatur, ut perspiciatis, est itaque minus ratione vitae laboriosam molestiae.</p> "
//               }
//           ]
//       }
//   }
//     const relatedServices = await getRelatedServices(params.id)
     
//     return {
//       props: {
//         data: postData
//       }
//     }
// }