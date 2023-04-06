import { IWeatherCondition } from 'models/current';

interface IWeatherPhoto {
  condition: IWeatherCondition | null;
}
export default function WeatherPhoto({ condition }: IWeatherPhoto) {
  return (
    <div>
      <img src={condition?.icon} alt={condition?.text} className="mobile:w-12 desktop:w-24" />
      <div className="text-left text-white">{condition?.text}</div>
    </div>
  );
}
