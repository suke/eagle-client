// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface EagleResponse<T = any> {
  status: string;
  data: T;
}
