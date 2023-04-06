import dayjs from 'dayjs';
import { IBaseComponent } from 'models';
import { IForecastDay } from 'models/forecast';
import { useTranslation } from 'react-i18next';

interface IDailyWeather extends IBaseComponent {
  forcastday: IForecastDay[] | null;
}
export default function DailyWeather({ forcastday, ...props }: IDailyWeather) {
  const { t } = useTranslation(['common']);

  if (!forcastday) return null;

  return (
    <div className="flex flex-col gap-y-7 text-slate-100 drop-shadow-sm" {...props}>
      <h1 className="ml-10 text-white drop-shadow-md">{t('common:app:dailyWeather')}</h1>
      <div className="flex flex-wrap gap-4">
        {forcastday?.map(({ day, date }, index) => (
          <div key={index} className="flex-1 text-center">
            <h3>{dayjs(date).format('dddd')}</h3>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={day?.condition.icon} alt={day?.condition.text} />
              <span className="text-xl">{day?.avgtemp_c} &deg;</span>
              <p className="m-0 text-center text-sm drop-shadow-md">{day?.condition.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
