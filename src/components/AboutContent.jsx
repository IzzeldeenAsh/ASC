import React from 'react';


const AboutContent = ({content,opacity})=>{
   
    return (
        <>
     <div
                className="mil-text mil-up mil-mb-60 mil-text-xl"
                style={{opacity:opacity}}
                dangerouslySetInnerHTML={{ __html: content }}
              />
        </>);

}

export default AboutContent;