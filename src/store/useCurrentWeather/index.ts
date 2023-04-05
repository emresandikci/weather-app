import { useQuery } from '@tanstack/react-query';
import { CurrentWeatherService } from 'services';
import { QUERY_KEY_TYPES } from 'utils';

export const clientKeys = {
  all: (params: object) => [QUERY_KEY_TYPES.current, params],
};

export default function useClient({ ...params }) {
  const { getAll } = CurrentWeatherService;

  const currentQueries = useQuery({
    queryKey: clientKeys.all(params),
    queryFn: () => getAll(params),
  });

  return {
    currentQueries,
  };
}
