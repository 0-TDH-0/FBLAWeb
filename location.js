
const loc = {
    Primo: {
      phone: "847-336-3446",
      address: "720 Milwaukee Ave, Gurnee, IL 60031",
      img: "./pictures/primo pic.png",
      website: "https://primogurnee.com/",
      timings: "11 am - 9 pm",
      about: "Italian-American fare, including steak, seafood & pasta, plus a wine bar, in a casual-chic space.",
      mapimg: "./maps/primo map.png"
    },
    Sarpino: {
      phone: "847-223-5000",
      address: "34484 US-45 Ste B, Third Lake, IL 60030",
      img: "./pictures/sarpinos pizzeria.png",
      website: "https://gurnee.gosarpinos.com/ordering/intro/",
      timings: "10 am - 1 am",
      about: "Pizza & casual Italian food from a nofrills counter-service chain that also offers delivery.",
      mapimg: "./maps/sarpinos map.png"
    },
    Galati_Pizza: {
      phone: "847-740-4222",
      address: "1 Great America Parkway, Gurnee, IL 60031",
      img: "./pictures/galati pizza pic.png",
      website: "https://www.galatipizza.com/",
      timings: "3 pm - 11 pm",
      about: "Straightforward spot for pizza & casual Italian dishes, known for its 30-inch football-shaped pies.",
      mapimg: "./maps/new galati pizza.png"
    },
    Capones_Kitchen: {
      phone: "847-249-1776",
      address: "1 Great America Parkway, Gurnee, IL 60031",
      img: "./pictures/capones kitchen pic.png",
      website: "https://www.sixflags.com/greatamerica/things-to-do/restaurants",
      timings: "11 am - 10:30 pm",
      about: "Capone's Kitchen was an Italian restaurant located in Yankee Harbor at Six Flags Great America. It served pizza, pasta, and salads. There are also many soft drink options, as well as some alcoholic beverages. It opened in April 2017, replacing Angelo's Pasta and Pizza.",
      mapimg: "./maps/capones kitchen map.png"
    },
    Olive_Garden_Italian_Resturant: {
      phone: "847-336-3628",
      address: "5590 Northridge Dr, Gurnee, IL 60031",
      img: "./pictures/olive garden pic.png",
      website: "https://www.olivegarden.com/home",
      timings: "11 am - 10 pm",
      about: "Olive Garden is an American casual dining restaurant chain specializing in Italian-American cuisine. It is a subsidiary of Darden Restaurants, Inc., which is headquartered in Orange County, Florida.",
      mapimg: "./maps/olive garden map.png"
    },
    Jesse_Oaks_Food_and_Drinks: {
      phone: "847-223-2575",
      address: "18490 W Old Gages Lake Rd, Gages Lake, IL 60030",
      img: "./pictures/jesse oaks food & drink pic.png",
      website: "https://www.jesseoaks.com/",
      timings: "10 am - 1 am",
      about: "Bar with numerous TVs showing sports plus diverse events & American Mexican pub grub.",
      mapimg: "./maps/jesse oaks food & drink map.png"
    },
    Flanagans_Bar_and_Grill: {
      phone: "847-689-9062",
      address: " 3201 Buckley Rd, North Chicago, IL 60064",
      img: "./pictures/new bar pic.png",
      website: "http://www.flanaganssportsbar.com/",
      timings: "10 am - 1 am",
      about: "Sprawling pub for sports, bar bites, sandwiches & steaks plus weekly karaoke & Navy gatherings.",
      mapimg: "./maps/new bar map.png"
    },
    First_Draft_Grays_lake: {
      phone: "(224) 541-4445",
      address: "250 Center St, Grayslake, IL 60030",
      img: "./pictures/first draft grayslake pic.png",
      website: "http://firstdraftgrayslake.net/",
      timings: "12 pm - 11 pm",
      about: "First established in 2013 in Printers Row in Chicago, First Draft is a local neighborhood tavern. We are proud to be opening our second location in 2020 in Grayslake!",
      mapimg: "./maps/first draft grayslake map.png"
    },
    Culvers: {
      phone: "847-662-9666",
      address: "1505 Nations Dr, Gurnee, IL 60031",
      img: "./pictures/culvers pic.png",
      website: "http://www.culvers.com/",
      timings: "10:30 am - 10 pm",
      about: "The chain is mostly known for its 'butter burgers' and frozen custard, but also offers cheese curds, chicken, fish, and salads. Culver's opened its first restaurant in 1984 in Sauk City, Wisconsin. It is currently headquartered in nearby Prairie du Sac.",
      mapimg: "./maps/culvers map.png"
    },
    The_Backyard_Steak_Pit: {
      phone: "847-356-5200",
      address: "1818 N Grandwood Dr, Gurnee, IL 60031",
      img: "./pictures/the backyard steak pit pic.png",
      website: "https://thebackyardsteakpit.com//",
      timings: "4 pm - 8 pm",
      about: "Casual, longtime steakhouse with a focal charcoal grill for steaks plus a menu of seafood & kebabs.",
      mapimg: "./maps/the backyard steak pit map.png"
    },
    El_Atezca_Two: {
      phone: "847-231-6512",
      address: "821 Center St, Grayslake, IL 60030",
      img: "./pictures/el azteca II pic.png",
      website: "https://www.elaztecagrayslake.com/",
      timings: "10 am - 9 pm",
      about: "Authentic Mexican food. We cater to all types of appetites. From tacos and burritos. To dinner platters. We also do catering.",
      mapimg: "./maps/el azteca II map.png"
    },
    Tacos_El_Norte_Gurnee: {
      phone: "847-623-3034",
      address: "401 N Riverside Dr #27, Gurnee, IL 60031",
      img: "./pictures/tacos el norte gurnee pic.png",
      website: "http://www.tacoselnortegurnee.com/",
      timings: "10 am - 10 pm",
      about: "It's the freshness of the food and the quality of the service that keeps customers coming back for more. Tacos El Norte serves Authentic Mexican Breakfast, Lunch and Dinner any time of day.",
      mapimg: "./maps/tacos el norte gurnee map.png"
    },
    Abels_Cantina: {
      phone: "847-548-2003",
      address: "125 Center St, Grayslake, IL 60030",
      img: "./pictures/abels cantina pic.png",
      website: "https://abelscantina.square.site/",
      timings: "4 pm - 11 pm",
      about: "Abel's Cantina is a restaurant that focuses on the well-being of the customers with Italian cuisines.",
      mapimg: "./maps/abels cantina.png"
    },
    Taqueria_Los_Comales: {
      phone: "847-740-2606",
      address: "809 W Rollins Rd, Round Lake Heights, IL 60073",
      img: "./pictures/taqueria los comales pic.png",
      website: "https://www.loscomales.com/",
      timings: "8 am - 12 am",
      about: "Long-running, casual regional chain serving signature tacos & other classic Mexican fare.",
      mapimg: "./maps/taqueria los comales map.png"
    },
    Dulces_Margaritas: {
      phone: "847-223-3505",
      address: "1814 E Belvidere Rd, Grayslake, IL 60030",
      img: "./pictures/dulces margaritas pic.png",
      website: "https://dulcemargaritas.com//",
      timings: "10 am - 9 pm",
      about: "A classic blend of ripe avocados. Tomatoes, onions and cilantro. Includes chips.",
      mapimg: "./maps/dulces margaritas map.png"
    },
    Marianos: {
      phone: "866-742-6728",
      address: "1720 N Milwaukee Ave, Vernon Hills, IL 60061",
      img: "./pictures/marianos pic.png",
      website: "http://www.marianos.com/",
      timings: "6 am - 10 pm",
      about: "Mariano's is a Midwestern grocery store chain that opened its doors in 2010. Mariano's is owned by Kroger. 44 Mariano's locations exist.",
      mapimg: "./maps/marianos map.png"
    },
    Jewel_Osco: {
      phone: "877-276-9637",
      address: "922 Green Bay Rd, Waukegan, IL 60085",
      img: "./pictures/jewel osco pic.png",
      website: "http://www.jewelosco.com/",
      timings: "6 am - 12 am",
      about: "Jewel-Osco, American retail grocery and pharmacy chain operating as a subsidiary of the grocery distributor and retailer SuperValu Inc.",
      mapimg: "./maps/jewel osco map.png"
    },
    Georges_Fresh_Market: {
      phone: "224-656-5488",
      address: "1490 Lewis Ave, North Chicago, IL 60064",
      img: "./pictures/georges fresh market pic.png",
      website: "https://www.georgesfreshmarket.com/",
      timings: "7 am - 9 pm",
      about: "George's Fresh Market is excited to join the North Chicago community to offer quality, fresh and affordable produce. In addition to the core produce offering, the 15,000 square foot market will provide a wide array of top-quality ethnic foods that will cater to the needs of local residents.",
      mapimg: "./maps/georges fresh market map.png"
    },
    Heinens_Grocery_Store: {
      phone: "847-735-0026",
      address: "201 Waukegan Rd, Lake Bluff, IL 60044",
      img: "./pictures/heinens grocery store pic.png",
      website: "http://www.heinens.com/",
      timings: "8 am - 8 pm",
      about: "Heinen pioneered the city's first supermarket across the street from his butcher shop, selling traditional grocery items alongside hand-butchered meats.",
      mapimg: "./maps/heinens grocery store map.png"
    },
    Jims_Pantry_Food_Mart: {
      phone: "847-623-6116",
      address: "Waukegan, IL 60087",
      img: "./pictures/jims pantry food mart pic.png",
      website: "https://nicelocal.com/illinois/shops/jims_pantry/",
      timings: "9 am - 12 pm",
      about: "Jim's Pantry Food Mart (Convenience store) is located in Lake County, Illinois, United States.",
      mapimg: "./maps/jims pantry food mart map.png"
    },
    Full_Circle_Clothing: {
      phone: "N/A",
      address: "228 N Genesee St Suite D, Waukegan, IL 60085",
      img: "./pictures/full circle clothing pic.png",
      website: "https://fullcircleclothing2020.com/",
      timings: "1 pm - 7 pm",
      about: "Full Circle provides parents with a socially conscious, well-curated shopping option for their children. Full Circle is a locally focused subscriptionbased children's rental clothing company.",
      mapimg: "./maps/full circle clothing map.png"
    },
    Dds_Discount: {
      phone: "847-599-8632",
      address: "1535 N Lewis Ave, Waukegan, IL 60085",
      img: "./pictures/dds discount pic.png",
      website: "https://www.ddsdiscounts.com/",
      timings: "9 am - 10:30 pm",
      about: "Retail chain stocking discounted clothing & shoes for adults or kids, plus home decor.",
      mapimg: "./maps/dds discount map.png"
    },
    H_and_M: {
      phone: "855-466-7467",
      address: "109 Hawthorn Center, Vernon Hills, IL 60061",
      img: "./pictures/new hm pic.png",
      website: "http://www.hm.com/",
      timings: "11 am - 8 pm",
      about: "H&M Hennes & Mauritz AB (abbreviated H&M) is a multinational clothing company based in Sweden. Its focus is fast-fashion clothing for men, women, teenagers, and children.",
      mapimg: "./maps/new hm map.png"
    },
    Ross_Dress_for_Less: {
      phone: "847-599-1405",
      address: "1301 N Lewis Ave, Waukegan, IL 60085",
      img: "./pictures/ross dress for less pic.png",
      website: "https://www.rossstores.com/",
      timings: "10 am - 8 pm",
      about: "Since 1982, our focus has been on bringing our customers a constant stream of high-quality department and specialty store brands at extraordinary savings (aka bargains) while providing an easy, fun and organized shopping experience.",
      mapimg: "./maps/ross dess for less map.png"
    },
    Windsor: {
      phone: "847-855-7439",
      address: "6170 Grand Ave Ste 529, Gurnee, IL 60031",
      img: "./pictures/windsor pic.png",
      website: "https://www.windsorstore.com/pages/il-gurnee-gurnee-mills",
      timings: "11 am - 8 pm",
      about: "Women's Clothing and Fashion. Dresses, Denim, Tops, Shoes & More. Windsor.",
      mapimg: "./maps/windsor map.png"
    },
    Lucys_Appliances: {
      phone: "847-872-4922",
      address: "3460 Sheridan Rd, Zion, IL 60099",
      img: "./pictures/lucys appliances pic.png",
      website: "https://www.lucysappliances.com/",
      timings: "9 am - 5 pm",
      about: "Appliance Sales and Service store located in Zion, IL. We offer the best in home Appliance Sales and Service at discount prices.",
      mapimg: "./maps/lucys appliances map.png"
    },
    Best_Buy: {
      phone: "847-406-3914",
      address: "6525 Grand Ave, Gurnee, IL 60031",
      img: "./pictures/best buy pic.png",
      website: "https://www.bestbuy.com/",
      timings: "11 am - 7 pm",
      about: "Best Buy is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota.",
      mapimg: "./maps/best buy map.png"
    },
    Aarons: {
      phone: "847-625-1111",
      address: "1403 N Lewis Ave, Waukegan, IL 60085",
      img: "./pictures/aarons pic.png",
      website: "http://www.aarons.com/",
      timings: "10 am - 7 pm",
      about: "The Aaron's Company is an American lease-to-own retailer. The company focuses on leases and retail sales of furniture, electronics, appliances, and computers.",
      mapimg: "./maps/aarons map.png"
    },
    The_Home_Depot: {
      phone: "847-625-1020",
      address: "2001 Belvedere Rd, Waukegan, IL 60085",
      img: "./pictures/the home depot pic.png",
      website: "http://www.homedepot.com/",
      timings: "6 am - 10 pm",
      about: "Home Depot is best-known for their range of home improvement products as this is the area in which they specialize.",
      mapimg: "./maps/the home depot map.png"
    },
    Affordable_Appliance_Inc: {
      phone: "847-625-1020",
      address: "2001 Belvedere Rd, Waukegan, IL 60085",
      img: "./pictures/affordable appliances pic.png",
      website: "https://affordable-appliances-inc.business.site/",
      timings: "9 am - 4 pm",
      about: "All the value for half the price as new. Saving the planet, one appliance at a time. We are a family business that reconditions pre-owned appliances, we believe in recycling and keeping appliances out of landfills to save our planet, one appliance at a time.",
      mapimg: "./maps/affordable appliances map.png"
    },
    Citadel_Theatre: {
      phone: "847-735-8554",
      address: "300 S Waukegan Rd, Lake Forest, IL 60045",
      img: "./pictures/citadel theatre pic.png",
      website: "http://www.citadeltheatre.org/",
      timings: "9 am - 1/7 pm",
      about: "Citadel Theatre is committed to producing exciting, compelling, emotionally and intellectually rich work of the highest caliber by bringing together gifted professionals from all theatrical disciplines.",
      mapimg: "./maps/citadel theatre map.png"
    },
    Standing_Ovation_Theatre_Academy: {
      phone: "847-752-0202",
      address: "Village Church, Hunt Club Rd, Gurnee, IL 60031",
      img: "./pictures/standing ovation theatre academy pic.png",
      website: "http://standingotheatre.com/",
      timings: "9 am - 4 pm",
      about: "We are a nonprofit, children's community theatre and musical training academy. We stage a minimum of two children's productions and one community theatre (including adults) production each year." ,
      mapimg: "./maps/standing ovation theatre academy map.png"
    },
    James_Lumber_Center_for_the_Performing_Arts: {
      phone: "847-543-2300",
      address: "19351 W Washington St, Grayslake, IL 60030",
      img: "./images/james lumber center for the performing arts pic.png",
      website: "https://www.clcillinois.edu/aboutclc/depts/jlc",
      timings: "11 am - 5 pm",
      about: "Arts venue at the College of Lake County, with large & small theaters for music, drama & dance.",
      mapimg: "./images/james lumber center map.png"
    },
    Improv_Playhouse_Theater: {
      phone: "847-968-4529",
      address: "735 N Milwaukee Ave, Libertyville, IL 60048",
      img: "./pictures/improv playhouse theatre pic.png",
      website: "http://www.improvplayhouse.com/",
      timings: "6 pm - 8 pm",
      about: "The playing of dramatic scenes without written dialogue and with minimal or no predetermined dramatic activity. The method has been used for different purposes in theatrical history.",
      mapimg: "./maps/improv playhouse theatre map.png"
    },
    Genesee_Theatre: {
      phone: "847-263-6300",
      address: "203 N Genesee St, Waukegan, IL 60085",
      img: "./pictures/genesee theatre pic.png",
      website: "http://geneseetheatre.com/",
      timings: "12 pm - 5:30 pm",
      about: "Genesee Theatre is a concert hall and movie palace in Waukegan, Illinois. Today, the venue has seats for 2,403 people and opened in 1927. It's both used as a vaudeville theater and cinema and hosts musical artists and shows.",
      mapimg: "./maps/genesee theatre map.png"
    },
    C_You_At_The_Movies_Inc: {
      phone: "815-578-0500",
      address: "1204 N Green St, McHenry, IL 60050",
      img: "./pictures/c you at the movies pic.png",
      website: "https://mchenrydowntowntheater.com/",
      timings: "10 pm - 4 pm",
      about: "Champaign-Urbana may not be Hollywood, but the twin cities has a bustling film scene. From filming independent films to hosting Ebertfest each April, C-U has quite a story to tell about its contributions to the film industry.",
      mapimg: "./maps/c you at the movies map.png"
    },
    Marcus_Gurnee_Mills_Cinema: {
      phone: "847-855-9945",
      address: "6144 Grand Ave, Gurnee, IL 60031",
      img: "./pictures/marcus gurnee mills cinema pic.png",
      website: "https://www.marcustheatres.com/theatre-locations/gurnee-mills-cinema-gurnee",
      timings: "12 pm - 11:30 pm",
      about: "Theater chain for mainstream films; most offer enhanced picture & sound & expanded dining options.",
      mapimg: "./maps/marcus gurnee mills cinema map.png"
    },
    Regal_Round_Lake_Beach: {
      phone: "844-462-7342",
      address: "550 E Rollins Rd, Round Lake Beach, IL 60073",
      img: "./pictures/regal round lake beach.png",
      website: "https://www.regmovies.com/theatres/regal-round-lake-beach/0398",
      timings: "11 am - 11:30 pm",
      about: "Theater complex with multiple screens featuring new release films, plush seating & concession stand.",
      mapimg: "./maps/regal round lake beach map.png"
    },
    Regal_Lake_Zurich: {
      phone: "844-462-7342",
      address: "755 S Rand Rd, Lake Zurich, IL 60047",
      img: "./pictures/regal lake zurich.png",
      website: "https://www.regmovies.com/theatres/regal-lake-zurich/0620",
      timings: "11 am - 11:30 pm",
      about: "Theater complex with multiple screens featuring new release films, plush seating & concession stand.",
      mapimg: "./maps/regal lake zurich map.png"
    },
    McHenry_Downtown_Indoor_Theater: {
      phone: "815-271-5010",
      address: "1208 N Green St, McHenry, IL 60050",
      img: "./pictures/new mchenry pic.png",
      website: "https://mchenrydowntowntheater.com/",
      timings: "9 pm - 5 pm",
      about: "Venerable drive-in movie theater for current films with a playground, picnic area & concessions.",
      mapimg: "./maps/new mchenry map.png"
    },
    Launch_Trampoline_Park_Gurnee: {
      phone: "224-325-5867",
      address: "880 Lakeside Dr, Gurnee, IL 60031",
      img: "./pictures/launch trampoline park gurnee pic.png",
      website: "https://launchtrampolinepark.com/gurnee/",
      timings: "4 pm - 8 pm",
      about: "Amusement center featuring trampoline-based activities, including dodgeball & jump fitness.",
      mapimg: "./maps/launch trampoline park gurnee map.png"
    },
    Sixty_to_Escape: {
      phone: "844-623-7227",
      address: "6170 W Grand Ave, Gurnee, IL 60031",
      img: "./pictures/60 to escape pic.png",
      website: "https://www.62escape.com/",
      timings: "10 am - 9 pm",
      about: "Escape Rooms are Live Interactive Puzzle Rooms. At 60 to Escape, you will have 60 minutes to complete an immersive adventure! In each different theme, our guests are surrounded by fun and challenging clues, puzzles, and codes.",
      mapimg: "./maps/60 to escape map.png"
    },
    Grayslake_Heritage_Center: {
      phone: "847-543-1745",
      address: "164 Hawley St, Grayslake, IL 60030",
      img: "./pictures/grayslake heritage center pic.png",
      website: "http://www.villageofgrayslake.com/",
      timings: "12 pm - 4 pm",
      about: "A state of the art history museum dedicated to collecting and sharing the history of the greater Grayslake area. The Grayslake Heritage Center offers programs, exhibitions and special events all year round and includes two galleries, a community room and classroom.",
      mapimg: "./maps/grayslake Heritage Center.png"
    },
    K1_Speed: {
      phone: "847-941-9400",
      address: "301 Hastings Dr, Buffalo Grove, IL 60089",
      img: "./pictures/k1 speed.png",
      website: "https://www.k1speed.com/",
      timings: "1 pm - 9 pm",
      about: "K1 Speed is a Californian company that operates go-kart tracks. The company was co-founded in 2003 by American racing driver Boris Said and Susan Danglard, who had previously worked in the fashion industry.",
      mapimg: "./maps/k1 speed map.png"
    },
    Prairie_Grass_Nature_Museum: {
      phone: "847-740-9823",
      address: "860 Hart Rd, Round Lake, IL 60073",
      img: "./pictures/prairie grass nature museum pic.png",
      website: "https://www.rlapd.org/prairie-grass-nature-museum",
      timings: "12 pm - 3 pm",
      about: "Come visit this free museum, which is located in the Aquatic Center next to the Community Center! With its lifelike displays, it is designed to give visitors an experience of the outdoors while staying inside.",
      mapimg: "./maps/praire grass nature museum map.png"
    },
    SixFlags_Great_America: {
      phone: "847-249-1776",
      address: "1 Great America Parkway, Gurnee, IL 60031",
      img: "./pictures/six flags pic.png",
      website: "https://www.sixflags.com/greatamerica",
      timings: "9 am - 5 pm",
      about: "Six Flags Entertainment Corporation is a regional theme park operator. The Company owns and operates approximately 27 regional theme and water parks.",
      mapimg: "./maps/six flags map.png"
    },
    Hurricane_Harbour: {
      phone: "847-249-1766",
      address: "1 Great America Parkway, Gurnee, IL 60031",
      img: "./pictures/hurricane harbour pic.png",
      website: "https://www.sixflags.com/hurricaneharborchicago",
      timings: "11 am - 6 pm",
      about: "Hurricane Harbor offers fun in the summer sun for the entire family with 25 splash-filled attractions, including the world's tallest water coaster, thrilling water slides and kids' splash pads.",
      mapimg: "./maps/hurricane harbour map.png"
    },
    Fort_Sheridan_Forest_Preserve: {
      phone: "847-367-6640",
      address: "1275 Gilgare Ln, Lake Forest, IL 60045",
      img: "./pictures/fort sheridan forest preserve pic.png",
      website: "http://www.lcfpd.org/fort-sheridan/",
      timings: "6:30 am - sunset",
      about: "Fort Sheridan was originally developed as a US Army installation in the late 1800s, consisting of ninety-four contributing historic buildings on 640 acres of prime Lake Michigan property. The area is designated a US historic landmark property.",
      mapimg: "./maps/fort sheridan forest preserve map.png"
    },
    Waukegan_Municipal_Beach: {
      phone: "N/A",
      address: "Waukegan Municipal Beach, Illinois",
      img: "./pictures/waukegan municipal beach pic.png",
      website: "https://waukeganweb.net/index.aspx?NID=266",
      timings: "6 am - 9 pm",
      about: "Waukegan Municipal Beach is easily accessible by car, train, plane, bicycle or boat and is open daily throughout the year.",
      mapimg: "./maps/waukegan municipal beach map.png"
    },
    Volo_Bog_State_Natural_Area: {
      phone: "815-344-1294",
      address: "28478 Brandenburg Rd, Ingleside, IL 60041",
      img: "./pictures/new bog pic.png",
      website: "https://www.dnr.illinois.gov/Parks/Pages/VoloBog.aspx",
      timings: "8 am - sunset",
      about: "Volo Bog State Natural Area is a nature reserve in Illinois, United States, preserving Volo Bog.",
      mapimg: "./maps/new bog map.png"
    },
    Travelodge_By_Wyndham_Waukegan: {
      phone: "847-693-4431",
      address: "3633 N Lewis Ave, Waukegan, IL 60087",
      img: "./pictures/travelodge pic.png",
      website: "https://www.wyndhamhotels.com/travelodge/waukegan-illinois/travelodge-waukegan-gurnee/overview",
      timings: "Always Open",
      about: "A 2-minute walk from Harrison Metro Station, this simple hotel is 1.3 miles from Millennium Park, and 2 miles from the John Hancock Center.",
      mapimg: "./maps/travelodge map.png"
    },
    Deer_Path_Inn: {
      phone: "847-234-2280",
      address: "255 E Illinois Rd, Lake Forest, IL 60045",
      img: "./pictures/new deer pic.png",
      website: "https://www.wyndhamhotels.com/travelodge/waukegan-illinois/travelodge-waukegan-gurnee/overview",
      timings: "Always Open",
      about: "Built in 1929 in the style of a halftimbered Tudor manor house, this upscale hotel is 0.6 miles from Lake Forest College and 1.1 miles from the beach at Forest Park.",
      mapimg: "./maps/new deer map.png"
    },
    Sonesta_Select_Arlington_Heights_North: {
      phone: "847-394-9999",
      address: "3700 N Wilke Rd, Arlington Heights, IL 60004",
      img: "./pictures/sonesta select pic.png",
      website: "https://www.sonesta.com/sonesta-select/il/arlington-heights/sonesta-select-arlington-heights-north/",
      timings: "Always Open",
      about: "This modern hotel is 3.9 miles from the historic village of Long Grove and 6.2 miles from Arlington International Racecourse.",
      mapimg: "./maps/sonesta select map.png"
    },
    La_Quinta_Inn_and_Suites_by_Wyndham_Chicago_Gurnee: {
      phone: "847-662-7600",
      address: "5688 Northridge Dr, Gurnee, IL 60031",
      img: "./pictures/la quinta pic.png",
      website: "https://www.wyndhamhotels.com/laquinta/gurnee-illinois/la-quinta-chicago-gurnee/overview",
      timings: "Always Open",
      about: "Wherever you're headed, La Quinta by Wyndham offers comfortable guest rooms, thoughtful amenities, and signature 'Here for You' service for group trips, business meetings, and more.",
      mapimg: "./maps/la quinta map.png"
    },
    WoodSpring_Suites_Gurnee: {
      phone: "224-808-5096",
      address: "5742 Northridge Dr, Gurnee, IL 60031",
      img: "./pictures/woodspring suites pic.png",
      website: "https://www.woodspring.com/extended-stay-hotels/locations/illinois/gurnee/woodspring-suites-gurnee-north-chicago",
      timings: "Always Open",
      about: "Prairie Premium Outlets are worth checking out if shopping is on the agenda, while those wishing to experience the area's natural beauty can explore Lake Michigan and Illinois Beach State Park. Six Flags Great America and Lake County Fairgrounds are not to be missed.",
      mapimg: "./maps/woodspring suites map.png"
    }
  };



const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.place.split("?")[0];
  let rating = parseInt(params.place.split("?")[1].split("=")[1]);
  let expense = parseInt(params.place.split("?")[2].split("=")[1]);

  var placeArray;
  let formattedPlace = "";

let btn = document.querySelector('button');
let classObj = {
  ori: 'medium',
 
  medium: 'large',
  large: 'ori'
}

btn.addEventListener('click',()=>{
  btn.classList = classObj[btn.classList[0]];
});

  placeArray = value.split('_');
  for (var i = 0; i < placeArray.length; i++) {
  formattedPlace = formattedPlace + placeArray[i] + ' ';
  
  }
document.getElementById("topLeft").innerHTML = "<img id = \'place\' src= \'" + loc[value]["img"] + "\'/>";
  document.getElementById("contact").innerHTML = "<img id = \'person\' class = \'icons\' src= \'./personIcon.jpeg\' " + ">" + "<p id = \'con\'>  Phone: " + loc[value]["phone"] + "</p>" + "<p id = \'con2\'>Website: " + loc[value]["website"] + "</p>"
  document.getElementById("about").innerHTML = "<p> Description: " + loc[value]["about"] + "</p>";
  document.getElementById("address").innerHTML = "<img id = \'map\' src= \'" + loc[value]["mapimg"] +"\'/>" +"<p id = \'ad\'>  " + loc[value]["address"] + "</p>";
  document.getElementById("abt").innerHTML = "<h2>" + formattedPlace + "</h2>"
  document.getElementById("cnt").innerHTML = "<img class = \'icons\' src= \'./addressIcon.jpeg\' " + ">";
  document.getElementById("time").innerHTML = "<p> Times: " + loc[value]["timings"] + "</p>";
  document.getElementById("expense").innerHTML = "<p> Expense: " + expense + "</p>";
  document.getElementById("rate").innerHTML = "<p> Rating: " + rating + "</p>";

/*trying to move stuff around myself" didnt work

  document.getElementById("topLeft").innerHTML =  "<h2>" + formattedPlace + "</h2>"
  document.getElementById("contact").innerHTML = "<img id = \'person\' class = \'icons\' src= \'./personIcon.jpeg\' " + ">" + "<p id = \'con\'>  Phone: " + loc[value]["phone"] + "</p>" + "<p id = \'con2\'>Website: " + loc[value]["website"] + "</p>"
  document.getElementById("about").innerHTML = "<img id = \'place\' src= \'" + loc[value]["img"] + "\'/>";
  document.getElementById("address").innerHTML = "<img id = \'map\' src= \'" + loc[value]["mapimg"] +"\'/>" +"<p id = \'ad\'>  " + loc[value]["address"] + "</p>";
  document.getElementById("abt").innerHTML =  "<p> Description: " + loc[value]["about"] + "</p>";

  document.getElementById("cnt").innerHTML = "<img class = \'icons\' src= \'./addressIcon.jpeg\' " + ">";
  
  document.getElementById("time").innerHTML = "<p> Times: " + loc[value]["timings"] + "</p>";
  document.getElementById("expense").innerHTML = "<p> Expense: " + expense + "</p>";
  document.getElementById("rate").innerHTML = "<p> Rating: " + rating + "</p>";*/
