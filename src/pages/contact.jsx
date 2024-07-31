import React, { useEffect } from 'react';
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import AppData from "@data/app.json";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { SelectDropdownSearch } from "@components/SelectDropdownWithSearch";
import { Notification, rem } from '@mantine/core';
import { NextSeo } from 'next-seo';
import ABLogoLight from "../layouts/svg-icons/AB-Logo-Light";
import { HeaderMegaMenu } from "@components/HeeaderMegaMenu";
import sectorsData from "@data/dummy/sectors.json";
import servicesData from "@data/dummy/services.json";
import subservicesData from "@data/dummy/subservices.json";
import positionsList from "@data/dummy/positions.json";
import { IconUpload, IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import Truncate from "../components/Truncate";

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
    email: {
      english: "Email",
      arabic: "بريدك الإلكتروني"
    },
    phone: {
      english: "Phone Number",
      arabic: "رقم الهاتف"
    },
    howWeCanHelp: {
      english: "HOW WE CAN HELP YOU?",
      arabic: "كيف يمكننا مساعدتك ؟"
    },
    sector: {
      english: "Sector",
      arabic: "القطاع"
    },
    service: {
      english: "Service",
      arabic: "الخدمة"
    },
    subservice: {
      english: "Sub Service",
      arabic: "الخدمة الفرعية"
    },
    positionType: {
      english: "Position Type",
      arabic: "نوع الوظيفة"
    },
    consultingField: {
      english: "Consulting Field",
      arabic: "مجال الاستشارة"
    },
    position: {
      english: "Position",
      arabic: "الوظيفة"
    },
    otherPosition: {
      english: "Other Position",
      arabic: "وظيفة أخرى"
    },
    resume: {
      english: "Resume",
      arabic: "السيرة الذاتية"
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
    },
    fileUpload: {
      error: {
        fileType: {
          english: "Only PDF, DOC, or image files are accepted",
          arabic: "يُقبل فقط ملفات PDF، DOC أو الصور"
        },
        fileSize: {
          english: "File size must be less than 5MB",
          arabic: "يجب أن يكون حجم الملف أقل من 5 ميجابايت"
        }
      }
    }
  };

  const handleFileRead = (file, setFieldValue, setError) => {
    if (file.size > 5242880) {
      setError("fileSize");
      return;
    }

    const fileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif"];
    if (!fileTypes.includes(file.type)) {
      setError("fileType");
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFieldValue('resume', {
        fileName: file.name,
        fileData: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Layouts>
      <NextSeo
        title={pageTitle.english}
        description={activeLocale === 'ar' ? pageTitle.arabic : pageTitle.english}
        canonical="https://asc-seven-liard.vercel.app/contact"
        openGraph={{
          url: "https://asc-seven-liard.vercel.app/contact",
          title: pageTitle.english,
          description: activeLocale === 'ar' ? pageTitle.arabic : pageTitle.english,
          images: [
            {
              url: "/path/to/image.jpg",
              width: 800,
              height: 600,
              alt: pageTitle.english,
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
        <ABLogoLight />
      </div>
      <div className="hero-nav">
        <HeaderMegaMenu />
      </div>
      <div className="nav-shadow"></div>
      <PageBanner
        pageTitle={activeLocale === "ar" ? pageTitle.arabic : pageTitle.english}
        breadTitle={activeLocale === 'ar' ? breadTitle.arabic : breadTitle.english}
        anchorLabel={activeLocale === 'ar' ? anchorLabel.arabic : anchorLabel.english}
        anchorLink={"#contact"}
        paddingBottom={0}
        align={"center"}
      />

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
                  howWeCanHelp: "",
                  sector: "",
                  service: "",
                  subservice: "",
                  positionType: "",
                  consultingField: "",
                  position: "",
                  otherPosition: "",
                  resume: null
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = activeLocale === 'ar' ? "البريد الإلكتروني مطلوب" : "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = activeLocale === 'ar' ? "البريد الإلكتروني غير صحيح" : "Invalid email address";
                  }
                  if (!values.name) {
                    errors.name = activeLocale === 'ar' ? "الاسم مطلوب" : "Required";
                  }
                  if (!values.phone) {
                    errors.phone = activeLocale === 'ar' ? "رقم الهاتف مطلوب" : "Required";
                  }
                  if (!values.howWeCanHelp) {
                    errors.howWeCanHelp = activeLocale === 'ar' ? "كيف يمكننا مساعدتك مطلوب" : "Required";
                  }
                  if (values.howWeCanHelp === "dropInquiry") {
                    if (!values.sector) {
                      errors.sector = activeLocale === 'ar' ? "القطاع مطلوب" : "Required";
                    }
                    if (!values.service) {
                      errors.service = activeLocale === 'ar' ? "الخدمة مطلوبة" : "Required";
                    }
                    if (!values.subservice) {
                      errors.subservice = activeLocale === 'ar' ? "الخدمة الفرعية مطلوبة" : "Required";
                    }
                  }
                  if (values.howWeCanHelp === "applyForJob") {
                    if (!values.positionType) {
                      errors.positionType = activeLocale === 'ar' ? "نوع الوظيفة مطلوب" : "Required";
                    }
                    if (values.positionType === "consultant" && !values.consultingField) {
                      errors.consultingField = activeLocale === 'ar' ? "مجال الاستشارة مطلوب" : "Required";
                    }
                    if (values.positionType === "other" && !values.position) {
                      errors.position = activeLocale === 'ar' ? "الوظيفة مطلوبة" : "Required";
                    }
                    if (values.position === "other" && !values.otherPosition) {
                      errors.otherPosition = activeLocale === 'ar' ? "وظيفة أخرى مطلوبة" : "Required";
                    }
                    if (!values.resume) {
                      errors.resume = activeLocale === 'ar' ? "السيرة الذاتية مطلوبة" : "Required";
                    }
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => { // Added resetForm here
                  const submissionData = {
                    ...values,
                    resume: values.resume?.fileData || null
                  };

                  fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submissionData),
                  })
                    .then((response) => {
                      if (response.ok) {
                        notifications.show({
                          title: formLabels.formStatus.success.english,
                          message: activeLocale === 'ar' ? formLabels.formStatus.success.arabic : formLabels.formStatus.success.english,
                          color: 'green',
                        });
                        resetForm(); // Reset form on successful submission
                      } else {
                        response.json().then((data) => {
                          if (data.errors) {
                            notifications.show({
                              title: formLabels.formStatus.error.english,
                              message: data.errors.map((error) => error.message).join(', '),
                              color: 'red',
                            });
                          } else {
                            notifications.show({
                              title: formLabels.formStatus.error.english,
                              message: activeLocale === 'ar' ? formLabels.formStatus.error.arabic : formLabels.formStatus.error.english,
                              color: 'red',
                            });
                          }
                        });
                      }
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      notifications.show({
                        title: formLabels.formStatus.error.english,
                        message: activeLocale === 'ar' ? formLabels.formStatus.error.arabic : formLabels.formStatus.error.english,
                        color: 'red',
                      });
                      setSubmitting(false);
                    });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                  isValid,
                  dirty,
                  setFieldError,
                  resetForm,
                }) => {
                  useEffect(() => {
                    if (values.howWeCanHelp === "applyForJob") {
                      setFieldValue('sector', '');
                      setFieldValue('service', '');
                      setFieldValue('subservice', '');
                    } else if (values.howWeCanHelp === "dropInquiry") {
                      setFieldValue('positionType', '');
                      setFieldValue('consultingField', '');
                      setFieldValue('position', '');
                      setFieldValue('otherPosition', '');
                      setFieldValue('resume', null);
                    }
                  }, [values.howWeCanHelp, setFieldValue]);

                  return (
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      className="row align-items-center"
                    >
                      <div className="col-lg-6 position-relative mil-mb-20">
                        <input
                          type="text"
                          placeholder={activeLocale === 'ar' ? formLabels.name.arabic : formLabels.name.english}
                          name="name"
                          required="required"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {errors.name && touched.name && <div className="error">{errors.name}</div>}
                      </div>
                      <div className="col-lg-6 position-relative mil-mb-20">
                        <SelectDropdownSearch />
                      </div>
                      <div className="col-lg-6 position-relative mil-mb-20">
                        <input
                          type="email"
                          placeholder={activeLocale === 'ar' ? formLabels.email.arabic : formLabels.email.english}
                          name="email"
                          required="required"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && <div className="error">{errors.email}</div>}
                      </div>
                      <div className="col-lg-6 position-relative mil-mb-20">
                        <input
                          type="text"
                          placeholder={activeLocale === 'ar' ? formLabels.phone.arabic : formLabels.phone.english}
                          name="phone"
                          required="required"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                        {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
                      </div>
                      <div className="col-lg-12 position-relative mil-mb-20">
                        <div className="form-group">
                          <select
                            name="howWeCanHelp"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.howWeCanHelp}
                            required="required"
                            style={{ textAlign: "center" }}
                          >
                            <option value="" disabled>
                              {activeLocale === 'ar' ? formLabels.howWeCanHelp.arabic : formLabels.howWeCanHelp.english}
                            </option>
                            <option value="applyForJob">
                              {activeLocale === 'ar' ? "تقديم طلب وظيفة" : "APPLY FOR A JOB"}
                            </option>
                            <option value="dropInquiry">
                              {activeLocale === 'ar' ? "إرسال استفسار" : "DROP AN INQUIRY"}
                            </option>
                          </select>
                        </div>
                        {errors.howWeCanHelp && touched.howWeCanHelp && <div className="error">{errors.howWeCanHelp}</div>}
                      </div>
                      {values.howWeCanHelp === "dropInquiry" && (
                        <>
                          <div className="col-lg-4 mil-mb-20 position-relative">
                            <select
                              name="sector"
                              className="form-control"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.sector}
                              required="required"
                            >
                              <option value="" disabled>
                                {activeLocale === 'ar' ? formLabels.sector.arabic : formLabels.sector.english}
                              </option>
                              <option
                                  value="All"
                                >
                                  {activeLocale === 'ar' ? "الكل" : "All"}
                                </option>
                              {sectorsData.sectors.map((sector) => (
                                <option
                                  key={sector.title.english}
                                  value={sector.title.english}
                                >
                                  {activeLocale === 'ar' ? sector.title.arabic : sector.title.english}
                                </option>
                              ))}
                            </select>
                            {errors.sector && touched.sector && <div className="error">{errors.sector}</div>}
                          </div>
                          <div className="col-lg-4 mil-mb-20 position-relative">
                            <select
                              name="service"
                              className="form-control"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.service}
                              required="required"
                            >
                              <option value="" disabled>
                                {activeLocale === 'ar' ? formLabels.service.arabic : formLabels.service.english}
                              </option>
                              <option
                                  value="All"
                                >
                                  {activeLocale === 'ar' ? "الكل" : "All"}
                                </option>
                              {servicesData.services.map((service) => (
                                <option
                                  key={service.title.english}
                                  value={service.title.english}
                                >
                                  {activeLocale === 'ar' ? service.title.arabic : service.title.english}
                                </option>
                              ))}
                            </select>
                            {errors.service && touched.service && <div className="error">{errors.service}</div>}
                          </div>
                          <div className="col-lg-4 mil-mb-20 position-relative">
                            <select
                              name="subservice"
                              className="form-control"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.subservice}
                              required="required"
                            >
                              <option value="" disabled>
                                {activeLocale === 'ar' ? formLabels.subservice.arabic : formLabels.subservice.english}
                              </option>
                              <option
                                  value="All"
                                >
                                  {activeLocale === 'ar' ? "الكل" : "All"}
                                </option>
                              {subservicesData.subservices.map((subservice) => (
                                <option
                                  key={subservice.title.english}
                                  value={subservice.title.english}
                                >
                                  {activeLocale === 'ar' ? subservice.title.arabic : subservice.title.english}
                                </option>
                              ))}
                            </select>
                            {errors.subservice && touched.subservice && <div className="error">{errors.subservice}</div>}
                          </div>
                        </>
                      )}
                      {values.howWeCanHelp === "applyForJob" && (
                        <>
                          <div className="col-lg-4 position-relative mil-mb-20">
                            <div className="form-group">
                              <select
                                name="positionType"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.positionType}
                                required="required"
                              >
                                <option value="" disabled>
                                  {activeLocale === 'ar' ? formLabels.positionType.arabic : formLabels.positionType.english}
                                </option>
                                <option value="consultant">
                                  {activeLocale === 'ar' ? "مستشار" : "Consultant"}
                                </option>
                                <option value="other">
                                  {activeLocale === 'ar' ? "أخرى" : "Other"}
                                </option>
                              </select>
                            </div>
                            {errors.positionType && touched.positionType && <div className="error">{errors.positionType}</div>}
                          </div>
                          {values.positionType === "consultant" && (
                            <div className="col-lg-4 position-relative mil-mb-20">
                              <input
                                type="text"
                                placeholder={activeLocale === 'ar' ? formLabels.consultingField.arabic : formLabels.consultingField.english}
                                name="consultingField"
                                required="required"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.consultingField}
                              />
                              {errors.consultingField && touched.consultingField && <div className="error">{errors.consultingField}</div>}
                            </div>
                          )}
                          {values.positionType === "other" && (
                            <>
                              <div className="col-lg-4 position-relative mil-mb-20">
                                <div className="form-group">
                                  <select
                                    name="position"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.position}
                                    required="required"
                                  >
                                    <option value="" disabled>
                                      {activeLocale === 'ar' ? formLabels.position.arabic : formLabels.position.english}
                                    </option>
                                    {positionsList.positions.map((position) => (
                                      <option
                                        key={position}
                                        value={position}
                                      >
                                        {position}
                                      </option>
                                    ))}
                                    <option value="other">
                                      {activeLocale === 'ar' ? "أخرى" : "Other"}
                                    </option>
                                  </select>
                                </div>
                                {errors.position && touched.position && <div className="error">{errors.position}</div>}
                              </div>
                              {values.position === "other" && (
                                <div className="col-lg-12 position-relative mil-mb-20">
                                  <input
                                    type="text"
                                    placeholder={activeLocale === 'ar' ? formLabels.otherPosition.arabic : formLabels.otherPosition.english}
                                    name="otherPosition"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otherPosition}
                                  />
                                  {errors.otherPosition && touched.otherPosition && <div className="error">{errors.otherPosition}</div>}
                                </div>
                              )}
                            </>
                          )}
                          <div className="col-lg-4 position-relative mil-mb-20">
                            <div className="file-input-wrapper">
                              {values.resume ? (
                                <div className="file-info">
                                  <span><Truncate maxLength={25} text={values.resume.fileName}/></span>
                                  <IconX
                                    size={20}
                                    stroke={2}
                                    onClick={() => setFieldValue('resume', null)}
                                    style={{ cursor: "pointer", marginLeft: "10px" }}
                                  />
                                </div>
                              ) : (
                                <>
                                  <input
                                    type="file"
                                    name="resume"
                                    id="resume"
                                    hidden
                                    onChange={(event) => {
                                      handleFileRead(event.currentTarget.files[0], setFieldValue, setFieldError);
                                    }}
                                    className="file-input"
                                  />
                                  <label htmlFor="resume" className="file-input-label">
                                    {activeLocale === 'ar' ? "قم بتحميل سيرتك الذاتية" : "Upload Your Resume"} <IconUpload size={20} stroke={2} />
                                  </label>
                                </>
                              )}
                            </div>
                            {errors.resume && touched.resume && <div className="error">{errors.resume}</div>}
                            {errors.fileType && <div className="error">{activeLocale === 'ar' ? formLabels.fileUpload.error.fileType.arabic : formLabels.fileUpload.error.fileType.english}</div>}
                            {errors.fileSize && <div className="error">{activeLocale === 'ar' ? formLabels.fileUpload.error.fileSize.arabic : formLabels.fileUpload.error.fileSize.english}</div>}
                          </div>
                        </>
                      )}
                      {values.howWeCanHelp && (
                        <div className="col-lg-12 position-relative mil-mb-20">
                          <textarea
                            placeholder={activeLocale === 'ar' ? formLabels.message.arabic : formLabels.message.english}
                            name="message"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                          {errors.message && touched.message && <div className="error">{errors.message}</div>}
                        </div>
                      )}
                      <div className="col-lg-12 position-relative mil-mb-20">
                        <div className="mil-adaptive-right mil-mb-30">
                          <button
                            type="submit"
                            className={!isValid || !dirty || isSubmitting ? "mil-button mil-arrow-place mil-button-disabled" : "mil-button mil-arrow-place "}
                            disabled={!isValid || !dirty || isSubmitting}
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
                  );
                }}
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
