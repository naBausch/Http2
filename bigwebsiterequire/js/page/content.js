define(['jquery', 'terrific', 'bootstrap', 'tooltip', 'jquery-ui','jquery.easing.min', 'module/datepicker', 'module/pagescroll', 'module/gridnavigation', 'module/navcollapse', 'module/tooltipbutton' ], function ($, Tc) {
      (function($) {
          var $page = $('body');
          var application = new Tc.Application($page);
          application.registerModules();
          application.registerModule($page, 'Pagescroll');
          application.registerModule($page, 'Navcollapse');
          application.registerModule($page, 'Tooltipbutton');
          application.registerModule($page, 'Datepicker');
          application.registerModule($page, 'Gridnavigation');
          application.start();
      })(Tc.$);
  }
);


