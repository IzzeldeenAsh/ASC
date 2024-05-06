import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const LightEnglishLogo = ({url}) => {

  return (
    <div >
    <Image src={url} priority={true}  alt="Eng-logo"  width={55} height={40} /> 
  </div>
    // <Link onClick={handleLogoClick}>
    //    <Image src={url} priority={true}  alt="Eng-logo"  width={55} 
    //       height={40}  /> 
    // </Link>
  )
}

export default LightEnglishLogo