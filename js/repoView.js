(function(module) {
  var repoView = {};

  var render = function(repo) {
    return $('<header>').html('<h3>' + repo.name + '</h3><p>' + repo.description + '</p>');
  };

  repoView.index = function() {
    $('#current_project').append(repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);
