import Collection = Meteor.Collection;

export class Filter {
    private name:string;
    private options:Object;
    private current:Object;
    private editor:Object;

    public constructor(options:Object) {
        this.name = options.name;
        this.editor = options.editor;

        this.options = options;

        this.restoreState();
    }

    public restoreState() {
        this.current = Filter.collection.findOne({name: this.name});
        this.current = this.current ? this.current : {};

        if (this.current.rules) {
            this.editor.queryBuilder('setRules', this.current.rules);
        }
    }

    public storeState() {

        this.current.rules = this.editor.queryBuilder('getRules');

        if (this.current._id) {
            Filter.collection.update(this.current._id, {$set: {}});
        }
        else {
            Filter.collection.insert({_owner: Meteor.userId(), name: this.name});
        }
    }

    public getMongoSearch():Object {

        this.editor.editor
    }


    public getCurrentFilter():Object {
        return this.current;
    }

    public static collectionName:string = 'Filter.states';

    public static collection:Meteor.Collection;

    public static init() {
        Filter.collection = new Mongo.Collection(Filter.collectionName);

    }

    public static publish() {
        Meteor.publish(Filter.collectionName, function () {
            return Filter.collection.find({_owner: this.userId});
        });
    }
}
