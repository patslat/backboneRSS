App.Views.FeedShowView = Backbone.View.extend({

  initialize: function() {
    this.template = JST['templates/FeedShowView'];
  },

  render: function () {
    var view = this.template({
      model: this.model
    });

    this.$el.html(view);
    return this;
  },


})