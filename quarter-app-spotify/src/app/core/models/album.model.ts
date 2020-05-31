import {ArtistModel} from "./artist.model";

export class AlbumModel {
  id: number;
  image: string;
  name: string;
  artists: Array<ArtistModel>;

  constructor(data: any | AlbumModel) {
    this.id = data.id;
    this.image = data.images[0].url;
    this.name = data.name;
    this.artists = data.artists;

    //Object.assign(this, data);
  }
}
