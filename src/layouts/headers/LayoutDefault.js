import Link from "next/link";
import { useEffect, useState } from "react";
import AppData from "@data/app.json";
import { useRouter } from "next/router";
import MenuAccordion from "@components/MenuAccordion";
import BackToTop from "../back-to-top/Index";
import LanguageSwitch from "../../components/LanguageSwitch";
import MenuServicesList from "@/src/components/MenuServicesList";
import MenuSectorsList from "@/src/components/MenuSectorsList";
const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const navItems = [];
  const { asPath } = useRouter();
  const router = useRouter();
  const { locale: activeLocale } = router;
  useEffect(() => {
    if (asPath.split("/")[1] === "services" && activeTab !== "/sectors") {
      setActiveTab("/services");
    }
    if (asPath.split("/")[1] === "sectors" && activeTab !== "/services") {
      setActiveTab("/sectors");
    }
  }, [asPath, navItems]);
  const handelTabClicked = (link) => {
    setActiveTab(link);
    console.log("link", link);
    console.log("asPath", asPath);
    if (asPath == link) {
      setToggle(false);
    }
  };
  const handleChildLinkClick = () => {
    setToggle(false);
  };
  const isServicesActive =
    asPath === (`/services${activeTab}` && activeTab !== "/sectors") ||
    activeTab === "/services";
  const isSectorsActive =
    asPath === (`/sectors${activeTab}` && activeTab !== "/services") ||
    activeTab === "/sectors";
    
  const getClassName = (link) => {
    if (
      link === "/services" &&
      (activeTab === "/services" ||
        (asPath.split("/")[1] === "services" && activeTab !== "/sectors"))
    ) {
      return "custom-menu-nav mil-active";
    } else if (
      link === "/sectors" &&
      (activeTab === "/sectors" ||
        (asPath.split("/")[1] === "sectors" && activeTab !== "/services"))
    ) {
      return "custom-menu-nav mil-active";
    } else {
      return "custom-menu-nav";
    }
  };
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
  const groceries = [
    {
      emoji: '🍎',
      value: 'Apples',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
      emoji: '🍌',
      value: 'Bananas',
      description:
        'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
      emoji: '🥦',
      value: 'Broccoli',
      description:
        'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
  ];
  return (
    <>
     
     

      <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone Desktop */}
        <div className="mil-frame-top desktop-top-frame">
          <Link href={"/"} style={{ opacity: 0 }} className="mil-logo"></Link>
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
            {/* Desktop */}
            <div className="d-none d-md-block">
            <div className="row ">
                  <div className="col-xl-3">
                    <nav className="mil-main-menu" id="swupMenu">
                      <ul>

                        {navItems.map((item, key) => (
                          <li
                            className={item.classes}
                            key={`header-menu-item-${key}`}
                            onClick={() => handelTabClicked(item.link)}
                          >
                            {item.link === "/services" ||
                            item.link === "/sectors" ? (
                              <div className={getClassName(item.link)}>
                                {item.label}
                              </div>
                            ) : (
                              <Link href={item.link}>{item.label}</Link>
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
                              <MenuServicesList
                                onLinkClick={handleChildLinkClick}
                              />
                            )}
                            {isSectorsActive && (
                              <MenuSectorsList onLinkClick={handleChildLinkClick} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* M<obile */}
            <div className="d-block d-md-none mil-p-120-0 mobile-menu">
         <MenuAccordion    onLinkClick={handleChildLinkClick}/>
      </div> 
          </div>
        </div>
      </div>
     

      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame Mobile */}
     
        <div className="mil-frame">
          <div className="mil-frame-top">
            <Link
             
              href={AppData.header.logo.link}
              className="mil-logo"
            >
            A&B
              {/* <LightEnglishLogo/> */}
            </Link>

            <div style={{ display: "flex", gap: "20px" }}>
            <LanguageSwitch />
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
