import React from 'react'
import Image from "next/image"
const WorldMap = () => {
    
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
      <div className='strategic-places strategic-places-up'>
        <span className='mil-text-sm  text-dark'>
        We are availble in <strong>8</strong> strategic locations
        </span>
    </div>
    <div className='strategic-places strategic-places-down'>
        <span className='mil-text-sm  text-dark'>
        Around the <strong>World!</strong> 
        </span>
    </div>
    
  </div>
  )
}

export default WorldMap