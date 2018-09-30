
require "faker"


 50.times do
    user = User.new(
    email: Faker::Internet.unique.email,
     points: Faker::Number.between(100,1000),
     password: "asdfasdf"
   )
   user.save
 end
​

# Place.destroy_all
# # Place.where.select do |place|
# #   place.name.nil?
# # end.each do |place|
# #   place.destroy
# # end
#   [
#     # WYNWOOD
#     ['White Landrover with windows smashed',  'Vehicle-Related', '2727 NW 2nd Ave', 'Miami', 'Florida'],
#     ['Kids lighting trash cans on fire, 7th ave', 'Arson', '251 NW 25th ST', 'Miami', 'Florida'],
#     ['Sketchy behavior near wynwood strip',  'Suspicious-Activity', '2550 NW 2nd Ave', 'Miami', 'Florida'],
#     ['Mustang with windshield smashed', 'Vehicle-Related', '2506 NW 2nd Ave', 'Miami', 'Florida'],
#     ['Spray painters on 6th avenue',  'Suspicious-Activity', '223 NW 23rd ST', 'Miami', 'Florida'],
#     # ['Car going around shooting people with paintball gun', 'Violence', '2750 NW 3rd Ave', 'Miami', 'Florida'],
#     # ['Dude passed out in the middle of the sidewalk', 'Crime', '2700 N Miami Ave', 'Miami', 'Florida'],
#     # ["I'm just trying to report something", 'Crime', '2230 NW 2nd Ave', 'Miami', 'Florida'],
#     # ['Someone stole my purse at El Patio yesterday',  'Violence', '2637 N Miami Ave', 'Miami', 'Florida'],
#     # ["I always feel like I'm being followed on this street",  "Suspicious-Activity"],
#     # ["Hit and run at Subs on the Runs parking lot",  "Vehicle-Related", '28 NE 29th ST', 'Miami', 'Florida'],
#     # ["I just got held at knife-point, and my wallet was stolen", 'Violence', '2300 NW 2nd Ave', 'Miami', 'Florida'],
#     # ['A biyclist got hit by a car, and the driver kept on going',  'Vehicle-Related', '2506 NW 2nd Ave', 'Miami', 'Florida'],
#     # ['Someone is throwing water ballons filled with bleach at walking pedestrians', 'Violence', '2300 NW 2nd Ave'],
#     # SOUTH MIAMI
#     ['Slashed tires', 'Vehicle-Related', '5837 Sunset Dr', 'Miami', 'Florida'],
#     ['Stolen hubcaps', 'Supicious-Activity', '5887 SW 73rd ST', 'Miami', 'Florida'],
#     ['My car has been keyed',  'Vehicle-Related', '5800 SW 73rd ST', 'Miami', 'Florida'],
#     ['This guy tried to pull me into an alley', 'Violence', '5812 Sunset Dr', 'Miami', 'Florida'],
#     ['A guy is eating a homeless mans face!', 'Crime', '7301 SW 57th CT', 'Miami', 'Florida'],
#     ['Theres a parking lot brawl', 'Drugs', '278 Miracle Mile', 'Miami', 'Florida'],
#     ['I heard 3 shots fired', 'Crime', '339 Miracle Mile', 'Miami', 'Florida'],
#     ['Someone just threw a molotov cocktail into our building', 'Arson', '201 Miracle Mile', 'Miami', 'Florida'],
#     ['Girl is chasing a man down the street with a baseball bat, and he is screaming for help', 'Drugs', '7535 N Kendall Dr', 'Miami', 'Florida'],
#     ['A guy just punched a girl in the face at Jersey Shore', 'assualt', '7491 SW 88th ST', 'Miami', 'Florida'],
#     ['Someone just jumped onto the train tracks, and he is screaming incoherently', 'Drugs', '9533 S Dixie Hwy', 'Miami', 'Florida'],
#     ['A drunk guy is walking around grabbing women by the p***y', 'Arson', '9200 S Dixie Hwy', 'Miami', 'Florida'],
#     #SOUTH BEACH
#     ['White Landrover with windows smashed', 'Vehicle-Related', '11 Washington Ave', 'Miami Beach', 'Florida'],
#     ['Kids lighting trash cans on fire, 7th ave', 'Arson', '1 Washington Ave', 'Miami Beach', 'Florida'],
#     ['Sketchy behavior near wynwood strip', 'Suspicious-Activity', '600 Lincoln Road', 'Miami Beach', 'Florida'],
#     ['Mustang with windshield smashed', 'Vehicle-Related', '915 Lincoln Road', 'Miami Beach', 'Florida'],
#     ['Spray painters on 6th avenue', 'Suspicious-Activity', '4525 Collins Ave', 'Miami Beach', 'Florida'],
#     ['Car going around shooting people with paintball gun', 'Violence'],
#     ['Dude passed out in the middle of the sidewalk', 'Crime', '1701 Collins Ave', 'Miami Beach', 'Florida'],
#     ["I'm just trying to report something", 'Crime', '4441 Collins Ave', 'Miami Beach', 'Florida'],
#     # ['Someone stole my purse at El Patio yesterday', 'Suspicious-Activity', '690 Lincoln Road', 'Miami Beach', 'Florida'],
#     # ["I always feel like I'm being followed on this street", "Suspicious-Activity", '1445 Washington Ave', 'Miami Beach', 'Florida'],
#     # ["Hit and run at Subs on the Runs parking lot", "Vehicle-Related", '743 Washington Ave', 'Miami Beach', 'Florida'],
#     # ["I just got held at knife-point, and my wallet was stolen", 'Violence', '136 Collins Ave', 'Miami Beach', 'Florida'],
#     # ['A biyclist got hit by a car, and the driver kept on going', 'Vehicle-Related', '1424 20th st', 'Miami Beach', 'Florida'],
#     # ['Someone is throwing water ballons filled with bleach at walking pedestrians', 'Violence', '1424 Alton Rd', 'Miami Beach', 'Florida'],
#     #BRICKELL
#     ['Slashed tires', 'Vehicle-Related', '1300 S Miami Ave', 'Miami', 'Florida'],
#     ['Stolen hubcaps', 'Supicious-Activity', '49 SW 11th ST', 'Miami', 'Florida'],
#     ['My car has been keyed', 'Vehicle-Related', '901 S Miami Ave', 'Miami', 'Florida'],
#     ['This guy tried to pull me into an alley', 'Crime', '777 Brickell Ave', 'Miami', 'Florida'],
#     ['A guy is eating a homeless mans face!', 'Drugs', '15 SE 10th ST', 'Miami', 'Florida'],
#     ['Theres a parking lot brawl', 'Drugs', '900 S Miami Ave', 'Miami', 'Florida'],
#     ['I heard 3 shots fired', 'Violence', '947 Brickell Ave', 'Miami', 'Florida'],
#     ['Someone just threw a molotov cocktail into our building', 'Arson', '444 Brickell Ave', 'Miami', 'Florida'],
#     ['Girl is chasing a man down the street with a baseball bat, and he is screaming for help', 'Drugs', '34 SW 13th ST', 'Miami', 'Florida'],
#     ['A guy just punched a girl in the face at Jersey Shore', 'Crime', '931 Brickell Ave', 'Miami', 'Florida'],
#     ['Someone just jumped onto the train tracks, and he is screaming incoherently', 'Drugs', '1111 SW 1st Ave', 'Miami', 'Florida'],
#     ['A drunk guy is walking around grabbing women by the p***y', 'Arson', '1250 S Miami Ave', 'Miami', 'Florida'],
#     #LITTLE HAVANA
#     ['Slashed tires', 'Vehicle-Related', '1320 S Dixie Hwy', 'Miami', 'Florida'],
#     ['Stolen hubcaps', 'Supicious-Activity', '1100 S Dixie Hwy', 'Miami', 'Florida'],
#     ['My car has been keyed', 'Vehicle-Related', '360 NW 8th ST', 'Miami', 'Florida'],
#     ['This guy tried to pull me into an alley', 'Violence', '901 SW 8th ST', 'Miami', 'Florida'],
#     ['A guy is eating a homeless mans face!', 'Drugs', '1642 SW 8th ST', 'Miami', 'Florida'],
#     ['Theres a parking lot brawl', 'Crime', '1277 SW 8th ST', 'Miami', 'Florida'],
#     #BAYSIDE
#     ['I heard 3 shots fired', 'Crime', '401 Biscayne Blvd', 'Miami', 'Florida'],
#     ['Someone just threw a molotov cocktail into our building', 'Arson', '244 Biscayne Blvd', 'Miami', 'Florida'],
#     ['Girl is chasing a man down the street with a baseball bat, and he is screaming for help', 'Suspicious-Activity', '601 Biscayne Blvd', 'Miami', 'Florida'],
#     ['A guy just punched a girl in the face at Jersey Shore', 'assualt', '1601 Biscayne Blvd', 'Miami', 'Florida'],
#     ['Someone just jumped onto the train tracks, and he is screaming incoherently', 'Drugs', '2929 Biscayne Blvd', 'Miami', 'Florida'],
#     ['A drunk guy is walking around grabbing women by the p***y', 'Arson', '2501 Biscayne Blvd', 'Miami', 'Florida'],
#     ['Girl is chasing a man down the street with a baseball bat, and he is screaming for help', 'Suspicious-Activity', '1103 Biscayne Blvd', 'Miami', 'Florida'],
#     # ['A guy just punched a girl in the face at Jersey Shore', 'assualt', '2419 Biscayne Blvd', 'Miami', 'Florida'],
#     # ['Someone just jumped onto the train tracks, and he is screaming incoherently', 'Drugs', '3595 Biscayne Blvd', 'Miami', 'Florida'],
#     # ['A drunk guy is walking around grabbing women by the p***y', 'Arson', '1700 Biscayne Blvd', 'Miami', 'Florida'],
#   ].each do |description, category, street, city, state|
#     User.last.places.find_or_create_by(description: description, category: category, street: street, city: city, state: state)
#   end
