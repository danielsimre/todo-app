class Api::V1::TasksController < ApiController

    private
    
    def user_params
        params.require(:user).permit(:name, :tag_list)
    end
end
