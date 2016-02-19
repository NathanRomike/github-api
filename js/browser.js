$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    $('.showRepos').empty();
    var userName = $("#userName").val();
    $.get('https://api.github.com/users/' + userName + '/repos?', function(response) {
    $('.showRepos').html("<h2>" + userName + "</h2>");
      if (response.length === 0) {
        $('.showRepos').text("No repositories found for this user.")
      } else {
        for (var i = 0; i < response.length; i++) {
          $('.showRepos').append("<a href=" + "'" + response[i].html_url + "'" + "target='_blank'" + ">" + response[i].name + "</a>" + "<br>");
        }
      }
    });
  });
});
