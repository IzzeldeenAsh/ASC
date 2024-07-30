import React from 'react'
import Image from "next/image"
import { useLocale } from '@/utils/getLocale';
const strategicPlacesText = {
  english: {
    line1: "We are available in",
    line2: "strategic locations",
    line3: "Around the",
    line4: "World!"
  },
  arabic: {
    line1: "نحن متواجدون في",
    line2: "مواقع استراتيجية",
    line3: "حول",
    line4: "العالم!"
  }
};
const WorldMap = () => {
  const {activeLocale} = useLocale();
  return (
  <div className="world-map">
     <div className="pulse-background pulse-background-1"></div>
      <div className="pulse-background pulse-background-2"></div>
    <Image className="world-map-image" src="/img/planet-map.png"  width={1010} height={666} alt="world-map" priority fetchPriority="high" />
  
    <div className='pin usa'>
    {/* <span>
      <div className='mil-text-sm text-dark fw-bold'> USA (Headquarters)</div>
      <div className='mil-text-xs'> Delaware, Wilmington - Downtown</div>
      <div className='mil-text-xs'>  1000 N. West Street. Suite 1200. </div>
      <div className='mil-text-xs'>   Wilmington.19801. </div>
      <br></br>
      <div className='mil-text-xs'>info@alokabconsulting.com</div>
      </span>  */}
    </div>
    <div className='pin germany'>
       {/* <span>
       <div className='mil-text-sm text-dark fw-bold'> Germany</div>
       <div className='mil-text-xs'>info@alokabconsulting.com</div>
       </span>  */}
    </div>
    <div className='pin egypt'>
    {/* <span>
       <div className='mil-text-sm text-dark fw-bold'> Egypt</div>
       <div className='mil-text-xs'>info@alokabconsulting.com</div>
    </span>  */}
    </div>
    <div className='pin jordan'>
    {/* <span>
       <div className='mil-text-sm text-dark fw-bold'> Jordan</div>
       <div className='mil-text-xs'>info@alokabconsulting.com</div>
    </span>  */}
      </div>
      <div className='pin saudi'>
      {/* <span>
      <div className='mil-text-sm text-dark fw-bold'> Saudi Arabia</div>
      <div className='mil-text-xs'>  Riyadh - Olaya - Prince Muhammad bin Abdulaziz Street (Tahlia)</div>
      <div className='mil-text-xs'> opposite Narcissus Hotel </div>
      <div className='mil-text-xs'>  Matoon Towers - 1st floor </div>
      <br></br>
      <div className='mil-text-xs'>  mobile: 00966920001687 </div>
      <div className='mil-text-xs'>  mobile: 00966549744223 </div>

      <br></br>
      <div className='mil-text-xs'>info@alokabconsulting.com</div>
    </span>  */}
      </div>
      <div className='pin iraq'>
      {/* <span>
       <div className='mil-text-sm text-dark fw-bold'>Iraq</div>
       <div className='mil-text-xs'>info@alokabconsulting.com</div>
    </span>  */}
      </div>
      <div>
    {/* <div className='strategic-places strategic-places-up'>
      <span className='mil-text-sm text-dark'>
        {activeLocale === 'ar' ? (
          <>
            {strategicPlacesText.arabic.line1} <strong>8</strong> {strategicPlacesText.arabic.line2}
          </>
        ) : (
          <>
            {strategicPlacesText.english.line1} <strong>8</strong> {strategicPlacesText.english.line2}
          </>
        )}
      </span>
    </div>
    <div className='strategic-places strategic-places-down'>
      <span className='mil-text-sm text-dark'>
        {activeLocale === 'ar' ? (
          <>
            {strategicPlacesText.arabic.line3} <strong>{strategicPlacesText.arabic.line4}</strong>
          </>
        ) : (
          <>
            {strategicPlacesText.english.line3} <strong>{strategicPlacesText.english.line4}</strong>
          </>
        )}
      </span>
    </div> */}
  </div>
    
  </div>
  )
}

export default WorldMap