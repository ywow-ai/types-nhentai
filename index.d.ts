interface TitleT {
  english: string | null;
  japanese: string | null;
  pretty: string | null;
}

interface ImageT {
  t: "j" | "p" | "w" | "g";
  w: number;
  h: number;
}

interface ImagesT {
  pages: ImageT[];
  cover: ImageT;
  thumbnail: ImageT;
}

interface TagT {
  id: number;
  type: string;
  name: string;
  url: string;
  count: number;
}

interface BookT {
  id: number;
  media_id: string;
  images: ImagesT;
  scanlator: string;
  upload_date: number;
  tags: TagT[];
  num_pages: number;
  num_favorites: number;
}
