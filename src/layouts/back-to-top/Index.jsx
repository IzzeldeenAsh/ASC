import ArrowIcon from "@layouts/svg-icons/Arrow";
import Link from "next/link";
import { useRouter } from "next/router";
const BackToTopModule = () => {
    const router = useRouter();
    const { locale: activeLocale } = router;
    return (
        <>
            {/* back to top */}
            <div className="mil-back-to-top"  style={activeLocale ==='ar' ? {"transform": " rotate(-90deg) translateX(-130px) translateY(-130px)"} : {"transform": "  rotate(-90deg) translateX(130px) translateY(130px)"}}>
                <a href="#top" className="mil-link mil-accent mil-arrow-place" aria-label={"Link"}>
                    {/* <span>Back to top</span> */}
                    <ArrowIcon />
                </a>
            </div>
            {/* back to top end */}
        </>
    );
};
export default BackToTopModule;