import PageBannerDark from "@components/PageBannerDark";
import Layouts from "@layouts/Layouts";
import CallToActionSection from "@components/sections/CallToAction";
import Link from "next/link";
import ABLogoLight from"@layouts/svg-icons/AB-Logo-Light"
import { IoMdArrowDropright } from 'react-icons/io';
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import { useState , useEffect} from "react";
import servicesData from "@data/dummy/services.json"
import {  TextInput } from '@mantine/core';
import { IoIosSearch } from "react-icons/io";
import { Select } from '@mantine/core';
const Services = () => {
const {activeLocale , t} = useLocale();

const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip
const [selectedSector , setSelectedSector] = useState('All');
const [searchTerm,setSearchTerm] = useState('');
const props = servicesData.services.sort((a, b) => b.list.items.length - a.list.items.length);
const uniqueSectors = ['All', ...new Set(props.flatMap(service => service.sector))];
const filteredProps = props.filter(service => {
    const matchesSector = selectedSector === 'All' ||
                          service.sector.some(s => s.toLowerCase() === selectedSector.toLowerCase());

    // Search in both English and Arabic titles
    const matchesSearch = searchTerm.trim() === '' ||
                         service.title.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.title.arabic.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSector && matchesSearch;
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
      <PageBannerDark pageTitle={"Services List"} breadTitle={"Services"} anchorLabel={"Our services"} anchorLink={"#services"} />

      {/* services */}
      <section id="services">
      <div className="search container ">
           <div className="search-bar mil-up">
           <TextInput 
         onChange={(e) => setSearchTerm(e.target.value)}
            label="Search"
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
           <div className="sector-filter search-bar mil-up">
           <Select
          onChange={setSelectedSector}
          label="Sector"
          data={uniqueSectors}
          defaultValue={uniqueSectors[0]} // Default to 'All'
          styles={(theme) => ({
            input: { minWidth: '150px', borderColor: '#666666' , color: "#fff"},
            label: {
              color: "#fff", // Change label color to white
            },
          })}
        />
           </div>
        </div>
          <div className="mi-invert-fix">
              <div className="container mil-p-30-0">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="row">
                              {filteredProps.map((item, key) => (
                              <div className="col-md-4 col-lg-4 mil-mb-60" key={`services-item-${key}`}>
                                  <Link href={`/services/${item.id}`} className= "mil-service-card-lg mil-more mil-accent-cursor ">
                                      <h4 className="mil-muted mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : activeLocale === 'en' ? item.preview_title.english :item.preview_title.arabic }} />
                                      </Link>
                                      <p className="mil-descr mil-light-soft mil-up mil-mb-30">{ activeLocale === 'en' ? item.short.english :item.short.arabic }</p>
                                      <ul className="mil-service-list mil-light mil-mb-30">
                                        {item.list.items.map((list_item, list_key) => (
                                          
                                          
                                          <li className="mil-up" key={`services-item-${key}-list-${list_key}`}>
                                                <Link key={list_key} href={`/services/${item.id}?section=${list_item.id}&sectionKey=${list_key}`}   className="mil-light-soft">
                                                  <div className="d-flex align-items-center sub-service">
                                              <IoMdArrowDropright />
                                                { activeLocale === 'en' ? list_item.label.english :list_item.label.arabic }
                                                </div>
                                          </Link>
                                                </li>
                                          
                                      
                                        ))}
                                      </ul>
                                      <div className="mil-link mil-accent mil-arrow-place mil-up">
                                          <span>Read more</span>
                                          <div  style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)', display:'flex'} : {'transform' : 'rotate(0deg)', display:'flex'}} >
                        <ArrowIcon  />
                        </div>
                                      </div>
                                 
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
export default Services;

// export async function getStaticProps() {
//   const allServices = getSortedServicesData();

//   return {
//     props: {
//       services: allServices,
    
//     }
//   }
// }



