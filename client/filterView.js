import {Filter} from "../Filter";
import {Converter} from "meteor/dasdeck:restcollection";

Template.searchMenu.onRendered(function () {

    // $('.filterIcon').contextmenu();
});

Template.filterBar.events({
    'click .filterIcon': function () {
        var filter = Template.instance().filter;
        filter.storeState();
        debugger;
    }
});

Template.filterBar.onCreated(function () {
    // Meteor.subscribe(Filter.collectionName);
    // this.data.schema = Converter.convertSimpleSchemaToQueryBuilder(this.data.schema);

});


Template.filterBar.onRendered(function () {

    // var name = ed.closest('.filterBar');
    if (this.data.schema) {


        var found = false;
        var fullTextFields = [];
        $.each(this.data.schema, function (i, o) {
            found |= o.id === '$fulltext';

            fullTextFields.push(o.id);

        });
        if (!found) {
            this.data.schema.push({
                id: '$fulltext',
                label: 'any column',
                type: 'string',
                operators: [
                    'contains',
                    'not_contains',
                    'equal',
                    'not_equal',
                    'begins_with',
                    'not_begins_with',
                    'ends_with',
                    'not_ends_with'
                ]

            })
        }

        // this.data.schema = Converter.convertSimpleSchemaToQueryBuilder(this.data.schema);
        var ed = $('.editor');
        ed.queryBuilder({
            // operators: [
            //     { type: 'equal', optgroup: 'basic' },
            //     { type: 'not_equal', optgroup: 'basic' },
            //     { type: 'geo', optgroup: 'custom', nb_inputs: 3, multiple: false, apply_to: ['number'] }
            // ],
            plugins: [
                'sortable',
                'filter-description',
                'unique-filter',
                //'bt-tooltip-errors',
                //'bt-selectpicker',
                'bt-checkbox',
                'invert'
            ],
            default_filter: '$fulltext',
            filters: this.data.schema
        });
        if (this.data.callbacks) {
            var events = [
                'afterAddGroup.queryBuilder',
                'afterDeleteGroup.queryBuilder',
                'afterAddRule.queryBuilder',
                'afterDeleteRule.queryBuilder',
                'afterCreateRuleFilters.queryBuilder',
                'afterCreateRuleOperators.queryBuilder',
                'afterCreateRuleInput.queryBuilder',
                'afterUpdateRuleValue.queryBuilder',
                'afterUpdateRuleFilter.queryBuilder',
                'afterUpdateRuleOperator.queryBuilder',
                'afterApplyRuleFlags.queryBuilder',
                'afterUpdateGroupCondition.queryBuilder',
                'afterMove.queryBuilder',
                'afterSetFilters.queryBuilder',
                'afterInvert.queryBuilder',
                'afterClear.queryBuilder',
                'afterReset.queryBuilder',
                'setRules.queryBuilder.filter',
                'setFilters.queryBuilder.filter',
                'change',
                'keyup'
            ];
            ed.on(events.join(' '), _.debounce(this.data.callbacks.change, 100));
        }
        // debugger;
        // var instance = Template.instance();
        // var conf = new FilterConfig();
        this.data.editor = ed;
    }
    this.filter = new Filter(this.data);
});

