import Image from "next/image";

const TranslateIcon = () => {
    const imgUrl = "/img/tranalet.png"
  return (
  
    <Image src={imgUrl} width={30} height={30} alt="service-image" priority fetchPriority="high" />
    
  );
};

export default TranslateIcon;