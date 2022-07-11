import { AddFromPathParams } from './add-from-path-params';

export interface AddFromPathsParams {
  items: Omit<AddFromPathParams, 'folderId'>[];
  folderId?: string;
}
