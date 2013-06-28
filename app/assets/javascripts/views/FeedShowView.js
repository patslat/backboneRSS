App.Views.FeedShowView = Backbone.View.extend({

  initialize: function() {
    this.template = JST['templates/FeedShowView'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.clearPage);

  },

  events: { "click #destroy-this-feed": "destroy" },

  render: function () {
    var view = this.template({
      model: this.model
    });

    this.$el.html(view);
    return this;
  },

  destroy: function () {
    this.model.destroy();
  },

  clearPage: function () {
    this.$el.empty();
    Backbone.history.navigate("#/")
  }

})