import Link from "next/link";
import AppData from "@data/app.json";
import { useRouter } from 'next/router';
import { useLocale } from "@/utils/getLocale";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const DefaultFooter = ( { extraClass } ) => {
    const {activeLocale , t} = useLocale();
  const { asPath } = useRouter();
  
  return (
    <>
    {/* footer */}
    <footer className="mil-dark-bg footer" >
        <div className="mi-invert-fix">
            <div className="container footer-container" style={{ direction: 'ltr'}} >
                <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-4 mil-mb-10 col-12">
                        <Link href={"/"} className="mil-muted mil-logo mil-mb-30 footer-logo">{AppData.footer.logo.text}</Link>
                        <div className="mil-mb-30"></div>
                                              
                        {/* <div className="mil-light-soft mil-text-xs footer-location">
                        <span className="text-primary">Jordan (Operations Office):</span>
            <br />
            Amman,Jordan
            <br />
            +962 790 000000
</div> */}
                        <div className="mil-light-soft mil-text-xs footer-location">
                        <span className="text-primary">Jordan (Operations Office):</span>
            <br />
            Amman ,Jordan
            <br />
            +962 790 0000 00
</div>
<div className="mil-light-soft mil-text-xs footer-location">
                        <span className="text-primary">USA (Headquarters):</span>
            <br />
            Delaware, Wilmington - Downtown 1000 N.
            <br />
            West Street. Suite 1200. Wilmington.19801
</div>
                      
                    </div>
                    <div className="col-md-2 col-lg-2 col-12" style={{marginTop:'auto'}}>
                    <ul className="mil-social-icons mil-mb-30">
                                    <li><a href={"https://www.linkedin.com/company/alokab-consulting"} target="_blank" className="social-icon"><FaLinkedinIn  size={25}/></a></li>
                                    <li><a href={"https://www.facebook.com/alokabcompany"} target="_blank" className="social-icon"><FaXTwitter  size={25} /></a></li>
                                </ul>
                    </div>
                    <div className="col-md-5 mil-mb-10 col-12">
                    <nav className="mil-footer-menu">
                                    <ul >
                                        {AppData.header.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
                                            <Link href={item.link}>
                                                {
                                                activeLocale ==='ar' ?
                                                item.label.arabic :
                                                item.label.english
                                            }
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                        <div className="mil-mb-90"></div>
                       
                                <div className="mil-light-soft mil-text-xs copy-right"  >
                                        <span >{
                                            activeLocale ==='ar' ?
                                            AppData.footer.copy.arabic:
                                            AppData.footer.copy.english
                                        
                                      }</span>
                                        <br></br>
                                            <span>
                                                <Link href="/">  
                                                {
                                                    activeLocale ==='ar' ?
                                                    "شروط الاستخدام" :
                                                   "Terms & Conditions"
                                                } </Link>
                                                <span> | </span>
                                                <Link href="/"> 
                                              {
                                                  activeLocale ==='ar' ?
                                                  "سياسة الخصوصية " :
                                                 "Privacy Policy"
                                              }
                                                    </Link>
                                            
                                            </span>
                                </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
