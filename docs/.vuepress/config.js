module.exports = {
    title: '沐糖 (づ｡◕ ౩ ◕｡)づ',
    description: 'P&L\'s notes site',
    dest: './dist',
    port: '9999',
    head: [
        ['link', {rel: 'icon', href: '/icons/favicon-64.ico'}]
    ],
    markdown: {
        lineNumbers: true
    },
    lang: 'zh-CN',
    themeConfig: {
        nav: require('./js/navbar'),
        sidebar: require('./js/sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}