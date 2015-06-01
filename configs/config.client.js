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
	
    // Layouts
    common: {
        styles: ['common.styl'],
        scripts: ['common.js'],
        view: 'common.ect',
        deps: ['modernizr', 'angularjs', 'jquery', 'jquery.bem', 'requirejs',
               'svg', 'icon', 'link', 'button', 'input', 'form', 'logo', 'header', 'footer']
    },
    
    // Pages
    index: {
        styles: ['index.styl'],
        view: 'index.ect',
        deps: ['form']
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
    logo: {
        styles: ['logo.styl'],
        view: 'logo.ect'
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
    }
}
