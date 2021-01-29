class ApiController < ActionController::API
    include JSONAPI::ActsAsResourceController

    private

    def context
        {current_user: current_user}
    end
end
  