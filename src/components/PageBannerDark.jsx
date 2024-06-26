import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const PageBannerDark = ({ pageTitle, breadTitle, anchorLabel, anchorLink }) => {
  const { asPath } = useRouter();
  const {activeLocale } = useLocale();
  let clearBreadTitle;
 
  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  }

  const headTitle = `${AppData.settings.siteName} - ${clearBreadTitle}`;

  return (
    <>
   
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <div className="mil-inner-banner">
        <div className="mi-invert-fix">
          <div className="mil-banner-content mil-up">
            {/* <div className="mil-animation-frame">
              <div className="mil-animation mil-position-4 mil-scale" data-value-1="6" data-value-2="1.4"><Pentagon /></div>
            </div> */}
            <div className="container">
              <ul className="mil-breadcrumbs mil-light mil-mb-30">
                <li><Link href="/">{ activeLocale ==='en' ? "Homepage" : "الرئيسية"}</Link></li>
                {asPath.indexOf('/blog/') != -1 &&
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                }
                {asPath.indexOf('/projects/') != -1 &&
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                }
                {asPath.indexOf('/services/') != -1 &&
                <li>
                  <Link href="/services"> { activeLocale ==='ثى' ? "Services" : "الخدمات"}</Link>
                </li>
                }
                <li><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
              </ul>
              <h1 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : pageTitle}} />
              <a href={anchorLink} className=" d-none d-md-flex mil-link mil-accent mil-arrow-place mil-down-arrow gap-10" aria-label={"Link"}>
                  <span>{anchorLabel}</span>
                  <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageBannerDark;
