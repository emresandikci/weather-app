interface IWeatherDegree {
  degree: number;
}
export default function WeatherDegree({ degree }: IWeatherDegree) {
  return (
    <div>
      <span className="text-8xl drop-shadow-md">{degree}&deg;</span>
    </div>
  );
}
