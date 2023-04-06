import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { ILocation } from 'models/current';

interface IWeatherLocation {
  location: ILocation;
  lastUpdateAt: string;
}
export default function WeatherLocation({ location, lastUpdateAt }: IWeatherLocation) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <span className="drop-shadow-md mobile:text-3xl desktop:text-6xl">
        {location?.name} / {location?.country}
      </span>
      <div>
        {t('common:app:updatedAt')} {dayjs(lastUpdateAt).format('hh:mm - ddd, DD MMM YYYY')}
      </div>
    </div>
  );
}
