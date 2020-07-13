class ModifyCats < ActiveRecord::Migration[5.2]
  def change
    remove_column :cats, :sex
    add_column :cats, :sex, :string, null: false, :limit => 1
  end
end
