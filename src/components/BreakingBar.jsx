import { Text } from '@mantine/core';
import React from 'react';
import QuotesIcons from '../layouts/svg-icons/Quotes';
import TitleHead from '../layouts/svg-icons/TitleHead';
import { useLocale } from '@/utils/getLocale';

const BreakingBanner = ({bg, text, buttonText }) => {
    const {activeLocale} = useLocale()
  return (
    <div className="banner" style={bg ? {backgroundColor:"#0A1B2F"} : {backgroundColor:"transparent"}}>
      <div className="container position-relative">
<div className="d-flex">
<TitleHead width='30px' />
      <div className="quotes-icons" style={activeLocale =='ar' ? {  right: "0%" , top : "-10px" ,opacity: "0.2"} :{  left: "0%" ,  top : "-10px" , opacity: "0.2"}}>
              <QuotesIcons  side="right" mode="light" />
            </div>
      <Text
  size="xl"
  fw={600}
  className="text-featured"
  variant="gradient"
  gradient={bg ? { from: 'white', to: '#e0e0e0', deg: 45 } : { from: 'black', to: '#0A1B2F', deg: 45 } }
>
  {text}
</Text>
</div>
       {buttonText &&  <button>{buttonText}</button>}
      </div>
      <style jsx>{`
        .banner {
          background-color: #0A1B2F;
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
          font-size: 1.5rem;
          margin: 0;
          color:#000;
        }
        button {
          background-color: white;
          color: #0A1B2F;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default BreakingBanner;