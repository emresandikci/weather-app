import { useIsFetching } from '@tanstack/react-query';
import { Loading } from 'components';
import { useAppContext } from 'context/appContext';
import { IBaseComponent } from 'models';

import { usePhoto } from 'store';
import { DEFAULT_BACKGROUND } from 'utils';

export default function MainLayout({ children }: IBaseComponent) {
  const isFetching = useIsFetching();
  const { locationQuery } = useAppContext();

  const { photoQueries } = usePhoto({ q: locationQuery || '' });
  const { data: photo } = photoQueries;

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url('${
          !!photo?.hits.length ? photo?.hits[0]?.largeImageURL : DEFAULT_BACKGROUND
        }')`,
      }}
    >
      {!!isFetching && <Loading className="mt-14" />}
      <div className="flex min-h-screen flex-col bg-gray-700/60 backdrop-blur">{children}</div>
    </div>
  );
}
