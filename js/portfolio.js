(function(module) {

  function Project(data) {
    Object.keys(data).forEach(function(current) {
      this[current] = data[current];
    }, this);
  }

  Project.all = [];

  Project.loadAll = function(rawData) {
    rawData.sort(function(a, b) {
      return (new Date(b.submittedOn)) - (new Date(a.submittedOn));
    });

    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.getAll = function() {
    $.getJSON('data/project.json', function(rawData) {
      localStorage.rawData = JSON.stringify(rawData);
      Project.loadAll(rawData);

    });

  };

  Project.fetchAll = function(callback) {
    if (localStorage.rawData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/project.json',
        success: function(data, message, xhr) {
          console.log(xhr);
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Project.getAll();
          } else {
            Project.loadAll(JSON.parse(localStorage.rawData));
            console.log(callback);
            callback();
          }
        }
      });

    } else {
      Project.getAll(callback);
    }
  };

  module.Project = Project;
})(window);
