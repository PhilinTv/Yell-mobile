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
	
    // Layouts
    base: {
        deps: ['modernizr', 'angularjs', 'jquery', 'jquery.bem', 'requirejs']
    },
    
    common: {
        styles: ['common.styl'],
        scripts: ['common.js'],
        view: 'common.ect',
        deps: ['svg', 'icon', 'link', 'button', 'input', 'form', 'heading', 'logo', 'header', 'footer']
    },
    
    // Pages
    index: {
        styles: ['index.styl'],
        scripts: ['index.js'],
        view: 'index.ect',
        deps: ['search', 'categories']
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
        deps: ['icon', 'link', 'logo', 'form']
    },
    footer: {
        styles: ['footer.styl'],
        view: 'footer.ect'
    },
    categories: {
        styles: ['categories.styl'],
        scripts: ['categories.js'],
        view: 'categories.ect',
        deps: ['icon', 'jquery.nicescroll']
    }
}
