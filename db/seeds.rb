# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  User.first.reports.create(description: 'White Landrover with windows smashed', lat: 25.7998, lng: -80.1993, category: 'Car break in')
  User.first.reports.create(description: 'Kids lighting trash cans on fire, 7th ave', lat:25.7993, lng:-80.1983, category: 'Arsony')
  User.first.reports.create(description: 'Sketchy behavior near wynwood strip', lat:25.7994, lng: -80.1980, category: 'Possible robery')
  User.first.reports.create(description:'Mustang with windshield smashed', lat:25.7944, lng:-80.1902, category: 'Vehicle damage and possible theft')
  User.first.reports.create(description:'Spray painters on 6th avenue', lat:25.8009, lng: -80.2014, category:'Vandalism')
  User.first.reports.create(description:'Car going around shooting people with paintball gun', lat:25.8015, lng:-80.2049, category:'Assault')
  User.first.reports.create(description:'Dude passed out in the middle of the sidewalk', lat: 25.761681, lng:-80.191788, category: 'unknown')
  User.first.reports.create(description:"I'm just trying to report something", lat: 25.8042, lng: -80.1989, category:'prank')
  User.first.reports.create(description:'Someone stole my purse at El Patio yesterday', lat:25.8134, lng:-80.1934, category:'theft')
  User.first.reports.create(description:"I always feel like I'm being followed on this street", lat:25.8051, lng:-80.1989, category:"stalking")
  User.first.reports.create(description:"Hit and run at Subs on the Runs parking lot", lat:25.79191, lng:-80.21387, category:"Hit and run")
