var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };


  window.onload = getUserRepos;