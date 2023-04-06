export default interface IPhotoModel {
  total: number;
  totalHits: number;
  hits: {
    id: number;
    pageURL: string;
    type: string;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    user: string;
  }[];
}
