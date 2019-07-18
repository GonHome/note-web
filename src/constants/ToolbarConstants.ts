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
                text: '固定',
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
    },
    {
        text: '视图',
    },
    {
        text: '窗口',
    },
    {
        text: '帮助',
    },
]
