class Api::TaskResource < JSONAPI::Resource
    attributes :title, :description, :status
end
  