module.exports = {
    
    // Vendors
    modernizr: {
        scripts: ['modernizr.js']
    },
    angularjs: {
        scripts: ['angular.min.js']
    },
    requirejs: {
        scripts: ['require.js']
    },
    jquery: {
        scripts: ['jquery-2.1.3.min.js']
    },
    'jquery.bem': {
        scripts: ['jquery.bem.js']
    },
    'jquery.inputmask': {
        scripts: ['jquery.inputmask.min.js']
    },
    'jquery.nicescroll': {
        scripts: ['jquery.nicescroll.min.js']
    },
    iscroll: {
        scripts: ['iscroll.js']
    },
    
    // Layouts
    base: {
        deps: ['modernizr', 'angularjs', 'jquery', 'jquery.bem', 'requirejs']
    },
    
    common: {
        styles: ['common.styl'],
        scripts: ['common.js'],
        view: 'common.ect',
        deps: ['svg', 'icon', 'link', 'button', 'input', 'form', 'heading', 'logo', 'header', 'footer', 'share', 'card', 'spinner']
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
    heading: {
        styles: ['heading.styl']
    },
    scroller: {
        styles: ['scroller.styl'],
        scripts: ['scroller.js'],
        view: 'scroller.ect',
        deps: ['iscroll', 'icon', 'spinner']
    },
    tabs: {
        styles: ['tabs.styl'],
        scripts: ['tabs.js'],
        view: 'tabs.ect',
        deps: ['button', 'spinner']
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
        deps: ['icon', 'button', 'logo', 'fab', 'categories']
    },
    footer: {
        styles: ['footer.styl'],
        view: 'footer.ect',
        deps: ['button', 'icon', 'scroller']
    },
    fab: {
        styles: ['fab.styl'],
        scripts: ['fab.js'],
        view: 'fab.ect',
        deps: ['icon']
    },
    stars: {
        styles: ['stars.styl'],
        view: 'stars.ect'
    },
    card: {
        styles: ['card.styl']
    },
    spinner: {
        styles: ['spinner.styl'],
        view: 'spinner.ect'
    },
    categories: {
        styles: ['categories.styl'],
        scripts: ['categories.js'],
        view: 'categories.ect',
        deps: ['icon']
    },
    guides: {
        styles: ['guides.styl'],
        scripts: ['guides.js'],
        view: 'guides.ect'
    },
    events: {
        styles: ['events.styl'],
        scripts: ['events.js'],
        view: 'events.ect',
        deps: ['button']
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
        view: 'affiche.ect'
    },
    reviews: {
        styles: ['reviews.styl'],
        scripts: ['reviews.js'],
        view: 'reviews.ect',
        deps: ['stars']
    },
    share: {
        styles: ['share.styl'],
        view: 'share.ect'
    }
}
