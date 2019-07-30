import { toolbarsObj } from '../models/models';
export const toolbars: toolbarsObj = [
    {
        text: '系统',
        menus: [
            {
                text: '关于系统'
            },
            {
                text: '主题',
                menus: [
                    {
                        text: 'Light',
                    },
                    {
                        text: 'Dark',
                    },
                ]
            },
            {
                text: '退出'
            }
        ],
    },
    {
        text: '文件',
        menus: [
            {
                text: '导入'
            },
            {
                text: '导出',
                menus: [
                    {
                        text: 'HTML',
                    },
                    {
                        text: 'Markdown',
                    },
                    {
                        text: 'PDF',
                    },
                ]
            },
            {
                text: '打开',
            },
            {
                text: '新建',
            },
            {
                text: '复制',
            },
            {
                text: '编辑',
            },
            {
                text: '编辑标签',
            },
            {
                text: '编辑附件',
            },
            {
                text: '关注',
            },
            {
                text: '置顶',
            },
            {
                text: '删除',
            },
            {
                text: '永久删除',
            },
        ],
    },
    {
        text: '编辑',
        menus: [
            {
                text: '删除',
            },
            {
                text: '全选',
            },
            {
                text: '清空回收站',
            },
        ]
    },
    {
        text: '视图',
        menus: [
            {
                text: '主界面',
            },
            {
                text: '隐藏菜单',
            },
            {
                text: '编辑界面',
            },
        ]
    },
    {
        text: '窗口',
        menus: [
            {
                text: '搜索',
            },
            {
                text: '上一个标签',
            },
            {
                text: '下一个标签',
            },
            {
                text: '上一个笔记',
            },
            {
                text: '下一个笔记',
            },
        ]
    },
    {
        text: '帮助',
        menus: [
            {
                text: '帮助手册',
            },
        ]
    },
];
