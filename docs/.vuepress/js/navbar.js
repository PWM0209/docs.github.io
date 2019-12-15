module.exports = [
    {
        text: 'Home', link: '/home/'
    },
    {
        text: 'Mr.P',
		items: [
            {
                text: 'Notes', link: '/mr.p/notes/',
                items: [                    
                    {text: 'vue.js', link: '/mr.p/notes/vue.js/vue'},
                    {text: 'vuepress', link: '/mr.p/notes/vue.js/vuepress'},
                ]
            },
            {text: 'Works', link: '/mr.p/works/'},
        ]
    },
    {
        text: 'Mrs.L', 
		items: [
            {
                text: 'Notes', link: '/mrs.l/notes/',
                // items: [                    
                //     {text: 'vue.js', link: '/mr.p/vue'},
                //     {text: 'vuepress', link: '/mr.p/vuepress'},
                // ]
            },
            {text: 'Works', link: '/mrs.l/works/'},
        ]
    },
    {
        text: 'About', link: '/about/'
    },
]