import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    Divider,
    Center,
    Box,
    rem,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import sectors from "@data/sections/sectors.json";
import { useLocale } from "@/utils/getLocale";
import { useState } from 'react';
import services from "@data/sections/services.json"
import {
    IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import aboutData from "@data/sections/about.json"
import Link from 'next/link';


export function HeaderMegaMenu() {
    const { activeLocale } = useLocale();
    const clipboard = useClipboard({ timeout: 500 });
    const [notificationKey, setNotificationKey] = useState(null);
    const handleCopy = (text, key) => {
        clipboard.copy(text);
        setNotificationKey(key);
        setTimeout(() => setNotificationKey(null), 2000);
    };

    const MenuLink = ({ href, label, description }) => (
        <Link href={href} passHref>
            <UnstyledButton className={classes.subLink}>
                <Group wrap="nowrap" align="flex-start">
                    <div>
                        <Text size="sm" fw={500}>
                            {label}
                        </Text>
                        {description && (
                            <Text size="xs" c="dimmed">
                                {description}
                            </Text>
                        )}
                    </div>
                </Group>
            </UnstyledButton>
        </Link>
    );

    const generateLinks = (items) => items.map((item, index) => (
        <MenuLink
            key={`${item.title.english}-${index}`}
            href={item.link}
            label={activeLocale=== 'en' ? item.title.english : item.title.arabic}
        />
    ));

    const contactUs = [
        { key: "contact-1", label: "Email", description: "info@alokabconsulting.com" },
        { key: "contact-2", label: "Mobile", description: "+962798011454" },
        { key: "contact-3", label: "Address", description: "Jordan-Irbid-Street" },
    ].map(({ key, label, description }) => (
        <UnstyledButton className={classes.subLink} key={key} onClick={() => handleCopy(description, key)}>
            <Group wrap="nowrap" align="flex-start">
                <div>
                    <Group align="flex-between">
                        <Text size="sm" fw={500}>{label}</Text>
                        <Text size="xs" fw={500} c={"green"}>{notificationKey === key && "Copied"}</Text>
                    </Group>
                    <Text size="xs" c="dimmed">{description}</Text>
                </div>
            </Group>
        </UnstyledButton>
    ));



    const sections = [
        {
            title: {
                english: 'Sectors',
                arabic: 'القطاعات'
            },
            link: '/sectors',
            links: generateLinks(sectors.items),
            footerText: {
                english: 'Discover the Perfect Fit for You',
                arabic: 'اكتشف الخيار المثالي لك'
            },
            footerDescription: {
                english: 'Explore all sectors and tailor your search to find exactly what you need.',
                arabic: 'استكشف جميع القطاعات وخصص بحثك للعثور على ما تحتاجه بالضبط.'
            },
            buttonText: {
                english: 'Browse Sectors',
                arabic: 'تصفح القطاعات'
            },
        },
        {
            title: {
                english: 'Services',
                arabic: 'الخدمات'
            },
            link: '/services',
            links: generateLinks(services.items),
            footerText: {
                english: 'Find the Services You Need',
                arabic: 'ابحث عن الخدمات التي تحتاجها'
            },
            footerDescription: {
                english: 'Browse all our services and find the perfect match for your requirements.',
                arabic: 'تصفح جميع خدماتنا وابحث عن الخدمة التي تناسب متطلباتك.'
            },
            buttonText: {
                english: 'Explore Services',
                arabic: 'استكشف الخدمات'
            },
        },
        {
            title: {
                english: 'About',
                arabic: 'من نحن'
            },
            link: '/about',
            links: generateLinks(aboutData.sections),
            footerText: {
                english: 'Learn More About Us',
                arabic: 'تعرّف علينا'
            },
            footerDescription: {
                english: 'Explore our mission, vision, and history to understand our journey and goals.',
                arabic: 'استكشف مهمتنا ورؤيتنا وتاريخنا لفهم رحلتنا وأهدافنا.'
            },
            buttonText: {
                english: 'Read More',
                arabic: 'المزيد'
            },
            buttonLink: aboutData.button.link,
        }
    ];
    return (
        <>
            <Group h="100%" gap={0} visibleFrom="sm" className='top-nav'>
                {sections.map((section) => (
                    <HoverCard position="bottom" radius="sm" shadow="md" withinPortal key={section.title.english}>
                        <HoverCard.Target>
                            <Link href={section.link} className={classes.link}>
                                <Center inline>
                                    <Box component="span" me={5}>{
                                        activeLocale=== 'en' ?
                                            section.title.english :
                                            section.title.arabic
                                    }</Box>
                                    <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={"#F5D84C"} />
                                </Center>
                            </Link>
                        </HoverCard.Target>
                        <HoverCard.Dropdown className={classes.dropdownFixed}>
                            <Group justify="space-between" px="md">
                                <Text fw={500}>{
                                    activeLocale!== 'ar' ?
                                        section.title.english :
                                        section.title.arabic
                                }</Text>
                            </Group>
                            <Divider my="sm" />
                            <SimpleGrid cols={3} spacing={0}>
                                {section.links}
                            </SimpleGrid>
                            <div className={classes.dropdownFooter}>
                                <Group justify="space-between">
                                    <div>
                                        <Text fw={500} fz="sm">{
                                            activeLocale=== 'en' ?
                                                section.footerText.english :
                                                section.footerText.arabic
                                        }
                                        </Text>
                                        <Text size="xs" c="dimmed">{
                                            activeLocale=== 'en' ?
                                                section.footerDescription.english :
                                                section.footerDescription.arabic

                                        }</Text>
                                    </div>
                                    {section.buttonLink ? (
                                        <Link href={section.link} passHref>
                                            <Button className={classes.button} variant="default">
                                                {
                                                    activeLocale=== 'en' ?
                                                        section.buttonText.english :
                                                        section.buttonText.arabic
                                                }
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link href={section.link} passHref>
                                            <Button className={classes.button} variant="default">
                                                {
                                                    activeLocale=== 'en' ?
                                                        section.buttonText.english :
                                                        section.buttonText.arabic
                                                }
                                            </Button>
                                        </Link>

                                    )}
                                </Group>
                            </div>
                        </HoverCard.Dropdown>
                    </HoverCard>
                ))}
                <HoverCard position="bottom" radius="sm" shadow="md" withinPortal key={"Contact"} width={"800px"} >
                    <HoverCard.Target>
                        <Link href={"/contact"} className={classes.link}>
                            <Center inline>
                                <Box component="span" me={5}>{activeLocale ==='en' ? "Contact" : "تواصل معنا"}</Box>
                                <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={"#F5D84C"} />
                            </Center>
                        </Link>
                    </HoverCard.Target>
                    <HoverCard.Dropdown className={classes.dropdownFixed}>
                        <Group justify="space-between" px="md">
                            <Text fw={500}>{activeLocale ==='en' ? "Contact" : "تواصل معنا"}</Text>
                        </Group>
                        <Divider my="sm" />
                        <iframe className={classes.googleIframe}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7893.9759818199345!2d-75.55572389708239!3d39.748375358349264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd3ff6591c49%3A0x33e3770057b3e565!2s1000%20N%20West%20St%20suite%201200%20building%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sjo!4v1717576807746!5m2!1sen!2sjo"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className={classes.dropdownFooter}>
                            <Group justify="space-between">
                                <div>
                                    <Text fw={500} fz="sm">
                                        {
                                            activeLocale=== 'en' ?
                                                "Where to find us!" :
                                                "أين يمكنك إيجادنا"
                                        }
                                    </Text>
                                    <Text size="xs" c="dimmed">
                                        {activeLocale=== 'en'
                                            ? "Connect with us effortlessly by exploring our contact page"
                                            : "تواصل معنا بسهولة من خلال استكشاف صفحة الاتصال الخاصة بنا"}
                                    </Text>
                                </div>
                                <Link href={"/contact"} passHref>
                                    <Button className={classes.button} variant="default">
                                        {activeLocale=== 'en' ? "Let's Hear From You" : "لنسمع منك"}
                                    </Button>
                                </Link>
                            </Group>
                        </div>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </>
    );
}


