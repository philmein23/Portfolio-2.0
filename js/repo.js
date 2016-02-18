(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/users/philmein23/repos' + '?per_page=10&sort=updated',
      type: 'GET',
      success: function(data, message, xhr) {
        console.log(data);
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr] === 'Portfolio-2.0';
    });
  };

  module.repos = repos;
})(window);
