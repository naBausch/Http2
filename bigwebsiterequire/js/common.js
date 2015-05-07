//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        module: '../module',
        page: '../page',
    },
    shim: {
        terrific: {
            deps: ['jquery'],
            exports: 'Tc'
        },
        bootstrap: {
            deps: ['jquery']
        },
        tooltip: {
            deps: ['jquery']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'jquery.easing.min': {
            deps: ['jquery']
        },
        'slick.min': {
            deps: ['jquery']
        }
   }
});
