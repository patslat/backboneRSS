class Feed < ActiveRecord::Base
  attr_accessible :title, :url

  has_many :entries, :dependent => :destroy

  def self.getOrCreate(url)
    feed = Feed.find_by_url(url)
    if !feed
      begin
        feedData = SimpleRSS.parse(open(url))
        feed = Feed.create!(title: feedData.title, url: url)
        feedData.entries.each do |entryData|
          Entry.create_from_json!(entryData, feed)
        end
      rescue SimpleRSSError
        return nil
      end
    end
    feed
  end

  def reload
    # should reload entries
    begin
      feedData = SimpleRSS.parse(self.url)
      self.title = feedData.title
      self.save!
      feedData.entries.each do |entryData|
        if !Entry.find_by_guid(entryData.guid)
          Entry.create_from_json!(entryData, feed)
        end
      end
    rescue SimpleRSSError
      return
    end
  end
end
