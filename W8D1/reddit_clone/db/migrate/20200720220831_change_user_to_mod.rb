class ChangeUserToMod < ActiveRecord::Migration[5.2]
  def change
    remove_column :subs, :user_id
    add_column :subs, :mod_id, :integer
    add_index :subs, :mod_id
  end
end
