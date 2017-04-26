angular.module('myApp').component('twitPage', {
  templateUrl: 'twit-template.html',
  controller: function twitController($http) {
    var self = this;

    $http.get('server/twits.json').then(function (response) {
      self.twits = response.data;
      console.log(this.twits);
    });

    this.shareTwit = function () {
      var date = new Date();
      var ymd = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

      var d = new Date(),
              h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
              m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      var his = h + ':' + m;

      var obj = {};
      obj.id = self.twits.length + 1;
      obj.twit = self.msg;
      obj.created = ymd + " " + his;

      this.twits.unshift(obj);
      this.msg = "";
    };
  }
});