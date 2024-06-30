import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import AppData from "@data/app.json";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import WorldMap from "../components/WorldMap";
import ABLogoDark from "@layouts/svg-icons/AB-Logo-Dark";
import { SelectDropdownSearch } from "@components/SelectDropdownWithSearch";
import { IconCopy, IconX, IconCheck } from '@tabler/icons-react';
import { useState } from "react";
import { Notification, rem } from '@mantine/core';
import { NextSeo } from 'next-seo';

const Contact = () => {
  const { activeLocale } = useLocale();
  const pageTitle = {
    english: "Contact Us!",
    arabic: "اتصل بنا!"
  };

  const breadTitle = {
    english: "Contact",
    arabic: "الاتصال"
  };

  const anchorLabel = {
    english: "Send message",
    arabic: "أرسل رسالة"
  };

  const formLabels = {
    name: {
      english: "Full Name",
      arabic: " الاسم"
    },
    company: {
      english: "Company Name",
      arabic: "اسم الشركة"
    },
    position: {
      english: "Position",
      arabic: "اسم الشركة"
    },

    email: {
      english: "Email",
      arabic: "بريدك الإلكتروني"
    },
    phone: {
      english: "Phone Number",
      arabic: "رقم الهاتف"
    },

    message: {
      english: "The Message",
      arabic: "الرسالة"
    },
    description: {
      english: "Keeping you posted with everything new about our services. Here, we post elaborative and informative articles. Please Stay tuned.",
      arabic: "نبقيك على اطلاع بكل جديد حول خدماتنا. هنا، ننشر مقالات توضيحية ومعلوماتية. يرجى البقاء على اطلاع."
    },
    submitButton: {
      english: "Send message",
      arabic: "أرسل رسالة"
    },
    formStatus: {
      success: {
        english: "Thanks for your submission!",
        arabic: "شكرًا على تقديمك!"
      },
      error: {
        english: "Oops! There was a problem submitting your form",
        arabic: "عذرًا! حدثت مشكلة أثناء إرسال النموذج"
      }
    }
  };

  const [notification, setNotification] = useState({ visible: false, message: '', item: 'null', color: '', icon: null });

  const copyToClipboard = (text, item) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotification({
        visible: true,
        item: item,
        message: activeLocale === 'ar' ? 'تم النسخ إلى الحافظة!' : 'Copied to clipboard!',
        color: 'teal',
        icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />
      });
    }).catch(err => {
      setNotification({
        visible: true,
        message: activeLocale === 'ar' ? 'فشل النسخ إلى الحافظة!' : 'Failed to copy to clipboard!',
        color: 'red',
        icon: <IconX style={{ width: rem(20), height: rem(20) }} />
      });
      console.error('Failed to copy text: ', err);
    }).finally(() => {
      setTimeout(() => {
        setNotification({
          visible: false,
          item: 'null'
        });
      }, 3000)
    })
  };

  return (
    <Layouts>
      <NextSeo
        title={pageTitle.english}
        description={activeLocale === 'ar' ? pageTitle.arabic : pageTitle.english}
        canonical="https://alokab.co/contact"
        openGraph={{
          url: "https://alokab.co/contact",
          title: pageTitle.english,
          description: activeLocale === 'ar' ? pageTitle.arabic : pageTitle.english,
          images: [
            {
              url: "/path/to/image.jpg",
              width: 800,
              height: 600,
              alt: pageTitle.english,
              type: 'image/jpeg',
            },
          ],
          siteName: 'A&B Alokab Consulting',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'contact, get in touch, consulting, A&B Alokab Consulting',
          },
        ]}
      />

      <div className="logoStyle">
        <ABLogoDark />
      </div>
      <PageBanner
        pageTitle={activeLocale === "ar" ? pageTitle.arabic : pageTitle.english}
        breadTitle={activeLocale === 'ar' ? breadTitle.arabic : breadTitle.english}
        anchorLabel={activeLocale === 'ar' ? anchorLabel.arabic : anchorLabel.english}
        anchorLink={"#contact"}
        paddingBottom={0}
        align={"center"}
      />
      {notification.visible && (
        <Notification className="notification-alert" icon={notification.icon} color={notification.color} onClose={() => setNotification({ visible: false })}>
          {notification.message}
        </Notification>
      )}
      {/* contact form */}
     
      <section id="contact">
        <div className="container mil-mb-60">
          <div className="row">
           
            <div className="col-12">
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  phone: "",
                  message: "",
                  company: "",
                  position: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const form = document.getElementById("contactForm");
                  const status = document.getElementById("contactFormStatus");
                  fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                  })
                    .then((response) => {
                      if (response.ok) {
                        status.innerHTML =
                          activeLocale === 'ar' ? formLabels.formStatus.success.arabic : formLabels.formStatus.success.english;
                      } else {
                        response.json().then((data) => {
                          if (Object.hasOwn(data, "errors")) {
                            status.innerHTML = data["errors"]
                              .map((error) => error["message"])
                              .join(", ");
                          } else {
                            status.innerHTML =
                              activeLocale === 'ar' ? formLabels.formStatus.error.arabic : formLabels.formStatus.error.english;
                          }
                        });
                      }
                    })
                    .catch((error) => {
                      status.innerHTML =
                        activeLocale === 'ar' ? formLabels.formStatus.error.arabic : formLabels.formStatus.error.english;
                    });

                  setSubmitting(false);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    id="contactForm"
                    action={AppData.settings.formspreeURL}
                    className="row align-items-center"
                  >
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.name.arabic : formLabels.name.english}
                        name="name"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>
                    <div className="col-lg-6">
                      <SelectDropdownSearch />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        placeholder={activeLocale === 'ar' ? formLabels.email.arabic : formLabels.email.english}
                        name="email"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.phone.arabic : formLabels.phone.english}
                        name="phone"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.company.arabic : formLabels.company.english}
                        name="company"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.position.arabic : formLabels.position.english}
                        name="position"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.position}
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        placeholder={activeLocale === 'ar' ? formLabels.message.arabic : formLabels.message.english}
                        name="message"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="mil-adaptive-right mil-mb-30">
                        <button
                          type="submit"
                          className="mil-button mil-arrow-place"
                        >
                          <span>{activeLocale === 'ar' ? formLabels.submitButton.arabic : formLabels.submitButton.english}</span>
                          <div
                            style={
                              activeLocale === "ar"
                                ? { transform: "rotate(180deg)", display: "flex" }
                                : { transform: "rotate(0deg)", display: "flex" }
                            }
                          >
                            <ArrowIcon />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="form-status" id="contactFormStatus" />
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      {/* contact form end */}
    </Layouts>
  );
};

export default Contact;
