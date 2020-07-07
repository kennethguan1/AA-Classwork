class CreateShortenedUrl < ActiveRecord::Migration[5.2]
  def change
    create_table :shortened_urls do |t|
      t.text :long_url, null: false
      t.text :short_url, null: false
      t.integer :id
      t.timestamps
    end
      add_index :users, :email
  end
end
