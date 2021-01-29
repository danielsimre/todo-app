class Api::V1::TaskResource < JSONAPI::Resource
    attributes :title, :description, :status, :user_id, :tag_list

    has_one :user, foreign_key: 'user_id'
    
    / Tag search functionality via filtering /
    filter :tag_list, apply: ->(records, value, _options) {
        if value[0] === "exclude"
            @user.tasks.tagged_with(value[1..-1], :exclude => true);
        else
            @user.tasks.tagged_with(value, :any => true);
        end
    }
    / Initialise user_id when task is created / 
    before_save do
        @model.user_id = context[:current_user].id if @model.new_record?
    end

    / Only allow users to retrieve their own tasks / 
    def self.records(options = {})
          @user = options[:context][:current_user]
          @user.tasks
    end
end
