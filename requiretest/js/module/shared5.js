define(['jquery', 'terrific',], function ($, Tc) {
    (function($) {
        /**
         * Shared5 module implementation.
         *
         * @author Natalie Bausch
         * @namespace Tc.Module
         * @class Shared5
         * @extends Tc.Module
         */
        Tc.Module.Shared5 = Tc.Module.extend({

            /**
             * Initializes the Default module.
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
                console.log('Shared5: on');

                callback();
            },

            /**
             * Hook function to trigger your events.
             *
             * @method after
             * @return void
             */
            after: function() {
                console.log('Shared5: after');
            }
        });
    })(Tc.$);
});
