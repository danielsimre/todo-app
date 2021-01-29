class Api::V1::TagResource < JSONAPI::Resource
    attributes :name

    has_many :tasks
    
    filter :name
end