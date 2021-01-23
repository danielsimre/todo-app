# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
/User.create(username: "testuser1", password: "password123", email: test1@mail.com);
User.create(username: "HelloWorld", password: "S!%ecret", email: test2@mail.com);/
Task.create(user_id: 1, title: "Water the plants", description: "Do this before leaving the house", status: false)
/Task.create(user_id: 2, title: "Buy groceries", description: "Get fruits and vegetables from the supermarket", status: true)
Task.create(user_id: 1, title: "Buy groceries", description: "Get fruits and vegetables from the supermarket", status: true)/
