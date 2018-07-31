class ScoresController < ApplicationController
  def index
    @scores = Scores.top_ten
    render json: { @scores, include: :user }
  end

  def update
    @score = Score.find_by(id: params[:id])
    @score.update(score_params)
  end

  private

  def score_params
    params.permit(:right_answers, :total_questions)
  end
end
