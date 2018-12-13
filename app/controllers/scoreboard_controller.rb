class ScoreboardController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        @top_scores = User.order(points: :desc).limit(10)
        @top_scores = User.where.not(:points => nil).order(points: :desc).limit(10)
        render json: @top_scores
      end
    end
  end
end
