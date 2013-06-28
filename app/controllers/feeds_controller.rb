class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json {
        render :json => Feed.includes(:entries).to_json(:include => :entries)
      }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    @feed = Feed.find(params[:id])
    @feed.delete
    render :json => nil
  end

  def reload
    feed = Feed.find(params[:id]).reload
    render :json => feed.to_json(:include => :entries)
  end

end
