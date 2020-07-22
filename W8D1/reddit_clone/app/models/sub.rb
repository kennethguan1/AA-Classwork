# == Schema Information
#
# Table name: subs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  mod_id      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Sub < ApplicationRecord
    validates :title, presence: true
    validates :description, presence: true

    belongs_to :moderator,
        foreign_key: :mod_id,
        class_name: :User

    has_many :posts,
        foreign_key: :sub_id,
        class_name: :Post
end
