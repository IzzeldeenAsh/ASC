import Data from "@data/sections/popular-posts.json";
import Date from '@library/date';
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";

const HomeNewsMenu = ({onLinkClick}) => {
    const {activeLocale , t} = useLocale();
    const posts = [
        {
            id: "1",
            image: "/img/blog/1.jpg", // Replace with actual image paths or placeholders
            title: "The Power of AI in Content Creation",
            category: "Technology",
            date: "2024-05-20", // YYYY-MM-DD format
            short: "Explore how AI is revolutionizing the way we write and create."
        },
        {
            id: "2",
            image: "/img/blog/1.jpg", 
            title: "5 Tips for Sustainable Living",
            category: "Lifestyle",
            date: "2024-05-15",
            short: "Discover simple steps to make your life more eco-friendly."
        },
        // Add more dummy posts as needed...
    ];
    return (
        <>
            {/* popular */}
            <section className="mil-dark-bg" id="blog">
                <div className="container mil-p-120-60">
                    <div className="row align-items-center mil-mb-30">
                        <div className="col-lg-6 mil-mb-30">
                            <h3 className="mil-up mil-text-lg mil-light">{Data.title}</h3>
                        </div>
                     
                    </div>
                    <div className="row">
                        {posts.slice(0, 2).map((item, key) => (
                        <div className="col-lg-6" key={`blog-post-${key}`}>
                            <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-10">
                                <div className="mil-cover-frame mil-up ">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="mil-post-descr">
                                    <div className="mil-labels mil-up mil-mb-20">
                                        <div className="mil-label mil-upper mil-accent ">{item.category}</div>
                                        <div className="mil-label mil-upper mil-light"><Date dateString={item.date} /></div>
                                    </div>
                                    <h4 className="mil-up  mil-text-lg mil-light">{item.title}</h4>
                                    <p className="mil-post-text mil-up  mil-text-xs mil-light">{item.short}</p>
                                    <div className="mil-link  mil-arrow-place mil-up mil-light">
                                        <span>Read more</span>
                                        <div  style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)', display:'flex'} : {'transform' : 'rotate(0deg)', display:'flex'}} >
                            <ArrowIcon  />
                            </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* popular end */}
        </>
    );
};

export default HomeNewsMenu;