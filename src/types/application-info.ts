export interface ApplicationInfo {
  version: string;
  prereleaseVersion: string | null;
  buildVersion: string;
  execPath: string;
  platform: string;
}
