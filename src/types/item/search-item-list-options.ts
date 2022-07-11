export interface SearchItemListOptions {
  limit?: number;
  orderBy?: OrderOption;
  keyword?: string;
  ext?: string;
  tags?: string[];
  folders?: string[];
}

export type OrderOption =
  | 'CREATEDATE'
  | 'FILESIZE'
  | 'NAME'
  | 'RESOLUTION'
  | '-CREATEDATE'
  | '-FILESIZE'
  | '-NAME'
  | '-RESOLUTION';
