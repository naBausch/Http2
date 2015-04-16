(function($) {
    /**
     * Navbar module implementation.
     *
     * @author Natalie Bausch
     * @namespace Tc.Module
     * @class Navbar
     * @extends Tc.Module
     */
    Tc.Module.Navbar = Tc.Module.extend({

        /**
         * Initializes the Navbar module.
         *
         * @method init
         * @constructor
         * @param {jQuery|Zepto} $ctx the jquery context
         * @param {Sandbox} sandbox the sandbox to get the resources from
         * @param {String} modId the unique module id
         */
        init: function($ctx, sandbox, modId) {
            // call base constructor
            this._super($ctx, sandbox, modId);
        },

        /**
         * Hook function to do all of your module stuff.
         *
         * @method on
         * @param {Function} callback function
         * @return void
         */
        on: function(callback) {
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });
            callback();
        }
    });
})(Tc.$);