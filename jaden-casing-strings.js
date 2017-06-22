String.prototype.toJadenCase = function () {
  var jaden = this.valueOf().split(' ');
  
  for(var i = 0; len = jaden.length, i < len; i++) {
    jaden[i] = jaden[i].charAt(0).toUpperCase() + jaden[i].substr(1);
  }
  return jaden.join(' ').trim();
};

// solution ^
// tests 

var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
