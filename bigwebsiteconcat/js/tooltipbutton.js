(function($) {
    /**
     * Tooltipbutton module implementation.
     *
     * @author Natalie Bausch
     * @namespace Tc.Module
     * @class Navbar
     * @extends Tc.Module
     */
    Tc.Module.Tooltipbutton = Tc.Module.extend({

        /**
         * Initializes the Tooltipbutton module.
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
             
            $('[data-toggle="tooltip"]').tooltip();
    		
            callback();
        }
    });
})(Tc.$);