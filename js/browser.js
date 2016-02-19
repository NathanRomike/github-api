var apiKey = "0461ef28c848aa6ce3fc1a3c693ac17b2afd708f"

$(document).ready(function(){
  $.get('https://api.github.com/users/NathanRomike/repos?&apiid=' + apiKey, function(data) {
    console.log(data);
  });
});
