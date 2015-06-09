module.exports = {
    
    // Vendors
    modernizr: {
        scripts: ['//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js']
    },
    angularjs: {
        scripts: ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js']
    },
    requirejs: {
        scripts: ['//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.18/require.min.js']
    },
    jquery: {
        scripts: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js']
    },
    'jquery.bem': {
        scripts: ['jquery.bem.js']
    },
    iscroll: {
        scripts: ['//cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.1/iscroll-min.js']
    },
    
    // Layouts
    vendor: {
        deps: ['modernizr', 'angularjs', 'jquery', 'requirejs', 'iscroll']
    },
    
    common: {
        styles: ['common.styl'],
        scripts: ['common.js'],
        view: 'common.ect',
        deps: ['svg', 'icon', 'link', 'button', 'input', 'form', 'header', 'footer', 'share', 'card', 'spinner']
    },
    
    // Pages
    index: {
        styles: ['index.styl'],
        scripts: ['index.js'],
        view: 'index.ect',
        deps: ['scroller', 'tabs', 'search', 'categories', 'guides', 'events', 'videos', 'affiche', 'reviews']
    },
    
    // Blocks
    svg: {
        view: 'svg.ect'
    },
    icon: {
        styles: ['icon.styl'],
        view: 'icon.ect'
    },
    link: {
        styles: ['link.styl'],
        view: 'link.ect'
    },
    button: {
        styles: ['button.styl'],
        view: 'button.ect',
        deps: ['icon']
    },
    input: {
        styles: ['input.styl'],
        scripts: ['input.js'],
        view: 'input.ect',
        deps: ['icon']
    },
    form: {
        styles: ['form.styl'],
        scripts: ['form.js'],
        view: 'form.ect',
        deps: ['icon', 'input', 'button']
    },
    scroller: {
        styles: ['scroller.styl'],
        scripts: ['scroller.js'],
        view: 'scroller.ect',
        deps: ['spinner']
    },
    tabs: {
        styles: ['tabs.styl'],
        scripts: ['tabs.js'],
        view: 'tabs.ect',
        deps: ['spinner']
    },
    search: {
        styles: ['search.styl'],
        scripts: ['search.js'],
        view: 'search.ect',
        deps: ['form']
    },
    logo: {
        styles: ['logo.styl'],
        view: 'logo.ect',
        deps: ['icon']
    },
    header: {
        styles: ['header.styl'],
        scripts: ['header.js'],
        view: 'header.ect',
        deps: ['logo', 'fab', 'sidebar']
    },
    footer: {
        styles: ['footer.styl'],
        view: 'footer.ect',
        deps: ['button', 'icon', 'scroller']
    },
    sidebar: {
        styles: ['sidebar.styl'],
        scripts: ['sidebar.js'],
        view: 'sidebar.ect',
        deps: ['icon', 'button', 'categories']
    },
    fab: {
        styles: ['fab.styl'],
        scripts: ['fab.js'],
        view: 'fab.ect',
        deps: ['button', 'icon']
    },
    stars: {
        styles: ['stars.styl'],
        view: 'stars.ect'
    },
    card: {
        styles: ['card.styl']
    },
    list: {
        styles: ['list.styl']
    },
    spinner: {
        styles: ['spinner.styl'],
        view: 'spinner.ect'
    },
    categories: {
        styles: ['categories.styl'],
        scripts: ['categories.js'],
        view: 'categories.ect',
        deps: ['card', 'icon']
    },
    guides: {
        styles: ['guides.styl'],
        scripts: ['guides.js'],
        view: 'guides.ect',
        deps: ['card']
    },
    events: {
        styles: ['events.styl'],
        scripts: ['events.js'],
        view: 'events.ect',
        deps: ['button', 'tabs', 'list', 'card']
    },
    videos: {
        styles: ['videos.styl'],
        scripts: ['videos.js'],
        view: 'videos.ect',
        deps: ['icon']
    },
    affiche: {
        styles: ['affiche.styl'],
        scripts: ['affiche.js'],
        view: 'affiche.ect',
        deps: ['card']
    },
    reviews: {
        styles: ['reviews.styl'],
        scripts: ['reviews.js'],
        view: 'reviews.ect',
        deps: ['stars', 'card']
    },
    share: {
        styles: ['share.styl'],
        view: 'share.ect'
    }
}
