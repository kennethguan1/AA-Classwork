class PostsController < ApplicationController
    before_action :is_author?, only: [:edit, :update]

    def is_author?
        @post = Post.find_by(id: params[:id])
        redirect_to post_url(@post) if current_user.id != @post.author_id
    end


    def new
        @post = Post.new
        render :new
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def edit
        @post = current_user.posts.find_by(id: params[:id])
        render :edit
    end

    def update
        @post = current_user.posts.find_by(id: params[:id])
        if @post.update(post_params)
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    def destroy
        @post = current_user.posts.find_by(id: params[:id])
        if @post
            @post.destroy
            redirect_to sub_url(@post.sub_id)
        end
    end

    def show
        
    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :content, :sub_id, :author_id)
    end
end
