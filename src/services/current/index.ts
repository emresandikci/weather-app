import { IService } from 'models';
import { ICurrentWeatherModel } from 'models';
import { http } from 'utils';

const request = http();

export class CurrentService implements IService<ICurrentWeatherModel> {
  private static instance: CurrentService;

  public static getInstance(): CurrentService {
    if (!CurrentService.instance) {
      return (CurrentService.instance = new CurrentService());
    }
    return CurrentService.instance;
  }

  getAll(query: object): Promise<ICurrentWeatherModel> {
    return request.get(
      `/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&agi=no`
    );
  }
}

export default CurrentService.getInstance();
