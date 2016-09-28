Template.searchMenu.onRendered(function () {

    // $('.filterIcon').contextmenu();
});

Template.searchMenu.events({
    'click .filterIcon': function () {
        
    }
});

Template.filterBar.onRendered(function(){

    var ed = $('.editor');
    var name = ed.closest('.filterBar');
    ed.queryBuilder({
        plugins: [
            'sortable',
            'filter-description',
            'unique-filter',
            //'bt-tooltip-errors',
            //'bt-selectpicker',
            'bt-checkbox',
            'invert'
        ],
        filters: [{id: 'name', label: 'name', type: 'string'}]});
});
