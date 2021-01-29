class Api::V1::TagTaskResource < JSONAPI::Resource
    attributes :task_id, :tag_id
    has_many :tags
    has_many :tasks
end