import Image from "next/image"
import Link from "next/link"

const LightEnglishLogo = ({url}) => {
  return (
    <Link href="/" >
       <Image src={url} priority  alt="Eng-logo"  width={55} 
          height={40}  /> 
    </Link>
  )
}

export default LightEnglishLogo