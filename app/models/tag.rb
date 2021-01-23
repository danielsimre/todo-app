class Tag < ApplicationRecord
  belongs_to :task
  validates :name, :task_id, presence: true
end
