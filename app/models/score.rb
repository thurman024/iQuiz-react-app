class Score < ApplicationRecord
  belongs_to :user

  def self.top_ten
    order("right_answers").limit(10)
  end
end
