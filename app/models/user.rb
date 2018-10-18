class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  has_many :rankings
  
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, 
         :validatable, authentication_keys: [:username]

   validates :username, presence: :true, uniqueness: { case_sensitive: false }

  # attr_writer :login

  # def login
  #   @login || self.username || self.email
  
  # end
  


end
