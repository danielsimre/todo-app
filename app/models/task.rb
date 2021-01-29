class Task < ApplicationRecord
    acts_as_taggable_on :tags
    belongs_to :user
    
    validates :title, :status, presence: true
end