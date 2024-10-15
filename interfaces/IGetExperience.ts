export interface IGetExperience {
  hits: Hit[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
}

export interface Hit {
  id: number;
  title: string;
  description: string;
  medias: Media[];
}

export interface Media {
  id: number;
  uid: string;
}
