import { AddFromURLParams } from './add-from-url-params';

export interface AddFromURLsParams {
  items: Omit<AddFromURLParams, 'folderId'>[];
  folderId?: string;
}
