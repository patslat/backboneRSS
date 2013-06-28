App.Views.FeedIndexView = Backbone.View.extend({
  initialize: function () {
    this.template = JST['templates/FeedIndexView'];

    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change", this.render);
    this.listenTo(this.collection, "remove", this.render);
  },

  events: { "click #new-feed-button": "create"},

  render: function() {
    var content = this.template({
      collection: this.collection
    });

    this.$el.html(content);

    return this;
  },

  create: function () {
    var url = $("#new-feed-url").val()

    this.collection.create({ url: url })
  }

});