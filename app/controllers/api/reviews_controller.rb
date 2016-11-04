class Api::ReviewsController < ApplicationController
  def index
    neighborhood_id = params[:neighborhood_id]
    @reviews = Review.where("neighborhood_id = ?", neighborhood_id)
  end

  private

  def review_params
    params.require(:review).permit(:body,
                                   :good_for_pets,
                                   :good_for_bikes,
                                   :good_for_singles,
                                   :good_for_families,
                                   :street_parking,
                                   :user_id,
                                   :neighborhood_id,
                                   :created_at)
  end
end