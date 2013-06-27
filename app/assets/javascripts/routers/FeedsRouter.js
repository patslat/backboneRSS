App.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
    "feeds/:id/reload": "reload",
    "feeds/:feed_id/entry/:id": "showEntry"
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
    $.ajax({
      url: "/feeds/" + id + "/reload",
      success: function (feed) {
        Backbone.history.navigate('#/feeds/' + id)
      }
    })
  },

  showEntry: function (feed_id, id) {
    var feed = this.feeds.get(feed_id)
    var entry = feed.get('entries').get(id)
    var view = new App.Views.EntryShowView({
      model: entry
    });

    this.$rootEl.html(view.render().$el);
  }

})