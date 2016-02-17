(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/philmein23/repos' + '?per_page=1&sort=updated',
      type: 'GET',
      header: {
        'Authorization': 'token' + githubToken
      },
      success: function(data, message, xhr) {
        console.log(data);
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
