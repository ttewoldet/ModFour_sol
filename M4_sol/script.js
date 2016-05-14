(function(){
  var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0;i<name.length;i++){
    var firstL=name[i].charAt(0).toLowerCase();
    if (firstL=='j'){
    byespeaker.goodBye(name[i]);
    }else{
       hellospeaker.hello(name[i]);
    }

  }

})();
