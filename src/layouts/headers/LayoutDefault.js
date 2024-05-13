import Link from "next/link";
import { useEffect, useState } from "react";
import AppData from "@data/app.json";
import { useRouter } from "next/router";
import BackToTop from "../back-to-top/Index";
import Pentagon from "@layouts/pentagon/Index";
import LanguageSwitch from "../../components/LanguageSwitch";
import Image from "next/image";
import MenuServicesList from "@/src/components/MenuServicesList";
import MenuSectorsList from "@/src/components/MenuSectorsList"
const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [activeTab ,setActiveTab] = useState("")
  const navItems = [];
  const { asPath } = useRouter();
  const router = useRouter();
  const { locale: activeLocale } = router;
  useEffect(()=>{
   if (asPath.split("/")[1] ==='services'){
    setActiveTab("/services")
   }
  },[asPath,navItems])
  const handleChildLinkClick =() =>{
    setToggle(false);
  }
  AppData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children != 0) {
      s_class1 = "mil-has-children";
    }
    if (
      (asPath.indexOf(item.link) != -1 && item.link != "/") ||
      asPath == item.link
    ) {
      s_class1 += " mil-active";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    const lists = document.querySelectorAll(".mil-has-children ul");
    lists.forEach((list) => {
      list.classList.remove("mil-active");
    });

    const links = document.querySelectorAll(".mil-has-children a");
    links.forEach((link) => {
      link.classList.remove("mil-active");
    });

    e.target.classList.toggle("mil-active");
    e.target.parentNode.querySelector("ul").classList.toggle("mil-active");
  };

  return (
    <>
      <div>
        <LanguageSwitch />
      </div>
      {/* menu */}

      <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone */}
        <div className="mil-frame-top">
          <Link
            style={{ opacity: 0 }}
            href={AppData.header.logo.link}
            className="mil-logo"
          >
            {AppData.header.logo.symbol}
            {/* <Image src="https://res.cloudinary.com/dsiku9ipv/image/upload/v1714889771/logo_A_B-01-svg_2_wksfyd.png" priority  alt="Eng-logo"  width={55} 
          height={40}  />  */}
          </Link>

          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        {/* frame clone end */}
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    {navItems.map((item, key) => (
                     
                      <li
                        className={item.classes}
                        key={`header-menu-item-${key}`}
                        onClick={()=>setActiveTab(item.link)}
                      >
                        { item.link ==='/services' &&
                         <div className={activeTab ==='/services' || asPath.split('/')[1] ==='services' ? "custom-menu-nav mil-active" : "custom-menu-nav"}>{item.label}</div>
                          }
                          {
                            item.link !== '/projects' && item.link !== '/services' && 
                            <Link href={item.link}>{item.label}</Link>
                          }
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-12 mil-mb-60">
                     { asPath ==`/services${activeTab}` || activeTab ==='/services' &&  <MenuServicesList onLinkClick={handleChildLinkClick}/> }  
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}

      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}

      <div className="mil-frame">
        <div className="mil-frame-top">
          <Link
            style={{ opacity: "0" }}
            href={AppData.header.logo.link}
            className="mil-logo"
          >
            {AppData.header.logo.symbol}
            {/* <LightEnglishLogo/> */}
          </Link>

          <div style={{ display: "flex", gap: "20px" }}>
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>

        <div className="mil-frame-bottom">
          <div
            className="mil-current-page"
            style={
              activeLocale === "ar"
                ? {
                    transform:
                      "rotate(-90deg) translateX(138px) translateY(138px)",
                  }
                : {
                    transform:
                      "rotate(-90deg) translateX(138px) translateY(-138px)",
                  }
            }
          />
          <BackToTop />
        </div>
      </div>
      {/* frame end */}
    </>
  );
};
export default DefaultHeader;
