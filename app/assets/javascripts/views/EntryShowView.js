App.Views.EntryShowView = Backbone.View.extend({

  initialize: function () {
    this.template = JST['templates/EntryShow'];
  },

  render: function () {
    console.log(this.model)
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
})