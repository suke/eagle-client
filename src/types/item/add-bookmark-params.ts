// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AddBookmarkParams {
  url: string;
  name: string;
  base64?: string;
  tags?: string[];
  modificationTime?: number;
  folderId?: string;
}
