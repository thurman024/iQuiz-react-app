class UsersController < ApplicationController
  def create
    @user = User.create(user_params)
   if @user.save
    response = { message: 'User created successfully'}
    render json: response, status: :created
   else
    render json: @user.errors, status: :bad
   end
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
