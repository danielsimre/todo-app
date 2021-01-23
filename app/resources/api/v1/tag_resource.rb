class Api::V1::TagResource < JSONAPI::Resource
    attributes :name, :task_id

    has_one :task, foreign_key: 'task_id'
end