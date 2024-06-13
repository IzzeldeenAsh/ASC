import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import AppData from "@data/app.json";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import WorldMap from "../components/WorldMap";
import ABLogoDark from "@layouts/svg-icons/AB-Logo-Dark";
import {SelectDropdownSearch} from "@components/SelectDropdownWithSearch";
import { IconCopy } from '@tabler/icons-react';
const Contact = () => {
  const { activeLocale} = useLocale();
  const pageTitle = {
    english: "Get in touch!",
    arabic: "ابق على تواصل!"
  }
  
  const breadTitle = {
    english: "Contact",
    arabic: "الاتصال"
  }
  
  const anchorLabel = {
    english: "Send message",
    arabic: "أرسل رسالة"
  }
  const formLabels = {
    name: {
      english: "Your name",
      arabic: " الاسم"
    },
    company: {
      english: "Company Name",
      arabic: "اسم الشركة"
    },
    position: {
      english: "Position Name",
      arabic: "اسم الشركة"
    },
    
    email: {
      english: "Your Email",
      arabic: "بريدك الإلكتروني"
    },
    phone: {
      english: "Phone Number",
      arabic: "رقم الهاتف"
    },
    country: {
      english: "Country Number",
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
  return (
    <Layouts>
         <div className="logoStyle">
     <ABLogoDark />
   </div>
         <PageBanner
      pageTitle={activeLocale ==="ar" ? pageTitle.arabic : pageTitle.english} 
      breadTitle={activeLocale ==='ar' ? breadTitle.arabic : breadTitle.english} 
      anchorLabel={activeLocale ==='ar' ?anchorLabel.arabic : anchorLabel.english} 
      anchorLink={"#contact"}
      paddingBottom={0}
      align={"center"}
      />
      {/* contact form */}
      <section >
       <div className="mil-mb-60 mil-p-0-30">
       <WorldMap />
       </div>
      </section>
      <section  id="contact">
      <div className="container mil-mb-60">
            <div className="row">
              <div className="col-12 col-md-5 position-relative" >
              <div className="grid grid-background"></div>
              <div className="d-flex flex-column gap-20 " style={{padding : "30px 20px"}}>
              <div className="depth-yellow-cards">
              <div className="icon">
              {/* <IconCopy size={15} color="#ababab"/> */}
              </div>
                  <div className=" mil-text-sm footer-location">
                            {activeLocale === 'ar' ? (
                                <>
                                    <span className="text-dark fw-bold">الولايات المتحدة الأمريكية: (المقر الرئيسي)</span>
                                    <br />
                                    .ديلاوير، ويلمنجتون - وسط المدينة 1000 N
                                    <br />
                                    شارع ويست. جناح 1200. ويلمنجتون. 19801
                                </>
                            ) : (
                                <>
                                    <span className="text-dark fw-bold">USA (Headquarters)</span>
                                    <br />
                                    <span className="text-dark fw-bold">Jordan (Regional Operations Office)</span>
                                    <br />
                                  
                                </>
                                        )}
                    </div>
                </div>
                <div className="depth-yellow-cards">
                <div className="icon">
              <IconCopy size={15} color="#ababab"/>
              </div>
                <div className=" mil-text-sm footer-location">
        
        {activeLocale === 'ar' ? (
            <>
                <span className="text-dark fw-bold">رقم الهاتف :</span>
                <br />
                +962 777 7714 29
                <br />
                شارع ويست. جناح 1200. ويلمنجتون. 19801
            </>
        ) : (
            <>
                <span className="text-dark fw-bold">Mobile:</span>
                <br />
                +962 777 7714 29  
                <br />
            </>
        )}
      </div>
                </div>
                <div className="depth-yellow-cards">
                <div className="icon">
              <IconCopy size={15} color="#ababab"/>
              </div>
                <div className=" mil-text-sm footer-location">

      {activeLocale === 'ar' ? (
          <>
              <span className="text-dark fw-bold">رقم الهاتف :</span>
              <br />
              +962 777 7714 29
              <br />
              شارع ويست. جناح 1200. ويلمنجتون. 19801
          </>
      ) : (
          <>
              <span className="text-dark fw-bold">Email:</span>
              <br />
            info@alokab.co
              <br />
          </>
      )}
      </div>
                </div>

              </div>
              </div>
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-6">
              <h3 className="  mil-mb-60">
                {activeLocale ==='ar' ? 
                  <div>يسرنا <span className="mil-thin">السماع منك! </span></div>
                          :
                <div>Glad <span className="mil-thin">to hear from you!</span></div>
                }
                </h3>
              <Formik
                  initialValues={{
                    email: "",
                    name: "",
                    phone: "",
                    message: "",
                    company: "",
                    position:"",
                    country:"",
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
                    const data = new FormData();

                    data.append("name", values.name);
                    data.append("company", values.name);
                    data.append("email", values.email);
                    data.append("message", values.message);
                    data.append("position", values.position);
                    data.append("country", values.country);

                    fetch(form.action, {
                      method: "POST",
                      body: data,
                      headers: {
                        Accept: "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          status.innerHTML = "Thanks for your submission!";
                          form.reset();
                        } else {
                          response.json().then((data) => {
                            if (Object.hasOwn(data, "errors")) {
                              status.innerHTML = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            } else {
                              status.innerHTML =
                                "Oops! There was a problem submitting your form";
                            }
                          });
                        }
                      })
                      .catch((error) => {
                        status.innerHTML =
                          "Oops! There was a problem submitting your form";
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
                    <div className="col-lg-6 ">
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
                    <div className="col-lg-6 ">
                    <SelectDropdownSearch/>
                    </div>
               
                    <div className="col-lg-6 ">
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
                    <div className="col-lg-6 ">
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
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.country.arabic : formLabels.country.english}
                        name="phone"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                      />
                    </div>
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.company.arabic : formLabels.company.english}
                        name="company"

                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company}
                      />
                    </div>
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        placeholder={activeLocale === 'ar' ? formLabels.position.arabic : formLabels.position.english}
                        name="company"

                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.position}
                      />
                    </div>
                    <div className="col-lg-12 ">
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
            <div className="row">
            <div className="col-6">
                      <p className="mil-mb-30 mil-text-sm">
                        <span className="mil-accent ">
                          </span> 
                          *{activeLocale === 'ar' ? formLabels.description.arabic : formLabels.description.english}
                      </p>
                    </div>
            </div>
       </div>
      </section>
      {/* contact form end */}
     
    </Layouts>
  );
};
export default Contact;
