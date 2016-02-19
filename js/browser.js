$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    $('.showRepos').empty();
    var userName = $("#userName").val();
    $.get('https://api.github.com/users/' + userName + '/repos?&apiid=0461ef28c848aa6ce3fc1a3c693ac17b2afd708f', function(response) {
      for (var i = 0; i < response.length; i++) {
        $('.showRepos').append("<a href=" + "'" + response[i].html_url + "'" + ">" + response[i].name + "</a>" + "<br>");
      }
    });
  });
});
