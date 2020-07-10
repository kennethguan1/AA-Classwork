# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "user_one")
artwork1 = Artwork.create(title: "user1_art", image_url: "1/user1_art", artist_id: user1.id)

user2 = User.create(username: "user_two")
artwork2 = Artwork.create(title: "user2_art", image_url: "2/user2_art", artist_id: user2.id)

user3 = User.create(username: "user_three")
artwork3 = Artwork.create(title: "user3_art", image_url: "3/user3_art", artist_id: user3.id)

ArtworkShare.create(viewer_id: user1.id, artwork_id: artwork2.id)
ArtworkShare.create(viewer_id: user2.id, artwork_id: artwork3.id)
ArtworkShare.create(viewer_id: user3.id, artwork_id: artwork1.id)
