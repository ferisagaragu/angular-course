export class ArtistModel {
  id: string;
  name: string;
  images: Array<string>;
  genres: Array<string>;
  followersTotal: number;
  externalUrls: string;

  constructor(data: any | ArtistModel) {
    this.id = data.id;
    this.genres = data.genres;
    this.followersTotal = data.followers.total;
    this.images = data.images;
    this.name = data.name;
    this.externalUrls = data.external_urls.spotify;

    Object.assign(this, data);
  }
}
