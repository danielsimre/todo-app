class Api::V1::UserResource < JSONAPI::Resource
    attributes :username

    has_many :tasks
end
