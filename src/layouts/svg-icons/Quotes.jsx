import React from 'react'
const QuotesIcons = ({mode}) => (
    <svg width="86" height="39" viewBox="0 0 86 39" fill="white" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3214_282)">
    <path style={mode==='light' ? {fill:"#ddb500"} : {fill:"white"}} d="M39 0V10.1593H25.8365V39H0V0H39Z" fill="white" fillOpacity="0.4"/>
    </g>
    <g clipPath="url(#clip1_3214_282)">
    <path style={mode==='light' ? {fill:"#ddb500"} : {fill:"white"}}  d="M85.3672 0V10.1593H72.2037V39H46.3672V0H85.3672Z" fill="white" fillOpacity="0.4"/>
    </g>
    <defs>
    <clipPath id="clip0_3214_282">
    <rect style={mode==='light' ? {fill:"#ddb500"} : {fill:"white"}}  width="39" height="39" fill="white"/>
    </clipPath>
    <clipPath id="clip1_3214_282">
    <rect  width="39" height="39" fill="white" transform="translate(46.3672)"/>
    </clipPath>
    </defs>
    </svg>
    
    
  );
  
  export default QuotesIcons;
