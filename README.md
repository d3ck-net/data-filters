#data-filters
unified filter for you data

##The Concept:

The idea is to have a simple unified table header to search through the data in a flexible yet consistent manner.
This is realised through a simple text search that searches through an array of columns (defined at development time)
in addition to a complex search that can be build, saved and restored (per user and globally) with the [jquery QueryBuilder](http://querybuilder.js.org/) library.

![screenshot](/doc/data-filters.jpg?raw=true)

TODO:

collection for saved filters

UI:
textbox
list of active filters (tags)
    remove cross
    edit icon
filter-icon
    dropdown
    new filter
    list of existing filters
