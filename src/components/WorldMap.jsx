import React from 'react'
import Image from "next/image"
const WorldMap = () => {
    
  return (
  <div className="world-map">
     <div className="pulse-background pulse-background-1"></div>
      <div className="pulse-background pulse-background-2"></div>
    <Image className="world-map-image" src="/img/planet-map.png"  width={1010} height={666} alt="world-map" priority fetchPriority="high" />
    <div className='pin usa'>
 
    </div>
    <div className='pin germany'>
        {/* <span>Germany</span> */}
    </div>
    <div className='pin egypt'>
      
    </div>
    <div className='pin jordan'>
      
      </div>
      <div className='pin saudi'>
      
      </div>
      <div className='pin iraq'>
      
      </div>
  </div>
  )
}

export default WorldMap