import Link from "next/link";
import Date from '@library/date';
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
const PaginationPage = ({ items }) => {
    const { activeLocale } = useLocale();
    return (
      <>
        {items.map((item, index) => (
        <div className="col-lg-12" key={`post-${index}`}>

            <Link   href={`/subservice/${item.id}`} className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                <div className="mil-cover-frame mil-up">
                    <img src={item.image} alt={item.label.english} />
                </div>
                <div className="mil-post-descr">
                    <div className="mil-labels mil-up mil-mb-30">
                        {/* <div className="mil-label mil-upper mil-accent">{item.category}</div>
                        <div className="mil-label mil-upper"><Date dateString={item.date} /></div> */}
                    </div>
                    <h4 className="mil-up mil-mb-30">{item.label.english}</h4>
                    <p className="mil-post-text mil-up mil-mb-30">{item.value.english}</p>
                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                        <span>Read more</span>
                        <div
                              style={
                                activeLocale === "ar"
                                  ? {
                                      transform: "rotate(180deg)",
                                      display: "flex",
                                    }
                                  : {
                                      transform: "rotate(0deg)",
                                      display: "flex",
                                    }
                              }
                            >
                              <ArrowIcon />
                            </div>
                    </div>
                </div>
            </Link>

        </div>
        ))}
      </>
    );
  };
  export default PaginationPage;
  