import Image from "next/image"
import Link from "next/link"
const LightEnglishLogo = ({url}) => {

  return (
    <div >
  <Link href={"/"}>
  <Image src={url} priority={true}  alt="Eng-logo"  width={55} height={40} /> 
  </Link>
  </div>
    // <Link onClick={handleLogoClick}>
    //    <Image src={url} priority={true}  alt="Eng-logo"  width={55} 
    //       height={40}  /> 
    // </Link>
  )
}

export default LightEnglishLogo