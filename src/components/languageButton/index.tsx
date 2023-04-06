import Button from 'components/button';
import { useTranslation } from 'react-i18next';
import { TbLanguage } from 'react-icons/tb';

export default function LanguageButton() {
  const { t, i18n } = useTranslation(['common']);

  return (
    <div className="flex justify-end">
      <Button
        className="cursor"
        variant="default"
        size="sm"
        color="light"
        leftIcon={TbLanguage}
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
      >
        {t(`common:language:${i18n.language}`)}
      </Button>
    </div>
  );
}
