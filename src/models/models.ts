export type path = {
  text: string;
  icon: string;
  path: string;
};

export declare interface KVMap {
  [key: string]: any;
}

export declare interface KVSMap {
  [key: string]: string;
}

export type routeTypes = Readonly<{
  keys: any;
  options: any;
  path: any;
  hash: string
}>;

export type TagObj = {
  collapsed: boolean,
  name: string,
  notes: NoteObj[],
  path: string,
  icon?: string,
  iconCollapsed?: string,
  tags: {
    [name: string]: TagObj
  }
};

export type NoteObj = {
  content: string,
  filePath: string,
  checksum: number,
  plainContent: string,
  metadata: NoteMetadataObj
};

export type NoteMetadataObj = {
  attachments: string[],
  created: Date,
  modified: Date,
  deleted: boolean,
  favorited: boolean,
  pinned: boolean,
  stat: import ( 'fs' ).Stats,
  tags: string[],
  title: string
};

export type toolbarsObj = toolbarObj[];

export type toolbarObj = {
  text: string;
  icon?: string;
  event?: () => void;
  menus?: toolbarsObj;
  visiable?: boolean;
}

export type sideBarListObj = sideBarObj[];

export type sideBarObj = {
  text: string,
  code: string,
  icon?: string,
};

export type sortObj = {
  sortName: string,
  sortOrder: string,
};

export type sortOrderObj = {
  text: string;
  icon: string;
  code: string;
};

export type sortNameObj ={
  text: string;
  code: string;
};

export type MonacoEditor = import ( 'monaco-editor/esm/vs/editor/editor.api.js' ).editor.ICodeEditor & {
  getChangeDate: () => Date | undefined,
  getFilePath: () => string
};

export type eyeWidthObj = {
  leftWidth: number;
  middleWidth: number;
  isEye: boolean;
}

export type noteObj = {
  text: string;
  code: string;
}

export type searchObj = {
  search: string;
  sortName: string;
  sortOrder: string;
}

export declare interface KVObj {
  [key: string]: number
}
