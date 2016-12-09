$(function () {
  for (var i = 0; i++ < 100; ) {
    var li = $('<li />').text(i);
    $('ul').append(li);
  }
});
