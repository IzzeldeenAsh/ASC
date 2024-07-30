import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
    titleTemplate: '%s | A&B Alokab', // Ensures consistent title format 
    title: 'A&B Alokab Consulting',  // Default homepage title
    description: 'A&B Alokab Consulting provides expert guidance, Innovative Methodologies and a Leading consulting that help businesses and organizations. Alokab provides its services systematically consisting of seven stages, which are essential for developing businesses and companies in general',
    canonical: 'https://asc-seven-liard.vercel.app', // Your main domain
    openGraph: {
        type: 'website',
        locale: 'en', // Adjust to your target region
        url: 'https://asc-seven-liard.vercel.app',
        title: 'A&B Alokab Consulting',
        description: 'A&B Alokab Consulting provides expert guidance, Innovative Methodologies and a Leading consulting.',
        images: [
            {
                url: 'https://media.licdn.com/dms/image/D4E0BAQHjxNWPbAhU5g/company-logo_200_200/0/1707818325589/alokab_consulting_logo?e=2147483647&v=beta&t=gi0NAMaKU42mNH9nat17bTM_rjpL44lJfDwonxOVGvM',
                width: 800,
                height: 600,
                alt: 'A&B Alokab Consulting Logo',
            },
        ],
        site_name: 'A&B Alokab Consulting',
    },
    // Optional, typically for Twitter
    twitter: {
        handle: '@yourtwitterhandle',
        site: '@yourtwitterhandle',
        cardType: 'summary_large_image',
    },    
};

export default config;
