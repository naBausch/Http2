define(['jquery', 'terrific', 'module/shared1', 'module/shared2', 'module/shared3', 'module/shared4', 'module/shared5', 'module/a1', 'module/a2', 'module/a3', 'module/a4', 'module/a5'], function ($, Tc) {
    (function($) {
        var $page = $('body');
        var application = new Tc.Application($page);
        application.registerModules();
        application.registerModule($page, 'Shared1');
        application.registerModule($page, 'Shared2');
        application.registerModule($page, 'Shared3');
        application.registerModule($page, 'Shared4');
        application.registerModule($page, 'Shared5');

        application.registerModule($page, 'A1');
        application.registerModule($page, 'A2');
        application.registerModule($page, 'A3');
        application.registerModule($page, 'A4');
        application.registerModule($page, 'A5');
        application.start();
    })(Tc.$);
});
