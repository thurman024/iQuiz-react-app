class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
     session[:user_id] = @user.id
     #redirect to ?
    end
  end

end
