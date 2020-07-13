class Cat < ApplicationRecord 
    include ActionView::Helpers::DateHelper
    ARR_COLOR = ["White", "Black"]
    validates :birth_date, presence: true 
    validates :name, presence: true 
    validates :description, presence: true 
    validates :color, presence: true, inclusion: { in: ARR_COLOR}
    validates :sex, presence: true, inclusion: {in: ["M","F"]}
    
    def age
        time_ago_in_words(birth_date)   
    end 
end 