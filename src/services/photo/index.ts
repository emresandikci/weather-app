import { IService } from 'models';
import { IPhotoModel } from 'models';

export class PhotoService implements IService<IPhotoModel> {
  private static instance: PhotoService;

  public static getInstance(): PhotoService {
    if (!PhotoService.instance) {
      return (PhotoService.instance = new PhotoService());
    }
    return PhotoService.instance;
  }

  async getAll(query: object): Promise<IPhotoModel> {
    const key = '35115440-6b1b78c815cb8c391fc5c3d3d';

    const response = await fetch(
      `https://pixabay.com/api/?${new URLSearchParams({
        ...query,
        key,
        image_type: 'photo',
        pretty: 'true',
      })}`
    ).then((resonse) => resonse.json());

    return response;
  }
}

export default PhotoService.getInstance();
