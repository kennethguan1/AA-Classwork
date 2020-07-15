class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    # we want indices on user_name ans session_token
    # for look up! 
    # add_indices :table_name, :column_name, any contraints(db level)
    add_index :users, :user_name, unique: true
    add_index :users, :session_token, unique: true
  end
end
