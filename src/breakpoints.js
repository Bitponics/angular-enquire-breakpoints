'use strict';

angular.module("angular-enquire-breakpoints", []).directive('breakpoints',
    [
        function() {
            return {
                restrict: 'EA',
                controller: [
                    '$scope', '$element', '$attrs',
                    function ($scope, $element, $attrs){
                        //
                    }
                ],
                link: function (scope, elm, attrs) {
                    var breakpoints = scope.$eval(attrs.breakpoints);
                    if (!breakpoints){
                        breakpoints = {
                            $mq_smaller: "screen and (min-width: 20em)",
                            $mq_small: "screen and (min-width: 30em)",
                            $mq_small_height: "screen and (min-height: 50em)",
                            $mq_medium: "screen and (min-width: 40em)",
                            $mq_large: "screen and (min-width: 50em)",
                            $mq_larger: "screen and (min-width: 65em)"
                        };
                    }
                    var keys = Object.keys(breakpoints);

                    for (var i = 0; i < keys.length; i++) {
                        (function(i) {
                            enquire.register(breakpoints[keys[i]], {

                                // OPTIONAL
                                // If supplied, triggered when a media query matches.
                                match : function() {
                                    //console.log('matching in directive', keys[i]);
                                    scope.$broadcast('match', keys[i]);
                                },

                                // OPTIONAL
                                // If supplied, triggered when the media query transitions
                                // *from a matched state to an unmatched state*.
                                unmatch : function() {
                                    //console.log('un-matching in directive', keys[i]);
                                    scope.$broadcast('unmatch', keys[i]);
                                },

                                // OPTIONAL
                                // If supplied, triggered once, when the handler is registered.
                                setup : function() {
                                    //console.log('setup in directive', keys[i]);
                                    scope.$broadcast('setup', keys[i]);
                                },

                                // OPTIONAL, defaults to false
                                // If set to true, defers execution of the setup function
                                // until the first time the media query is matched
                                deferSetup : true,

                                // OPTIONAL
                                // If supplied, triggered when handler is unregistered.
                                // Place cleanup code here
                                destroy : function() {
                                    //console.log('destroy in directive', keys[i]);
                                    scope.$broadcast('destroy', keys[i]);
                                }

                            });

                        })(i);
                    };

                    scope.$on('$destroy', function(){
                        for (var i = 0; i < keys.length; i++) {
                            (function(i) {
                                enquire.unregister(breakpoints[keys[i]]);
                            })(i);
                        }
                    });

                }
            };
        }
    ]
);
