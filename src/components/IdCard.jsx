import React from 'react';
import Image from 'next/image';

const IdCard = ({ name = "Abdulrahman Al-Taher", position = "SR.PROJECT MANAGER", img = "/img/faces/staff/Abdulrahman-al-taher.png" }) => {
    return (
        <>
            <div className='mil-id-card'>
                <div className="info">
                    <div className="staff-name">{name}</div>
                    <div className="staff-position">{position}</div>
                    <div className="staff-svg">
                    <svg width="103" height="6" viewBox="0 0 103 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.895447" width="65.6248" height="4.47442" fill="#F5D74C"/>
<rect x="73.6235" y="0.895447" width="4.47442" height="4.47442" fill="#F5D74C"/>
<rect x="86.0742" y="0.895447" width="4.47442" height="4.47442" fill="#F5D74C"/>
<rect x="98.5254" y="0.895447" width="4.47442" height="4.47442" fill="#F5D74C"/>
</svg>

                    </div>
                </div>
                <div className="image-yellow">
                    <img 
                    src={img}
                    alt={name}   
                    height={120}
                    width={90} 
                    />
                </div>
                <div className="shadow-yellow">
                                <svg width="215" height="223" viewBox="0 0 215 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.15" filter="url(#filter0_d_6118_3015)">
                                <rect x="81.6665" y="35.0532" width="79.3333" height="126.933" rx="39.6667" fill="#FFF48F"/>
                                </g>
                                <g opacity="0.3" filter="url(#filter1_d_6118_3015)">
                                <rect x="42" y="35.0721" width="79.3333" height="126.933" rx="39.6667" fill="#FFE68F"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_6118_3015" x="40.1792" y="0.678002" width="174.161" height="221.761" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="5.92676" dy="13.0389"/>
                                <feGaussianBlur stdDeviation="23.707"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.130044 0 0 0 0 0.396943 0 0 0 0 0.687863 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6118_3015"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6118_3015" result="shape"/>
                                </filter>
                                <filter id="filter1_d_6118_3015" x="0.512665" y="0.696923" width="174.162" height="221.761" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="5.92676" dy="13.0389"/>
                                <feGaussianBlur stdDeviation="23.707"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.130044 0 0 0 0 0.396943 0 0 0 0 0.687863 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6118_3015"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6118_3015" result="shape"/>
                                </filter>
                                </defs>
                </svg>
                </div>
            </div>

            <style jsx>{`
                .mil-id-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 40px;
                    border: 1px solid #e0e0e0;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    background-color: #fff;
                    position:relative;
                    overflow:hidden;
                    gap:20px;
                    max-width:400px
                }
                .shadow-yellow{
                    position: absolute;
                    right: -80px;
                    top: 4px
                    
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .staff-svg{
                    line-height: 1;
                }
                .staff-name {
                    font-size: 18px;
                    font-weight: bold;
                    color: #2b2b2b;
                    line-height: 1.7;
                }

                .staff-position {
                    font-size: 11px;
                    color: #737373;
                    line-height:1
                }

                .image-yellow {
                    border-radius: 60px;
                    overflow: hidden;
                    width:85px;
                    min-width: 85px;
                    max-width: 85px;
                    height: 122px;
                    background-color: #f5d74c;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position:relative;
                    z-index:10;
                }
               
            `}</style>
        </>
    );
}

export default IdCard;
