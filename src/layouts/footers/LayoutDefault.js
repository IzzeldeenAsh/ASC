import Link from "next/link";
import AppData from "@data/app.json";
import { useRouter } from 'next/router';
import { useLocale } from "@/utils/getLocale";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const DefaultFooter = ( { extraClass } ) => {
    const {activeLocale , t} = useLocale();
  const { asPath } = useRouter();
  
  return (
    <>
    {/* footer */}
    <footer className="mil-dark-bg" style={{backgroundColor:'#f5e4cf'}}>
        <div className="mi-invert-fix">
            <div className="container" style={{"padding":"60px 0px 0px 0px"}}>
                <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-4 mil-mb-10">
                        <Link href={"/"} className="mil-muted mil-logo mil-up mil-mb-30">{AppData.footer.logo.text}</Link>
                        <div className="mil-mb-30"></div>
                       
                                <h6 className="mil-light-soft mil-up " style={{padding:"10px 0"}}><strong className="mil-muted"><span className="text-primary">USA (Headquarters):</span></strong><br></br>Delaware, Wilmington - Downtown 1000 N.<br></br> West Street. Suite 1200. Wilmington.19801</h6>
                      
                    </div>
                    <div className="col-md-2 col-lg-2 " style={{marginTop:'auto'}}>
                    <ul className="mil-social-icons mil-up mil-mb-30">
                                    <li><a href={"https://www.linkedin.com/company/alokab-consulting"} target="_blank" className="social-icon"><FaLinkedin  size={25}/></a></li>
                                    <li><a href={"https://www.facebook.com/alokabcompany"} target="_blank" className="social-icon"><FaSquareXTwitter  size={25} /></a></li>
                                </ul>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <div className="row justify-content-end">
                            <div className="col-12">
                                <nav className="mil-footer-menu">
                                    <ul style={{"display":"flex" , "gap":"20px"}}>
                                        {AppData.header.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active mil-up" : "mil-up"}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                    <h6 className="mil-light-soft ">{AppData.footer.copy}</h6>
                                </nav>
                                
                            </div>
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
