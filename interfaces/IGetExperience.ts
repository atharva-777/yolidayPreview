export interface IGetExperience {
  id: number;
  title: string;
  description: string;
  medias: Media[];
}

export interface Media {
  id: number;
  uid: string;
}
