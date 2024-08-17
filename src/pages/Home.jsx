// the hook
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t, i18n } = useTranslation();
  return (
    <div>
     <h1>{t('test1')}</h1>
    </div>
  )
}
