import dayjs from 'dayjs';
import { IBaseComponent } from 'models';
import { IForecastDay } from 'models/forecast';
import { useTranslation } from 'react-i18next';

interface IDailyWeather extends IBaseComponent {
  forcastday: IForecastDay[] | null;
}
export default function DailyWeather({ forcastday, ...props }: IDailyWeather) {
  const { t } = useTranslation(['common']);

  return (
    <div
      className="flex flex-col text-slate-100 drop-shadow-sm mobile:gap-y-2 desktop:gap-y-20"
      {...props}
    >
      <span className="text-white drop-shadow-md mobile:text-center mobile:text-xl desktop:ml-10 desktop:text-6xl">
        {t('common:app:dailyWeather')}
      </span>
      <div className="flex flex-wrap gap-4">
        {forcastday?.map(({ day, date }, index) => (
          <div key={index} className="flex-1 text-center">
            <span className="mobile:text-base desktop:text-3xl">{dayjs(date).format('dddd')}</span>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={day?.condition.icon} alt={day?.condition.text} />
              <span className="text-xl">{day?.avgtemp_c} &deg;</span>
              <p className="m-0 text-center drop-shadow-md mobile:text-xs desktop:text-sm">
                {day?.condition.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
