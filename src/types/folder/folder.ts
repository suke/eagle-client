export interface Folder {
  id: string;
  name: string;
  description: string;
  children: DetailedFolder[];
  modificationTime: number;
  tags: string[];
  imageCount: number;
  descendantImageCount: number;
  pinyin: string;
  extendTags: string[];
}

export interface DetailedFolder {
  id: string;
  name: string;
  description: string;
  children: DetailedFolder[];
  modificationTime: number;
  tags: string[];
  password: string;
  passwordTips: string;
  coverId: string;
  parent: string;
  isExpand: boolean;
  images: string[];
  size: number;
  vstype: string;
  styles: {
    depth: number;
    first: boolean;
    last: boolean;
  };
  isVisible: boolean;
  index: number;
  $$hashKey: string;
  newFolderName: string;
  imagesMappings: Record<string, unknown>;
  imageCount: number;
  descendantImageCount: number;
  pinyin: string;
  extendsTags: string[];
  covers: string[];
  editable?: boolean;
}

export interface CreatedFolder {
  id: string;
  name: string;
  images: string[];
  modificationTime: number;
  imageMappings: Record<string, unknown>;
  tags: string[];
  children: DetailedFolder[];
  isExpand: boolean;
}
