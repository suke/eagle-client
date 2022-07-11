import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import type * as EagleTypes from '../types';

export class EagleClient {
  private _client: AxiosInstance;

  constructor() {
    this._client = axios.create({
      baseURL: 'http://localhost:41595/api',
    });
  }

  getApplicationInfo(options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<EagleTypes.ApplicationInfo>>('application/info', options);
  }

  getFolderList(options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<EagleTypes.Folder[]>>('folder/list', options);
  }

  getFolderListRecent(options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<EagleTypes.DetailedFolder[]>>('folder/listRecent', options);
  }

  getItemInfo(itemId: string, options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<EagleTypes.ItemInfo>>('item/info', {
      ...options,
      params: this._createSearchParams({ id: itemId }),
    });
  }

  getThumbnail(itemId: string, options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<string>>('item/thumbnail', {
      ...options,
      params: this._createSearchParams({ id: itemId }),
    });
  }

  getItemList(params: EagleTypes.SearchItemListOptions = {}, options: EagleTypes.EagleRequestConfig = {}) {
    // suppress "Index signature for type"
    // see: https://github.com/microsoft/TypeScript/issues/15300
    return this._get<EagleTypes.EagleResponse<EagleTypes.ItemInfo[]>>(`item/list`, {
      ...options,
      params: this._createSearchParams({ ...params }),
    });
  }

  getLibraryHistories(options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<string[]>>('library/history', options);
  }

  getLibraryInfo(options: EagleTypes.EagleRequestConfig = {}) {
    return this._get<EagleTypes.EagleResponse<EagleTypes.LibraryInfo>>('library/info', options);
  }

  createFolder(params: EagleTypes.CreateFolderParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<EagleTypes.EagleResponse<EagleTypes.CreatedFolder>>('folder/create', {
      ...options,
      data: params,
    });
  }

  updateFolder(params: EagleTypes.UpdateFolderParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<EagleTypes.EagleResponse<Omit<EagleTypes.DetailedFolder, 'parent' | 'editable'>>>(
      'folder/update',
      {
        ...options,
        data: params,
      }
    );
  }

  updateItem(params: EagleTypes.UpdateItemPrams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<EagleTypes.EagleResponse<EagleTypes.ItemInfo>>('item/update', {
      ...options,
      data: params,
    });
  }

  // Currently, 3.0.0 Build01 (20220530) is giving an error.
  // renameFolder(params: EagleTypes.RenameFolderParams, options: Options = {}) {
  //   return this._post<any>('folder/rename', { ...options, data: params });
  // }

  addFromUrl(params: EagleTypes.AddFromURLParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/addFromURL', { ...options, data: params });
  }

  addFromUrls(params: EagleTypes.AddFromURLsParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/addFromURLs', { ...options, data: params });
  }

  addFromPath(params: EagleTypes.AddFromPathParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/addFromPath', { ...options, data: params });
  }

  addFromPaths(params: EagleTypes.AddFromPathsParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/addFromPaths', { ...options, data: params });
  }

  addBookmark(params: EagleTypes.AddBookmarkParams, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/addBookmark', { ...options, data: params });
  }

  moveToTrash(itemIds: string[], options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/moveToTrash', { ...options, data: itemIds });
  }

  refreshPalette(itemId: string, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/refreshPalette', {
      ...options,
      data: { id: itemId },
    });
  }

  refreshThumbnail(itemId: string, options: EagleTypes.EagleRequestConfig = {}) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('item/refreshThumbnail', {
      ...options,
      data: { id: itemId },
    });
  }

  switchLibrary(libraryPath: string, options?: EagleTypes.EagleRequestConfig) {
    return this._post<Omit<EagleTypes.EagleResponse, 'data'>>('library/switch', {
      ...options,
      data: { libraryPath },
    });
  }

  private _get<T>(path: string, config: AxiosRequestConfig = {}) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this._client.get<T>(path, config).then(res => res.data);
  }

  private _post<T>(path: string, config: AxiosRequestConfig) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this._client.post<T>(path, config).then(res => res.data);
  }

  private _createSearchParams(params: Record<string, string | string[] | number | number[]>) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        searchParams.append(key, value.join(','));
      } else {
        searchParams.append(key, value.toString());
      }
    });

    return searchParams;
  }
}
