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
  User.first.reports.create(description:"I just got held at knife-point, and wallet stolen", lat:28.5383 , lng:81.3792, category:'Armed Robbery')
  User.first.reports.create(description:'Biyclist got hit by a car', lat:25.8170, lng:80.1224, category:'hit and run')
  User.first.reports.create(description:'Someone is throwing water ballons filled with bleach at walking pedestrians', lat: 25.9429, lng:80.1234, category:'assault')
  User.first.reports.create(description:'Slashed tires', lat:25.8032, lng:80.1988, category:'vehicle damage')
  User.first.reports.create(description:'Stolen hubcaps', lat:25.8037, lng:80.1964, category:'theft')
  User.first.reports.create(description:'My car has been keyed', lat:25.7667, lng:80.1951, category:'vehicle damage')
  User.first.reports.create(description:'this guy tried to pull me into an alley', lat:25.7850, lng:80.1937, category:'assault')
  User.first.reports.create(description:'A homeless man just ate the ear off this other homeless guy', lat:, lng:, category:'assault')
  User.first.reports.create(description:'theres a parking lot brawl', lat: 25.7192,lng:80.2771, category:'assault')
  User.first.reports.create(description:'I heard 3 shots fired' lat:25.8013, lng:80.1947, category:'gun-fire')
  User.first.reports.create(description:'Someone just threw a molotov cocktail into our building' lat:25.9230, lng:80.1218, category:'arsony')
  User.first.reports.create(description:'Girl is chasing a man down the street with a baseball bat, and he is screaming for help' lat:25.7781, lng:80.2197, category:'assault')
  User.first.reports.create(description:'A guy just punched a girl in the face at 1800 Lucky' lat:25.7994, lng:80.1980, category:'assualt')
  User.first.reports.create(description:'Someone just jumped onto the train tracks, and he is screaming incoherently' lat:25.8087, lng:80.2155, category:'unknown')
  User.first.reports.create(description:'A drunk guy is walking around grabbing women by the p***y' lat:26.6771, lng:80.0370, category:'assault')
