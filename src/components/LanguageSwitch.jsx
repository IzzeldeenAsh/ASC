'use client'
import React from 'react'
import { useRouter } from "next/router";
const LanguageSwitch = () => {
    const {locale , locales, push } =useRouter();
    const handleClick = l => {
      push('/',undefined,{locale:l})
    }
  return (
    <div>
    {
      locales.map(l=>(
        <button key={l} onClick={handleClick(l)}>
          {l}
        </button>  
      ))
    }
  </div>
  )
}

export default LanguageSwitch