import Link from "next/link";
import { useEffect, useState } from "react";
import AppData from "@data/app.json";
import { useRouter } from "next/router";
import MenuAccordion from "@components/MenuAccordion";
import BackToTop from "../back-to-top/Index";
import LanguageSwitch from "../../components/LanguageSwitch";
import MenuList from "@/src/components/MenuList";
import dataSectors from '@/src/data/dummy/sectors'
import dataServices from '@/src/data/dummy/services';
import aboutData from "@data/sections/about.json"
import HomeNewsMenu from "@/src/components/HomeNewsMenu";
import ABLogoDark from "../svg-icons/AB-Logo-Dark";
import SearchBar from "@components/SearchBar";
const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const navItems = [];
  const { asPath } = useRouter();
  const router = useRouter();
  const { locale: activeLocale } = router;

  useEffect(() => {
    const path = asPath.split("/")[1];
    if (path === "services" && (activeTab !== "/sectors" && activeTab !== "/about")) {
      setActiveTab("/services");
    } else if (path === "sectors" && (activeTab !== "/services" && activeTab !== "/about")) {
      setActiveTab("/sectors");
    } else if (path === "about" && (activeTab !== "/services" && activeTab !== "/sectors")) {
      setActiveTab("/about");
    } else if (!path && (activeTab !== "/services" && activeTab !== "/sectors" && activeTab !== "/about")) {
      setActiveTab("/");
    }
  }, [asPath, activeTab]);

  const handelTabClicked = (link) => {
    setActiveTab(link);
    if (asPath === link) {
      setToggle(false);
    }
  };

  const handleChildLinkClick = () => {
    setToggle(false);
  };

  const isServicesActive = (asPath.startsWith("/services") && activeTab !== '/about' && activeTab !== '/sectors') || activeTab === '/services';
  const isSectorsActive = (asPath.startsWith("/sectors") && activeTab !== '/about' && activeTab !== '/services') || activeTab === '/sectors';
  const isHomeActive = (asPath === "/" && activeTab !== '/about' && activeTab !== '/services' && activeTab !== '/sectors') || activeTab === '/';
  const isAboutActive = (asPath.startsWith("/about") && activeTab !== '/services' && activeTab !== '/sectors') || activeTab === '/about';

 

  const getClassName = (link) => {
    const path = asPath.split("/")[1];
    const isActive = activeTab === link || (path === link.slice(1) && !["/services", "/sectors", "/about"].includes(activeTab));
    return isActive ? "custom-menu-nav mil-active" : "custom-menu-nav";
  };

  AppData.header.menu.forEach((item, index) => {
    let s_class1 = item.children ? "mil-has-children" : "";
    if ((asPath.indexOf(item.link) !== -1 && item.link !== "/") || asPath === item.link) {
      s_class1 += " mil-active";
    }
    navItems.push({ ...item, classes: s_class1 });
  });

  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    document.querySelectorAll(".mil-has-children ul").forEach((list) => list.classList.remove("mil-active"));
    document.querySelectorAll(".mil-has-children a").forEach((link) => link.classList.remove("mil-active"));
    e.target.classList.toggle("mil-active");
    e.target.parentNode.querySelector("ul").classList.toggle("mil-active");
  };

  return (
    <>

      <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {toggle && <div className="logoStyle"><ABLogoDark onLinkClick={handleChildLinkClick} isToggleOn={toggle} /></div>}
        <div className="mil-frame-top desktop-top-frame">
          <Link href={"/"} style={{ opacity: 0 }} className="mil-logo"></Link>
          <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}><span /></div>
        </div>
        <div className="container">
          
          <div className="mil-menu-content">
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-xl-3">
                  <nav className="mil-main-menu" id="swupMenu">
                    <ul>
                      {navItems.map((item, key) => (
                        <li className={item.classes} key={`header-menu-item-${key}`} onClick={() => handelTabClicked(item.link)}>
                          {["/services", "/sectors", "/about"].includes(item.link) ? (
                            <div className={getClassName(item.link)}>{
                              activeLocale ==='ar' ?
                              item.label.arabic:
                              item.label.english
                             }</div>
                          ) : (
                            <Link href={item.link}>{
                             
                              activeLocale ==='ar' ?
                               item.label.arabic:
                               item.label.english
                              }</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="col-xl-9">
                  <div className="mil-menu-right-frame">
                    <div className="mil-menu-right">
                      <div className="row">
                        <div className="col-lg-12 mil-mb-60">
                          {isServicesActive && (
                            <MenuList
                              items={dataServices.services}
                              basePath="services"
                              onLinkClick={handleChildLinkClick}
                              listLabel={activeLocale === 'ar' ? 'قائمة الخدمات' : 'Services List'}
                            />
                          )}
                          {isSectorsActive && (
                            <MenuList
                              items={dataSectors.sectors}
                              basePath="sectors"
                              onLinkClick={handleChildLinkClick}
                              listLabel={activeLocale === 'ar' ? 'قائمة المجالات' : 'Sectors List'}
                            />
                          )}
                          {isAboutActive && (
                            <MenuList
                              items={aboutData.sections}
                              basePath="about"
                              onLinkClick={handleChildLinkClick}
                              listLabel={activeLocale === 'ar' ? ' عن الشركة' : 'About Us'}
                            />
                          )}
                          {isHomeActive && (
                            <HomeNewsMenu onLinkClick={handleChildLinkClick} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none mil-p-120-0 mobile-menu">
              <MenuAccordion onLinkClick={handleChildLinkClick} />
            </div>
          </div>
        </div>
      </div>
      <div className="mil-curtain" />
      <div className="mil-frame">
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo ">
            <span className="d-block d-xl-none">A&B</span>
          </Link>
          <div style={{ display: "flex", gap: "20px" }}>
          <SearchBar/>
            <LanguageSwitch />
            <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}><span /></div>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"/>
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default DefaultHeader;
