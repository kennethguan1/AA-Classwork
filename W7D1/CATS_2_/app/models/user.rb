class User < ApplicationRecord
    # As ever, toss on necessary constraints and validations
    # we know we need to validate 
    # DB LEVEL: null: false, MODEL LEVEL: presence: true
    # null: false = user_name, password_digest, session_token 
    # validates :column_name1, :column_name2, :column_name3 presence:true
    validates :user_name, :password_digest, :session_token, presence:true
    validates :user_name, :session_token, uniqueness: true
    # DB LEVEL: unique: true, MODEL LEVEL: uniqueness: true
    after_initialize :ensure_session_token
    # happens after .new, before validation. What mean this?
    # rails has specific callback methods. Controllers and models have callbacks
    # they are methods that take in names of other methods
    # this would invoke the method :session_token at the callbacks' moment in time, 
    # at specific time points

    # SPIRE 
    # self.find_by_credentials
    # password=
    # is_password? same BCrypt method
    # reset_session_token!
    # ensure_session_token

    # CLLL this is ApplicationsController
    # current_user
    # logged_in?
    # login_user!(user)
    # logout_user!(user)
    # There may be a few additional methods used in callbacks

    #######
    # Write yourself a User#reset_session_token || ::reset_session_token method. Go on, you're worth it! 
    # Use yourself a SecureRandom to generate a token.
    def reset_session_token!
        SecureRandom::urlsafe_base64
    end
    
    def password
        # this is the getter
        @password
    end

    def password=(password)
        # Write a #password=(password) setter method that writes the 
        # password_digest attribute with the hash of the given password.
        @password = password
        # this creates a hashified version of the password
        # 'hunter12' => "hdjkabfjsabjrilebnfajkednjils"
        # are we saving the password_digest?
        # this is a bcrypt .create creating plan text to hashify, 
        # throws salt and makes a password digest = this is a string
        self.password_digest = BCrypt::Password.create(password)
        # this self.password_digest is a BCrypt model in string form
    end

    def ensure_session_token
        # if we dont have an existing session_token, then we want to set one
        # amazon.com/cart48 #### 'jskhjdalhfdjasl'
        self.session_token ||= SecureRandom::urlsafe_base64 
    end

    def is_password?(password)
        # Write a #is_password?(password) method that verifies a password.
        # checking to see is the password is our password
        # password_oebject is a BCrypt pw object in the form of a string
        password_object = BCrypt::Password.new(self.password_digest) #=> this return the same hashified string
        # BCrypt::Password.new("$2a$12$9CAunaxGAoskeFmOkDFUbeyYGiaNs9/kdj.qOUHe5jdzMFYFiS5L.") == "test123"
        # => false
        # BCrypt::Password.new("$2a$12$9CAunaxGAoskeFmOkDFUbeyYGiaNs9/kdj.qOUHe5jdzMFYFiS5L.") == "password"
        # => true
        # we can compare the password_object.is_password?(password) and pass in a string
        password_object.is_password?(password) #this is_password? is a BCrypt method, not same as line 48
        # this returns t/f
    end

    def self.find_by_credentials(user_name, password)
        # Write a ::find_by_credentials(user_name, password) method that returns the 
        # user with the given name if the password is correct.    
        # we're looking for the user
        # we're finding_by the user_name as param
        # if we find the user, check the password
            # return user
        # else
            # return nil 
        # end
        user = User.find_by(user_name: user_name)
        if user && is_password?(password) #BCrypt::Password.new(self.password_digest).is_password?(password)
            user
        else
            nil
        end
    end




end
