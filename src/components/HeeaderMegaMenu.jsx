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
import { useState } from 'react';
import services from "@data/sections/services.json"
import {
    IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import aboutData from "@data/sections/about.json"
import Link from 'next/link';


export function HeaderMegaMenu() {
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
            label={item.title.english}
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
        title: 'Sectors',
        link: '/sectors',
        links: generateLinks(sectors.items),
        footerText: 'Discover the Perfect Fit for You',
        footerDescription: 'Explore all sectors and tailor your search to find exactly what you need.',
        buttonText: 'Browse Sectors',
    },
    {
        title: 'Services',
        link: '/services',
        links: generateLinks(services.items),
        footerText: 'Find the Services You Need',
        footerDescription: 'Browse all our services and find the perfect match for your requirements.',
        buttonText: 'Explore Services',
    },
    {
        title: 'About',
        link: '/about',
        links: generateLinks(aboutData.sections),
        footerText: 'Learn More About Us',
        footerDescription: 'Explore our mission, vision, and history to understand our journey and goals.',
        buttonText: aboutData.button.label,
        buttonLink: aboutData.button.link,
    },
    {
        title: 'Contact',
        link: '/contact',
        links: contactUs,
        footerText: 'Where to find us!',
        footerDescription: 'Connect with us effortlessly by exploring our contact page',
        buttonText: aboutData.button.label,
        buttonLink: "/contact",
    }
];
return ( 
<>
    <Group h="100%" gap={0} visibleFrom="sm">
        {sections.map((section) => (
            <HoverCard position="bottom" radius="sm" shadow="md" withinPortal key={section.title}>
                <HoverCard.Target>
                    <Link href={section.link} className={classes.link}>
                        <Center inline>
                            <Box component="span" mr={5}>{section.title}</Box>
                            <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={"#F5D84C"} />
                        </Center>
                    </Link>
                </HoverCard.Target>
                <HoverCard.Dropdown className={classes.dropdownFixed}>
                    <Group justify="space-between" px="md">
                        <Text fw={500}>{section.title}</Text>
                    </Group>
                    <Divider my="sm" />
                    <SimpleGrid cols={3} spacing={0}>
                        {section.links}
                    </SimpleGrid>
                    <div className={classes.dropdownFooter}>
                        <Group justify="space-between">
                            <div>
                                <Text fw={500} fz="sm">{section.footerText}</Text>
                                <Text size="xs" c="dimmed">{section.footerDescription}</Text>
                            </div>
                            {section.buttonLink ? (
                                <Link href={section.buttonLink} passHref>
                                    <Button className={classes.button} variant="default">
                                        {section.buttonText}
                                    </Button>
                                </Link>
                            ) : (
                                <Button className={classes.button} variant="default">
                                    {section.buttonText}
                                </Button>
                            )}
                        </Group>
                    </div>
                </HoverCard.Dropdown>
            </HoverCard>
        ))}
    </Group>
    </>
);
}


