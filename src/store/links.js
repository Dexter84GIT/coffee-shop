const links = {
    state: {
        header: {
            id: 0,
            link: '/',
            icon: 'Logo.svg'
        },
        main: {
            id: 0,
            link: '/',
            icon: 'Logo_black.svg'
        },
        other: [
            {
                id: 1,
                text: 'Our coffee',
                link: '/our-coffee',
            },
            {
                id: 2,
                text: 'For your pleasure',
                link: '/goodview',
            },
            {
                id: 3,
                text: 'Contact Us',
                link: '/contacts',
            }
        ]
    },
    getters: {
        getHeaderLinks(state) {
            return {header: state.header, other: state.other}
        },
        getFooterLinks(state) {
            return {main: state.main, other: state.other}
        },
    }
}

export default links    