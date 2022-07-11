export interface LibraryInfo {
  folders: LibraryInfoFolder[];
  smartFolders: SmartFolder[];
  quickAccess: unknown[];
  tagsGroups: unknown[];
  modificationTime: number;
  applicationVersion: string;
  library: {
    path: string;
    name: string;
  };
}

export interface LibraryInfoFolder {
  id: string;
  name: string;
  description: string;
  children: LibraryInfoFolder[];
  modificationTime: number;
  tags: string[];
  password: string;
  passwordTips: string;
}

export interface SmartFolder {
  id: string;
  name: string;
  description: string;
  conditions: SmartFolderCondition[];
  children: SmartFolder[];
}

export interface SmartFolderCondition {
  rules: SmartFolderConditionRule[];
  match: string;
  boolean: string;
  $$hashKey: string;
}

export interface SmartFolderConditionRule {
  property: string;
  method: string;
  value: string;
  $$hashKey: string;
}
