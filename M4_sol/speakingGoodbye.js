(function (window) {
  byespeaker={};
  var speaking='Good Bye';
  byespeaker.goodBye=function (name){
    console.log(speaking +" "+name);
  }
  window.byespeaker=byespeaker;
})(window)
