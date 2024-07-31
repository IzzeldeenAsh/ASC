import Link from "next/link";
import AppData from "@data/app.json";
import { useRouter } from 'next/router';
import { useLocale } from "@/utils/getLocale";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useState } from "react";
import { notifications } from '@mantine/notifications';
import { IconArrowRight } from '@tabler/icons-react';
const DefaultFooter = ({ extraClass }) => {
  const { activeLocale, t } = useLocale();
  const { asPath } = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      notifications.show({
        title: 'Subscription successful',
        message: 'You have subscribed successfully!',
        color: 'green',
      });
      setEmail(''); // Clear the email input field
    } else {
      notifications.show({
        title: 'Subscription failed',
        message: 'Please try again.',
        color: 'red',
      });
    }
  };

  return (
    <>
      {/* footer */}
      <footer className="mil-dark-bg footer">
        <div className="mi-invert-fix">
          <div className="container footer-container" style={{ direction: 'ltr' }}>
            <div className="row justify-content-between">
              <div className="col-md-4 col-lg-5 mil-mb-10 col-12 d-flex flex-column justify-content-end">
                <Link href={"/"} className="mil-muted mil-mb-20 mil-logo footer-logo">
                  {AppData.footer.logo.text}
                </Link>
                <div className="mil-mb-20"></div>
                <p className="mil-light-soft  mil-mb-10 mil-form-title" style={{fontSize:"14px"}}>{
                  activeLocale ==='ar'  ? "!اشترك لمعرفة جديدنا": "Subscribe to our newsletter!"
                }</p>
                <form onSubmit={handleSubmit} className="mil-subscribe-form ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="mil-tab-arrow">
                  <IconArrowRight stroke={2} />
                  </button>
                </form>
                <div className="mil-mb-20"></div>
              <div className="d-flex gap-20">
              <div className="mil-light-soft mil-text-xs footer-location">
                  <span className="text-primary">Jordan (Operations Office):</span>
                  <br />
                  Amman, Jordan
                  <br />
                  +962 790 0000 00
                </div>
                <div className="mil-light-soft mil-text-xs footer-location">
                  <span className="text-primary">USA (Headquarters):</span>
                  <br />
                  Delaware, Wilmington.
                  <br />
                  West Street. Suite 1200.
                </div>
              </div>
              </div>
              <div className="col-md-2 col-lg-1 col-12"  style={{ marginTop: 'auto' }}>
                <ul className="mil-social-icons mil-mb-30">
                  <li>
                    <a href={"https://www.linkedin.com/company/alokab-consulting"} target="_blank" className="social-icon">
                      <FaLinkedinIn size={25} />
                    </a>
                  </li>
                  <li>
                    <a href={"https://www.facebook.com/alokabcompany"} target="_blank" className="social-icon">
                      <FaXTwitter size={25} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 mil-mb-10 col-12  d-flex flex-column justify-content-between " >
              <div className="mil-mb-20"></div>
                <nav className="mil-footer-menu">
                  <ul>
                    {AppData.header.menu.map((item, key) => (
                      <li
                        key={`footer-menu-item-${key}`}
                        className={((asPath.indexOf(item.link) != -1 && item.link != '/') || asPath == item.link) ? "mil-active" : ""}
                      >
                        <Link href={item.link}>
                          {activeLocale === 'ar' ? item.label.arabic : item.label.english}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
             
           <div className="mil-mb-30"></div>
                <div className="mil-light-soft mil-text-xs copy-right">
                  <span>
                    {activeLocale === 'ar' ? AppData.footer.copy.arabic : AppData.footer.copy.english}
                  </span>
                  
                  <br />
                  <span>
                    <Link href="/">
                      {activeLocale === 'ar' ? "شروط الاستخدام" : "Terms & Conditions"}
                    </Link>
                    <span> | </span>
                    <Link href="/">
                      {activeLocale === 'ar' ? "سياسة الخصوصية " : "Privacy Policy"}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default DefaultFooter;
