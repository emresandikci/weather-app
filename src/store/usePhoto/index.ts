import { useQuery } from '@tanstack/react-query';
import { PhotoService } from 'services';
import { QUERY_KEY_TYPES } from 'utils';

export const photoKeys = {
  all: (params: object) => [QUERY_KEY_TYPES.photo, params],
};

interface IUsePhoto {
  q: string;
}
export default function usePhoto({ q = '', ...params }: IUsePhoto) {
  const { getAll } = PhotoService;

  const photoQueries = useQuery({
    queryKey: photoKeys.all({ q, ...params }),
    queryFn: () => getAll({ q, ...params }),
    enabled: !!q,
  });

  return {
    photoQueries,
  };
}
