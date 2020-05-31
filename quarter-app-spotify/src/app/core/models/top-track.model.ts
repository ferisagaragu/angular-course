export  class TopTrackModel {

  id: string;
  name: string;
  albumName: string;
  images: Array<any>;
  previewUrl: string;

  constructor(data: TopTrackModel | any ) {
    this.albumName = data.album.name;
    this.images = data.album.images;
    this.previewUrl = `https://open.spotify.com/embed/track/${data.id}`;

    Object.assign(this, data)
  }

}
