import Link from "next/link";

const ABLogoDark = ({onLinkClick,isToggleOn}) => {
    return (
        <Link href={"/"} onClick={onLinkClick}>
               <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 99 74" style={{ enableBackground: "new 0 0 99 74" }} xmlSpace="preserve">
                    <style type="text/css">
                        {`
                            .st0{fill:#F6D84D;}
                            .st1{fill:{${ isToggleOn ? "#FFFFFF": "091B31"}};}
                        `}
                    </style>
                    <polygon className="st0" points="61.5,0.7 61.5,16.5 41.1,16.5 41.1,61.2 1,61.2 1,0.7 "/>
                    <polygon className="st1" points="12.5,46.7 8.7,46.7 18.8,19.4 22.9,19.4 33,46.7 29.2,46.7 27,40.5 18.4,40.5 19.7,37.2 25.7,37.2 
	                    20.8,23.8 "/>
                    <path  className="st0" d="M37.5,12.8v60.5h27.9v-3.6H41.1V16.5h53.2v53.2h-5.1v3.6H98V12.8H37.5L37.5,12.8z M68.9,73.3h3.4v-3.6h-3.4
	                    V73.3z M75.7,73.3h3.4v-3.6h-3.4V73.3z M82.5,73.3h3.4v-3.6h-3.4V73.3z"/>
                    <rect x="46.3" y="28.8" className="st0" width="17.8" height="28"/>
                    <path className="st1" d="M60.2,50.6l-1.6-1.7c-1,1-2.5,1.7-4.5,1.7c-3,0-5-1.6-5-4.3c0-1.9,1-3.5,3-4.4c-0.7-0.7-1.1-1.6-1.1-2.9
	                    c0-2.7,2.2-4.2,4.4-4.2c1.9,0,3.7,1.1,4.4,3l-1.3,0.7c-0.4-1.4-1.7-2.3-3.1-2.3c-1.5,0-2.9,1-2.9,2.6c0,1.1,0.6,1.9,1.4,2.7l4.6,4.9
	                    c0.4-0.8,0.7-1.8,0.8-2.9l1.4,0.8c-0.2,1.2-0.5,2.3-1.1,3.3l2.1,2.2L60.2,50.6L60.2,50.6z M57.5,47.7L53,42.9
	                    c-1.8,0.7-2.5,2.1-2.5,3.3c0,1.8,1.3,2.9,3.5,2.9C55.5,49.1,56.6,48.6,57.5,47.7"/>
                    <path fill={ isToggleOn ? "#FFFFFF": "091B31"} className="st1" d="M85.3,42.5c1.8-1.2,3-3.2,3-5.7c0-4.2-3.4-7.4-7.6-7.4H69.7v27.2h11.7c4.4,0,7.9-3.3,7.9-7.7
	                    C89.3,46,87.7,43.7,85.3,42.5 M73.3,32.8h7.3c2.3,0,4,1.9,4,4.2s-1.8,4.2-4,4.2h-2.5v3.3h3.3c2.4,0,4.3,1.9,4.3,4.4
	                    s-1.9,4.4-4.3,4.4h-8.1C73.3,53.2,73.3,32.8,73.3,32.8z"/>
                </svg>
        </Link>
    );
}

export default ABLogoDark;
