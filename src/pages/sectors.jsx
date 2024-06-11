import PageBannerDark from "@components/PageBannerDark";
import Layouts from "@layouts/Layouts";
import CallToActionSection from "@components/sections/CallToAction";
import Link from "next/link";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import ABLogoLight from"@layouts/svg-icons/AB-Logo-Light"
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import { useState , useEffect} from "react";
import sectorsData from "@data/dummy/sectors.json"
import {  TextInput } from '@mantine/core';
import { IoIosSearch } from "react-icons/io";
const Sectors = () => {
const {activeLocale} = useLocale();
const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip
const [searchTerm,setSearchTerm] = useState('');
const pageTitle ={
  english: "Sectors List",
  arabic: "قائمة القطاعات"
}
const breadTitle={
  english: "Sectors",
  arabic: "القطاعات"
}
const anchorLabel= {
  english: "Our sectors",
  arabic: "قطاعاتنا"
}
const props = sectorsData.sectors.sort((a, b) => b.list.items.length - a.list.items.length);
const filteredProps = props.filter(sector => {
   
    // Search in both English and Arabic titles
    const matchesSearch = searchTerm.trim() === '' ||
                         sector.title.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sector.title.arabic.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

if(!props){
  return <div>...Loading</div>
}
useEffect(() => {
    setIsMounted(true);
},[]);
  return (isMounted &&
    <Layouts>
       <div className="logoStyle">
          <ABLogoLight/>
        </div>
  {/* banner */}
  <div className="mil-dark-bg" >
      <PageBannerDark 
      pageTitle={activeLocale ==="ar" ? pageTitle.arabic : pageTitle.english} 
      breadTitle={activeLocale ==='ar' ? breadTitle.arabic : arabic.english} 
      anchorLabel={activeLocale ==='ar' ?anchorLabel.arabic : anchorLabel.english} 
      anchorLink={"#sectors"} />

      {/* services */}
      <section id="sectors" className="mil-p-0-90">
      <div className="search container ">
           <div className="search-bar mil-up">
           <TextInput 
         onChange={(e) => setSearchTerm(e.target.value)}
            label={activeLocale ==='ar' ? "البحث" : "Search"}
            leftSection={<IoIosSearch />}
            styles={(theme) => ({
        input: {
          borderColor: '#666666', // Change border color
          color:"#fff"
        },
        label: {
          color: "#fff", // Change label color to white
        },
      })} />
           </div>
         
        </div>
          <div className="mi-invert-fix">
              <div className="container  mil-p-30-0">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="row">
                              {filteredProps.map((item, key) => (
                              <div className="col-md-4 col-lg-4 mil-mb-60 " key={`sectors-item-${key}`}>
                                  <Link href={`/sectors/${item.id}`} className= "mil-service-card-lg mil-more mil-accent-cursor ">
                                      <h4 className="mil-muted mil-up mil-mb-10" dangerouslySetInnerHTML={{__html : activeLocale === 'en' ? item.preview_title.english :item.preview_title.arabic }} />
                                      <div className="mil-link mil-accent anchor-link mil-up">
                                          <span>Discover</span>
                                      </div>
                                        </Link>
                              </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
  {/* services end */}

  <CallToActionSection />
  
</Layouts>
  
  );
};
export default Sectors;

// export async function getStaticProps() {
//   const allServices = getSortedServicesData();

//   return {
//     props: {
//       services: allServices,
    
//     }
//   }
// }



