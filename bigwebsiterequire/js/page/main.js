define(['jquery', 'terrific', 'bootstrap', 'tooltip', 'jquery.easing.min', 'module/slick.min', 'module/navbar', 'module/pagescroll', 'module/navcollapse', 'module/slider', 'module/tooltipbutton'], function ($, Tc) {
      (function($) {
          var $page = $('body');
          var application = new Tc.Application($page);
          application.registerModules();
            application.registerModule($page, 'Navbar');
            application.registerModule($page, 'Pagescroll');
            application.registerModule($page, 'Navcollapse');
            application.registerModule($page, 'Slider');
            application.registerModule($page, 'Tooltipbutton');
          application.start();
      })(Tc.$);
  }
);
