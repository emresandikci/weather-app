import { useAppContext } from 'context/appContext';
import { IBaseComponent } from 'models';

import { usePhoto } from 'store';
import { DEFAULT_BACKGROUND } from 'utils';

export default function MainLayout({ children }: IBaseComponent) {
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
      <div className="flex min-h-screen flex-col bg-gray-700/60 backdrop-blur">{children}</div>
    </div>
  );
}
