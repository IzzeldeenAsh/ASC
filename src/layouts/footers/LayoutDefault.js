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
    <footer className="mil-dark-bg footer" style={{backdropFilter:"invert(0%)",backgroundColor:'#f5e4cf'}}>
        <div className="mi-invert-fix">
            <div className="container footer-container" >
                <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-4 mil-mb-10 col-12">
                        <Link href={"/"} className="mil-muted mil-logo mil-up mil-mb-30">{AppData.footer.logo.text}</Link>
                        <div className="mil-mb-30"></div>
                       
                                <div className="mil-light-soft mil-text-xs" 
                                style={{padding:"16px 0",lineHeight:"1.3"}}>
                                        <span className="text-primary">
                                            USA (Headquarters):</span>
                                            <br></br>
                                            Delaware, Wilmington - Downtown 1000 N.
                                            <br></br> 
                                            West Street. Suite 1200. Wilmington.19801
                                            </div>
                      
                    </div>
                    <div className="col-md-2 col-lg-2 col-12" style={{marginTop:'auto'}}>
                    <ul className="mil-social-icons mil-up mil-mb-30">
                                    <li><a href={"https://www.linkedin.com/company/alokab-consulting"} target="_blank" className="social-icon"><FaLinkedinIn  size={25}/></a></li>
                                    <li><a href={"https://www.facebook.com/alokabcompany"} target="_blank" className="social-icon"><FaXTwitter  size={25} /></a></li>
                                </ul>
                    </div>
                    <div className="col-md-5 mil-mb-10 col-12">
                    <nav className="mil-footer-menu">
                                    <ul >
                                        {AppData.header.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active mil-up" : "mil-up"}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                        <div className="mil-mb-30"></div>
                       
                                <div className="mil-light-soft mil-text-xs" 
                                style={{padding:"15px 0",textAlign:"end",lineHeight:"1.3"}}>
                                        <span >{AppData.footer.copy}</span>
                                        <br></br>
                                            <span>
                                                <Link href="/"> Terms & Conditions</Link>
                                                <span> | </span>
                                                <Link href="/">  Privacy Policy</Link>
                                            
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
