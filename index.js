// add solution here

var theBeatlesPlay = function(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i]
    array.push(str)
  }
  return array
}