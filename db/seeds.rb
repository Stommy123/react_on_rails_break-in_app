# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
50.times do
  user = User.new(
    email: Faker::Internet.unique.email,
    points: Faker::Number.between(100,1000),
    password: 'asdfasdf'
  )
  user.save(validate: false)
end



Report.destroy_all
  [
    ['White Landrover with windows smashed', 25.7998, -80.1993, 'Car break in'],
    ['Kids lighting trash cans on fire, 7th ave', 25.7993, -80.1983, 'Arsony'],
    ['Sketchy behavior near wynwood strip', 25.7994, -80.1980, 'Possible robery'],
    ['Mustang with windshield smashed', 25.7944, -80.1902, 'Vehicle damage and possible theft'],
    ['Spray painters on 6th avenue', 25.8009, -80.2014, 'Vandalism'],
    ['Car going around shooting people with paintball gun', 25.8015, -80.2049, 'Assault'],
    ['Dude passed out in the middle of the sidewalk', 25.761681, -80.191788, 'unknown'],
    ["I'm just trying to report something", 25.8042, -80.1989, 'prank'],
    ['Someone stole my purse at El Patio yesterday', 25.8134, -80.1934, 'theft'],
    ["I always feel like I'm being followed on this street", 25.8051, -80.1989, "stalking"],
    ["Hit and run at Subs on the Runs parking lot", 25.79191, -80.21387, "Hit and run"],
    ["I just got held at knife-point, and my wallet was stolen", 28.5383 , 81.3792,'Armed Robbery'],
    ['A biyclist got hit by a car, and the driver kept on going', 25.8170, 80.1224, 'hit and run'],
    ['Someone is throwing water ballons filled with bleach at walking pedestrians', 25.9429, 80.1234, 'assault'],
    ['Slashed tires', 25.8032, 80.1988,'vehicle damage'],
    ['Stolen hubcaps', 25.8037, 80.1964,'theft'],
    ['My car has been keyed', 25.7667, 80.1951, 'vehicle damage'],
    ['This guy tried to pull me into an alley', 25.7850, 80.1937,'assault'],
    ['A guy is eating a homeless mans face!', 25.774948, -80.185989,'assault'],
    ['Theres a parking lot brawl', 25.7192, 80.2771,'assault'],
    ['I heard 3 shots fired', 25.8013, 80.1947,'gun-fire'],
    ['Someone just threw a molotov cocktail into our building', 25.9230, 80.1218,'arsony'],
    ['Girl is chasing a man down the street with a baseball bat, and he is screaming for help', 25.7781, 80.2197, 'assault'],
    ['A guy just punched a girl in the face at Jersey Shore', 25.7994, 80.1980,'assualt'],
    ['Someone just jumped onto the train tracks, and he is screaming incoherently', 25.8087, 80.2155,'unknown'],
    ['A drunk guy is walking around grabbing women by the p***y', 26.6771, 80.0370, 'assault']
  ].each do |description, lat, lng, category|
    User.first.reports.find_or_create_by(description: description, lat: "%.4f" % lat, lng: "%.4f" % lng, category: category)
  end
