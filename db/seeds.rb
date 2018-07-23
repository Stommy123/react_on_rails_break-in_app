# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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
    ["Hit and run at Subs on the Runs parking lot", 25.79191, -80.21387, "Hit and run"]
  ].each do |description, lat, lng, category|
    User.first.reports.find_or_create_by(description: description, lat: "%.4f" % lat, lng: "%.4f" % lng, category: category)
  end
