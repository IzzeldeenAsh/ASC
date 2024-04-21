import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'; // Replace with your library
export const useLocale = () =>{
    const router = useRouter();
    const { locale: activeLocale } = router;
    const { t } = useTranslation('common');

    return { activeLocale, t };
}