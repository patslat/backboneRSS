window.App = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl) {
    this.feeds = new App.Collections.Feeds();
    var that = this;

    this.feeds.fetch({
      success: function () {
        new App.Routers.FeedsRouter($rootEl, that.feeds);
        Backbone.history.start();
      }
    });
  }

}