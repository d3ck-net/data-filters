Package.describe({
    name: 'dasdeck:data-filters',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'add customizable filters to table views',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');
    api.use('templating', 'client');
    api.use('blaze-html-templates');
    api.use('less');
    api.use('ecmascript');
    api.use('mongo');
    api.use('underscore');
    api.use('dasdeck:restcollection');
    api.use('barbatus:typescript');

    api.use('dasdeck:jquery-query-builder');

    api.addFiles('client/filterView.html', 'client');
    api.addFiles('client/style.less', 'client');
    api.addFiles('Filter.ts');

    api.addFiles('server/startup.js', 'server');
    api.addFiles('lib/startup.js');


    api.addFiles('client/filterView.js', 'client');


});

Package.onTest(function (api) {
    //api.use('ecmascript');
    //api.use('tinytest');
    //api.use('mongo-object');
    //api.addFiles('mongo-object-tests.js');
});
