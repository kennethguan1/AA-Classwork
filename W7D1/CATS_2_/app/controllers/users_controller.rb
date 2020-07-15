class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        user = User.create(params.require(:user).permit(:username, :password_digest, :session_token)
    end
end
