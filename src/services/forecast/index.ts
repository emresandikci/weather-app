import { IService } from 'models';
import { IForecastModel } from 'models';
import { http } from 'utils';

const request = http();

export class ForecastService implements IService<IForecastModel> {
  private static instance: ForecastService;

  public static getInstance(): ForecastService {
    if (!ForecastService.instance) {
      return (ForecastService.instance = new ForecastService());
    }
    return ForecastService.instance;
  }

  async getAll(query: object): Promise<IForecastModel> {
    return await request
      .get(`/forecast.json`, {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          ...query,
        },
      })
      .then((response) => response.data);
  }
}

export default ForecastService.getInstance();
