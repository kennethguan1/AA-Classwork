class SubsController < ApplicationController
    before_action :is_mod?, only: [:edit, :update]

    def is_mod?
        @sub = Sub.find_by(id: params[:id])
        redirect_to subs_url if current_user.id != @sub.mod_id
    end

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        @sub = current_user.subs.find_by(id: params[:id])
        render :edit
    end

    def update
        @sub = current_user.subs.find_by(id: params[:id])
        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    # def destroy
    # end

    def show
        @sub = Sub.find_by(id: params[:id])
        render :show
    end

    def index
        @subs = Sub.all
        render :index
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description, :mod_id)
    end
end
