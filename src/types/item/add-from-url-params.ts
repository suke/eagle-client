export interface AddFromURLParams {
  url: string;
  name: string;
  website?: string;
  tags?: string[];
  annotation?: string[];
  modificationTime?: number;
  folderId?: string;
  headers?: Record<string, string>;
}
