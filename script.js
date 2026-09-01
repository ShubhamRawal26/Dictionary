/**
 * WORDLY — MOBILE-FIRST ENGLISH DICTIONARY & WORD LEARNING APPLICATION
 * Pure Vanilla JavaScript • Web Speech API • LocalStorage Persistence
 * 400 Curated Beginner-Friendly Words (A: 100, B: 100, C: 100, D: 100)
 */

'use strict';

/* ==========================================================================
   1. VOCABULARY DATASET (400 Curated Words: A=100, B=100, C=100, D=100)
   ========================================================================== */
const VOCABULARY = {
  A: [
    { word: "Apple", pronunciation: "/ˈæp.əl/", meaning: "A round fruit with red, green, or yellow skin and sweet, crisp flesh.", example: "I eat a fresh red apple every morning with breakfast." },
    { word: "Ant", pronunciation: "/ænt/", meaning: "A small insect that lives in large, organized social colonies.", example: "A tiny black ant carried a breadcrumb across the table." },
    { word: "Air", pronunciation: "/eər/", meaning: "The invisible mixture of gases that surrounds the Earth and we breathe.", example: "Open the bedroom window to let in some cool morning air." },
    { word: "Arm", pronunciation: "/ɑːm/", meaning: "Either of the two upper limbs of the human body from shoulder to hand.", example: "She raised her right arm to ask the teacher a question." },
    { word: "Animal", pronunciation: "/ˈæn.ɪ.məl/", meaning: "A living creature that can move and feeds on organic matter.", example: "The dolphin is an intelligent and friendly marine animal." },
    { word: "Arrow", pronunciation: "/ˈær.əʊ/", meaning: "A pointed weapon shot from a bow, or a symbol indicating direction.", example: "Follow the green arrow on the wall to find the exit." },
    { word: "Artist", pronunciation: "/ˈɑː.tɪst/", meaning: "A person who creates paintings, drawings, sculptures, or other art.", example: "The talented artist painted a colorful sunset by the sea." },
    { word: "Answer", pronunciation: "/ˈɑːn.sər/", meaning: "A spoken or written reply to a question, letter, or problem.", example: "He knew the correct answer to the math riddle immediately." },
    { word: "Angel", pronunciation: "/ˈeɪn.dʒəl/", meaning: "A kind, pure spiritual being often pictured with wings and a halo.", example: "The kind nurse was like an angel to the sick children." },
    { word: "Area", pronunciation: "/ˈeə.ri.ə/", meaning: "A particular region, space, or surface of a place.", example: "There is a safe play area for young kids in the park." },
    { word: "Acorn", pronunciation: "/ˈeɪ.kɔːn/", meaning: "The small nut of an oak tree, sitting in a woody cup-like base.", example: "A hungry squirrel buried an acorn beneath the autumn leaves." },
    { word: "Actor", pronunciation: "/ˈæk.tər/", meaning: "A person who performs in plays, movies, or television shows.", example: "The actor delivered his speech with emotion and passion." },
    { word: "Adult", pronunciation: "/ˈæd.ʌlt/", meaning: "A fully grown and mature person or living organism.", example: "Tickets cost five dollars for a child and ten for an adult." },
    { word: "Advice", pronunciation: "/ədˈvaɪs/", meaning: "Helpful suggestions or opinions offered to guide someone's choice.", example: "My grandfather gave me wise advice about saving money." },
    { word: "Afraid", pronunciation: "/əˈfreɪd/", meaning: "Feeling fear, worry, or anxiety about something dangerous.", example: "The puppy was afraid of the loud thunder during the storm." },
    { word: "After", pronunciation: "/ˈɑːf.tər/", meaning: "Following in time, order, or place.", example: "We will go to the playground after we finish our lunch." },
    { word: "Again", pronunciation: "/əˈɡen/", meaning: "One more time, or repeating a previous action.", example: "Please read the beautiful poem once again for the class." },
    { word: "Age", pronunciation: "/eɪdʒ/", meaning: "The length of time that a person or thing has existed.", example: "At the age of seven, she learned how to play the violin." },
    { word: "Agent", pronunciation: "/ˈeɪ.dʒənt/", meaning: "A person who represents or acts on behalf of another person.", example: "The travel agent booked our train tickets to London." },
    { word: "Agree", pronunciation: "/əˈɡriː/", meaning: "To have the same opinion, belief, or decision as another person.", example: "Both friends agree that Saturday is the best day for football." },
    { word: "Airport", pronunciation: "/ˈeə.pɔːt/", meaning: "A large place where airplanes take off, land, and board passengers.", example: "We arrived at the international airport two hours before flight." },
    { word: "Alarm", pronunciation: "/əˈlɑːm/", meaning: "A warning sound or device that alerts people to danger or waking time.", example: "Her morning alarm rang loudly at six o'clock sharp." },
    { word: "Album", pronunciation: "/ˈæl.bəm/", meaning: "A book or folder for collecting photographs, stamps, or music tracks.", example: "We looked through the old family photo album together." },
    { word: "Alert", pronunciation: "/əˈlɜːt/", meaning: "Quick to notice things, attentive, and ready to take action.", example: "The guard dog remained alert throughout the quiet night." },
    { word: "Alien", pronunciation: "/ˈeɪ.li.ən/", meaning: "A fictional creature from outer space, or something strange and foreign.", example: "The science fiction movie showed a friendly glowing alien." },
    { word: "Alive", pronunciation: "/əˈlaɪv/", meaning: "Having life; living and not dead.", example: "The garden came alive with blooming flowers in the spring." },
    { word: "All", pronunciation: "/ɔːl/", meaning: "The entire quantity, amount, or whole number of something.", example: "All the students passed their English examination with honors." },
    { word: "Alley", pronunciation: "/ˈæl.i/", meaning: "A narrow lane or passageway between or behind buildings.", example: "The cat slipped quietly down the brick alley behind the shop." },
    { word: "Almond", pronunciation: "/ˈɑː.mənd/", meaning: "An oval edible nut with a pale brown shell and creamy seed.", example: "She added crunchy sliced almonds to her morning oatmeal." },
    { word: "Almost", pronunciation: "/ˈɔːl.məʊst/", meaning: "Very nearly, but not completely.", example: "The clock shows eight fifty-five; it is almost nine o'clock." },
    { word: "Alone", pronunciation: "/əˈləʊn/", meaning: "Without other people; by oneself.", example: "He enjoyed walking alone on the quiet beach at sunrise." },
    { word: "Alphabet", pronunciation: "/ˈæl.fə.bet/", meaning: "A set of letters arranged in a fixed order used in writing a language.", example: "Children learn the twenty-six letters of the English alphabet." },
    { word: "Always", pronunciation: "/ˈɔːl.weɪz/", meaning: "At all times, on every occasion, or forever.", example: "She always says 'thank you' when someone helps her." },
    { word: "Amazing", pronunciation: "/əˈmeɪ.zɪŋ/", meaning: "Causing great surprise, wonder, or admiration.", example: "The magician performed an amazing trick with a deck of cards." },
    { word: "Amber", pronunciation: "/ˈæm.bər/", meaning: "A warm yellowish-orange color, or fossilized golden tree resin.", example: "The traffic light turned amber to warn drivers to slow down." },
    { word: "Anchor", pronunciation: "/ˈæŋ.kər/", meaning: "A heavy metal device dropped into water to keep a boat from drifting.", example: "The sailors dropped the heavy anchor into the harbor." },
    { word: "Ancient", pronunciation: "/ˈeɪn.ʃənt/", meaning: "Belonging to the very distant past and no longer in existence.", example: "The tourists visited the ancient stone pyramids in Egypt." },
    { word: "Angry", pronunciation: "/ˈæŋ.ɡri/", meaning: "Feeling or showing strong displeasure, annoyance, or hostility.", example: "He was angry when his little brother broke his toy airplane." },
    { word: "Ankle", pronunciation: "/ˈæŋ.kəl/", meaning: "The joint connecting the foot with the lower leg.", example: "She twisted her ankle while running down the grassy hill." },
    { word: "Apartment", pronunciation: "/əˈpɑːt.mənt/", meaning: "A set of rooms for living in, usually within a larger building.", example: "They live in a modern apartment on the fourth floor." },
    { word: "Ape", pronunciation: "/eɪp/", meaning: "A large primate without a tail, such as a gorilla or chimpanzee.", example: "The chimpanzee is a clever ape that can use simple tools." },
    { word: "Apology", pronunciation: "/əˈpɒl.ə.dʒi/", meaning: "An expression of regret or sorrow for having done something wrong.", example: "He offered a sincere apology for arriving late to dinner." },
    { word: "Applaud", pronunciation: "/əˈplɔːd/", meaning: "To clap hands in approval, praise, or enjoyment.", example: "The whole audience stood up to applaud the wonderful pianist." },
    { word: "Apron", pronunciation: "/ˈeɪ.prən/", meaning: "A protective garment worn over clothing while cooking or working.", example: "The baker tied a white cloth apron around his waist." },
    { word: "Arch", pronunciation: "/ɑːtʃ/", meaning: "A curved symmetrical structure supporting the weight of a bridge or wall.", example: "The stone arch at the entrance welcomed visitors to the park." },
    { word: "Arena", pronunciation: "/əˈriː.nə/", meaning: "A level area surrounded by seats for sports and public entertainment.", example: "Thousands of cheering fans filled the basketball arena." },
    { word: "Armor", pronunciation: "/ˈɑː.mər/", meaning: "A protective metal suit worn by ancient knights in battle.", example: "The medieval knight polished his shining silver armor." },
    { word: "Army", pronunciation: "/ˈɑː.mi/", meaning: "A large, organized military force trained for fighting on land.", example: "Soldiers in the army undergo rigorous physical training." },
    { word: "Around", pronunciation: "/əˈraʊnd/", meaning: "Located on every side of, or moving in a circle.", example: "The children held hands and danced around the tall tree." },
    { word: "Arrange", pronunciation: "/əˈreɪndʒ/", meaning: "To put things in a neat, attractive, or specific order.", example: "She arranged the colorful flowers neatly in a glass vase." },
    { word: "Arrive", pronunciation: "/əˈraɪv/", meaning: "To reach a destination after a journey or period of travel.", example: "The yellow school bus will arrive at eight o'clock." },
    { word: "Article", pronunciation: "/ˈɑː.tɪ.kəl/", meaning: "A written piece of news or information published in a newspaper or magazine.", example: "He wrote an interesting article about protecting wild birds." },
    { word: "Ash", pronunciation: "/æʃ/", meaning: "The soft grey powder that remains after something has burned completely.", example: "Grey ash was left in the fireplace after the logs burned." },
    { word: "Ask", pronunciation: "/ɑːsk/", meaning: "To say a question in order to get information or an answer.", example: "Feel free to ask the teacher if you do not understand." },
    { word: "Asleep", pronunciation: "/əˈsliːp/", meaning: "In a state of sleep; not awake.", example: "The baby was fast asleep in her warm wooden crib." },
    { word: "Astronaut", pronunciation: "/ˈæs.trə.nɔːt/", meaning: "A person trained to travel and work in outer space.", example: "The brave astronaut floated weightlessly outside the space station." },
    { word: "Athlete", pronunciation: "/ˈæθ.liːt/", meaning: "A person who is proficient in sports and other physical exercise.", example: "The Olympic athlete trained every day to win the gold medal." },
    { word: "Atmosphere", pronunciation: "/ˈæt.məs.fɪər/", meaning: "The layer of air surrounding the planet, or the mood of a place.", example: "The cozy café had a warm and friendly atmosphere." },
    { word: "Attack", pronunciation: "/əˈtæk/", meaning: "An act of using force or violence against an enemy or opponent.", example: "The eagle swooped down to attack a fish in the river." },
    { word: "Attend", pronunciation: "/əˈtend/", meaning: "To be present at an event, meeting, class, or ceremony.", example: "Over fifty guests will attend the birthday party tonight." },
    { word: "Attic", pronunciation: "/ˈæt.ɪk/", meaning: "A room or space just below the sloping roof of a house.", example: "We found dusty wooden treasure boxes in the old attic." },
    { word: "August", pronunciation: "/ɔːˈɡʌst/", meaning: "The eighth month of the year, having thirty-one days.", example: "Our family usually goes camping during the month of August." },
    { word: "Aunt", pronunciation: "/ɑːnt/", meaning: "The sister of one's father or mother, or an uncle's wife.", example: "My Aunt Sarah baked delicious chocolate cookies for us." },
    { word: "Author", pronunciation: "/ˈɔː.θər/", meaning: "A writer of a book, article, or document.", example: "The famous author signed copies of her new mystery novel." },
    { word: "Autumn", pronunciation: "/ˈɔː.təm/", meaning: "The season between summer and winter when leaves change color.", example: "In autumn, golden and orange leaves fall gently from trees." },
    { word: "Avocado", pronunciation: "/ˌæv.əˈkɑː.dəʊ/", meaning: "A pear-shaped green fruit with creamy flesh and a large stone seed.", example: "She spread mashed fresh avocado over warm toasted bread." },
    { word: "Awake", pronunciation: "/əˈweɪk/", meaning: "Not sleeping; conscious and alert.", example: "I was still awake when the morning birds began to sing." },
    { word: "Award", pronunciation: "/əˈwɔːd/", meaning: "A prize or certificate given to honor an achievement or excellence.", example: "He won a gold award for writing the best science project." },
    { word: "Aware", pronunciation: "/əˈweər/", meaning: "Having knowledge or perception of a situation or fact.", example: "Drivers must be aware of pedestrians crossing the street." },
    { word: "Away", pronunciation: "/əˈweɪ/", meaning: "At a distance from a particular person, place, or thing.", example: "The little bird flew away into the deep blue sky." },
    { word: "Awesome", pronunciation: "/ˈɔː.səm/", meaning: "Extremely impressive, inspiring, or enjoyable.", example: "We had an awesome time watching fireworks at the festival." },
    { word: "Axe", pronunciation: "/æks/", meaning: "A heavy chopping tool with a sharp metal blade on a wooden handle.", example: "The woodcutter used an axe to chop firewood for the winter." },
    { word: "Adventure", pronunciation: "/ədˈven.tʃər/", meaning: "An unusual and exciting or daring experience.", example: "They went on a thrilling adventure through the dense forest." },
    { word: "Approve", pronunciation: "/əˈpruːv/", meaning: "To officially agree to or accept something as satisfactory.", example: "The teacher will approve your science experiment proposal." },
    { word: "Art", pronunciation: "/ɑːt/", meaning: "The expression or application of human creative skill and imagination.", example: "We created colorful paper collages during morning art class." },
    { word: "Avenue", pronunciation: "/ˈæv.ə.njuː/", meaning: "A broad road in a town or city, typically having trees on each side.", example: "They strolled happily down the tree-lined shopping avenue." },
    { word: "Aroma", pronunciation: "/əˈrəʊ.mə/", meaning: "A pleasant, sweet, or distinctive smell.", example: "The warm aroma of freshly baked cinnamon rolls filled the kitchen." },
    { word: "Abacus", pronunciation: "/ˈæb.ə.kəs/", meaning: "An ancient counting frame with beads sliding on rods.", example: "Students practiced counting using a wooden abacus in math." },
    { word: "Ability", pronunciation: "/əˈbɪl.ə.ti/", meaning: "The power, skill, or capacity to do something well.", example: "She has an extraordinary ability to learn new languages quickly." },
    { word: "Aboard", pronunciation: "/əˈbɔːd/", meaning: "On or into a ship, train, airplane, or bus.", example: "All passengers stepped aboard the cruise ship before departure." },
    { word: "Abroad", pronunciation: "/əˈbrɔːd/", meaning: "In or to a foreign country across the sea or border.", example: "He decided to study abroad in France for a whole semester." },
    { word: "Absence", pronunciation: "/ˈæb.səns/", meaning: "The state of being away from a place or not present.", example: "Her absence from school was excused because of illness." },
    { word: "Absolute", pronunciation: "/ˈæb.sə.luːt/", meaning: "Total, complete, and not limited by any conditions.", example: "The library was in absolute silence during study hours." },
    { word: "Absorb", pronunciation: "/əbˈzɔːb/", meaning: "To take in or soak up liquid, energy, or information.", example: "A dry sponge will quickly absorb spilled water on the counter." },
    { word: "Abundant", pronunciation: "/əˈbʌn.dənt/", meaning: "Existing or available in very large quantities; plentiful.", example: "The rich valley provided an abundant supply of fresh fruit." },
    { word: "Academic", pronunciation: "/ˌæk.əˈdem.ɪk/", meaning: "Relating to education, schools, colleges, or study.", example: "She received an award for her outstanding academic achievements." },
    { word: "Accent", pronunciation: "/ˈæk.sənt/", meaning: "A distinct way of pronouncing words typical of a region or country.", example: "He spoke English with a lovely Scottish accent." },
    { word: "Accept", pronunciation: "/əkˈsept/", meaning: "To agree to receive something offered or believe an explanation.", example: "She was happy to accept the job invitation from the company." },
    { word: "Access", pronunciation: "/ˈæk.ses/", meaning: "The opportunity, ability, or right to enter or use something.", example: "Students have free access to computers in the library." },
    { word: "Accident", pronunciation: "/ˈæk.sɪ.dənt/", meaning: "An unexpected event that happens by chance, often causing harm.", example: "He slipped on the wet floor by accident and spilled his tea." },
    { word: "Accompany", pronunciation: "/əˈkʌm.pə.ni/", meaning: "To go somewhere with someone as a companion or guide.", example: "Her big brother will accompany her to the train station." },
    { word: "Accomplish", pronunciation: "/əˈkʌm.plɪʃ/", meaning: "To complete or achieve a goal successfully through effort.", example: "With hard work, you can accomplish all your creative dreams." },
    { word: "Accord", pronunciation: "/əˈkɔːd/", meaning: "An official agreement, harmony, or peace between groups.", example: "The two countries signed a historic peace accord yesterday." },
    { word: "Account", pronunciation: "/əˈkaʊnt/", meaning: "A record or statement of financial or personal transactions.", example: "She opened a savings account at the local community bank." },
    { word: "Accurate", pronunciation: "/ˈæk.jə.rət/", meaning: "Correct, precise, and exact in all details without mistakes.", example: "The digital clock gives an accurate time reading every second." },
    { word: "Accuse", pronunciation: "/əˈkjuːz/", meaning: "To claim that someone has done something wrong or illegal.", example: "You should not accuse someone without clear and fair evidence." },
    { word: "Achieve", pronunciation: "/əˈtʃiːv/", meaning: "To reach a desired goal, result, or standard through effort.", example: "He worked diligently to achieve the highest score in the class." },
    { word: "Acre", pronunciation: "/ˈeɪ.kər/", meaning: "A unit of land area equal to 4,840 square yards.", example: "The old farmhouse stands on a green five-acre property." },
    { word: "Action", pronunciation: "/ˈæk.ʃən/", meaning: "The process of doing something to achieve a purpose or result.", example: "Taking quick action helped put out the small campfire safely." },
    { word: "Active", pronunciation: "/ˈæk.tɪv/", meaning: "Engaged in energetic work or physical movement.", example: "Playing football keeps children healthy, happy, and active." }
  ],

  B: [
    { word: "Ball", pronunciation: "/bɔːl/", meaning: "A spherical object used in games and sports.", example: "The children kicked the soccer ball across the grass." },
    { word: "Book", pronunciation: "/bʊk/", meaning: "A set of written or printed pages bound together.", example: "She read an adventurous book before going to sleep." },
    { word: "Boy", pronunciation: "/bɔɪ/", meaning: "A male child or young man.", example: "The cheerful boy rode his new bicycle around the block." },
    { word: "Bird", pronunciation: "/bɜːd/", meaning: "A warm-blooded egg-laying animal with feathers and wings.", example: "A blue bird sang a sweet melody from the garden branch." },
    { word: "Bread", pronunciation: "/bred/", meaning: "A staple food made from baked flour dough and water.", example: "He spread butter and strawberry jam on warm toasted bread." },
    { word: "Boat", pronunciation: "/bəʊt/", meaning: "A small vessel used for traveling over water.", example: "We sailed a wooden fishing boat across the calm lake." },
    { word: "Baby", pronunciation: "/ˈbeɪ.bi/", meaning: "A very young child or infant.", example: "The smiling baby clapped her little hands with delight." },
    { word: "Bell", pronunciation: "/bel/", meaning: "A hollow metal cup that rings when struck.", example: "The school bell rang to announce the start of lunchtime." },
    { word: "Bank", pronunciation: "/bæŋk/", meaning: "A financial institution where people deposit and borrow money.", example: "She went to the bank to deposit her weekly savings." },
    { word: "Beach", pronunciation: "/biːtʃ/", meaning: "A sandy or pebbly shore beside a sea, ocean, or lake.", example: "We built a tall sandcastle with seashells on the sunny beach." },
    { word: "Bear", pronunciation: "/beər/", meaning: "A large, heavy mammal with thick fur and sharp claws.", example: "The brown bear caught swimming salmon in the mountain river." },
    { word: "Bed", pronunciation: "/bed/", meaning: "A piece of furniture used for resting and sleeping.", example: "He climbed into his cozy bed and pulled up the warm blanket." },
    { word: "Bee", pronunciation: "/biː/", meaning: "A buzzing insect that collects nectar and makes sweet honey.", example: "A busy bee buzzed around the bright yellow sunflowers." },
    { word: "Belt", pronunciation: "/belt/", meaning: "A strip of leather or cloth worn around the waist.", example: "He tightened his black leather belt around his trousers." },
    { word: "Bench", pronunciation: "/bentʃ/", meaning: "A long seat made of wood or stone for two or more people.", example: "We sat on a wooden park bench and fed breadcrumbs to birds." },
    { word: "Berry", pronunciation: "/ˈber.i/", meaning: "A small, juicy, brightly colored fruit without a stone.", example: "She picked a ripe sweet berry from the garden bush." },
    { word: "Bicycle", pronunciation: "/ˈbaɪ.sɪ.kəl/", meaning: "A vehicle with two wheels that is propelled by pedals.", example: "He rode his red bicycle to school every sunny morning." },
    { word: "Big", pronunciation: "/bɪɡ/", meaning: "Of considerable size, height, extent, or intensity.", example: "An elephant is a big animal with enormous floppy ears." },
    { word: "Bike", pronunciation: "/baɪk/", meaning: "An informal word for a bicycle or motorcycle.", example: "She locked her blue bike to the metal rack outside the store." },
    { word: "Bill", pronunciation: "/bɪl/", meaning: "A printed statement of money owed for goods or services.", example: "The waiter brought the dinner bill after we finished dessert." },
    { word: "Bin", pronunciation: "/bɪn/", meaning: "A container for storing things or collecting rubbish.", example: "Please throw the empty soda can into the recycling bin." },
    { word: "Birdhouse", pronunciation: "/ˈbɜːd.haʊs/", meaning: "A small box-like shelter built for wild birds to nest in.", example: "Dad built a wooden birdhouse and hung it in the oak tree." },
    { word: "Bite", pronunciation: "/baɪt/", meaning: "To use one's teeth to cut into or grip food or an object.", example: "Take a small bite of the hot pizza so you do not burn your tongue." },
    { word: "Black", pronunciation: "/blæk/", meaning: "The darkest color, reflecting no light, like coal or midnight.", example: "The cat had silky black fur and bright emerald green eyes." },
    { word: "Blanket", pronunciation: "/ˈblæŋ.kɪt/", meaning: "A large piece of soft warm cloth used as a bed covering.", example: "She wrapped herself in a warm woolen blanket on the sofa." },
    { word: "Block", pronunciation: "/blɒk/", meaning: "A solid rectangular piece of hard material like wood or stone.", example: "The toddler stacked colorful wooden blocks into a tall tower." },
    { word: "Blood", pronunciation: "/blʌd/", meaning: "The red fluid that circulates through the heart and blood vessels.", example: "The heart pumps oxygen-rich blood to every part of the body." },
    { word: "Bloom", pronunciation: "/bluːm/", meaning: "To produce flowers, or the state of a flower opening up.", example: "Roses bloom beautifully during the warm summer months." },
    { word: "Blue", pronunciation: "/bluː/", meaning: "The color of the clear daytime sky and deep ocean water.", example: "She wore a bright blue sweater that matched her eyes." },
    { word: "Board", pronunciation: "/bɔːd/", meaning: "A flat piece of sawed timber, or a surface for writing on.", example: "The teacher wrote the math equations on the clean green board." },
    { word: "Body", pronunciation: "/ˈbɒd.i/", meaning: "The physical structure of a human being or animal.", example: "Drinking fresh water and eating vegetables keeps your body healthy." },
    { word: "Bone", pronunciation: "/bəʊn/", meaning: "Any of the hard, rigid pieces forming the skeleton of vertebrates.", example: "The playful puppy buried a tasty bone in the backyard." },
    { word: "Boot", pronunciation: "/buːt/", meaning: "A sturdy kind of shoe covering the foot and ankle or lower leg.", example: "He put on waterproof rubber boots before walking in the rain." },
    { word: "Border", pronunciation: "/ˈbɔː.dər/", meaning: "The line or boundary dividing two countries or areas.", example: "We showed our travel passports at the country border." },
    { word: "Bottle", pronunciation: "/ˈbɒt.əl/", meaning: "A glass or plastic container with a narrow neck for liquids.", example: "She carried a reusable water bottle to sports practice." },
    { word: "Bottom", pronunciation: "/ˈbɒt.əm/", meaning: "The lowest part or base of something.", example: "A shiny coin rested at the bottom of the wishing well." },
    { word: "Bowl", pronunciation: "/bəʊl/", meaning: "A deep, round dish or container used for food or liquids.", example: "He ate a warm bowl of chicken soup when he felt cold." },
    { word: "Box", pronunciation: "/bɒks/", meaning: "A container with flat sides and a lid, made of cardboard or wood.", example: "She opened the surprise gift box and smiled happily." },
    { word: "Brain", pronunciation: "/breɪn/", meaning: "The organ inside the skull that controls thought, memory, and feeling.", example: "The human brain processes information faster than a computer." },
    { word: "Branch", pronunciation: "/brɑːntʃ/", meaning: "A woody part of a tree growing out from the trunk.", example: "A squirrel hopped from one leafy branch to another." },
    { word: "Brave", pronunciation: "/breɪv/", meaning: "Ready to face danger, pain, or difficulty without fear.", example: "The brave firefighter rushed into the house to rescue the cat." },
    { word: "Brick", pronunciation: "/brɪk/", meaning: "A rectangular block of baked clay used in building walls.", example: "The sturdy house was constructed from red clay bricks." },
    { word: "Bridge", pronunciation: "/brɪdʒ/", meaning: "A structure built to span a river, road, or valley.", example: "Cars drove steadily across the suspension bridge over the bay." },
    { word: "Bright", pronunciation: "/braɪt/", meaning: "Giving off or reflecting much light; shining and vivid.", example: "The morning sun was so bright that she put on sunglasses." },
    { word: "Broom", pronunciation: "/bruːm/", meaning: "A cleaning tool with bristles fixed to a long wooden handle.", example: "She used a straw broom to sweep fallen leaves off the porch." },
    { word: "Brother", pronunciation: "/ˈbrʌð.ər/", meaning: "A boy or man in relation to his siblings.", example: "My older brother taught me how to kick a football accurately." },
    { word: "Brown", pronunciation: "/braʊn/", meaning: "A warm color produced by mixing red, yellow, and black.", example: "The rich soil in the vegetable garden was dark brown." },
    { word: "Brush", pronunciation: "/brʌʃ/", meaning: "An implement with bristles used for hair grooming or painting.", example: "Remember to use your toothbrush to clean your teeth twice daily." },
    { word: "Bubble", pronunciation: "/ˈbʌb.əl/", meaning: "A thin sphere of liquid enclosing air or another gas.", example: "The child blew shiny soap bubbles that floated in the breeze." },
    { word: "Bucket", pronunciation: "/ˈbʌk.ɪt/", meaning: "A round open container with a handle for carrying liquids.", example: "We filled the red bucket with water to wash the family car." },
    { word: "Build", pronunciation: "/bɪld/", meaning: "To construct something by putting parts or materials together.", example: "Birds collect twigs and leaves to build cozy nests for spring." },
    { word: "Building", pronunciation: "/ˈbɪl.dɪŋ/", meaning: "A permanent structure with walls and a roof, such as a house.", example: "The tall skyscraper is the tallest glass building in the city." },
    { word: "Bulb", pronunciation: "/bʌlb/", meaning: "A glass device producing light from electricity, or an onion root.", example: "Dad replaced the burnt-out light bulb in the living room lamp." },
    { word: "Bull", pronunciation: "/bʊl/", meaning: "An uncastrated adult male of cattle, known for its strength.", example: "The strong bull grazed peacefully in the grassy pasture." },
    { word: "Bus", pronunciation: "/bʌs/", meaning: "A large motor vehicle carrying passengers along a fixed route.", example: "We rode the city bus all the way to the central library." },
    { word: "Bush", pronunciation: "/bʊʃ/", meaning: "A low plant with many woody branches growing close to the ground.", example: "A wild rose bush bloomed beside the wooden garden fence." },
    { word: "Business", pronunciation: "/ˈbɪz.nɪs/", meaning: "The activity of making, buying, or selling goods or services.", example: "Her parents run a successful family bakery business in town." },
    { word: "Busy", pronunciation: "/ˈbɪz.i/", meaning: "Having a great deal to do; actively engaged in work.", example: "The honeybees were busy collecting nectar from blooming flowers." },
    { word: "Butter", pronunciation: "/ˈbʌt.ər/", meaning: "A pale yellow fatty food substance made from churning milk or cream.", example: "She melted a pat of rich butter on her warm pancakes." },
    { word: "Butterfly", pronunciation: "/ˈbʌt.ə.flaɪ/", meaning: "A flying insect with large, typically brightly colored wings.", example: "A monarch butterfly rested gently on the orange blossom." },
    { word: "Button", pronunciation: "/ˈbʌt.ən/", meaning: "A small disc sewn onto a garment to fasten it, or a switch.", example: "He fastened the top wooden button on his winter coat." },
    { word: "Buy", pronunciation: "/baɪ/", meaning: "To obtain something in exchange for payment or money.", example: "She went to the farmers market to buy fresh red apples." },
    { word: "Balance", pronunciation: "/ˈbæl.əns/", meaning: "An even distribution of weight enabling someone to remain upright.", example: "Gymnasts practice walking on the beam to keep their balance." },
    { word: "Balloon", pronunciation: "/bəˈluːn/", meaning: "A small rubber bag inflated with air or gas, used as a toy.", example: "He tied a red helium balloon to the birthday gift box." },
    { word: "Banana", pronunciation: "/bəˈnɑː.nə/", meaning: "A long curved fruit with a yellow skin and soft sweet flesh.", example: "Monkeys love to peel and eat ripe yellow bananas." },
    { word: "Band", pronunciation: "/bænd/", meaning: "A group of musicians who play music together.", example: "The school jazz band practiced playing their brass instruments." },
    { word: "Bark", pronunciation: "/bɑːk/", meaning: "The tough protective outer covering of tree trunks.", example: "The rough brown bark protects the tall tree from insects." },
    { word: "Barn", pronunciation: "/bɑːn/", meaning: "A large farm building used for storing grain or housing livestock.", example: "The farmer guided the dairy cows into the red barn for milking." },
    { word: "Base", pronunciation: "/beɪs/", meaning: "The lowest part, foundation, or bottom support of something.", example: "The stone base of the monument is carved with historical dates." },
    { word: "Basket", pronunciation: "/ˈbɑː.skɪt/", meaning: "A container made of woven strips of cane, wood, or wire.", example: "She carried a picnic basket packed with sandwiches and fruit." },
    { word: "Bat", pronunciation: "/bæt/", meaning: "A nocturnal flying mammal, or a wooden stick used in baseball.", example: "He swung the baseball bat and hit the ball over the fence." },
    { word: "Bath", pronunciation: "/bɑːθ/", meaning: "An act of washing the body inside a tub of warm water.", example: "After playing outdoors in the mud, the boy took a warm bath." },
    { word: "Battle", pronunciation: "/ˈbæt.əl/", meaning: "A fight or struggle between armed forces during a war.", example: "The historical museum displayed artifacts from the ancient battle." },
    { word: "Beak", pronunciation: "/biːk/", meaning: "The hard, pointed mouth part of a bird.", example: "The pelican scooped fish out of the water with its wide beak." },
    { word: "Beam", pronunciation: "/biːm/", meaning: "A ray of light, or a long sturdy piece of wood or steel.", example: "A bright beam of sunshine shone straight through the window." },
    { word: "Bean", pronunciation: "/biːn/", meaning: "An edible seed or pod grown by leguminous plants.", example: "Grandmother cooked a healthy bowl of green bean soup." },
    { word: "Beauty", pronunciation: "/ˈbjuː.ti/", meaning: "A combination of qualities that pleases the sight or mind.", example: "We admired the breathtaking natural beauty of the mountain sunset." },
    { word: "Beaver", pronunciation: "/ˈbiː.vər/", meaning: "A semiaquatic rodent that builds dams across streams.", example: "The busy beaver built a sturdy wooden dam across the river." },
    { word: "Become", pronunciation: "/bɪˈkʌm/", meaning: "To begin to be, grow into, or develop into something.", example: "With dedicated practice, she will become a great doctor." },
    { word: "Begin", pronunciation: "/bɪˈɡɪn/", meaning: "To start doing something or commence an action.", example: "The concert will begin as soon as the conductor raises his baton." },
    { word: "Behave", pronunciation: "/bɪˈheɪv/", meaning: "To act or conduct oneself in a proper and polite manner.", example: "The children were praised because they behave well in class." },
    { word: "Behind", pronunciation: "/bɪˈhaɪnd/", meaning: "At the back of, or supporting from the rear.", example: "The cat hid behind the living room curtain during the storm." },
    { word: "Believe", pronunciation: "/bɪˈliːv/", meaning: "To accept something as true, genuine, or real.", example: "I believe that kindness makes the whole world a better place." },
    { word: "Belong", pronunciation: "/bɪˈlɒŋ/", meaning: "To be the property of, or be a suitable member of a group.", example: "These colorful storybooks belong to the primary school library." },
    { word: "Below", pronunciation: "/bɪˈləʊ/", meaning: "At a lower level or position than something else.", example: "From the airplane window, we could see green fields below." },
    { word: "Bend", pronunciation: "/bend/", meaning: "To curve or flex something from a straight state.", example: "You must bend your knees gently when lifting heavy boxes." },
    { word: "Beside", pronunciation: "/bɪˈsaɪd/", meaning: "At the side of; right next to someone or something.", example: "She placed her warm cup of tea beside the open notebook." },
    { word: "Best", pronunciation: "/best/", meaning: "Of the most excellent, highest, or most desirable quality.", example: "Honesty is always the best path to earn lasting trust." },
    { word: "Better", pronunciation: "/ˈbet.ər/", meaning: "More desirable, satisfactory, or of higher quality.", example: "A good night of sleep will make you feel much better." },
    { word: "Between", pronunciation: "/bɪˈtwiːn/", meaning: "In the space or period separating two points or objects.", example: "The cozy bench sits between two tall flowering cherry trees." },
    { word: "Beyond", pronunciation: "/biˈjɒnd/", meaning: "Further away in the distance than something else.", example: "The snowy mountain peaks lie far beyond the green valley." },
    { word: "Biology", pronunciation: "/baɪˈɒl.ə.dʒi/", meaning: "The scientific study of living organisms and life processes.", example: "In biology class, we studied how green leaves produce oxygen." },
    { word: "Bison", pronunciation: "/ˈbaɪ.sən/", meaning: "A large wild ox with shaggy hair, large head, and short horns.", example: "A herd of American bison grazed peacefully on the prairie." },
    { word: "Bitter", pronunciation: "/ˈbɪt.ər/", meaning: "Having a sharp, pungent taste that is not sweet.", example: "Dark unsweetened cocoa powder has a deep, bitter flavor." },
    { word: "Blame", pronunciation: "/bleɪm/", meaning: "To hold someone responsible for a mistake or wrongdoing.", example: "Do not blame others for mistakes you made yourself." },
    { word: "Blaze", pronunciation: "/bleɪz/", meaning: "A very bright, powerful fire or flame.", example: "The cozy campfire blaze warmed the cold night air." },
    { word: "Blessing", pronunciation: "/ˈbles.ɪŋ/", meaning: "A beneficial thing for which one is grateful; good fortune.", example: "Having supportive and loving friends is a wonderful blessing." },
    { word: "Blind", pronunciation: "/blaɪnd/", meaning: "Unable to see due to injury, illness, or birth.", example: "The blind traveler walked with a trained guide dog." },
    { word: "Blizzard", pronunciation: "/ˈblɪz.əd/", meaning: "A severe, blinding snowstorm with high winds and freezing cold.", example: "The winter blizzard covered the streets in deep white snow." },
    { word: "Boil", pronunciation: "/bɔɪl/", meaning: "To heat a liquid until it bubbles and turns into steam.", example: "Boil the clean water before adding the pasta noodles." }
  ],

  C: [
    { word: "Cat", pronunciation: "/kæt/", meaning: "A small domesticated carnivorous mammal with soft fur and whiskers.", example: "The playful orange cat purred as it curled on the rug." },
    { word: "Car", pronunciation: "/kɑːr/", meaning: "A four-wheeled road vehicle powered by an engine.", example: "Dad washed the family car until it shone brightly." },
    { word: "Cake", pronunciation: "/keɪk/", meaning: "A sweet baked dessert made of flour, sugar, and eggs.", example: "Mom baked a rich chocolate cake for my birthday party." },
    { word: "Chair", pronunciation: "/tʃeər/", meaning: "A separate seat for one person, with a back and four legs.", example: "He pulled up a comfortable wooden chair to the dining table." },
    { word: "Child", pronunciation: "/tʃaɪld/", meaning: "A young human being below the age of full maturity.", example: "The happy child laughed while building a tall sandcastle." },
    { word: "Cloud", pronunciation: "/klaʊd/", meaning: "A visible mass of condensed water vapor floating in the sky.", example: "A fluffy white cloud drifted slowly across the blue sky." },
    { word: "City", pronunciation: "/ˈsɪt.i/", meaning: "A large, important town with many buildings and streets.", example: "London is a bustling historic city with millions of residents." },
    { word: "Coat", pronunciation: "/kəʊt/", meaning: "An outer garment with sleeves worn outdoors for warmth.", example: "Put on your warm woolen coat before stepping out in the snow." },
    { word: "Cup", pronunciation: "/kʌp/", meaning: "A small, bowl-shaped container for drinking, usually with a handle.", example: "Grandmother enjoyed a warm cup of herbal chamomile tea." },
    { word: "Clock", pronunciation: "/klɒk/", meaning: "An instrument to measure and indicate the time of day.", example: "The grandfather clock chimed twelve times at midnight." },
    { word: "Cabin", pronunciation: "/ˈkæb.ɪn/", meaning: "A small wooden shelter or house, especially in the woods.", example: "We stayed in a cozy log cabin near the mountain lake." },
    { word: "Camel", pronunciation: "/ˈkæm.əl/", meaning: "A large desert mammal with long legs and one or two humps.", example: "The camel walked steadily across the golden desert dunes." },
    { word: "Camera", pronunciation: "/ˈkæm.rə/", meaning: "A device for capturing still photographs or moving video.", example: "She took a clear photo of the sunset with her new camera." },
    { word: "Camp", pronunciation: "/kæmp/", meaning: "A place with tents or simple huts where people stay outdoors.", example: "We set up our camping tents under the pine trees by the river." },
    { word: "Canal", pronunciation: "/kəˈnæl/", meaning: "An artificial waterway constructed for boats or irrigation.", example: "Boats glided smoothly along the scenic water canal in Venice." },
    { word: "Candle", pronunciation: "/ˈkæn.dəl/", meaning: "A cylinder of wax with a central wick burned to give light.", example: "She blew out the birthday candles and made a secret wish." },
    { word: "Candy", pronunciation: "/ˈkæn.di/", meaning: "A sweet confection made primarily with sugar and flavorings.", example: "The candy shop displayed jars of colorful fruit lollipops." },
    { word: "Canoe", pronunciation: "/kəˈnuː/", meaning: "A narrow lightweight boat paddled with single-bladed oars.", example: "They paddled their red canoe quietly down the peaceful stream." },
    { word: "Cap", pronunciation: "/kæp/", meaning: "A close-fitting covering for the head, often with a visor.", example: "He wore a sports cap to shield his eyes from the bright sun." },
    { word: "Captain", pronunciation: "/ˈkæp.tɪn/", meaning: "The leader of a team or the person in command of a ship.", example: "The captain steered the ship safely through the stormy sea." },
    { word: "Carrot", pronunciation: "/ˈkær.ət/", meaning: "A tapering orange root vegetable that is sweet and crisp.", example: "Rabbits love to munch on crunchy, fresh orange carrots." },
    { word: "Castle", pronunciation: "/ˈkɑː.səl/", meaning: "A large medieval fortified building with towers and stone walls.", example: "The royal king and queen lived in a majestic stone castle." },
    { word: "Cave", pronunciation: "/keɪv/", meaning: "A natural underground hollow space or chamber in a hillside.", example: "Bats sleep upside down inside the dark, cool cave." },
    { word: "Ceiling", pronunciation: "/ˈsiː.lɪŋ/", meaning: "The upper interior surface of a room overhead.", example: "A beautiful crystal chandelier hung from the living room ceiling." },
    { word: "Cell", pronunciation: "/sel/", meaning: "The smallest structural and functional unit of an organism.", example: "Every living organism is composed of microscopic cells." },
    { word: "Center", pronunciation: "/ˈsen.tər/", meaning: "The middle point or part of something.", example: "Place the flower vase right in the center of the wooden table." },
    { word: "Century", pronunciation: "/ˈsen.tʃər.i/", meaning: "A period of one hundred consecutive years.", example: "The twentieth century brought great advances in technology." },
    { word: "Cereal", pronunciation: "/ˈsɪə.ri.əl/", meaning: "A breakfast food made from processed grains, eaten with milk.", example: "He poured fresh cold milk over a bowl of crunchy cereal." },
    { word: "Chain", pronunciation: "/tʃeɪn/", meaning: "A series of connected metal rings or links.", example: "He locked his bicycle to the pole using a sturdy steel chain." },
    { word: "Chalk", pronunciation: "/tʃɔːk/", meaning: "A soft white limestone used for writing on blackboards.", example: "The teacher wrote the new English words with white chalk." },
    { word: "Champion", pronunciation: "/ˈtʃæm.pi.ən/", meaning: "A person or team that has defeated all rivals in a contest.", example: "She trained every day and became the state tennis champion." },
    { word: "Chance", pronunciation: "/tʃɑːns/", meaning: "A possibility of something happening, or good fortune.", example: "This is your great chance to learn and show your skills." },
    { word: "Change", pronunciation: "/tʃeɪndʒ/", meaning: "To make or become different, or coins given back in payment.", example: "Leaves change color from bright green to golden in autumn." },
    { word: "Channel", pronunciation: "/ˈtʃæn.əl/", meaning: "A television station, or a length of water joining two seas.", example: "Switch the television channel to watch the nature documentary." },
    { word: "Chapter", pronunciation: "/ˈtʃæp.tər/", meaning: "A main division of a book, usually with a number or title.", example: "She read the final chapter to find out how the mystery ended." },
    { word: "Charcoal", pronunciation: "/ˈtʃɑː.kəʊl/", meaning: "A black carbon substance produced by heating wood without air.", example: "Dad lit the barbecue charcoal to grill fresh vegetables." },
    { word: "Charge", pronunciation: "/tʃɑːdʒ/", meaning: "To demand an amount as a price, or supply electric energy.", example: "Remember to charge your mobile phone battery overnight." },
    { word: "Charm", pronunciation: "/tʃɑːm/", meaning: "The power of delighting or attracting, or a lucky ornament.", example: "The small seaside village has an irresistible historic charm." },
    { word: "Chase", pronunciation: "/tʃeɪs/", meaning: "To run after someone or something in order to catch them.", example: "The dog loved to chase the yellow tennis ball across the lawn." },
    { word: "Chat", pronunciation: "/tʃæt/", meaning: "To talk in a friendly, informal, and relaxed manner.", example: "We sat on the porch to chat about our favorite movies." },
    { word: "Cheap", pronunciation: "/tʃiːp/", meaning: "Low in price; costing little money or effort.", example: "Fresh apples are very cheap and healthy at the local market." },
    { word: "Check", pronunciation: "/tʃek/", meaning: "To examine something to ensure accuracy, safety, or quality.", example: "Always check your written homework before handing it in." },
    { word: "Cheek", pronunciation: "/tʃiːk/", meaning: "Either side of the face below the eye and above the jaw.", example: "Her cheeks turned rosy pink from the cold winter wind." },
    { word: "Cheer", pronunciation: "/tʃɪər/", meaning: "To shout praise, encouragement, or joy for someone.", example: "The excited fans began to cheer as the team scored a goal." },
    { word: "Cheese", pronunciation: "/tʃiːz/", meaning: "A food made from the pressed curds of milk.", example: "He melted a slice of yellow cheddar cheese on his sandwich." },
    { word: "Chef", pronunciation: "/ʃef/", meaning: "A professional cook, especially the head cook in a restaurant.", example: "The master chef prepared a delicious pasta dish with herbs." },
    { word: "Cherry", pronunciation: "/ˈtʃer.i/", meaning: "A small, round, soft stone fruit that is typically bright red.", example: "She topped the ice cream sundae with a sweet red cherry." },
    { word: "Chest", pronunciation: "/tʃest/", meaning: "The front surface of a human body, or a large strong storage box.", example: "The pirate chest was filled with shiny gold coins and jewels." },
    { word: "Chick", pronunciation: "/tʃɪk/", meaning: "A very young bird, especially a newly hatched chicken.", example: "The fluffy yellow chick followed its mother hen around the yard." },
    { word: "Chicken", pronunciation: "/ˈtʃɪk.ɪn/", meaning: "A domestic fowl kept for its eggs or meat.", example: "The farmer fed grain to the chickens every morning at sunrise." },
    { word: "Chief", pronunciation: "/tʃiːf/", meaning: "A leader, head person, or the most important element.", example: "The fire chief guided the rescue team with calm authority." },
    { word: "Chimney", pronunciation: "/ˈtʃɪm.ni/", meaning: "A vertical pipe that carries smoke up and out through the roof.", example: "Grey smoke curled gently into the sky from the stone chimney." },
    { word: "Chin", pronunciation: "/tʃɪn/", meaning: "The protruding part of the face below the lower lip.", example: "He rested his chin thoughtfully on his hand while reading." },
    { word: "Chip", pronunciation: "/tʃɪp/", meaning: "A small thin piece cut or broken off something, or a potato snack.", example: "She enjoyed a crunchy potato chip with her lunchtime sandwich." },
    { word: "Chocolate", pronunciation: "/ˈtʃɒk.lət/", meaning: "A food preparation made from roasted and ground cacao seeds.", example: "Warm hot chocolate with marshmallows is perfect on a cold day." },
    { word: "Choice", pronunciation: "/tʃɔɪs/", meaning: "An act of selecting between two or more possibilities.", example: "Eating fresh fruit is a healthy choice for an afternoon snack." },
    { word: "Choose", pronunciation: "/tʃuːz/", meaning: "To pick out or select from a number of alternatives.", example: "You can choose your favorite color for the school notebook." },
    { word: "Chore", pronunciation: "/tʃɔːr/", meaning: "A routine task, especially a household duty like cleaning.", example: "His daily chore was washing the dinner dishes after eating." },
    { word: "Chorus", pronunciation: "/ˈkɔː.rəs/", meaning: "A large organized group of singers, or repeated song part.", example: "The school chorus sang beautiful songs at the winter concert." },
    { word: "Church", pronunciation: "/tʃɜːtʃ/", meaning: "A building used for public Christian worship services.", example: "The bells of the historic village church rang on Sunday morning." },
    { word: "Circle", pronunciation: "/ˈsɜː.kəl/", meaning: "A round plane figure whose boundary consists of points equidistant from center.", example: "Children held hands and stood in a wide circle on the grass." },
    { word: "Circus", pronunciation: "/ˈsɜː.kəs/", meaning: "A traveling show of acrobats, clowns, and trained performers.", example: "The acrobats performed daring flips high up in the circus tent." },
    { word: "Citizen", pronunciation: "/ˈsɪt.ɪ.zən/", meaning: "A legally recognized subject or national of a state or country.", example: "Every responsible citizen participates in community improvement." },
    { word: "Clap", pronunciation: "/klæp/", meaning: "To strike the palms of the hands together repeatedly to applaud.", example: "Please clap your hands along with the rhythm of the music." },
    { word: "Class", pronunciation: "/klɑːs/", meaning: "A group of students learning together in a school room.", example: "Our English class read an inspiring story about friendship." },
    { word: "Claw", pronunciation: "/klɔː/", meaning: "A curved, pointed horny nail on each digit of an animal's foot.", example: "The eagle gripped the tree branch firmly with its sharp claws." },
    { word: "Clay", pronunciation: "/kleɪ/", meaning: "A stiff, sticky fine-grained earth used in making pottery and bricks.", example: "The artist molded soft red clay into a beautiful flower vase." },
    { word: "Clean", pronunciation: "/kliːn/", meaning: "Free from dirt, marks, or stains; unsoiled and neat.", example: "Keep your study desk clean and organized for easy learning." },
    { word: "Clear", pronunciation: "/klɪər/", meaning: "Easy to perceive, understand, or see through; transparent.", example: "The water in the mountain stream was crystal clear and cold." },
    { word: "Clerk", pronunciation: "/klɑːk/", meaning: "A person employed in an office or shop to keep records.", example: "The friendly store clerk handed the customer their receipt." },
    { word: "Clever", pronunciation: "/ˈklev.ər/", meaning: "Quick to understand, learn, and devise good ideas.", example: "The clever girl solved the difficult crossword puzzle quickly." },
    { word: "Cliff", pronunciation: "/klɪf/", meaning: "A steep, high rock face, especially at the edge of the sea.", example: "Seagulls built their nests high on the windy ocean cliff." },
    { word: "Climate", pronunciation: "/ˈklaɪ.mət/", meaning: "The weather conditions prevailing in an area over a long period.", example: "The tropical island enjoys a warm and sunny climate all year." },
    { word: "Climb", pronunciation: "/klaɪm/", meaning: "To go up or ascend using the hands and feet.", example: "The brave hikers prepared to climb the steep mountain trail." },
    { word: "Clinic", pronunciation: "/ˈklɪn.ɪk/", meaning: "An establishment where medical treatment or advice is given.", example: "She visited the dental clinic for her regular tooth checkup." },
    { word: "Clip", pronunciation: "/klɪp/", meaning: "A flexible device holding objects together, or to trim.", example: "He attached the papers together with a shiny silver paper clip." },
    { word: "Cloak", pronunciation: "/kləʊk/", meaning: "A sleeveless outdoor overgarment that hangs loosely from shoulders.", example: "The wizard wore a long purple cloak adorned with golden stars." },
    { word: "Close", pronunciation: "/kləʊz/", meaning: "To move something so that an opening is covered; shut.", example: "Please close the front door gently so the cat stays inside." },
    { word: "Cloth", pronunciation: "/klɒθ/", meaning: "Woven or felted fabric made of cotton, wool, or other fibers.", example: "Wipe the wooden table clean with a soft damp cloth." },
    { word: "Clothes", pronunciation: "/kləʊðz/", meaning: "Items worn to cover the human body.", example: "Hang your clean clothes neatly in the bedroom wardrobe." },
    { word: "Clover", pronunciation: "/ˈkləʊ.vər/", meaning: "A small herb with leaves divided into three or four leaflets.", example: "She searched through the grass hoping to find a four-leaf clover." },
    { word: "Clown", pronunciation: "/klaʊn/", meaning: "A comic entertainer wearing colorful clothes and funny makeup.", example: "The cheerful circus clown made everyone laugh with his tricks." },
    { word: "Club", pronunciation: "/klʌb/", meaning: "An association of people dedicated to a shared interest or activity.", example: "She joined the after-school science club to build miniature rockets." },
    { word: "Clue", pronunciation: "/kluː/", meaning: "A piece of evidence that leads to solving a mystery or problem.", example: "The detective found a helpful clue left behind in the room." },
    { word: "Coach", pronunciation: "/kəʊtʃ/", meaning: "A person who trains and instructs an athlete or team.", example: "The soccer coach encouraged the team to play with teamwork." },
    { word: "Coal", pronunciation: "/kəʊl/", meaning: "A combustible black rock used as a fuel source.", example: "Miners extracted coal from deep underground to power furnaces." },
    { word: "Coast", pronunciation: "/kəʊst/", meaning: "The part of the land adjoining or near the ocean or sea.", example: "We drove along the scenic Pacific coast and saw dolphins." },
    { word: "Coin", pronunciation: "/kɔɪn/", meaning: "A flat, round piece of metal issued by a government as money.", example: "He dropped a silver coin into the piggy bank to save it." },
    { word: "Cold", pronunciation: "/kəʊld/", meaning: "Of or at a low temperature, especially when compared with human body.", example: "Drink a glass of cold water after running on a hot afternoon." },
    { word: "Collar", pronunciation: "/ˈkɒl.ər/", meaning: "A band worn around the neck of a garment or an animal.", example: "The golden retriever wore a bright red collar with a name tag." },
    { word: "Collect", pronunciation: "/kəˈlekt/", meaning: "To bring or gather together things from different places.", example: "The children love to collect colorful seashells on the shore." },
    { word: "College", pronunciation: "/ˈkɒl.ɪdʒ/", meaning: "An educational institution for higher learning after secondary school.", example: "She plans to study medicine at college next autumn." },
    { word: "Color", pronunciation: "/ˈkʌl.ər/", meaning: "The visual quality of things produced by the reflection of light.", example: "Her favorite color is the deep blue of the midnight sky." },
    { word: "Comb", pronunciation: "/kəʊm/", meaning: "A toothed strip of plastic, metal, or wood used for untangling hair.", example: "He used a black comb to smooth down his hair before school." },
    { word: "Come", pronunciation: "/kʌm/", meaning: "To move toward or arrive at a specified place.", example: "Please come inside out of the rain and warm yourself by the fire." },
    { word: "Comfort", pronunciation: "/ˈkʌm.fət/", meaning: "A state of physical ease and freedom from pain or anxiety.", example: "The soft plush armchair offered great comfort after a long walk." },
    { word: "Common", pronunciation: "/ˈkɒm.ən/", meaning: "Occurring, found, or done often; shared by everyone.", example: "Sparrows and pigeons are common birds in big city parks." },
    { word: "Compass", pronunciation: "/ˈkʌm.pəs/", meaning: "An instrument containing a magnetized pointer that shows magnetic north.", example: "The hiker checked his magnetic compass to navigate through the forest." },
    { word: "Complete", pronunciation: "/kəmˈpliːt/", meaning: "Having all the necessary or appropriate parts; finished.", example: "She was proud to complete the 500-piece jigsaw puzzle." },
    { word: "Cook", pronunciation: "/kʊk/", meaning: "To prepare food, dishes, or meals by applying heat.", example: "Grandmother will cook a delicious vegetable stew for dinner tonight." }
  ],

  D: [
    { word: "Dog", pronunciation: "/dɒɡ/", meaning: "A domesticated carnivorous mammal that typically has a long snout and barking voice.", example: "The loyal dog wagged its tail when its owner arrived home." },
    { word: "Door", pronunciation: "/dɔːr/", meaning: "A hinged, sliding, or revolving barrier at the entrance to a room.", example: "Please knock gently on the wooden door before entering." },
    { word: "Day", pronunciation: "/deɪ/", meaning: "A period of twenty-four hours, or the time between sunrise and sunset.", example: "Today is a sunny and pleasant day for a walk in the woods." },
    { word: "Duck", pronunciation: "/dʌk/", meaning: "A waterbird with a broad blunt bill, short legs, and webbed feet.", example: "A yellow duck swam happily across the calm pond water." },
    { word: "Dress", pronunciation: "/dres/", meaning: "A one-piece garment for women or girls, covering body and legs.", example: "She wore an elegant blue dress to the family wedding." },
    { word: "Desk", pronunciation: "/desk/", meaning: "A piece of furniture with a flat surface for reading or writing.", example: "He kept his school books and pencils tidy on his study desk." },
    { word: "Drum", pronunciation: "/drʌm/", meaning: "A percussion musical instrument sounded by being struck with sticks.", example: "The musician tapped an energetic rhythm on the snare drum." },
    { word: "Doll", pronunciation: "/dɒl/", meaning: "A model of a human being, often used as a toy for children.", example: "The little girl dressed her favorite porcelain doll in a pink bonnet." },
    { word: "Deer", pronunciation: "/dɪər/", meaning: "A graceful hoofed grazing animal with antlers in the male.", example: "A gentle deer leaped gracefully over the fallen forest log." },
    { word: "Dance", pronunciation: "/dɑːns/", meaning: "To move rhythmically to music, typically following a sequence of steps.", example: "The children began to dance cheerfully to the lively song." },
    { word: "Dairy", pronunciation: "/ˈdeə.ri/", meaning: "A place where milk is kept and butter and cheese are made.", example: "Fresh milk, cheese, and yogurt are healthy dairy products." },
    { word: "Daisy", pronunciation: "/ˈdeɪ.zi/", meaning: "A small grassland plant with yellow disc flowers and white rays.", example: "She picked a wild daisy flower and tucked it behind her ear." },
    { word: "Dam", pronunciation: "/dæm/", meaning: "A barrier constructed to hold back water and raise its level.", example: "The concrete dam controls river flooding and generates electricity." },
    { word: "Damage", pronunciation: "/ˈdæm.ɪdʒ/", meaning: "Physical harm caused to something in such a way as to impair its value.", example: "The strong wind caused minor damage to the garden shed roof." },
    { word: "Danger", pronunciation: "/ˈdeɪn.dʒər/", meaning: "The possibility of suffering harm, injury, or loss.", example: "A bright yellow sign warned hikers of the danger of slippery rocks." },
    { word: "Dark", pronunciation: "/dɑːk/", meaning: "With little or no light; of a deep shade or color.", example: "The night sky was dark and filled with sparkling silver stars." },
    { word: "Date", pronunciation: "/deɪt/", meaning: "The day of the month or year as specified by a number, or sweet fruit.", example: "What is the date today? It is the first of September." },
    { word: "Daughter", pronunciation: "/ˈdɔː.tər/", meaning: "A female child or person in relation to her parents.", example: "The proud parents celebrated their daughter's graduation from school." },
    { word: "Dawn", pronunciation: "/dɔːn/", meaning: "The first appearance of light in the sky before sunrise.", example: "Roosters began to crow as dawn painted the morning sky pink." },
    { word: "Deal", pronunciation: "/diːl/", meaning: "An agreement or transaction entered into by two or more parties.", example: "They shook hands to seal a fair business deal for both sides." },
    { word: "Dear", pronunciation: "/dɪər/", meaning: "Regarded with deep affection; cherished by someone.", example: "She wrote a heartfelt letter to her dear childhood friend." },
    { word: "Decide", pronunciation: "/dɪˈsaɪd/", meaning: "To come to a resolution or make a firm choice after consideration.", example: "He took time to decide which book to borrow from the library." },
    { word: "Deck", pronunciation: "/dek/", meaning: "A flat floor on a ship, or an outdoor wooden platform on a house.", example: "We sat on the wooden deck enjoying the warm afternoon sunshine." },
    { word: "Deep", pronunciation: "/diːp/", meaning: "Extending far down from the top or surface; profound.", example: "The scuba diver explored the deep blue water of the coral reef." },
    { word: "Defend", pronunciation: "/dɪˈfend/", meaning: "To protect from harm or danger; resist an attack.", example: "The goalie jumped high to defend the soccer net from the ball." },
    { word: "Degree", pronunciation: "/dɪˈɡriː/", meaning: "A unit of measurement of temperature, angle, or academic rank.", example: "The thermometer showed twenty-five degrees Celsius outdoors." },
    { word: "Delay", pronunciation: "/dɪˈleɪ/", meaning: "To make someone or something late, or postpone an event.", example: "Heavy rain caused a short delay in the championship baseball game." },
    { word: "Delight", pronunciation: "/dɪˈlaɪt/", meaning: "Great pleasure, happiness, and satisfaction.", example: "The children smiled in pure delight when they saw the puppies." },
    { word: "Deliver", pronunciation: "/dɪˈlɪv.ər/", meaning: "To bring and hand over a letter, parcel, or goods to a recipient.", example: "The mail carrier will deliver the package to your front porch." },
    { word: "Dentist", pronunciation: "/ˈden.tɪst/", meaning: "A person qualified to treat the diseases and conditions of teeth.", example: "The friendly dentist checked her teeth and praised her brushing." },
    { word: "Depart", pronunciation: "/dɪˈpɑːt/", meaning: "To leave, especially on starting a journey.", example: "The express train will depart from platform four in five minutes." },
    { word: "Deposit", pronunciation: "/dɪˈpɒz.ɪt/", meaning: "To put or keep something in a safe place, or pay money into a bank.", example: "He went to the bank to deposit his birthday money into savings." },
    { word: "Desert", pronunciation: "/ˈdez.ət/", meaning: "A dry, barren area of land with little water and sparse vegetation.", example: "Cactus plants thrive in the hot, sandy desert landscape." },
    { word: "Design", pronunciation: "/dɪˈzaɪn/", meaning: "A plan or drawing produced to show the look and function of an object.", example: "The architect created an innovative design for the new library." },
    { word: "Desire", pronunciation: "/dɪˈzaɪər/", meaning: "A strong feeling of wanting to have something or wishing for something.", example: "She had a strong desire to learn how to play the piano." },
    { word: "Dessert", pronunciation: "/dɪˈzɜːt/", meaning: "The sweet course eaten at the end of a meal.", example: "For dessert, we enjoyed vanilla ice cream with warm apple pie." },
    { word: "Destroy", pronunciation: "/dɪˈstrɔɪ/", meaning: "To put an end to the existence of something by damaging it.", example: "Termites can slowly destroy wooden beams in old houses." },
    { word: "Detail", pronunciation: "/ˈdiː.teɪl/", meaning: "An individual feature, fact, or item of something.", example: "The painting was exquisite, showing every tiny detail of the flower." },
    { word: "Develop", pronunciation: "/dɪˈvel.əp/", meaning: "To grow or cause to grow and become more mature or advanced.", example: "Reading books every day helps develop a richer vocabulary." },
    { word: "Device", pronunciation: "/dɪˈvaɪs/", meaning: "A thing made or adapted for a particular purpose, especially mechanical.", example: "A smartphone is a handy electronic device for communication." },
    { word: "Dew", pronunciation: "/djuː/", meaning: "Tiny drops of water that form on cool surfaces at night.", example: "Sparkling morning dew covered the green grass in the garden." },
    { word: "Dial", pronunciation: "/ˈdaɪ.əl/", meaning: "A face of a clock, or a round control knob on a machine.", example: "Turn the radio dial clockwise to increase the volume." },
    { word: "Diamond", pronunciation: "/ˈdaɪə.mənd/", meaning: "A precious stone consisting of clear, hard crystallized carbon.", example: "The ring sparkled with a brilliant clear diamond in the light." },
    { word: "Diary", pronunciation: "/ˈdaɪə.ri/", meaning: "A personal book in which one keeps a daily record of events.", example: "She wrote her thoughts and daily adventures in her secret diary." },
    { word: "Dictionary", pronunciation: "/ˈdɪk.ʃən.ər.i/", meaning: "A book that lists words in alphabetical order and gives their meanings.", example: "Look up unfamiliar words in the English dictionary to learn them." },
    { word: "Die", pronunciation: "/daɪ/", meaning: "To stop living; cease to exist as an organism.", example: "Plants will die if they do not receive water and sunlight." },
    { word: "Diet", pronunciation: "/ˈdaɪ.ət/", meaning: "The kinds of food that a person, animal, or community habitually eats.", example: "A balanced diet with fresh fruits and vegetables maintains energy." },
    { word: "Differ", pronunciation: "/ˈdɪf.ər/", meaning: "To be unlike or dissimilar in nature or opinion.", example: "The two brothers differ greatly in their musical tastes." },
    { word: "Dig", pronunciation: "/dɪɡ/", meaning: "To break up and move earth with a tool or hands.", example: "The puppy loved to dig small holes in the backyard dirt." },
    { word: "Dinner", pronunciation: "/ˈdɪn.ər/", meaning: "The main meal of the day, taken either around midday or in the evening.", example: "The family gathered around the wooden table for a delicious dinner." },
    { word: "Dinosaur", pronunciation: "/ˈdaɪ.nə.sɔːr/", meaning: "A fossil reptile of the Mesozoic era, often of enormous size.", example: "Children gazed in awe at the huge dinosaur skeleton in the museum." },
    { word: "Direct", pronunciation: "/daɪˈrekt/", meaning: "Extending or moving from one place to another by the shortest path.", example: "There is a direct flight from New York straight to London." },
    { word: "Dirt", pronunciation: "/dɜːt/", meaning: "A substance such as mud or dust that soils someone or something.", example: "Wash the garden dirt off your hands before sitting down to eat." },
    { word: "Discover", pronunciation: "/dɪˈskʌv.ər/", meaning: "To find unexpectedly or in the course of a search.", example: "Scientists worked hard to discover new cures for illnesses." },
    { word: "Discuss", pronunciation: "/dɪˈskʌs/", meaning: "To talk about something with another person or in a group.", example: "Let us sit down and discuss the best plan for the school fair." },
    { word: "Disease", pronunciation: "/dɪˈziːz/", meaning: "A disorder of structure or function in a human, animal, or plant.", example: "Vaccines help protect the human body against infectious disease." },
    { word: "Dish", pronunciation: "/dɪʃ/", meaning: "A shallow flat-bottomed container for cooking or serving food.", example: "She washed the porcelain dish carefully and dried it with a towel." },
    { word: "Distance", pronunciation: "/ˈdɪs.təns/", meaning: "An amount of space between two things, people, or places.", example: "We could see the lighthouse shining brightly in the distance." },
    { word: "Dive", pronunciation: "/daɪv/", meaning: "To plunge headfirst into water with arms extended.", example: "He took a deep breath and prepared to dive into the swimming pool." },
    { word: "Divide", pronunciation: "/dɪˈvaɪd/", meaning: "To separate or be separated into parts or fractions.", example: "Divide the fresh apple pie equally into six generous slices." },
    { word: "Doctor", pronunciation: "/ˈdɒk.tər/", meaning: "A qualified practitioner of medicine who treats sick people.", example: "The caring doctor listened to the patient's heartbeat with a stethoscope." },
    { word: "Dolphin", pronunciation: "/ˈdɒl.fɪn/", meaning: "A highly intelligent marine mammal with a beaklike snout.", example: "A friendly dolphin leaped joyfully out of the ocean waves." },
    { word: "Donkey", pronunciation: "/ˈdɒŋ.ki/", meaning: "A domesticated mammal of the horse family with long ears.", example: "The gentle donkey carried baskets of fresh vegetables up the hill." },
    { word: "Doubt", pronunciation: "/daʊt/", meaning: "A feeling of uncertainty or lack of conviction about something.", example: "There is no doubt that daily practice improves your English speaking." },
    { word: "Dough", pronunciation: "/dəʊ/", meaning: "A thick, malleable mixture of flour and liquid, used for baking.", example: "The baker kneaded the warm bread dough on the floured wooden table." },
    { word: "Down", pronunciation: "/daʊn/", meaning: "Toward or in a lower place or position.", example: "The golden sun sank down beneath the western horizon." },
    { word: "Dozen", pronunciation: "/ˈdʌz.ən/", meaning: "A group or set of twelve items.", example: "She bought a dozen fresh organic eggs from the local farm." },
    { word: "Dragon", pronunciation: "/ˈdræɡ.ən/", meaning: "A mythical monster like a giant winged reptile that breathes fire.", example: "The fairy tale told of a friendly dragon who protected the kingdom." },
    { word: "Draw", pronunciation: "/drɔː/", meaning: "To produce a picture or diagram by making lines and marks on paper.", example: "The artist used colored pencils to draw a beautiful landscape." },
    { word: "Drawer", pronunciation: "/drɔːr/", meaning: "A box-like storage compartment without a lid that slides horizontally.", example: "He pulled open the top desk drawer to look for a blue ink pen." },
    { word: "Dream", pronunciation: "/driːm/", meaning: "A series of thoughts, images, and sensations occurring in sleep.", example: "She had a wonderful dream about flying through fluffy white clouds." },
    { word: "Drink", pronunciation: "/drɪŋk/", meaning: "To take liquid into the mouth and swallow it.", example: "Remember to drink plenty of fresh water on warm summer days." },
    { word: "Drive", pronunciation: "/draɪv/", meaning: "To operate and control the direction and speed of a motor vehicle.", example: "Dad will drive the family car to the seaside on Saturday." },
    { word: "Driver", pronunciation: "/ˈdraɪ.vər/", meaning: "A person who drives a vehicle such as a car, bus, or train.", example: "The bus driver greeted every student with a friendly smile." },
    { word: "Drop", pronunciation: "/drɒp/", meaning: "A small quantity of liquid that falls or is produced in a sphere.", example: "A single cool raindrop fell gently onto her outstretched hand." },
    { word: "Dry", pronunciation: "/draɪ/", meaning: "Free from moisture or liquid; not wet or damp.", example: "Hang the damp towels on the clothesline so they become completely dry." },
    { word: "Duckling", pronunciation: "/ˈdʌk.lɪŋ/", meaning: "A young duck that has recently hatched.", example: "Six fluffy yellow ducklings followed their mother across the lawn." },
    { word: "Due", pronunciation: "/djuː/", meaning: "Expected or scheduled at a certain time; owed as a debt.", example: "The library book is due back on Friday afternoon." },
    { word: "Dull", pronunciation: "/dʌl/", meaning: "Lacking interest, excitement, brightness, or sharpness.", example: "The old pencil was dull, so he sharpened it to a fine point." },
    { word: "Dump", pronunciation: "/dʌmp/", meaning: "A site for depositing rubbish, or to unload something heavily.", example: "We took old broken cardboard boxes to the recycling dump." },
    { word: "Dusk", pronunciation: "/dʌsk/", meaning: "The darker stage of twilight just before nightfall.", example: "Streetlights turned on automatically as dusk settled over the city." },
    { word: "Dust", pronunciation: "/dʌst/", meaning: "Fine, dry powder consisting of tiny particles of earth or waste.", example: "She wiped the fine grey dust off the wooden bookshelf." },
    { word: "Duty", pronunciation: "/ˈdjuː.ti/", meaning: "A moral or legal obligation; a task required by one's position.", example: "It is the guard's duty to ensure the building remains safe." },
    { word: "Dwarf", pronunciation: "/dwɔːf/", meaning: "A mythical being like a small, strong man, or a small tree.", example: "The story featured seven friendly dwarfs living in the forest cottage." },
    { word: "Dwell", pronunciation: "/dwel/", meaning: "To live in or at a specified place as a permanent home.", example: "Many rare bird species dwell inside this protected rainforest." },
    { word: "Dynamite", pronunciation: "/ˈdaɪ.nə.maɪt/", meaning: "A high explosive made of nitroglycerin absorbed in a porous material.", example: "Engineers used controlled dynamite to create a tunnel through rock." },
    { word: "Daily", pronunciation: "/ˈdeɪ.li/", meaning: "Done, produced, or occurring every single day.", example: "Brushing your teeth is an important daily hygiene habit." },
    { word: "Dainty", pronunciation: "/ˈdeɪn.ti/", meaning: "Delicately small, pretty, and graceful.", example: "She wore a dainty silver necklace with a tiny star pendant." },
    { word: "Damp", pronunciation: "/dæmp/", meaning: "Slightly wet or moist in an uncomfortable way.", example: "The morning grass was cool and damp with overnight dew." },
    { word: "Dangle", pronunciation: "/ˈdæŋ.ɡəl/", meaning: "To hang or swing loosely without fixed support.", example: "The playful kitten watched the shiny string dangle from the table." },
    { word: "Daring", pronunciation: "/ˈdeə.rɪŋ/", meaning: "Adventurous or audaciously bold; willing to take risks.", example: "The acrobat performed a daring leap high above the circus ring." },
    { word: "Darkness", pronunciation: "/ˈdɑːk.nəs/", meaning: "The partial or total absence of light in an environment.", example: "A small candle flame illuminated the quiet darkness of the room." },
    { word: "Dart", pronunciation: "/dɑːt/", meaning: "A small pointed missile, or a rapid sudden movement.", example: "The hummingbird made a swift dart toward the sweet red flower." },
    { word: "Dash", pronunciation: "/dæʃ/", meaning: "To run or travel somewhere in a great hurry; a short sprint.", example: "He made a quick dash to the bus stop before it pulled away." },
    { word: "Dazzle", pronunciation: "/ˈdæz.əl/", meaning: "To blind someone temporarily with excessive brightness.", example: "The brilliant diamonds seemed to dazzle under the jewelry lights." },
    { word: "Decent", pronunciation: "/ˈdiː.sənt/", meaning: "Conforming with generally accepted standards of respectable behavior.", example: "He earned a decent living through honest, hard daily work." },
    { word: "Declare", pronunciation: "/dɪˈkleər/", meaning: "To say something in a solemn, official, and emphatic manner.", example: "The referee will declare the official winner of the match." },
    { word: "Decorate", pronunciation: "/ˈdek.ə.reɪt/", meaning: "To make something look more attractive by adding ornament.", example: "The children helped decorate the living room with colorful paper streamers." },
    { word: "Defeat", pronunciation: "/dɪˈfiːt/", meaning: "To win a victory over someone in a battle, game, or contest.", example: "Our team worked hard together to defeat the opposing champions." },
    { word: "Definite", pronunciation: "/ˈdef.ɪ.nət/", meaning: "Clearly stated, decided, or unambiguous; certain.", example: "We have a definite appointment with the science teacher at two o'clock." }
  ]
};

/* ==========================================================================
   2. APPLICATION STATE & LOCALSTORAGE MANAGER
   ========================================================================== */
const STORAGE_KEYS = {
  ONBOARDING: 'wordly_onboarding_completed',
  LEARNED_WORDS: 'wordly_learned_words',
  CURRENT_LETTER: 'wordly_current_letter',
  CURRENT_INDEX: 'wordly_current_index',
  BOOKMARKS: 'wordly_bookmarks',
  LAST_SCREEN: 'wordly_last_screen'
};

const state = {
  onboardingCompleted: false,
  learnedWords: new Set(), // Keys formatted as `${letter}_${index}` e.g. "A_0"
  bookmarks: new Set(),
  currentLetter: 'A',
  currentIndex: 0,
  currentScreen: 'home',
  activeTab: 'home',
  wordListFilter: 'all',
  searchQuery: '',
  searchLetterFilter: 'ALL',
  isSpeaking: false
};

/**
 * Initialize state from browser LocalStorage
 */
function initStorage() {
  try {
    state.onboardingCompleted = localStorage.getItem(STORAGE_KEYS.ONBOARDING) === 'true';

    const savedLearned = localStorage.getItem(STORAGE_KEYS.LEARNED_WORDS);
    if (savedLearned) {
      const parsed = JSON.parse(savedLearned);
      state.learnedWords = new Set(parsed);
    }

    const savedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (savedBookmarks) {
      const parsed = JSON.parse(savedBookmarks);
      state.bookmarks = new Set(parsed);
    }

    const savedLetter = localStorage.getItem(STORAGE_KEYS.CURRENT_LETTER);
    if (savedLetter && VOCABULARY[savedLetter]) {
      state.currentLetter = savedLetter;
    }

    const savedIndex = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
    if (savedIndex !== null) {
      const idx = parseInt(savedIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < 100) {
        state.currentIndex = idx;
      }
    }
  } catch (err) {
    console.warn('LocalStorage access issue:', err);
  }
}

/**
 * Save current state slices to LocalStorage
 */
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEYS.ONBOARDING, state.onboardingCompleted ? 'true' : 'false');
    localStorage.setItem(STORAGE_KEYS.LEARNED_WORDS, JSON.stringify(Array.from(state.learnedWords)));
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(Array.from(state.bookmarks)));
    localStorage.setItem(STORAGE_KEYS.CURRENT_LETTER, state.currentLetter);
    localStorage.setItem(STORAGE_KEYS.CURRENT_INDEX, state.currentIndex.toString());
  } catch (err) {
    console.warn('LocalStorage save issue:', err);
  }
}

/* ==========================================================================
   3. WEB SPEECH API — NATURAL ENGLISH PRONUNCIATION
   ========================================================================== */
class AudioPronunciationEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.selectedVoice = null;
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      const voices = this.synth.getVoices();
      if (!voices || voices.length === 0) return;

      // Prefer natural English voices
      this.selectedVoice =
        voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))) ||
        voices.find(v => v.lang === 'en-US') ||
        voices.find(v => v.lang === 'en-GB') ||
        voices.find(v => v.lang.startsWith('en')) ||
        voices[0];
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  /**
   * Speak an English word with visual and accessibility feedback
   */
  speak(text, onStart, onEnd) {
    if (!this.synth) {
      showToast('Speech audio is not supported in this browser.');
      return;
    }

    try {
      this.synth.cancel(); // Stop any pending utterance

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88; // Natural, clear educational tempo
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }

      utterance.onstart = () => {
        state.isSpeaking = true;
        if (typeof onStart === 'function') onStart();
      };

      utterance.onend = () => {
        state.isSpeaking = false;
        if (typeof onEnd === 'function') onEnd();
      };

      utterance.onerror = () => {
        state.isSpeaking = false;
        if (typeof onEnd === 'function') onEnd();
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech error:', err);
      state.isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    }
  }

  /**
   * Speak a single letter for spelling interactivity
   */
  speakLetter(letter) {
    if (!this.synth) return;
    try {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(letter);
      utterance.rate = 0.95;
      utterance.pitch = 1.1;
      utterance.lang = 'en-US';
      if (this.selectedVoice) utterance.voice = this.selectedVoice;
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Letter speech error:', err);
    }
  }
}

const audioEngine = new AudioPronunciationEngine();

/* ==========================================================================
   4. UI ROUTER & VIEW CONTROLLER
   ========================================================================== */
const DOM = {
  // Screens
  onboarding: document.getElementById('screen-onboarding'),
  appShell: document.getElementById('app-shell'),
  viewHome: document.getElementById('view-home'),
  viewLearn: document.getElementById('view-learn'),
  viewWordList: document.getElementById('view-word-list'),
  viewWordLearn: document.getElementById('view-word-learn'),
  viewSearch: document.getElementById('view-search'),
  viewProgress: document.getElementById('view-progress'),

  // Bottom Nav
  bottomNav: document.getElementById('bottom-nav-bar'),
  navTabs: document.querySelectorAll('.nav-tab-item'),

  // Header
  headerBranding: document.getElementById('header-branding-btn'),
  btnHeaderSearch: document.getElementById('btn-header-search'),

  // Onboarding Buttons
  btnOnboardingStart: document.getElementById('btn-onboarding-start'),
  btnOnboardingContinue: document.getElementById('btn-onboarding-continue'),
  btnOnboardingSkip: document.getElementById('btn-onboarding-skip'),

  // Home Screen Elements
  homeGreetingTime: document.getElementById('home-greeting-time'),
  homeContinueCard: document.getElementById('home-continue-card'),
  homeContinueLetterBadge: document.getElementById('home-continue-letter-badge'),
  homeContinueWordPreview: document.getElementById('home-continue-word-preview'),
  homeContinueCounter: document.getElementById('home-continue-counter'),
  btnHomeContinueAction: document.getElementById('btn-home-continue-action'),
  homeContinueProgressBar: document.getElementById('home-continue-progress-bar'),
  homeStatLearned: document.getElementById('home-stat-learned'),
  homeStatRemaining: document.getElementById('home-stat-remaining'),
  homeStatPercent: document.getElementById('home-stat-percent'),
  btnHomeSeeAllLearn: document.getElementById('btn-home-see-all-learn'),
  homeAlphabetQuickGrid: document.getElementById('home-alphabet-quick-grid'),

  // Learn Screen Elements
  learnAlphabetCardsList: document.getElementById('learn-alphabet-cards-list'),

  // Word List Screen Elements
  btnWordlistBack: document.getElementById('btn-wordlist-back'),
  wordlistTitle: document.getElementById('wordlist-title'),
  wordlistProgressBadge: document.getElementById('wordlist-progress-badge'),
  btnWordlistStartLearning: document.getElementById('btn-wordlist-start-learning'),
  filterChips: document.querySelectorAll('.wordlist-filter-bar .filter-chip'),
  wordItemsContainer: document.getElementById('word-items-container'),

  // Word Learn Screen Elements
  btnLearnScreenBack: document.getElementById('btn-learn-screen-back'),
  learnCounterText: document.getElementById('learn-counter-text'),
  learnProgressFill: document.getElementById('learn-progress-fill'),
  btnLearnBookmark: document.getElementById('btn-learn-bookmark'),
  learnLetterPill: document.getElementById('learn-letter-pill'),
  learnStatusPill: document.getElementById('learn-status-pill'),
  learnWordHeading: document.getElementById('learn-word-heading'),
  learnPhonetic: document.getElementById('learn-phonetic'),
  btnLearnPronounce: document.getElementById('btn-learn-pronounce'),
  learnPronounceLabel: document.getElementById('learn-pronounce-label'),
  btnLearnListenAgain: document.getElementById('btn-learn-listen-again'),
  learnMeaningText: document.getElementById('learn-meaning-text'),
  learnExampleText: document.getElementById('learn-example-text'),
  learnSpellingTiles: document.getElementById('learn-spelling-tiles'),
  btnMarkLearned: document.getElementById('btn-mark-learned'),
  btnMarkLearnedText: document.getElementById('btn-mark-learned-text'),
  btnLearnPrev: document.getElementById('btn-learn-prev'),
  btnLearnNext: document.getElementById('btn-learn-next'),

  // Search Screen Elements
  searchInputField: document.getElementById('search-input-field'),
  btnSearchClear: document.getElementById('btn-search-clear'),
  searchLetterFilters: document.getElementById('search-letter-filters'),
  searchResultsCount: document.getElementById('search-results-count'),
  searchResultsList: document.getElementById('search-results-list'),

  // Progress Screen Elements
  progressCircleFill: document.getElementById('progress-circle-fill'),
  progressTotalPercent: document.getElementById('progress-total-percent'),
  progStatTotal: document.getElementById('prog-stat-total'),
  progStatLearned: document.getElementById('prog-stat-learned'),
  progStatRemaining: document.getElementById('prog-stat-remaining'),
  progressAlphabetBreakdown: document.getElementById('progress-alphabet-breakdown'),
  btnResetProgress: document.getElementById('btn-reset-progress'),

  // Modals & Toast
  modalCompletion: document.getElementById('modal-completion'),
  completionTitle: document.getElementById('completion-title'),
  completionMessage: document.getElementById('completion-message'),
  btnCompletionReview: document.getElementById('btn-completion-review'),
  btnCompletionChooseLetter: document.getElementById('btn-completion-choose-letter'),
  modalResetConfirm: document.getElementById('modal-reset-confirm'),
  btnModalCancelReset: document.getElementById('btn-modal-cancel-reset'),
  btnModalConfirmReset: document.getElementById('btn-modal-confirm-reset'),
  appToast: document.getElementById('app-toast')
};

/**
 * Switch the currently active view
 */
function navigateTo(screenId, options = {}) {
  // Hide all screens
  const allScreens = [DOM.viewHome, DOM.viewLearn, DOM.viewWordList, DOM.viewWordLearn, DOM.viewSearch, DOM.viewProgress];
  allScreens.forEach(s => s.classList.remove('active'));

  // Determine active tab for bottom nav
  let tabId = 'home';
  if (screenId === 'home') tabId = 'home';
  else if (screenId === 'learn' || screenId === 'word-list' || screenId === 'word-learn') tabId = 'learn';
  else if (screenId === 'search') tabId = 'search';
  else if (screenId === 'progress') tabId = 'progress';

  DOM.navTabs.forEach(tab => {
    if (tab.dataset.tab === tabId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Activate destination view
  switch (screenId) {
    case 'home':
      renderHomeScreen();
      DOM.viewHome.classList.add('active');
      break;

    case 'learn':
      renderLearnHubScreen();
      DOM.viewLearn.classList.add('active');
      break;

    case 'word-list':
      if (options.letter) state.currentLetter = options.letter;
      renderWordListScreen();
      DOM.viewWordList.classList.add('active');
      break;

    case 'word-learn':
      if (options.letter) state.currentLetter = options.letter;
      if (typeof options.index === 'number') state.currentIndex = options.index;
      renderWordLearnScreen();
      DOM.viewWordLearn.classList.add('active');
      break;

    case 'search':
      DOM.viewSearch.classList.add('active');
      if (options.focusSearch) {
        setTimeout(() => DOM.searchInputField.focus(), 150);
      }
      renderSearchResults();
      break;

    case 'progress':
      renderProgressDashboard();
      DOM.viewProgress.classList.add('active');
      break;

    default:
      renderHomeScreen();
      DOM.viewHome.classList.add('active');
  }

  state.currentScreen = screenId;
  saveState();

  // Scroll to top of main container
  const mainEl = document.getElementById('app-main-content');
  if (mainEl) mainEl.scrollTop = 0;
}

/* ==========================================================================
   5. PROGRESS CALCULATOR HELPERS
   ========================================================================== */
function getLetterProgress(letter) {
  const words = VOCABULARY[letter] || [];
  let learnedCount = 0;
  for (let i = 0; i < words.length; i++) {
    if (state.learnedWords.has(`${letter}_${i}`)) {
      learnedCount++;
    }
  }
  return {
    letter,
    total: words.length,
    learned: learnedCount,
    percent: Math.round((learnedCount / words.length) * 100)
  };
}

function getTotalProgress() {
  const letters = ['A', 'B', 'C', 'D'];
  let totalWords = 0;
  let totalLearned = 0;

  letters.forEach(lettr => {
    const p = getLetterProgress(lettr);
    totalWords += p.total;
    totalLearned += p.learned;
  });

  return {
    total: totalWords,
    learned: totalLearned,
    remaining: totalWords - totalLearned,
    percent: Math.round((totalLearned / totalWords) * 100)
  };
}

/* ==========================================================================
   6. HOME SCREEN RENDERING
   ========================================================================== */
function renderHomeScreen() {
  // 1. Time Greeting
  const hour = new Date().getHours();
  let greetingText = 'Good Morning';
  if (hour >= 12 && hour < 17) greetingText = 'Good Afternoon';
  else if (hour >= 17) greetingText = 'Good Evening';
  DOM.homeGreetingTime.textContent = greetingText;

  // 2. Continue Learning Card
  const currentLetterWords = VOCABULARY[state.currentLetter] || VOCABULARY.A;
  const wordObj = currentLetterWords[state.currentIndex] || currentLetterWords[0];
  const letterProgress = getLetterProgress(state.currentLetter);

  DOM.homeContinueLetterBadge.textContent = `${state.currentLetter} Words`;
  DOM.homeContinueWordPreview.textContent = wordObj.word;
  DOM.homeContinueCounter.textContent = `Word ${state.currentIndex + 1} of ${currentLetterWords.length}`;
  DOM.homeContinueProgressBar.style.width = `${Math.max(1, letterProgress.percent)}%`;

  // 3. Quick Stats
  const totalProg = getTotalProgress();
  DOM.homeStatLearned.textContent = totalProg.learned;
  DOM.homeStatRemaining.textContent = totalProg.remaining;
  DOM.homeStatPercent.textContent = `${totalProg.percent}%`;

  // 4. Alphabet Quick Grid
  DOM.homeAlphabetQuickGrid.innerHTML = '';
  ['A', 'B', 'C', 'D'].forEach(letter => {
    const p = getLetterProgress(letter);
    const card = document.createElement('div');
    card.className = 'alphabet-quick-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Letter ${letter}, ${p.learned} of ${p.total} learned`);

    const lowerLetter = letter.toLowerCase();
    card.innerHTML = `
      <div class="card-top-row">
        <div class="letter-avatar avatar-${lowerLetter}">${letter}</div>
        <span class="letter-percent-badge">${p.percent}%</span>
      </div>
      <div class="card-bottom-info">
        <span class="card-words-count">${p.learned} / ${p.total} learned</span>
        <div class="card-progress-track">
          <div class="card-progress-fill fill-${lowerLetter}" style="width: ${p.percent}%"></div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      navigateTo('word-list', { letter });
    });

    DOM.homeAlphabetQuickGrid.appendChild(card);
  });
}

/* ==========================================================================
   7. LEARN / ALPHABET HUB SCREEN RENDERING
   ========================================================================== */
function renderLearnHubScreen() {
  DOM.learnAlphabetCardsList.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach(letter => {
    const p = getLetterProgress(letter);
    const lowerLetter = letter.toLowerCase();
    const circumference = 2 * Math.PI * 18; // radius 18
    const offset = circumference - (p.percent / 100) * circumference;

    const card = document.createElement('div');
    card.className = 'learn-letter-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Alphabet ${letter}, ${p.learned} of ${p.total} words learned`);

    card.innerHTML = `
      <div class="learn-card-left">
        <div class="learn-letter-symbol avatar-${lowerLetter}">${letter}</div>
        <div class="learn-letter-meta">
          <h3 class="learn-letter-name">Letter ${letter}</h3>
          <span class="learn-letter-status">${p.learned} / ${p.total} words learned</span>
        </div>
      </div>
      <div class="learn-card-right">
        <div class="circular-progress-wrap">
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle class="circ-bg" cx="22" cy="22" r="18" fill="none" stroke-width="4"/>
            <circle class="circ-fill fill-stroke-${lowerLetter}" cx="22" cy="22" r="18" fill="none" stroke-width="4"
              stroke="${getLetterColor(letter)}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"/>
          </svg>
          <span class="circ-text">${p.percent}%</span>
        </div>
        <svg viewBox="0 0 24 24" width="20" height="20" style="color: var(--text-muted);"><use href="#icon-chevron-right"></use></svg>
      </div>
    `;

    card.addEventListener('click', () => {
      navigateTo('word-list', { letter });
    });

    DOM.learnAlphabetCardsList.appendChild(card);
  });
}

function getLetterColor(letter) {
  switch (letter) {
    case 'A': return '#2563eb';
    case 'B': return '#9333ea';
    case 'C': return '#16a34a';
    case 'D': return '#d97706';
    default: return '#4f46e5';
  }
}

/* ==========================================================================
   8. WORD LIST SCREEN RENDERING
   ========================================================================== */
function renderWordListScreen() {
  const letter = state.currentLetter;
  const words = VOCABULARY[letter] || [];
  const p = getLetterProgress(letter);

  DOM.wordlistTitle.textContent = `${letter} Words`;
  DOM.wordlistProgressBadge.textContent = `${p.learned} / ${p.total} learned`;

  // Update filter buttons
  DOM.filterChips.forEach(chip => {
    if (chip.dataset.filter === state.wordListFilter) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  DOM.wordItemsContainer.innerHTML = '';

  words.forEach((item, index) => {
    const isLearned = state.learnedWords.has(`${letter}_${index}`);

    // Apply Filter
    if (state.wordListFilter === 'learned' && !isLearned) return;
    if (state.wordListFilter === 'unlearned' && isLearned) return;

    const card = document.createElement('div');
    card.className = `word-list-card ${isLearned ? 'learned' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${item.word}, ${item.meaning}`);

    card.innerHTML = `
      <div class="word-list-left">
        <span class="word-index-badge">${index + 1}</span>
        <div class="word-list-text-group">
          <h4 class="word-item-name">${item.word}</h4>
          <p class="word-item-meaning">${item.meaning}</p>
        </div>
      </div>
      <div class="word-list-right">
        <button type="button" class="btn-item-speaker" aria-label="Pronounce ${item.word}">
          <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-speaker"></use></svg>
        </button>
        ${isLearned ? `
          <div class="learned-check-tag" title="Learned">
            <svg viewBox="0 0 24 24" width="14" height="14"><use href="#icon-check"></use></svg>
          </div>
        ` : ''}
      </div>
    `;

    // Click card to open word learning screen
    card.addEventListener('click', (e) => {
      // If speaker icon clicked, pronounce word without navigating
      if (e.target.closest('.btn-item-speaker')) {
        e.stopPropagation();
        audioEngine.speak(item.word);
        return;
      }
      navigateTo('word-learn', { letter, index });
    });

    DOM.wordItemsContainer.appendChild(card);
  });

  // Empty state if filter returns no results
  if (DOM.wordItemsContainer.children.length === 0) {
    DOM.wordItemsContainer.innerHTML = `
      <div class="empty-search-state">
        <h3>No words in this category</h3>
        <p>Switch filter to "All" to view all ${letter} words.</p>
      </div>
    `;
  }
}

/* ==========================================================================
   9. WORD LEARNING SCREEN (CORE LEARNING EXPERIENCE)
   ========================================================================== */
function renderWordLearnScreen() {
  const letter = state.currentLetter;
  const words = VOCABULARY[letter] || [];
  const index = state.currentIndex;
  const wordObj = words[index];

  if (!wordObj) return;

  const wordKey = `${letter}_${index}`;
  const isLearned = state.learnedWords.has(wordKey);
  const isBookmarked = state.bookmarks.has(wordKey);

  // 1. Counter & Progress
  DOM.learnCounterText.textContent = `${letter} — Word ${index + 1} of ${words.length}`;
  DOM.learnProgressFill.style.width = `${((index + 1) / words.length) * 100}%`;

  // 2. Letter Pill & Status Pill
  DOM.learnLetterPill.textContent = `Letter ${letter}`;
  if (isLearned) {
    DOM.learnStatusPill.textContent = 'Learned';
    DOM.learnStatusPill.className = 'learned-status-pill learned';
  } else {
    DOM.learnStatusPill.textContent = 'To Learn';
    DOM.learnStatusPill.className = 'learned-status-pill unlearned';
  }

  // 3. Word Heading & Phonetic
  DOM.learnWordHeading.textContent = wordObj.word.toUpperCase();
  DOM.learnPhonetic.textContent = wordObj.pronunciation;

  // 4. Pronounce button accessibility label & state
  DOM.btnLearnPronounce.setAttribute('aria-label', `Pronounce ${wordObj.word}`);
  DOM.btnLearnPronounce.classList.remove('speaking');
  DOM.learnPronounceLabel.textContent = 'Listen';

  // 5. Meaning & Example
  DOM.learnMeaningText.textContent = wordObj.meaning;
  DOM.learnExampleText.textContent = `"${wordObj.example}"`;

  // 6. Interactive Spelling Section
  DOM.learnSpellingTiles.innerHTML = '';
  const cleanWord = wordObj.word.toUpperCase().replace(/[^A-Z]/g, '');
  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'letter-tile';
    tile.textContent = char;
    tile.setAttribute('aria-label', `Spell letter ${char}`);

    tile.addEventListener('click', () => {
      tile.classList.add('tile-active');
      audioEngine.speakLetter(char);
      setTimeout(() => tile.classList.remove('tile-active'), 400);
    });

    DOM.learnSpellingTiles.appendChild(tile);
  }

  // 7. Mark as Learned Button
  if (isLearned) {
    DOM.btnMarkLearned.classList.add('is-learned');
    DOM.btnMarkLearnedText.textContent = 'Learned ✓';
  } else {
    DOM.btnMarkLearned.classList.remove('is-learned');
    DOM.btnMarkLearnedText.textContent = 'Mark as Learned';
  }

  // 8. Bookmark Button
  if (isBookmarked) {
    DOM.btnLearnBookmark.classList.add('active');
  } else {
    DOM.btnLearnBookmark.classList.remove('active');
  }

  // 9. Previous & Next Controls
  DOM.btnLearnPrev.disabled = index === 0;

  if (index === words.length - 1) {
    DOM.btnLearnNext.innerHTML = `
      <span>Complete Letter</span>
      <svg viewBox="0 0 24 24" width="20" height="20"><use href="#icon-sparkle"></use></svg>
    `;
  } else {
    DOM.btnLearnNext.innerHTML = `
      <span>Next Word</span>
      <svg viewBox="0 0 24 24" width="20" height="20"><use href="#icon-chevron-right"></use></svg>
    `;
  }
}

/**
 * Handle Pronounce Trigger
 */
function handlePronounceWord() {
  const words = VOCABULARY[state.currentLetter];
  const wordObj = words[state.currentIndex];
  if (!wordObj) return;

  DOM.btnLearnPronounce.classList.add('speaking');
  DOM.learnPronounceLabel.textContent = 'Speaking...';

  audioEngine.speak(
    wordObj.word,
    () => {
      DOM.btnLearnPronounce.classList.add('speaking');
    },
    () => {
      DOM.btnLearnPronounce.classList.remove('speaking');
      DOM.learnPronounceLabel.textContent = 'Listen Again';
    }
  );
}

/**
 * Toggle Learned Status for current word
 */
function toggleMarkAsLearned() {
  const wordKey = `${state.currentLetter}_${state.currentIndex}`;
  const words = VOCABULARY[state.currentLetter];
  const wordObj = words[state.currentIndex];

  if (state.learnedWords.has(wordKey)) {
    state.learnedWords.delete(wordKey);
    showToast(`Removed "${wordObj.word}" from learned words`);
  } else {
    state.learnedWords.add(wordKey);
    showToast(`Marked "${wordObj.word}" as learned! 🎉`);
  }

  saveState();
  renderWordLearnScreen();
}

/**
 * Navigate to Next Word or trigger Completion Modal
 */
function handleNextWord() {
  const words = VOCABULARY[state.currentLetter];
  if (state.currentIndex < words.length - 1) {
    state.currentIndex++;
    saveState();
    renderWordLearnScreen();
  } else {
    // 100th word completed!
    showCompletionCelebration();
  }
}

/**
 * Navigate to Previous Word
 */
function handlePrevWord() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    saveState();
    renderWordLearnScreen();
  }
}

/**
 * Show Letter Completed Modal
 */
function showCompletionCelebration() {
  DOM.completionTitle.textContent = `Letter ${state.currentLetter} Completed!`;
  DOM.completionMessage.textContent = `Congratulations! You've reached all 100 words in section ${state.currentLetter}.`;
  DOM.modalCompletion.classList.add('active');
  DOM.modalCompletion.setAttribute('aria-hidden', 'false');
}

function hideCompletionCelebration() {
  DOM.modalCompletion.classList.remove('active');
  DOM.modalCompletion.setAttribute('aria-hidden', 'true');
}

/* ==========================================================================
   10. SEARCH SCREEN RENDERING & INSTANT FILTER
   ========================================================================== */
function renderSearchResults() {
  const query = state.searchQuery.trim().toLowerCase();
  const letterFilter = state.searchLetterFilter;
  let matches = [];

  const searchLetters = letterFilter === 'ALL' ? ['A', 'B', 'C', 'D'] : [letterFilter];

  searchLetters.forEach(lettr => {
    const list = VOCABULARY[lettr] || [];
    list.forEach((item, index) => {
      const matchWord = item.word.toLowerCase().includes(query);
      const matchMeaning = item.meaning.toLowerCase().includes(query);

      if (!query || matchWord || matchMeaning) {
        matches.push({
          ...item,
          letter: lettr,
          index: index
        });
      }
    });
  });

  // Update Result Count Meta
  DOM.searchResultsCount.textContent = `${matches.length} word${matches.length === 1 ? '' : 's'} found`;

  DOM.searchResultsList.innerHTML = '';

  if (matches.length === 0) {
    DOM.searchResultsList.innerHTML = `
      <div class="empty-search-state">
        <h3>No matching words found</h3>
        <p>Try searching for another word or clear the filter.</p>
      </div>
    `;
    return;
  }

  // Render match cards (limit to first 100 for instant buttery performance)
  const displayMatches = matches.slice(0, 100);

  displayMatches.forEach(res => {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    // Highlight search term in title
    let highlightedWord = res.word;
    if (query) {
      const regex = new RegExp(`(${query})`, 'gi');
      highlightedWord = res.word.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    card.innerHTML = `
      <div class="search-res-info">
        <div class="search-res-header">
          <span class="search-res-letter">${res.letter}</span>
          <h4 class="search-res-word">${highlightedWord}</h4>
          <span class="search-res-phonetic">${res.pronunciation}</span>
        </div>
        <p class="search-res-meaning">${res.meaning}</p>
      </div>
      <button type="button" class="btn-item-speaker" aria-label="Pronounce ${res.word}">
        <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-item-speaker')) {
        e.stopPropagation();
        audioEngine.speak(res.word);
        return;
      }
      navigateTo('word-learn', { letter: res.letter, index: res.index });
    });

    DOM.searchResultsList.appendChild(card);
  });
}

/* ==========================================================================
   11. PROGRESS SCREEN RENDERING
   ========================================================================== */
function renderProgressDashboard() {
  const totalProg = getTotalProgress();

  // 1. Hero Ring & Stats
  DOM.progStatTotal.textContent = totalProg.total;
  DOM.progStatLearned.textContent = totalProg.learned;
  DOM.progStatRemaining.textContent = totalProg.remaining;
  DOM.progressTotalPercent.textContent = `${totalProg.percent}%`;

  const circumference = 2 * Math.PI * 50; // radius 50
  const offset = circumference - (totalProg.percent / 100) * circumference;
  DOM.progressCircleFill.style.strokeDashoffset = offset;

  // 2. Alphabet Breakdown
  DOM.progressAlphabetBreakdown.innerHTML = '';
  ['A', 'B', 'C', 'D'].forEach(letter => {
    const p = getLetterProgress(letter);
    const lowerLetter = letter.toLowerCase();

    const card = document.createElement('div');
    card.className = 'breakdown-card';
    card.innerHTML = `
      <div class="breakdown-row-top">
        <div class="breakdown-letter-title">
          <span class="letter-avatar avatar-${lowerLetter}" style="width: 28px; height: 28px; font-size: 0.9rem; border-radius: 8px;">${letter}</span>
          <span>Letter ${letter} Section</span>
        </div>
        <span class="breakdown-score">${p.learned} / ${p.total} (${p.percent}%)</span>
      </div>
      <div class="breakdown-progress-track">
        <div class="breakdown-progress-fill fill-${lowerLetter}" style="width: ${p.percent}%"></div>
      </div>
    `;

    card.addEventListener('click', () => {
      navigateTo('word-list', { letter });
    });

    DOM.progressAlphabetBreakdown.appendChild(card);
  });
}

/* ==========================================================================
   12. TOAST NOTIFICATION UTILITY
   ========================================================================== */
let toastTimeout = null;
function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);
  DOM.appToast.textContent = message;
  DOM.appToast.classList.add('active');
  toastTimeout = setTimeout(() => {
    DOM.appToast.classList.remove('active');
  }, 2400);
}

/* ==========================================================================
   13. EVENT LISTENERS & INITIALIZATION
   ========================================================================== */
function bindEvents() {
  // --- Onboarding Flow ---
  const completeOnboarding = () => {
    state.onboardingCompleted = true;
    saveState();
    DOM.onboarding.classList.remove('active');
    navigateTo('home');
  };

  DOM.btnOnboardingStart.addEventListener('click', completeOnboarding);
  DOM.btnOnboardingContinue.addEventListener('click', completeOnboarding);
  DOM.btnOnboardingSkip.addEventListener('click', completeOnboarding);

  // --- Bottom Navigation Tabs ---
  DOM.navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      navigateTo(targetTab);
    });
  });

  // --- Header Navigation ---
  DOM.headerBranding.addEventListener('click', () => navigateTo('home'));
  DOM.btnHeaderSearch.addEventListener('click', () => navigateTo('search', { focusSearch: true }));

  // --- Home Screen Actions ---
  DOM.btnHomeContinueAction.addEventListener('click', () => {
    navigateTo('word-learn', { letter: state.currentLetter, index: state.currentIndex });
  });
  DOM.homeContinueCard.addEventListener('click', (e) => {
    if (!e.target.closest('#btn-home-continue-action')) {
      navigateTo('word-learn', { letter: state.currentLetter, index: state.currentIndex });
    }
  });
  DOM.btnHomeSeeAllLearn.addEventListener('click', () => navigateTo('learn'));

  // --- Word List Navigation & Filters ---
  DOM.btnWordlistBack.addEventListener('click', () => navigateTo('learn'));
  DOM.btnWordlistStartLearning.addEventListener('click', () => {
    navigateTo('word-learn', { letter: state.currentLetter, index: 0 });
  });
  DOM.filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      state.wordListFilter = chip.dataset.filter;
      renderWordListScreen();
    });
  });

  // --- Word Learning Screen Navigation & Actions ---
  DOM.btnLearnScreenBack.addEventListener('click', () => {
    navigateTo('word-list', { letter: state.currentLetter });
  });

  DOM.btnLearnPronounce.addEventListener('click', handlePronounceWord);
  DOM.btnLearnListenAgain.addEventListener('click', handlePronounceWord);
  DOM.btnMarkLearned.addEventListener('click', toggleMarkAsLearned);

  DOM.btnLearnNext.addEventListener('click', handleNextWord);
  DOM.btnLearnPrev.addEventListener('click', handlePrevWord);

  DOM.btnLearnBookmark.addEventListener('click', () => {
    const key = `${state.currentLetter}_${state.currentIndex}`;
    if (state.bookmarks.has(key)) {
      state.bookmarks.delete(key);
      DOM.btnLearnBookmark.classList.remove('active');
      showToast('Bookmark removed');
    } else {
      state.bookmarks.add(key);
      DOM.btnLearnBookmark.classList.add('active');
      showToast('Word saved to bookmarks! ★');
    }
    saveState();
  });

  // Keyboard navigation for power users / desktop testing (ArrowLeft = Prev, ArrowRight = Next, Space = Pronounce)
  window.addEventListener('keydown', (e) => {
    if (state.currentScreen === 'word-learn' && !DOM.modalCompletion.classList.contains('active')) {
      if (e.key === 'ArrowRight') handleNextWord();
      else if (e.key === 'ArrowLeft') handlePrevWord();
      else if (e.key === ' ' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        handlePronounceWord();
      }
    }
  });

  // --- Celebration Modal Actions ---
  DOM.btnCompletionReview.addEventListener('click', () => {
    hideCompletionCelebration();
    state.currentIndex = 0;
    saveState();
    navigateTo('word-learn', { letter: state.currentLetter, index: 0 });
  });

  DOM.btnCompletionChooseLetter.addEventListener('click', () => {
    hideCompletionCelebration();
    navigateTo('learn');
  });

  // --- Search Screen Interactions ---
  DOM.searchInputField.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.length > 0) {
      DOM.btnSearchClear.classList.add('visible');
    } else {
      DOM.btnSearchClear.classList.remove('visible');
    }
    renderSearchResults();
  });

  DOM.btnSearchClear.addEventListener('click', () => {
    DOM.searchInputField.value = '';
    state.searchQuery = '';
    DOM.btnSearchClear.classList.remove('visible');
    renderSearchResults();
    DOM.searchInputField.focus();
  });

  const letterChips = DOM.searchLetterFilters.querySelectorAll('.letter-filter-chip');
  letterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      letterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.searchLetterFilter = chip.dataset.letter;
      renderSearchResults();
    });
  });

  // --- Reset Progress Modal ---
  DOM.btnResetProgress.addEventListener('click', () => {
    DOM.modalResetConfirm.classList.add('active');
    DOM.modalResetConfirm.setAttribute('aria-hidden', 'false');
  });

  DOM.btnModalCancelReset.addEventListener('click', () => {
    DOM.modalResetConfirm.classList.remove('active');
    DOM.modalResetConfirm.setAttribute('aria-hidden', 'true');
  });

  DOM.btnModalConfirmReset.addEventListener('click', () => {
    state.learnedWords.clear();
    state.bookmarks.clear();
    state.currentIndex = 0;
    saveState();
    DOM.modalResetConfirm.classList.remove('active');
    DOM.modalResetConfirm.setAttribute('aria-hidden', 'true');
    renderProgressDashboard();
    showToast('All learning progress has been reset.');
  });
}

/**
 * Main Application Bootstrapper
 */
function initApp() {
  initStorage();
  bindEvents();

  // Check onboarding state
  if (state.onboardingCompleted) {
    DOM.onboarding.classList.remove('active');
    navigateTo('home');
  } else {
    DOM.onboarding.classList.add('active');
  }
}

// Start app once DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
