var packageName = 'fujihara:angular-smart-table';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'Meteor package to use npm/bower angular-smart-table';
var gitLink = 'https://github.com/fujihara/angular-smart-table';
var documentationFile = 'README.md';

Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('angular:angular@1.5.2', 'client');
  api.add_files(['bower_components/angular-smart-table/dist/smart-table.min.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('fujihara:angular-smart-table');
  api.mainModule('angular-smart-table-tests.js');
});
