import Data from "@data/sections/call-to-action.json";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Textarea, SimpleGrid, Notification } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';

const RequestService = ({ messageAr, messageEn, serviceName }) => {
    const { activeLocale } = useLocale();
    const [opened, { open, close }] = useDisclosure(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [slideOut, setSlideOut] = useState(false);

    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setSlideOut(true);
            }, 2500);
            const clearNotifications = setTimeout(() => {
                setError('');
                setSuccess('');
                setSlideOut(false);
            }, 3000);
            return () => {
                clearTimeout(timer);
                clearTimeout(clearNotifications);
            };
        }
    }, [success, error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // const response = await fetch('/api/request-service', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         ...formData,
            //         serviceName,
            //     }),
            // });
            setSuccess(activeLocale === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Your request has been sent successfully!');
            setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                message: '',
            });
            close();
            // if (response.ok) {
              
            // } else {
            //     const errorData = await response.json();
            //     setError(errorData.message || (activeLocale === 'ar' ? 'حدث خطأ أثناء الإرسال.' : 'An error occurred during submission.'));
            // }
        } catch (error) {
            setError(activeLocale === 'ar' ? 'حدث خطأ أثناء الإرسال.' : 'An error occurred during submission.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* call to action */}
            <section>
                <div className="container mil-p-120-120 mil-up">
                    <div className="mil-center">
                        <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{
                            __html: activeLocale === "ar" ? messageAr : messageEn
                        }} />

                        <div className="mil-up">
                            <div onClick={open} className="mil-button mil-arrow-place">
                                <span>{activeLocale === 'ar' ? "ارسل لنا" : "Contact"}</span>
                                <div style={activeLocale === 'ar' ? { 'transform': 'rotate(180deg)', display: 'flex' } : { 'transform': 'rotate(0deg)', display: 'flex' }}>
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}

            {/* Modal for requesting service */}
            <Modal opened={opened} onClose={close} title={activeLocale === 'ar' ? "اطلب هذه الخدمة" : "Request this service"} centered>
                <form onSubmit={handleSubmit}>
                    <SimpleGrid cols={2} spacing="sm">
                        <TextInput
                            placeholder={activeLocale === 'ar' ? "الاسم الكامل" : "Your full name"}
                            label={activeLocale === 'ar' ? "الاسم" : "Name"}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            placeholder={activeLocale === 'ar' ? "رقم الهاتف مع الرمز" : "Your phone number"}
                            label={activeLocale === 'ar' ? "رقم الهاتف" : "Phone number"}
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </SimpleGrid>
                    <SimpleGrid cols={2} spacing="sm">
                        <TextInput
                            placeholder={activeLocale === 'ar' ? "البريد" : "Your email"}
                            label={activeLocale === 'ar' ? "البريد الإلكتروني" : "Email"}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            label={activeLocale === 'ar' ? "اسم الخدمة" : "Service name"}
                            value={serviceName}
                            readOnly
                        />
                    </SimpleGrid>
                    <Textarea
                        placeholder={activeLocale === 'ar' ? "كيف يمكننا المساعدة ؟" : "How we can help you ?"}
                        label={activeLocale === 'ar' ? "رسالة" : "Message"}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <div className="mil-center">
                        <Button className="text-dark" color="#FFEB53" type="submit" loading={loading}>{activeLocale === 'ar' ? "إرسال" : "Submit"}</Button>
                    </div>
                </form>
            </Modal>

            {error && (
                <Notification
                    className={`slide-in ${slideOut ? 'slide-out' : ''}`}
                    color="red"
                    title={activeLocale === 'ar' ? 'خطأ' : 'Error'}
                    style={{ position: 'fixed', bottom: 20, right: 20 ,zIndex:30}}
                >
                    {error}
                </Notification>
            )}
            {success && (
                <Notification
                    className={`slide-in ${slideOut ? 'slide-out' : ''}`}
                    color="green"
                    title={activeLocale === 'ar' ? 'نجاح' : 'Success'}
                    icon={<IconCheck size={18} />}
                    style={{ position: 'fixed', bottom: 20, right: 20  ,zIndex:30}}
                >
                    {success}
                </Notification>
            )}
        </>
    );
};

export default RequestService;
