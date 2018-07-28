class ScoreboardController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        @top_scores = User.order(points: :desc).limit(5)
        render json: @top_scores
      end
    end
  end
end
