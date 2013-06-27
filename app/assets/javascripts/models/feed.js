App.Models.Feed = Backbone.Model.extend({
  // override parse to build a collection out of nested entries
  parse: function (response) {
    var entries = response.entries;
    response.entries = new App.Collections.Entries(entries);
    return response;
  },
});