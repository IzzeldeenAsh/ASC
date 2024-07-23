import data from "@data/dummy/subservices.json";
import { useLocale } from "@/utils/getLocale";
import { useRouter } from "next/router";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import RequestService from "@components/sections/RequestService";
import Image from "next/image";
import { NextSeo } from 'next-seo';
import {HeaderMegaMenu} from "@components/HeeaderMegaMenu";
import ABLogoLight from "@/src/layouts/svg-icons/AB-Logo-Light";
import { FaShareAlt } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'next-share';



const Subservice = (props) => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query; // Extract section and sectionKey from query parameters
  if (!id) return null; // Ensure the id is available

  const subservice = data.subservices.find((subservice) => subservice.id === id);

  if (!subservice) return <div>Subservice not found</div>; // Handle subservice not found
  const metaTitle = activeLocale === "ar" ? subservice.title.arabic : subservice.title.english;
  const pageTitle = activeLocale === "ar" ? subservice.introTitle.arabic : subservice.introTitle.english;
  const breadTitle = activeLocale === "ar" ? subservice.title.arabic : subservice.title.english;
  const description = activeLocale === "ar" ? subservice.short.arabic.replace(/{{locale}}/g, activeLocale) : subservice.short.english;
  const keywords = subservice.keywords.join(", ");
  const imageUrl = subservice.image;
  const slogan = activeLocale ==='ar' ? subservice.slogan.arabic : subservice.slogan.english
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layouts>
     <NextSeo
  title={metaTitle}
  description={description}
  canonical={`https://asc-seven-liard.vercel.app/subservice/${id}`}
  openGraph={{
    url: `https://asc-seven-liard.vercel.app/subservice/${id}`,
    title: metaTitle, // Use metaTitle here instead of pageTitle
    description: description,
    images: [
      {
        url: imageUrl,
        width: 800,
        height: 600,
        alt: metaTitle, // Use metaTitle here as well
        type: 'image/webp',
      },
    ],
    siteName: 'A&B Alokab Consulting',
  }}
  twitter={{
    handle: '@YourTwitterHandle',
    site: '@YourSite',
    cardType: 'summary_large_image',
    title: metaTitle,
    description: description,
    image: imageUrl,
  }}
  additionalMetaTags={[
    {
      name: 'keywords',
      content: keywords,
    },
  ]}
/>
<PageBanner 
  pageTitle={pageTitle} 
  breadTitle={breadTitle} 
  align={"center"} 
  headingSize={2} 
  service={subservice.service} 
/>
      <div className="hero-nav">
        <HeaderMegaMenu/>
        </div>
        <div className="nav-shadow"></div>
      <section id="blog">
        <div className="container mil-p-60-0">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {subservice.image && (
                <div className="mil-image-frame mil-up">
                  <img src={subservice.image} alt={subservice.title.english} className="mil-scale" data-value-1=".90" data-value-2="1.15" />
                  {/* <div className="subservice-slogan" dangerouslySetInnerHTML={{__html:slogan}}/> */}
                </div>
              )}
               {!subservice.service.id && <div className="mil-p-30-30"></div>}
              {subservice.service.id &&
              <div className="mil-info mil-up mil-mb-50">
                
                 <div><span className="mil-text-gray-600">{activeLocale ==='ar' ? "الخدمة" : "Service"}</span>: &nbsp; 
                 <Link href={`/services/${subservice.service.id}`} legacyBehavior>
                   <a><span className="mil-dark">{activeLocale ==="ar" ? subservice.service.name.arabic: subservice.service.name.english}&nbsp;</span></a>
                 </Link>
               </div>
               <div className='mil-share d-flex' >
                    <span className='share-icon'>  <FaShareAlt size={20} style={{paddingBottom:"1px"}}/></span>
                     <div className="d-flex gap-10 share-icons">
                     <FacebookShareButton 
                     className='social-media-btn' 
                     url={`https://asc-seven-liard.vercel.app/subservice/${id}`}
                     quote={metaTitle} 
                     hashtag="#consulting" 
                     media={imageUrl}>
                     <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path d="M16.347 16.721V22.0648H13.8923V16.721H11.853V14.5542H13.8923V13.7658C13.8923 10.839 15.115 9.30005 17.7019 9.30005C18.495 9.30005 18.6932 9.42751 19.1275 9.53136V11.6745C18.6413 11.5896 18.5044 11.5424 17.9993 11.5424C17.3998 11.5424 17.0788 11.7123 16.7861 12.0475C16.4934 12.3826 16.347 12.9633 16.347 13.7941V14.5589H19.1275L18.3817 16.7257H16.347V16.721Z" fill="white"/>
</svg>



                      </FacebookShareButton>
                      <TwitterShareButton 
                      className='social-media-btn' 
                       url={`https://asc-seven-liard.vercel.app/subservice/${id}`} 
                      title={metaTitle}  
                      hashtags={["consulting"]}
                      media={imageUrl}>
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.9647" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.5374 9.84705H9.39996L14.3055 16.2928L9.71377 21.7H11.8353L15.3082 17.6104L18.392 21.6624H22.5294L17.4813 15.0293L17.4902 15.0408L21.8367 9.92234H19.7152L16.4874 13.7234L13.5374 9.84705ZM11.6837 10.9759H12.9718L20.2456 20.5335H18.9576L11.6837 10.9759Z" fill="white"/>
</svg>

                      </TwitterShareButton>
                      <LinkedinShareButton className='social-media-btn'  url={`https://asc-seven-liard.vercel.app/subservice/${id}`} title={metaTitle} media={imageUrl} summary={description} source={shareUrl}>
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.1058" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path d="M12.6058 13.4976H9.93854V22.0033H12.6058V13.4976Z" fill="white"/>
<path d="M19.8209 13.313C19.7226 13.3007 19.6181 13.2946 19.5136 13.2884C18.0202 13.227 17.1783 14.112 16.8833 14.493C16.8034 14.5975 16.7665 14.6589 16.7665 14.6589V13.522H14.216V22.0277H16.7665H16.8833C16.8833 21.1611 16.8833 20.3007 16.8833 19.4342C16.8833 18.9671 16.8833 18.5 16.8833 18.033C16.8833 17.4553 16.8402 16.8407 17.1291 16.3122C17.3749 15.8697 17.8174 15.6484 18.3152 15.6484C19.7902 15.6484 19.8209 16.982 19.8209 17.105C19.8209 17.1111 19.8209 17.1172 19.8209 17.1172V22.0646H22.4882V16.515C22.4882 14.6159 21.5233 13.4974 19.8209 13.313Z" fill="white"/>
<path d="M11.2722 12.3975C12.1275 12.3975 12.8209 11.7041 12.8209 10.8488C12.8209 9.99344 12.1275 9.30005 11.2722 9.30005C10.4168 9.30005 9.72345 9.99344 9.72345 10.8488C9.72345 11.7041 10.4168 12.3975 11.2722 12.3975Z" fill="white"/>
</svg>

                      </LinkedinShareButton>
                      <WhatsappShareButton className='social-media-btn'  url={`https://asc-seven-liard.vercel.app/subservice/${id}`} media={imageUrl} title={metaTitle} separator=":: ">
                      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path d="M21.4482 12.9725C21.1238 12.2558 20.6582 11.6123 20.0671 11.0578C19.4759 10.5085 18.7906 10.0743 18.0268 9.77088C17.2369 9.45699 16.3998 9.30005 15.5367 9.30005C14.6735 9.30005 13.8364 9.45699 13.0465 9.77088C12.2827 10.0743 11.5974 10.5033 11.0062 11.0578C10.4151 11.6123 9.94948 12.2558 9.62514 12.9725C9.29032 13.7154 9.11768 14.5106 9.11768 15.3267C9.11768 16.7548 9.65128 18.1255 10.6296 19.2136L10.1064 22.0648L12.8895 20.8249C13.7213 21.1806 14.6055 21.3585 15.5314 21.3585C16.3946 21.3585 17.2316 21.2016 18.0216 20.8877C18.7854 20.5843 19.4707 20.1553 20.0619 19.6007C20.653 19.0462 21.1186 18.4027 21.4429 17.686C21.7778 16.9432 21.9504 16.148 21.9504 15.3319C21.9556 14.5106 21.783 13.7206 21.4482 12.9725Z" fill="white"/>
<path d="M18.1419 16.5298C17.8699 16.3938 17.6711 16.3101 17.5299 16.2578C17.4409 16.2264 17.2317 16.1322 17.1584 16.1898C16.9282 16.3781 16.6824 16.9117 16.4208 17.0111C15.7721 16.8856 15.1705 16.4409 14.6996 15.9858C14.4904 15.787 14.1033 15.222 14.0196 15.0703C14.0039 14.9133 14.2864 14.7041 14.3491 14.5837C14.6735 14.2175 14.4276 13.9874 14.3858 13.8356C14.3125 13.6787 14.187 13.3962 14.0771 13.166C13.9829 13.0143 13.962 12.7894 13.7946 12.7057C13.0831 12.3395 12.6751 13.0719 12.5077 13.4537C11.498 15.8864 17.5665 20.5162 18.8011 17.325C18.8639 17.0477 18.8377 16.9431 18.7435 16.8176C18.5552 16.6868 18.3355 16.6292 18.1419 16.5298Z" fill="#0A1B2F"/>
</svg>

</WhatsappShareButton>
                     </div>
                    </div>
              </div>}
            </div>
            <div className="col-lg-12 ">
              <div className={`mil-text mil-up mil-text-xl`} dangerouslySetInnerHTML={{ __html:activeLocale ==='ar' ? subservice.contentHtml.arabic.replace(/{{locale}}/g, activeLocale) :  subservice.contentHtml.english }} />
              {typeof subservice.gallery !== "undefined" && subservice.gallery.enabled == 1 && (
                <div className="row">
                  {subservice.gallery.items.map((item, key) => (
                    <div className="col-lg-6" key={`gallery-item-${key}`}>
                      <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                        <img src={item.image} alt={item.alt} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="py-3">
                <div className="mil-text-accent-dark mil-hover-primary mil-center">
                {/* <Link
                  href="/contact"
                    className="mil-button mil-arrow-place mil-mb-60"
                  >
                    <span>
                    {activeLocale === 'ar' ? "اسأل مختص " : "Ask an expert"}</span>
                    <div
                      style={
                        activeLocale === "ar"
                          ? { transform: "rotate(180deg)", display: "flex" }
                          : { transform: "rotate(0deg)", display: "flex" }
                      }
                    >
                      <ArrowIcon />
                    </div>
                  </Link> */}
                
                </div>
              </div>
              {typeof subservice.additional !== "undefined" && subservice.additional.enabled == 1 && (
                <div className="mil-text mil-up" dangerouslySetInnerHTML={{ __html: subservice.additional.content }} />
              )}
              {subservice.infograph.enabled == 1 && (
                <div className="mil-mb-60">
                  <div className="infograph d-flex flex-column justify-content-center align-items-center">
                    <div className="responsive-image">
                      <Image
                        src={subservice.infograph.english}
                        alt="infograph"
                        priority
                        width={subservice.infograph.width}
                        height={subservice.infograph.height}
                      />
                    </div>
                    <div className="mil-center mil-text-xs">{activeLocale ==='ar' ?subservice.infograph.name.arabic : subservice.infograph.name.english}</div>
                  </div>
                </div>
              )}
              <div className="mil-p-30-30"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <RequestService 
          messageAr={" اطلب هذه الخدمة "}
          messageEn={"Ask <span class=\"mil-thin\"> about this service</span> "}
          serviceName={activeLocale === 'ar' ? subservice.title.arabic : subservice.title.english}
        />
      </section>
    </Layouts>
  );
};

export default Subservice;
