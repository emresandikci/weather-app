interface IWeatherDegree {
  degree: number;
}
export default function WeatherDegree({ degree }: IWeatherDegree) {
  return (
    <div>
      <span className="drop-shadow-md mobile:text-6xl desktop:text-8xl">{degree}&deg;</span>
    </div>
  );
}
