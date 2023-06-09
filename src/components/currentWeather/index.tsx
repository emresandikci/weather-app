import { IBaseComponent, ICurrentModel } from 'models';

import WeatherPhoto from './weatherPhoto';
import WeatherLocation from './weatherLocation';
import WeatherDegree from './weatherDegree';

export interface ICurrentWeather extends IBaseComponent {
  weather: ICurrentModel | null;
}

export default function CurrentWeather({ weather, ...props }: ICurrentWeather) {
  return (
    <div {...props}>
      <div className="flex flex-wrap items-center gap-4 text-white">
        <WeatherPhoto condition={weather?.current.condition} />
        <WeatherDegree degree={weather?.current.temp_c || 0} />
        <WeatherLocation
          location={weather?.location}
          lastUpdateAt={weather?.current.last_updated}
        />
      </div>
    </div>
  );
}
