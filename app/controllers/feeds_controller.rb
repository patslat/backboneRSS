class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all }
    end
  end

  def create
    feed = Feed.getOrCreate(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: 400
    end
  end
end
