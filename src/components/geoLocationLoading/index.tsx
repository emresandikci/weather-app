import { useTranslation } from 'react-i18next';
import { FaSearchLocation } from 'react-icons/fa';

export default function GeoLocationLoading() {
  const { t } = useTranslation(['common']);
  return (
    <div className="flex h-screen items-center justify-center text-slate-200">
      <div className="text-center">
        <FaSearchLocation className="animate-ping" size={30} color="white" />
        <p>{t('common:gettingLocationInformation')}</p>
      </div>
    </div>
  );
}
