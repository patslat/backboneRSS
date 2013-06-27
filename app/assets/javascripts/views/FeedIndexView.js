App.Views.FeedIndexView = Backbone.View.extend({
  initialize: function () {
    this.template = JST['templates/FeedIndexView'];

    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change", this.render);
    this.listenTo(this.collection, "remove", this.render);
  },

  render: function() {
    var content = this.template({
      collection: this.collection
    });

    this.$el.html(content);

    return this;
  }

});