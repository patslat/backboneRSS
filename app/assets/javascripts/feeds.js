window.App = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $rootEl) {
    this.feeds = new App.Collections.Feeds();
    var that = this;

    this.feeds.fetch({
      success: function () {

        that.createSidebar($sidebar);

        new App.Routers.FeedsRouter($rootEl, that.feeds);
        Backbone.history.start();
      }
    });
  },

  createSidebar: function($sidebar) {
    var view = new App.Views.FeedIndexView({
      collection: this.feeds
    });
    $sidebar.html(view.render().$el);
  }

}