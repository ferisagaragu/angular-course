export class ArtistModel {
  id: string;
  images: Array<any>;
  genres: Array<string>;
  followersTotal: number;
  name: string;

  constructor(data: any | ArtistModel) {
    this.id = data.id;
    this.genres = data.genres;
    this.followersTotal = data.followers.total;
    this.images = data.images;
    this.name = name;

    Object.assign(this, data);
  }
}
