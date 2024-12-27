export type TitleT = {
  english: string | null;
  japanese: string | null;
  pretty: string | null;
};

export type ImageT = {
  t: "j" | "p" | "w" | "g";
  w: number;
  h: number;
};

export type ImagesT = {
  pages: ImageT[];
  cover: ImageT;
  thumbnail: ImageT;
};

export type TagT = {
  id: number;
  type: string;
  name: string;
  url: string;
  count: number;
};

export type BookT = {
  id: number;
  media_id: string;
  title: TitleT;
  images: ImagesT;
  scanlator: string;
  upload_date: number;
  tags: TagT[];
  num_pages: number;
  num_favorites: number;
};
