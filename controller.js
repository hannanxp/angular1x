angular.module('myApp', [])
        .component('twitPage', {
          templateUrl: 'twit-template.html',
          controller: function twitController() {
            this.twits = [
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "Ut enim ad minim veniam",
              "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            ];

            this.shareTwit = function() {
              this.twits.unshift(this.msg);
              this.msg = "";
            };
          }
        });