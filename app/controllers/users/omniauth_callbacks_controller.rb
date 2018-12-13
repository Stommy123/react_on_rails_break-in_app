class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def facebook   #Facebook Log In
    @user = User.from_omniauth(request.env["omniauth.auth"])
    @user.persisted? ? sign_in_and_redirect @user : new_user_registration_url
  end

  def failure   #Handles failure
    redirect_to root_path
  end
end
