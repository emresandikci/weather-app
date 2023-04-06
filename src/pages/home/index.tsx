import { DailyWeather } from 'components';
import CurrentWeather from 'components/currentWeather';
import { useGeoLocation, useGetIp, useInterval, useWindowBlurFocus } from 'hooks';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForecast } from 'store';

import { FaSearchLocation } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAppContext } from 'context/appContext';

function Home() {
  const [coordinate, setCoordinate] = useState<string>('');
  const [isIntervalPaused, setIsIntervalPaused] = useState(false);
  const { i18n, t } = useTranslation(['common']);

  const { setLocationQuery } = useAppContext();

  const ip = useGetIp();

  const {
    latitude,
    longitude,
    loading: isLocationLoading,
    error: locationError,
  } = useGeoLocation();

  const { forecastQueries } = useForecast({
    q: coordinate,
    days: 7,
    lang: i18n.language,
  });

  const { data: weather, refetch } = forecastQueries;

  useInterval(
    () => {
      refetch();
    },
    5000,
    isIntervalPaused
  );

  useWindowBlurFocus(
    () => setIsIntervalPaused(true),
    () => setIsIntervalPaused(false)
  );

  useEffect(() => {
    if (weather) {
      setLocationQuery(weather.current.condition.text);
    }
  }, [weather, setLocationQuery]);

  useEffect(() => {
    if (!isLocationLoading && !locationError && latitude && longitude) {
      if ((latitude && longitude) || ip) {
        setCoordinate(`${latitude || ip?.latitude},${longitude || ip?.longitude}`);
      }
    }
    if (!isLocationLoading && locationError) {
      if (ip) setCoordinate(`${ip?.latitude},${ip?.longitude}`);

      toast.error(<>{t('common:errors:locationPermission')}</>, {
        autoClose: 10 * 1000,
        toastId: 'location-access',
      });
    }
  }, [isLocationLoading, latitude, locationError, longitude, t, ip]);

  return (
    <div>
      {weather && (
        <div className="flex h-screen flex-col justify-between pb-20 children:m-5">
          <DailyWeather forcastday={weather?.forecast?.forecastday} />

          <CurrentWeather weather={weather} className="mb-5" />
        </div>
      )}
      {isLocationLoading && (
        <div className="flex h-screen items-center justify-center text-slate-200">
          <div className="text-center">
            <FaSearchLocation className="animate-ping" size={30} color="white" />
            <p>{t('common:gettingLocationInformation')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
