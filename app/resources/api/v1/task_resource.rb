class Api::V1::TaskResource < JSONAPI::Resource
    attributes :title, :description, :status, :user_id

    has_one :user, foreign_key: 'user_id'
    has_many :tags
end
