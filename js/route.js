//Configure routes for each controller
page('/', projectController.loadAll, projectController.index);
page('/about', aboutController.index);
page('/current', currentProjectController.index);

page(); //Activates page.js
