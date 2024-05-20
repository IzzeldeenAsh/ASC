import Link from "next/link";
import AppData from "@data/app.json";
import { useRouter } from 'next/router';
import { useLocale } from "@/utils/getLocale";
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
                        <div className="mil-muted mil-logo mil-up mil-mb-10">{AppData.footer.logo.text}</div>
                        <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                    </div>
                    <div className="col-md-7 col-lg-6">
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
                                    <ul className="mil-social-icons mil-up">
                                    <li><a href={"/"} target="_blank" className="social-icon"></a></li>
                                </ul>
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
