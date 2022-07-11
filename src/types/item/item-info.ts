export interface ItemInfo {
  id: string;
  name: string;
  size: number;
  btime: number;
  mtime: number;
  ext: string;
  tags: string[];
  folders: string[];
  isDeleted: boolean;
  url: string;
  annotation: string;
  modificationTime: number;
  width: number;
  height: number;
  lastModified: number;
  noThumbnail?: boolean;
  star?: string;
  palettes: Palette[];
}

export interface Palette {
  color: [number, number, number]; // It means RGB
  ratio: number;
  $$hashKey: string;
}
