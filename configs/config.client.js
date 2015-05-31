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
        view: 'common.twig',
        deps: ['modernizr', 'angularjs', 'jquery', 'jquery.bem', 'requirejs',
               'svg', 'icon', 'link', 'button', 'input', 'form', 'logo', 'header', 'footer']
    },
    
    // Pages
    index: {
        styles: ['index.styl'],
        view: 'index.twig',
        deps: ['form']
    },
    
    // Blocks
    svg: {
        view: 'svg.twig'
    },
    icon: {
        styles: ['icon.styl'],
        view: 'icon.twig'
    },
    link: {
        styles: ['link.styl'],
        view: 'link.twig'
    },
    button: {
        styles: ['button.styl'],
        view: 'button.twig',
        deps: ['icon']
    },
    input: {
        styles: ['input.styl'],
        scripts: ['input.js'],
        view: 'input.twig',
        deps: ['icon']
    },
    form: {
        styles: ['form.styl'],
        scripts: ['form.js'],
        view: 'form.twig',
        deps: ['icon', 'input', 'button']
    },
    logo: {
        styles: ['logo.styl'],
        view: 'logo.twig'
    },
    header: {
        styles: ['header.styl'],
        scripts: ['header.js'],
        view: 'header.twig',
        deps: ['icon', 'link', 'logo', 'form']
    },
    footer: {
        styles: ['footer.styl'],
        view: 'footer.twig'
    }
}
