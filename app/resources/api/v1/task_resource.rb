class Api::V1::TaskResource < JSONAPI::Resource
    attributes :title, :description, :status, :user_id, :tag_list

    has_one :user, foreign_key: 'user_id'

    / Create new task without user knowing their id / 
    before_save do
        @model.user_id = context[:current_user].id if @model.new_record?
    end

    / Only allow users to retrieve their own tasks / 
    def self.records(options = {})
          @user = options[:context][:current_user]
          @user.tasks
    end
end
