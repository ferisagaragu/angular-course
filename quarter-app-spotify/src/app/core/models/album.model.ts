export class AlbumModel {
  id: number;
  image: string;
  albumArtist: string;
  name: string;

  constructor(data: any | AlbumModel) {
    this.id = data.id;
    this.image = data.images[0].url;
    this.albumArtist = data.artists.map((data: any) => data.name);
    this.name = data.name;

    //Object.assign(this, data);
  }
}