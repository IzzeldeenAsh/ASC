import { Text } from '@mantine/core';
import React from 'react';
import QuotesIcons from '../layouts/svg-icons/Quotes';
import TitleHead from '../layouts/svg-icons/TitleHead';
import { useLocale } from '@/utils/getLocale';

const BreakingBanner = ({bg, text, buttonText }) => {
    const {activeLocale} = useLocale()
  return (
    <div className="banner" style={bg ? {backgroundColor:"#F2F2F2"} : {backgroundColor:"transparent"}}>
      <div className="container position-relative">
<div className="d-flex">
<TitleHead width='30px' />
      <div className="quotes-icons" style={activeLocale =='ar' ? {  right: "0%" , top : "-10px" ,opacity: "0.2"} :{  left: "0%" ,  top : "-10px" , opacity: "0.2"}}>
              <QuotesIcons  side="right" mode="light" />
            </div>
<h2 className= "mil-h2 mil-text-xxl fw-bold" >
{text}
</h2>
  
</div>
       {buttonText &&  <button>{buttonText}</button>}
      </div>
      <style jsx>{`
        .banner {
          background-color: #F2F2F2;
          color: white;
          padding: 2rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h2 {
          font-size: 1.9rem;
          margin: 0;
          color:#000;
          font-weight:600;
        }
        button {
          background-color: white;
          color: #0A1B2F;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .text-featured{
          font-size:35px;
        }
      `}</style>
    </div>
  );
};

export default BreakingBanner;