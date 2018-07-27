class ScoreboardController < ApplicationController
  def index
    @top_scores = User.order(points: :desc).limit(5)
  end
end
