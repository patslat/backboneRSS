App.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
    "feeds/:id/reload": "reload"
  },

  index: function () {
    var view = new App.Views.FeedIndexView({
      collection: this.feeds
    });

    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    var model = this.feeds.get(id);
    var view = new App.Views.FeedShowView({
      model: model
    });

    this.$rootEl.html(view.render().$el);
  },

  reload: function (id) {
    var model = this.feeds.get(id);


  }

})