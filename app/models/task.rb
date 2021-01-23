class Task < ApplicationRecord
    belongs_to :user

    has_many :tags
    validates_associated :tags

    validates :title, :status, :user_id, presence: true
end
