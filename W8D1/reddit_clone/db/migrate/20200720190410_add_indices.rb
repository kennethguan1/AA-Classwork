class AddIndices < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :sub_id
    add_index :posts, :author_id
  end
end
