var access = (function () {
    var collections = {}

    return {
        addCollection: function (collectionLabel, collection) {
            collections[collectionLabel + ''] = collection;
        },

        getCollection: function (collectionLabel) {
            return collections[collectionLabel];
        },

        getModel: function (collectionLabel, id) {
            var mod;

            access.getCollection(collectionLabel).each(function(model) {
                if (model.attributes.id === id) {
                    mod = model;
                }
            } ,this);

            return mod;
        },

        addModel: function (collectionLabel, modelLabel, model) {
            collections[label][modelLabel] = model;
        }

    }
})()
