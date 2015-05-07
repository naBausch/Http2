define(['jquery', 'terrific', 'module/shared1', 'module/shared2', 'module/shared3', 'module/shared4', 'module/shared5', 'module/b1', 'module/b2', 'module/b3', 'module/b4', 'module/b5'], function ($, Tc) {
    (function($) {
        var $page = $('body');
        var application = new Tc.Application($page);
        application.registerModules();
        application.registerModule($page, 'Shared1');
        application.registerModule($page, 'Shared2');
        application.registerModule($page, 'Shared3');
        application.registerModule($page, 'Shared4');
        application.registerModule($page, 'Shared5');

        application.registerModule($page, 'B1');
        application.registerModule($page, 'B2');
        application.registerModule($page, 'B3');
        application.registerModule($page, 'B4');
        application.registerModule($page, 'B5');
        application.start();
    })(Tc.$);
});
