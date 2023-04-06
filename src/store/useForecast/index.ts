import { useQuery } from '@tanstack/react-query';
import { ForecastService } from 'services';
import { QUERY_KEY_TYPES } from 'utils';

export const forecastKeys = {
  all: (params: object) => [QUERY_KEY_TYPES.forecast, params],
};

interface IUseForecast {
  q: string;
  days?: number;
  aqi?: 'yes' | 'no';
  alerts?: 'yes' | 'no';
  lang: string;
}
export default function useForecast({
  q = '',
  days = 7,
  aqi = 'yes',
  alerts = 'no',
  lang = 'en',
  ...params
}: IUseForecast) {
  const { getAll } = ForecastService;

  const forecastQueries = useQuery({
    queryKey: forecastKeys.all({ q, days, aqi, alerts, lang, ...params }),
    queryFn: () => getAll({ q, days, aqi, alerts, lang, ...params }),
    enabled: !!q,
  });

  return {
    forecastQueries,
  };
}
