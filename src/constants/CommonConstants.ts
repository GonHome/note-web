export const HEAD_HEIGHT = 35;
export const TOOLBAR_HEIGHT = 25;
export const LEFT_WIDTH = 250;
export const LEFT_MIN_WIDTH = 165;
export const LEFT_MAX_WIDTH = 300;
export const MIDDLE_WIDTH = 350;
export const MIDDLE_MIN_WIDTH = 165;
export const MIDDLE_MAX_WIDTH = 435;
/* global window */
export const INITIAL_ROUTE = {
  keys: {},
  options: {},
  path: window.location.hash, // 初始化为hash地址
  hash: '',
};

export const sideBarList = [
  {
    text: '全部笔记',
    code: 'ALL',
    count: 23,
    icon: 'note'
  },
  {
    text: '笔记本',
    code: 'NOTEBOOKS',
    count: 22,
    icon: 'notebook'
  },
  {
    text: '辅助',
    code: 'TURORIAL',
    count: 17,
  },
  {
    text: '标签',
    code: 'TAGS',
    count: 17,
    icon: 'tag'
  },
  {
    text: '高级',
    code: 'ADVANCED',
    count: 5,
  },
  {
    text: '基础',
    code: 'BASICS',
    count: 7,
  },
  {
    text: '中级',
    code: 'INTERMEDIATE',
    count: 5,
  },
  {
    text: '回收站',
    code: 'TRASH',
    count: 2,
    icon: 'delete',
  }
];
