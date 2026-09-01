/**
 * WORDLY — PREMIUM WHITE & VIOLET ENGLISH & TECHNICAL DICTIONARY
 * Simple, intuitive UI for students and learners across all 26 alphabets (A to Z)
 */

'use strict';

/* ==========================================================================
   1. VOCABULARY DATABASE (A to Z • 260 Words with Plain, Clear Meanings)
   ========================================================================== */
const TECHNICAL_VOCABULARY = {
  A: [
    { word: "Algorithm", pronunciation: "/ˈæl.ɡə.rɪð.əm/", meaning: "A step-by-step set of clear instructions or rules designed to solve a problem or perform a calculation.", example: "Google uses a smart algorithm to deliver search results in milliseconds." },
    { word: "Asynchronous", pronunciation: "/eɪˈsɪŋ.krə.nəs/", meaning: "Processes or communications that occur independently without waiting for each other to finish.", example: "Asynchronous web requests let pages load background data without freezing the screen." },
    { word: "Actuator", pronunciation: "/ˈæk.tʃu.eɪ.tər/", meaning: "A mechanical component that uses energy to create physical motion or movement in a machine.", example: "Electric actuators move the robot's mechanical arm with pinpoint precision." },
    { word: "Amplitude", pronunciation: "/ˈæm.plɪ.tʃuːd/", meaning: "The maximum height or strength of a wave measured from its center position.", example: "Turning up the volume dial increases the sound wave amplitude." },
    { word: "Architecture", pronunciation: "/ˈɑː.kɪ.tek.tʃər/", meaning: "The fundamental structure and organization of a computer system or software application.", example: "ARM architecture powers the microprocessors inside most modern smartphones." },
    { word: "Anodize", pronunciation: "/ˈæn.ə.daɪz/", meaning: "An electrochemical coating process that makes metal surfaces resistant to corrosion and scratches.", example: "Laptop aluminum cases are anodized to protect against everyday wear and tear." },
    { word: "Aerodynamics", pronunciation: "/ˌeə.rəʊ.daɪˈnæm.ɪks/", meaning: "The study of how air moves around moving objects like cars, planes, and rockets.", example: "Sports cars have sleek aerodynamic shapes to reduce wind drag and improve speed." },
    { word: "Abstraction", pronunciation: "/æbˈstræk.ʃən/", meaning: "Simplifying complex reality by focusing only on essential features rather than low-level details.", example: "A car's steering wheel is an abstraction that lets you steer without knowing the mechanical gears." },
    { word: "Acceleration", pronunciation: "/əkˌsel.əˈreɪ.ʃən/", meaning: "The rate at which an object increases its velocity or speed over time.", example: "Electric vehicles achieve rapid acceleration because motors deliver instant power." },
    { word: "Attenuation", pronunciation: "/əˌten.juˈeɪ.ʃən/", meaning: "The gradual reduction or loss of signal strength as it travels through a cable or air.", example: "Wi-Fi signal attenuation occurs when radio waves pass through thick concrete walls." }
  ],

  B: [
    { word: "Bandwidth", pronunciation: "/ˈbænd.wɪtθ/", meaning: "The maximum amount of data that can travel through an internet connection in a given time.", example: "Fiber-optic broadband provides huge bandwidth for streaming 4K video." },
    { word: "Binary", pronunciation: "/ˈbaɪ.nər.i/", meaning: "A number system using only two digits (0 and 1) that forms the foundation of all computers.", example: "All computer software and digital files are stored internally as binary code." },
    { word: "Backpropagation", pronunciation: "/ˌbæk.prɒp.əˈɡeɪ.ʃən/", meaning: "A machine learning algorithm that teaches artificial neural networks by correcting mistakes.", example: "Backpropagation helps AI image models learn to recognize objects accurately." },
    { word: "Buckling", pronunciation: "/ˈbʌk.lɪŋ/", meaning: "The sudden bending or collapse of a structural column when pushed under heavy pressure.", example: "Engineers added steel cross-beams to prevent the bridge towers from buckling." },
    { word: "Boolean", pronunciation: "/ˈbuː.li.ən/", meaning: "A type of logic or data type that has only two possible values: True or False.", example: "The login check returns a boolean value to confirm if your password is correct." },
    { word: "Bus", pronunciation: "/bʌs/", meaning: "An internal communication pathway that transfers data between different parts of a computer.", example: "The memory bus transfers data rapidly between the CPU and RAM chips." },
    { word: "Baud", pronunciation: "/bɔːd/", meaning: "A unit measuring the speed of data transmission in electronic communication channels.", example: "The serial port was configured to communicate with the sensor at 9600 baud." },
    { word: "Bernoulli", pronunciation: "/bɜːˈnuː.li/", meaning: "A physical principle explaining how faster moving air creates lower pressure.", example: "Bernoulli's principle helps explain how airplane wings create lift to fly." },
    { word: "Bias", pronunciation: "/ˈbaɪ.əs/", meaning: "A steady electrical voltage applied to an electronic component to set its operating state.", example: "Transistors require a small forward bias voltage to turn on and conduct electricity." },
    { word: "Blockchain", pronunciation: "/ˈblɒk.tʃeɪn/", meaning: "A secure, decentralized digital record of transactions shared across a network of computers.", example: "Cryptocurrencies use blockchain technology to prevent unauthorized modification of records." }
  ],

  C: [
    { word: "Capacitance", pronunciation: "/kəˈpæs.ɪ.təns/", meaning: "The ability of an electronic component to store electrical energy in an electrostatic field.", example: "Capacitors smooth out voltage spikes in power supplies using their capacitance." },
    { word: "Compiler", pronunciation: "/kəmˈpaɪ.lər/", meaning: "A computer program that translates human-written code into machine language the computer can run.", example: "The compiler turned the C++ program into an executable file for Windows." },
    { word: "Concurrency", pronunciation: "/kənˈkʌr.ən.si/", meaning: "The ability of a computer program to handle multiple tasks at the same time efficiently.", example: "Web servers use concurrency to answer thousands of user requests at the same moment." },
    { word: "Cantilever", pronunciation: "/ˈkæn.tɪ.liː.vər/", meaning: "A beam or structure that extends horizontally and is supported at only one end.", example: "Diving boards and balcony decks are common examples of cantilever structures." },
    { word: "Combustion", pronunciation: "/kəmˈbʌs.tʃən/", meaning: "A rapid chemical reaction between fuel and oxygen that produces heat and light (burning).", example: "Car engines burn gasoline through controlled combustion to create mechanical power." },
    { word: "Calibration", pronunciation: "/ˌkæl.ɪˈbreɪ.ʃən/", meaning: "Adjusting a measuring tool to make sure its readings are completely accurate against a standard.", example: "The digital kitchen scale needed calibration with a 100g standard weight." },
    { word: "Circuit", pronunciation: "/ˈsɜː.kɪt/", meaning: "A complete closed path through which electric current can flow from a power source and return.", example: "Flipping the wall switch closes the circuit and turns on the ceiling lights." },
    { word: "Corrosion", pronunciation: "/kəˈrəʊ.ʒən/", meaning: "The gradual breakdown and rusting of metals caused by exposure to moisture, oxygen, or chemicals.", example: "Stainless steel contains chromium to prevent surface corrosion and rust." },
    { word: "Cryptography", pronunciation: "/krɪpˈtɒɡ.rə.fi/", meaning: "The art and science of protecting sensitive information by converting it into secure codes.", example: "Online banking relies on modern cryptography to keep credit card numbers safe." },
    { word: "Centrifugal", pronunciation: "/senˈtrɪf.jʊ.ɡəl/", meaning: "An outward force experienced by an object moving in a curved or spinning path.", example: "Washing machines use centrifugal force during the spin cycle to extract water from clothes." }
  ],

  D: [
    { word: "Diode", pronunciation: "/ˈdaɪ.əʊd/", meaning: "A semiconductor device that allows electric current to flow in only one direction.", example: "Light-Emitting Diodes (LEDs) produce bright light while using very little electricity." },
    { word: "Deadlock", pronunciation: "/ˈded.lɒk/", meaning: "A situation where two computer programs are stuck waiting for each other to release resources.", example: "Good software design prevents deadlocks so programs never freeze indefinitely." },
    { word: "Dynamics", pronunciation: "/daɪˈnæm.ɪks/", meaning: "The branch of physical science that studies how forces affect the motion of moving objects.", example: "Vehicle dynamics engineers test how cars handle sharp turns on wet roads." },
    { word: "Damping", pronunciation: "/ˈdæm.pɪŋ/", meaning: "The reduction or absorption of vibrations and oscillations in a mechanical system.", example: "Car shock absorbers use oil damping to smooth out bumpy road impacts." },
    { word: "Deflection", pronunciation: "/dɪˈflek.ʃən/", meaning: "The degree to which a structural beam bends or flexes downward under heavy weight.", example: "The floor beam was designed for minimal deflection so the ceiling wouldn't sag." },
    { word: "Decryption", pronunciation: "/diːˈkrɪp.ʃən/", meaning: "The process of converting encrypted secret code back into readable plain text.", example: "Entering your passcode triggers decryption of your encrypted smartphone storage." },
    { word: "Differential", pronunciation: "/ˌdɪf.əˈren.ʃəl/", meaning: "A set of gears that allows drive wheels on a car to turn at different speeds when cornering.", example: "The rear differential lets the outside wheel spin faster than the inside wheel during turns." },
    { word: "Demodulation", pronunciation: "/diːˌmɒd.jʊˈleɪ.ʃən/", meaning: "Extracting the original sound or data signal from a high-frequency radio carrier wave.", example: "The FM radio receiver performs demodulation to play music through the speakers." },
    { word: "Database", pronunciation: "/ˈdeɪ.tə.beɪs/", meaning: "An organized electronic collection of structured data that can be easily searched and updated.", example: "Hospital databases store patient medical records securely for instant lookup." },
    { word: "Distortion", pronunciation: "/dɪˈstɔː.ʃən/", meaning: "An unwanted alteration or warping in the original shape of an audio or electronic waveform.", example: "Turning the speaker volume past its limit causes harsh audio distortion." }
  ],

  E: [
    { word: "Entropy", pronunciation: "/ˈen.trə.pi/", meaning: "A measure of disorder, randomness, or unavailable energy in a closed physical system.", example: "The Second Law of Thermodynamics states that entropy in the universe naturally increases." },
    { word: "Encryption", pronunciation: "/ɪnˈkrɪp.ʃən/", meaning: "The process of scrambling readable data into secret code so unauthorized people cannot read it.", example: "WhatsApp uses end-to-end encryption so only you and the recipient can read your messages." },
    { word: "Elasticity", pronunciation: "/ˌiː.læsˈtɪs.ə.ti/", meaning: "The property of a material to stretch under force and return to its original shape when released.", example: "Rubber bands demonstrate high elasticity by snapping back after being stretched." },
    { word: "Electrolyte", pronunciation: "/iˈlek.trə.laɪt/", meaning: "A chemical liquid or gel containing ions that conducts electricity inside a battery.", example: "Lithium-ion batteries contain chemical electrolytes that carry charge between terminals." },
    { word: "Ethernet", pronunciation: "/ˈiː.θə.net/", meaning: "A widely used standard system for connecting computers together in a local area network via cables.", example: "Plugging in an Ethernet cable gives a faster and more stable connection than Wi-Fi." },
    { word: "Equilibrium", pronunciation: "/ˌek.wɪˈlɪb.ri.əm/", meaning: "A balanced state where all opposing forces or influences cancel each other out completely.", example: "When an airplane cruises at a constant altitude, lift and gravity are in equilibrium." },
    { word: "Emulation", pronunciation: "/ˌem.jʊˈleɪ.ʃən/", meaning: "Software that allows one computer system to mimic and run programs built for another system.", example: "Retro console emulators let you play classic arcade games on a modern PC." },
    { word: "Enthalpy", pronunciation: "/ˈen.θəl.pi/", meaning: "A thermodynamic property representing the total heat content of a physical system.", example: "Chemical engineers calculate enthalpy changes to find out how much heat a reaction releases." },
    { word: "Eigenvalue", pronunciation: "/ˈaɪ.ɡənˌvæl.juː/", meaning: "A special mathematical scalar number showing how a vector transforms in linear algebra.", example: "Facial recognition systems use eigenvalues to identify key facial proportions." },
    { word: "Extrusion", pronunciation: "/ɪkˈstruː.ʒən/", meaning: "Shaping material by pushing it through a specially shaped opening or nozzle (like 3D printing).", example: "Aluminum window frames and plastic pipes are manufactured using continuous extrusion." }
  ],

  F: [
    { word: "Feedback", pronunciation: "/ˈfiːd.bæk/", meaning: "Using a system's output information to automatically adjust and control its future actions.", example: "Thermostats use temperature feedback to turn home heating on or off automatically." },
    { word: "Friction", pronunciation: "/ˈfrɪk.ʃən/", meaning: "The resistive force that opposes the sliding motion of two surfaces touching each other.", example: "Bicycle brakes press pads against the wheel rim to create friction and stop the bike." },
    { word: "Firmware", pronunciation: "/ˈfɜːm.weər/", meaning: "Permanent low-level software programmed directly into a hardware chip to control basic functions.", example: "Smart TVs receive occasional firmware updates to add features and fix system bugs." },
    { word: "Fluid", pronunciation: "/ˈfluː.ɪd/", meaning: "Any substance that flows easily and takes the shape of its container (both liquids and gases).", example: "Water, air, and hydraulic oil are all classified scientifically as fluids." },
    { word: "Frequency", pronunciation: "/ˈfriː.kwən.si/", meaning: "The number of times a repeating wave or event happens in one second, measured in Hertz (Hz).", example: "Household wall outlets supply electricity at a standard frequency of 50 or 60 Hz." },
    { word: "Fatigue", pronunciation: "/fəˈtiːɡ/", meaning: "Structural weakening and microscopic cracking of materials caused by repeated back-and-forth stress.", example: "Airplane wings are tested for metal fatigue after thousands of flight takeoff cycles." },
    { word: "Framework", pronunciation: "/ˈfreɪm.wɜːk/", meaning: "A structured set of reusable software tools and libraries that makes building applications easier.", example: "Developers use web frameworks to build responsive, modern websites quickly." },
    { word: "Flux", pronunciation: "/flʌks/", meaning: "The total amount of magnetic field or energy passing through a given surface area.", example: "Electric generators create electricity by rotating copper coils through magnetic flux." },
    { word: "Frontend", pronunciation: "/ˈfrʌnt.end/", meaning: "The visual, interactive part of a website or app that users directly see and touch.", example: "HTML, CSS, and JavaScript are the three core technologies for building frontends." },
    { word: "Fracture", pronunciation: "/ˈfræk.tʃər/", meaning: "The breaking or separation of a solid material into pieces when stressed beyond its limit.", example: "Cast iron is brittle and will fracture suddenly if struck hard with a hammer." }
  ],

  G: [
    { word: "Gateway", pronunciation: "/ˈɡeɪt.weɪ/", meaning: "A network device or server that connects two different computer networks together.", example: "Your home Wi-Fi router acts as a gateway connecting your devices to the wider internet." },
    { word: "Gearbox", pronunciation: "/ˈɡɪə.bɒks/", meaning: "A mechanical casing containing gears that changes speed, direction, and torque from a motor.", example: "Car gearboxes change gear ratios to provide strong hill climbing or fast highway cruising." },
    { word: "Generator", pronunciation: "/ˈdʒen.ər.eɪ.tər/", meaning: "A machine that converts physical mechanical motion into useful electrical energy.", example: "Wind turbines turn massive generator coils to produce clean renewable electricity." },
    { word: "Gradient", pronunciation: "/ˈɡreɪ.di.ənt/", meaning: "The rate of change or steepness of a curve, temperature, or mathematical function.", example: "AI algorithms use gradient descent to gradually step down toward the lowest error rate." },
    { word: "Gyroscope", pronunciation: "/ˈdʒaɪ.rə.skəʊp/", meaning: "A sensor or spinning wheel device used to measure orientation and rotation in 3D space.", example: "Smartphones use microscopic gyroscopes to detect when you rotate screen orientation." },
    { word: "Grid", pronunciation: "/ɡrɪd/", meaning: "An interconnected regional network that distributes electrical power across cities and states.", example: "Solar panels can feed extra generated power back into the public electrical grid." },
    { word: "Grounding", pronunciation: "/ˈɡraʊn.dɪŋ/", meaning: "Connecting an electrical circuit safely to the physical earth to prevent dangerous electric shocks.", example: "All three-prong electrical appliances have a grounding pin for home safety." },
    { word: "Graph", pronunciation: "/ɡrɑːf/", meaning: "A data structure made of interconnected points (nodes) and connecting lines (edges).", example: "Mapping apps use graphs to calculate the quickest driving route between locations." },
    { word: "Gasket", pronunciation: "/ˈɡæs.kɪt/", meaning: "A rubber or metal seal placed between two joined surfaces to stop liquids or gases from leaking.", example: "The rubber gasket on your refrigerator door keeps cool air sealed inside." },
    { word: "Galvanize", pronunciation: "/ˈɡæl.və.naɪz/", meaning: "Coating iron or steel with a protective zinc layer to stop it from rusting outdoors.", example: "Galvanized steel fences stay rust-free even after years in heavy rain." }
  ],

  H: [
    { word: "Hardware", pronunciation: "/ˈhɑːd.weər/", meaning: "The physical electronic parts and components of a computer that you can touch.", example: "Monitors, keyboards, memory chips, and hard drives are all computer hardware." },
    { word: "Hydraulics", pronunciation: "/haɪˈdrɔː.lɪks/", meaning: "Using pressurized liquids to move heavy machinery and multiply lifting power.", example: "Excavators and cranes use hydraulic fluid pistons to lift tons of heavy rock." },
    { word: "Heuristic", pronunciation: "/hjʊəˈrɪs.tɪk/", meaning: "A practical shortcut rule or method used to find a good solution quickly when perfection isn't needed.", example: "Antivirus software uses heuristic rules to spot suspicious unknown files." },
    { word: "Harmonic", pronunciation: "/hɑːˈmɒn.ɪk/", meaning: "A wave frequency that is an exact multiple of a base fundamental frequency.", example: "Musical instruments produce different sound tones because of their rich harmonic vibrations." },
    { word: "Hashing", pronunciation: "/ˈhæʃ.ɪŋ/", meaning: "Converting any text into a fixed-length scrambled code to protect passwords and verify files.", example: "Websites store hashed versions of passwords so even employees cannot read them." },
    { word: "Heatmap", pronunciation: "/ˈhiːt.mæp/", meaning: "A color-coded visual chart that shows where values or user activity are highest.", example: "Website heatmaps show which buttons visitors click on the most." },
    { word: "Hydrodynamics", pronunciation: "/ˌhaɪ.drəʊ.daɪˈnæm.ɪks/", meaning: "The science of how liquids behave when moving and interacting with solid surfaces.", example: "Boat hulls are designed with hydrodynamics in mind to glide smoothly through waves." },
    { word: "Harness", pronunciation: "/ˈhɑː.nəs/", meaning: "A neatly organized bundle of insulated electrical wires and connectors inside a machine.", example: "Cars have a master wiring harness that connects all lights and sensors to the computer." },
    { word: "Holography", pronunciation: "/hɒlˈɒɡ.rə.fi/", meaning: "A 3D photographic technique that uses lasers to create realistic freestanding 3D images.", example: "Credit cards feature small holographic security seals that change appearance when tilted." },
    { word: "Hybrid", pronunciation: "/ˈhaɪ.brɪd/", meaning: "A system that combines two different technologies together to get the best of both.", example: "Hybrid cars combine a gasoline engine with an electric battery to save fuel." }
  ],

  I: [
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", meaning: "The total opposition that an electrical circuit presents to the flow of alternating current (AC).", example: "Headphones with 32-ohm impedance work well with smartphones and laptops." },
    { word: "Inductor", pronunciation: "/ɪnˈdʌk.tər/", meaning: "A coil of wire that stores electrical energy inside a magnetic field when current passes through.", example: "Inductors filter out electrical noise and stabilize power supplies." },
    { word: "Interface", pronunciation: "/ˈɪn.tə.feɪs/", meaning: "The boundary, menu, or connector where two different systems meet and exchange information.", example: "The touchscreen interface makes operating modern tablets easy and intuitive." },
    { word: "Iteration", pronunciation: "/ˌɪt.ərˈeɪ.ʃən/", meaning: "Repeating a process or design cycle multiple times to gradually improve the final result.", example: "Engineers built several prototype iterations before releasing the final phone." },
    { word: "Inertia", pronunciation: "/ɪˈnɜː.ʃə/", meaning: "The natural tendency of an object to resist changes to its speed or direction of movement.", example: "Seatbelts protect passengers from inertia when a car stops suddenly." },
    { word: "Insulation", pronunciation: "/ˌɪn.sjəˈleɪ.ʃən/", meaning: "A protective barrier material that prevents the escape of electricity, heat, or sound.", example: "Rubber insulation surrounds electrical cords so you don't get shocked." },
    { word: "Impulse", pronunciation: "/ˈɪm.pʌls/", meaning: "A sudden burst of force applied over a short time that changes an object's momentum.", example: "Hitting a golf ball delivers an instant force impulse that sends it flying." },
    { word: "Inheritance", pronunciation: "/ɪnˈher.ɪ.təns/", meaning: "A programming feature where new code can reuse and build upon properties from existing code.", example: "In object-oriented code, an 'ElectricCar' class inherits traits from a general 'Car' class." },
    { word: "Infrastructure", pronunciation: "/ˈɪn.frəˌstrʌk.tʃər/", meaning: "The fundamental physical systems like roads, water pipes, power lines, and internet cables.", example: "High-speed internet infrastructure connects rural communities to global opportunities." },
    { word: "Injection", pronunciation: "/ɪnˈdʒek.ʃən/", meaning: "Forcing a liquid or material under pressure into a chamber, engine cylinder, or mold.", example: "Electronic fuel injection delivers the exact mist of gasoline needed for clean burning." }
  ],

  J: [
    { word: "Jitter", pronunciation: "/ˈdʒɪt.ər/", meaning: "Small, unwanted timing delays and fluctuations in digital signal transmission.", example: "High network jitter causes video calls to stutter and audio to sound robotic." },
    { word: "Joule", pronunciation: "/dʒuːl/", meaning: "The standard international unit used to measure energy and work performed.", example: "A standard 60-watt light bulb consumes 60 joules of energy every second." },
    { word: "Junction", pronunciation: "/ˈdʒʌŋk.ʃən/", meaning: "A point where two or more electrical wires, pipes, or semiconductor layers meet.", example: "Solar panels produce electricity at the internal silicon P-N junction." },
    { word: "Joint", pronunciation: "/dʒɔɪnt/", meaning: "The physical connection point joining two or more mechanical or structural parts together.", example: "Robotic arm joints rotate smoothly on precision ball bearings." },
    { word: "JavaScript", pronunciation: "/ˈdʒɑː.və.skrɪpt/", meaning: "The primary programming language used to make websites interactive, dynamic, and responsive.", example: "This entire dictionary application is powered by responsive JavaScript logic." },
    { word: "Jet", pronunciation: "/dʒet/", meaning: "A high-speed, powerful stream of liquid or gas forced through a narrow nozzle.", example: "Water jet cutters spray high-pressure water to slice through thick steel sheets." },
    { word: "Journal", pronunciation: "/ˈdʒɜː.nəl/", meaning: "The polished section of a rotating machine shaft that rests inside a bearing.", example: "Engine oil keeps the crankshaft journal floating without touching metal surfaces." },
    { word: "Jumper", pronunciation: "/ˈdʒʌm.pər/", meaning: "A tiny metal connector clip used to bridge pins and set options on a circuit board.", example: "Technicians move a small jumper clip to reset the computer motherboard settings." },
    { word: "JSON", pronunciation: "/ˈdʒeɪ.sən/", meaning: "A simple, readable text format used by computers to store and exchange data over the internet.", example: "Weather apps receive hourly forecasts packaged in lightweight JSON format." },
    { word: "Justification", pronunciation: "/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/", meaning: "The technical reasoning and data provided to prove that an engineering design is safe and sound.", example: "The engineer provided stress calculation reports as justification for the bridge design." }
  ],

  K: [
    { word: "Kinematics", pronunciation: "/ˌkɪn.əˈmæt.ɪks/", meaning: "The branch of physics and engineering that studies motion without considering the forces causing it.", example: "Kinematics formulas calculate the robotic arm's position, speed, and trajectory." },
    { word: "Kernel", pronunciation: "/ˈkɜː.nəl/", meaning: "The central core program of an operating system that manages the CPU, memory, and devices.", example: "The Linux kernel manages hardware access safely for all installed apps." },
    { word: "Kilowatt", pronunciation: "/ˈkɪl.ə.wɒt/", meaning: "A unit of electrical power equal to 1,000 watts (1 kW).", example: "An electric kettle uses about 1.5 kilowatts of power while boiling water." },
    { word: "Kinetic", pronunciation: "/kɪˈnet.ɪk/", meaning: "Relating to or resulting from the physical motion of an object (energy of movement).", example: "Brakes convert moving vehicle kinetic energy into harmless heat." },
    { word: "Karnaugh", pronunciation: "/ˈkɑː.nɔː/", meaning: "A visual grid diagram used in electronics to simplify binary logic expressions easily.", example: "Engineering students use Karnaugh maps to reduce the number of logic chips required." },
    { word: "Kalman", pronunciation: "/ˈkæl.mən/", meaning: "A mathematical algorithm that combines noisy sensor readings to find the true accurate position.", example: "Drones use Kalman filters to combine GPS, compass, and gyroscope data for smooth flight." },
    { word: "K-Means", pronunciation: "/ˈkeɪ.miːnz/", meaning: "A machine learning algorithm that groups similar data points into distinct clusters automatically.", example: "Streaming platforms use K-means to group users with similar music tastes." },
    { word: "Kirchhoff", pronunciation: "/ˈkɪərk.hɒf/", meaning: "Fundamental circuit laws stating that electrical charge and energy are always conserved in circuits.", example: "Kirchhoff's current law states that all current entering an electrical junction must exit it." },
    { word: "Keyframe", pronunciation: "/ˈkiː.freɪm/", meaning: "A main milestone drawing or marker in video and animation that defines key movement positions.", example: "Video editors place keyframes to smoothly animate a logo across the screen." },
    { word: "Knot", pronunciation: "/nɒt/", meaning: "A unit measuring speed on water and in the air, equal to one nautical mile per hour (1.85 km/h).", example: "The cargo ship crossed the ocean at a steady cruising speed of 20 knots." }
  ],

  L: [
    { word: "Latency", pronunciation: "/ˈleɪ.tən.si/", meaning: "The small time delay between sending a command and receiving the response over a network.", example: "Low latency is essential for smooth online gaming and real-time video calls." },
    { word: "Logic", pronunciation: "/ˈlɒdʒ.ɪk/", meaning: "The set of mathematical rules and step-by-step reasoning that controls computer software and circuits.", example: "Logic gates combine binary 0s and 1s to perform calculations inside the processor." },
    { word: "Laser", pronunciation: "/ˈleɪ.zər/", meaning: "A device that emits an intense, focused beam of pure light of a single wavelength.", example: "Barcode scanners in grocery stores use safe laser beams to read item labels." },
    { word: "Lubrication", pronunciation: "/ˌluː.brɪˈkeɪ.ʃən/", meaning: "Applying oil or grease between touching moving parts to reduce friction and heat.", example: "Regular engine oil lubrication prevents car engine parts from grinding and seizing." },
    { word: "Linux", pronunciation: "/ˈlɪn.əks/", meaning: "A popular, reliable, open-source computer operating system used on servers and supercomputers.", example: "Android phones are built on top of the open-source Linux kernel." },
    { word: "Luminescence", pronunciation: "/ˌluː.mɪˈnes.əns/", meaning: "The emission of cool light caused by chemical reactions or electricity rather than heat.", example: "Fireflies and glow sticks produce light through natural chemical luminescence." },
    { word: "Loadcell", pronunciation: "/ˈləʊd.sel/", meaning: "An electronic weight sensor that converts physical pushing force into an electrical signal.", example: "Bathroom digital scales use load cells to measure your weight accurately." },
    { word: "Lever", pronunciation: "/ˈliː.vər/", meaning: "A simple mechanical tool consisting of a rigid bar pivoted on a fulcrum to multiply lifting force.", example: "Crowbars and seesaws are classic everyday examples of levers." },
    { word: "Lithium", pronunciation: "/ˈlɪθ.i.əm/", meaning: "A lightweight metal element that stores significant electrical energy in rechargeable batteries.", example: "Lithium batteries power smartphones, laptops, and electric cars worldwide." },
    { word: "Loop", pronunciation: "/luːp/", meaning: "A programming command that repeats a block of instructions until a specific goal is achieved.", example: "The music app uses a loop to play all songs in your playlist one by one." }
  ],

  M: [
    { word: "Microcontroller", pronunciation: "/ˌmaɪ.krəʊ.kənˈtrəʊ.lər/", meaning: "A single computer chip containing a processor, memory, and input/output pins to control devices.", example: "Microwave ovens and washing machines are controlled by small microcontrollers." },
    { word: "Modulation", pronunciation: "/ˌmɒd.jʊˈleɪ.ʃən/", meaning: "Encoding voice, music, or data onto a radio frequency carrier wave for wireless broadcasting.", example: "Wi-Fi routers modulate data into radio signals that your laptop receives." },
    { word: "Multithreading", pronunciation: "/ˌmʌl.tiˈθred.ɪŋ/", meaning: "Allowing a computer processor core to work on multiple tasks at the same time.", example: "Multithreading lets you render a video while continuing to browse the web smoothly." },
    { word: "Metallurgy", pronunciation: "/məˈtæl.ə.dʒi/", meaning: "The scientific study of metal properties and techniques for making stronger metal alloys.", example: "Metallurgy breakthroughs allowed the creation of super-strong, lightweight titanium alloys." },
    { word: "Momentum", pronunciation: "/məˈmen.təm/", meaning: "The quantity of motion an object has, calculated by multiplying its mass by its velocity.", example: "A heavy train has huge momentum and takes a long distance to come to a complete stop." },
    { word: "Middleware", pronunciation: "/ˈmɪd.əl.weər/", meaning: "Software that acts as a bridge helping two different applications communicate with each other.", example: "Middleware connects the website frontend securely to the banking database backend." },
    { word: "Magnetism", pronunciation: "/ˈmæɡ.nə.tɪ.zəm/", meaning: "The invisible physical force produced by magnets and electrical currents that attracts or repels objects.", example: "Electric motors use magnetism to turn electrical current into spinning mechanical force." },
    { word: "Mesh", pronunciation: "/meʃ/", meaning: "A network design where multiple devices connect to each other directly to share coverage.", example: "Mesh Wi-Fi systems place multiple small hubs around a house to eliminate dead spots." },
    { word: "Matrix", pronunciation: "/ˈmeɪ.trɪks/", meaning: "A rectangular grid arrangement of numbers in rows and columns used in math and 3D graphics.", example: "Video game graphics cards multiply 3D matrices millions of times per second." },
    { word: "Machining", pronunciation: "/məˈʃiː.nɪŋ/", meaning: "Cutting and shaping solid raw metal into a precise final part using tools like drills and mills.", example: "CNC machining carved the aluminum camera body from a solid metal block." }
  ],

  N: [
    { word: "Network", pronunciation: "/ˈnet.wɜːk/", meaning: "A group of computers and devices linked together to share files, printers, and internet access.", example: "Office computers connect to a local network to share documents and access servers." },
    { word: "Node", pronunciation: "/nəʊd/", meaning: "Any single connected device or junction point within a larger computer network.", example: "Every computer, phone, and smart light bulb connected to your Wi-Fi is a network node." },
    { word: "Nanotechnology", pronunciation: "/ˌnæn.əʊ.tekˈnɒl.ə.dʒi/", meaning: "Building and engineering materials at an atomic and molecular scale under 100 nanometers.", example: "Nanotechnology creates ultra-thin water-repellent coatings for waterproof clothing." },
    { word: "Normalization", pronunciation: "/ˌnɔː.məl.aɪˈzeɪ.ʃən/", meaning: "Organizing database tables to eliminate duplicate data, or scaling numbers into a standard 0 to 1 range.", example: "Data normalization makes search queries faster and keeps customer records tidy." },
    { word: "Nyquist", pronunciation: "/ˈnaɪ.kwɪst/", meaning: "A digital audio rule stating you must sample sound at least twice its highest frequency for clarity.", example: "CDs sample audio at 44,100 times per second according to the Nyquist theorem." },
    { word: "Nozzle", pronunciation: "/ˈnɒz.əl/", meaning: "A shaped spout at the end of a pipe that speeds up and directs the flow of liquid or gas.", example: "Fire hose nozzles accelerate water streams to reach high building windows." },
    { word: "Null", pronunciation: "/nʌl/", meaning: "A special value in programming that represents empty, missing, or unassigned data.", example: "If a user leaves their phone number blank, the database stores it as a null value." },
    { word: "Newton", pronunciation: "/ˈnjuː.tən/", meaning: "The standard scientific unit for measuring physical force (named after Isaac Newton).", example: "Lifting an average apple takes about one newton of upward force." },
    { word: "Navigation", pronunciation: "/ˌnæv.ɪˈɡeɪ.ʃən/", meaning: "The art and science of finding your position and directing movement to reach a destination.", example: "GPS satellite navigation gives turn-by-turn directions directly on your phone." },
    { word: "Nucleation", pronunciation: "/ˌnjuː.kliˈeɪ.ʃən/", meaning: "The initial starting point where crystals, bubbles, or ice first begin to form in a liquid.", example: "Mentos candies trigger rapid bubble nucleation when dropped into a bottle of soda." }
  ],

  O: [
    { word: "Optimization", pronunciation: "/ˌɒp.tɪ.maɪˈzeɪ.ʃən/", meaning: "Making a system, program, or process as efficient, fast, and effective as possible.", example: "Code optimization made the smartphone app launch in half the previous time." },
    { word: "Oscillator", pronunciation: "/ˈɒs.ɪ.leɪ.tər/", meaning: "An electronic circuit that generates continuous repeating wave pulses, like a clock heartbeat.", example: "A quartz crystal oscillator keeps precise time inside digital wristwatches." },
    { word: "Overclock", pronunciation: "/ˌəʊ.vəˈklɒk/", meaning: "Configuring a computer processor to run at a faster speed than its factory default rating.", example: "Gamers sometimes overclock their graphics card to get higher frame rates in games." },
    { word: "Ontology", pronunciation: "/ɒnˈtɒl.ə.dʒi/", meaning: "A structured dictionary and map showing how different concepts in a subject relate to each other.", example: "Medical ontologies help computers organize disease symptoms and treatments." },
    { word: "Orthogonal", pronunciation: "/ɔːˈθɒɡ.ən.əl/", meaning: "Meeting at a 90-degree right angle, or being completely independent of each other.", example: "The horizontal and vertical grid lines on graph paper are orthogonal." },
    { word: "Overfitting", pronunciation: "/ˌəʊ.vəˈfɪt.ɪŋ/", meaning: "When an AI memorizes training examples too closely and fails when given new, unseen data.", example: "Engineers added diverse photos to prevent the AI model from overfitting." },
    { word: "Optics", pronunciation: "/ˈɒp.tɪks/", meaning: "The branch of science that studies how light travels, bends, reflects, and interacts with lenses.", example: "Eyeglasses and telescope lenses are designed using the principles of optics." },
    { word: "Osmosis", pronunciation: "/ɒzˈməʊ.sɪs/", meaning: "The natural movement of water molecules through a semi-permeable filter membrane.", example: "Reverse osmosis water purifiers remove impurities to make clean drinking water." },
    { word: "Output", pronunciation: "/ˈaʊt.pʊt/", meaning: "The resulting information, sound, or action produced by a computer after processing.", example: "The computer's output was displayed on the screen and printed on paper." },
    { word: "Ohm", pronunciation: "/əʊm/", meaning: "The standard scientific unit for measuring resistance to electric current (named after Georg Ohm).", example: "A standard speaker has an electrical resistance rating of 4 or 8 ohms." }
  ],

  P: [
    { word: "Processor", pronunciation: "/ˈprəʊ.ses.ər/", meaning: "The main electronic chip (CPU) inside a computer that executes all software commands and math.", example: "Multi-core processors allow computers to run dozens of apps at once without slowing down." },
    { word: "Protocol", pronunciation: "/ˈprəʊ.tə.kɒl/", meaning: "An agreed set of standard rules that computers use to talk and exchange data with each other.", example: "HTTPS is the secure web protocol used to browse websites safely." },
    { word: "Piezoelectric", pronunciation: "/paɪˌeɪ.zəʊ.ɪˈlek.trɪk/", meaning: "Materials that generate electrical voltage when squeezed or vibrate when voltage is applied.", example: "Electronic barbecue lighters use a piezoelectric crystal to create an ignition spark." },
    { word: "Pneumatics", pronunciation: "/njuːˈmæt.ɪks/", meaning: "Using compressed air to power tools and mechanical movements in factory machines.", example: "Pneumatic air tools allow mechanics to change race car tires in seconds." },
    { word: "Polymorphism", pronunciation: "/ˌpɒl.iˈmɔː.fɪ.zəm/", meaning: "A programming principle where different objects can respond to the same command in their own way.", example: "A 'draw' command can draw a circle, a square, or a triangle using polymorphism." },
    { word: "Photodiode", pronunciation: "/ˌfəʊ.təʊˈdaɪ.əʊd/", meaning: "A light sensor chip that turns incoming light rays directly into an electrical current.", example: "TV remote control receivers use photodiodes to detect infrared click signals." },
    { word: "Pipeline", pronunciation: "/ˈpaɪp.laɪn/", meaning: "A step-by-step assembly line process where data moves through consecutive processing stages.", example: "CPUs use instruction pipelines to prepare upcoming instructions ahead of time." },
    { word: "Polymer", pronunciation: "/ˈpɒl.ɪ.mər/", meaning: "A material made of long chains of repeating molecules, including plastics, rubbers, and fibers.", example: "Synthetic polymers make modern motorcycle helmets lightweight and impact-resistant." },
    { word: "Potentiometer", pronunciation: "/pəˌten.ʃiˈɒm.ɪ.tər/", meaning: "An adjustable dial resistor used to manually control volume or brightness.", example: "Turning the stereo volume knob adjusts an internal rotary potentiometer." },
    { word: "Pascal", pronunciation: "/pæsˈkæl/", meaning: "The international unit for measuring physical pressure (one newton per square meter).", example: "Car tire pressures are measured in kilopascals (kPa) or PSI." }
  ],

  Q: [
    { word: "Quantum", pronunciation: "/ˈkwɒn.təm/", meaning: "The smallest possible individual packet of energy or matter in physics.", example: "Quantum computers use subatomic physics to solve complex calculations at incredible speeds." },
    { word: "Quenching", pronunciation: "/ˈkwentʃ.ɪŋ/", meaning: "Rapidly cooling hot red metal in water or oil to make it harder and stronger.", example: "Blacksmiths quench forged steel blades in oil to harden the cutting edge." },
    { word: "Query", pronunciation: "/ˈkwɪə.ri/", meaning: "A specific question or search request sent to a database to look up information.", example: "Typing a name into the search box sends a query to the contact database." },
    { word: "Queue", pronunciation: "/kjuː/", meaning: "A First-In-First-Out (FIFO) waiting list where the first item to enter is the first to be handled.", example: "Print queues print documents in the exact order they were sent." },
    { word: "Quadrature", pronunciation: "/ˈkwɒd.rə.tʃər/", meaning: "Two signals that are separated by a 90-degree phase quarter-turn from each other.", example: "Quadrature signals allow computer mice to track both forward and backward rolling." },
    { word: "Quality", pronunciation: "/ˈkwɒl.ə.ti/", meaning: "How well a product meets safety, durability, and customer performance standards.", example: "Quality assurance testing checks that every smartphone screen is free of defects." },
    { word: "Quartile", pronunciation: "/ˈkwɔː.taɪl/", meaning: "Dividing a set of numbers into four equal groups (quarters) for statistical study.", example: "Test scores in the top quartile represent the best 25% of all students." },
    { word: "Quartz", pronunciation: "/kwɔːts/", meaning: "A hard, clear mineral that vibrates at exact frequencies when electricity is applied.", example: "Quartz crystal movements keep clocks ticking with precision accuracy." },
    { word: "QuickSort", pronunciation: "/ˈkwɪk.sɔːt/", meaning: "A popular, super-fast sorting algorithm that organizes lists of numbers or names quickly.", example: "QuickSort sorts thousands of contact names in alphabetical order in a fraction of a second." },
    { word: "Quorum", pronunciation: "/ˈkwɔː.rəm/", meaning: "The minimum number of members or server nodes required to agree before a decision is approved.", example: "Cloud database clusters require a majority quorum before saving financial changes." }
  ],

  R: [
    { word: "Resistor", pronunciation: "/rɪˈzɪs.tər/", meaning: "An electronic component that resists and limits the flow of electric current in a circuit.", example: "Resistors prevent LEDs from receiving too much current and burning out." },
    { word: "Recursion", pronunciation: "/rɪˈkɜː.ʃən/", meaning: "A programming technique where a function calls itself to break down a big task into smaller steps.", example: "Searching through folders inside folders is easily programmed using recursion." },
    { word: "Robotics", pronunciation: "/rəʊˈbɒt.ɪks/", meaning: "The branch of engineering that designs, builds, and programs automated mechanical robots.", example: "Robotics in car factories assemble and weld vehicle frames automatically." },
    { word: "Radiation", pronunciation: "/ˌreɪ.diˈeɪ.ʃən/", meaning: "Energy that travels through space or air in the form of waves or high-speed particles.", example: "Sunlight is a natural form of electromagnetic radiation that provides warmth and light." },
    { word: "Resonance", pronunciation: "/ˈrez.ən.əns/", meaning: "When a system vibrates with much larger amplitude at its natural matching frequency.", example: "Rubbing the wet rim of a wine glass creates a ringing sound through acoustic resonance." },
    { word: "Relay", pronunciation: "/ˈriː.leɪ/", meaning: "An electrically operated switch that allows a small signal to turn on a heavy-duty electrical load.", example: "Car headlights use relays so small dashboard switches can control powerful lamps." },
    { word: "Refactoring", pronunciation: "/ˌriːˈfæk.tər.ɪŋ/", meaning: "Cleaning up and improving internal computer code without changing what it does on the outside.", example: "Code refactoring made the software easier for other developers to read and maintain." },
    { word: "Rigidity", pronunciation: "/rɪˈdʒɪd.ə.ti/", meaning: "The ability of a solid material or building frame to resist bending under heavy weight.", example: "Steel bicycle frames offer high rigidity for efficient pedaling power." },
    { word: "Router", pronunciation: "/ˈruː.tər/", meaning: "A networking device that directs and forwards internet data packets between networks.", example: "Your Wi-Fi router connects your home devices to the global internet." },
    { word: "Rotor", pronunciation: "/ˈrəʊ.tər/", meaning: "The rotating part inside an electric motor, helicopter, or turbine that spins.", example: "Helicopter main rotors generate both upward lift and forward flight power." }
  ],

  S: [
    { word: "Semiconductor", pronunciation: "/ˌsem.i.kənˈdʌk.tər/", meaning: "A material (like silicon) that can either conduct or block electricity, essential for computer chips.", example: "Silicon microchips contain billions of microscopic semiconductor switches." },
    { word: "Synchronous", pronunciation: "/ˈsɪŋ.krə.nəs/", meaning: "Happening at the exact same time or locked together in rhythm with a shared clock signal.", example: "Synchronous online classes happen live with teacher and students present together." },
    { word: "Stress", pronunciation: "/stres/", meaning: "The internal physical pushing or pulling force applied inside a material per unit area.", example: "Bridge cables are engineered to handle high tensile stress during rush hour traffic." },
    { word: "Strain", pronunciation: "/streɪn/", meaning: "The amount of physical stretching or deformation a material experiences under stress.", example: "Electronic strain gauges measure microscopic bending in airplane wings." },
    { word: "Socket", pronunciation: "/ˈsɒk.ɪt/", meaning: "A physical connection port on a motherboard or a software connection point for network talk.", example: "Websockets allow live chat apps to send and receive messages instantly." },
    { word: "Schema", pronunciation: "/ˈskiː.mə/", meaning: "The blueprint layout and organizational structure of a database system.", example: "The database schema defines what information is stored for each user account." },
    { word: "Solenoid", pronunciation: "/ˈsəʊ.lən.ɔɪd/", meaning: "A coil of wire that turns into a magnet to push a mechanical pin when electricity flows.", example: "Car starter solenoids engage the starter motor gear when you turn the key." },
    { word: "Subnet", pronunciation: "/ˈsʌb.net/", meaning: "A smaller, logically organized division of a larger computer IP network.", example: "Company office computers are placed on a separate subnet from visitor Wi-Fi." },
    { word: "Superconductor", pronunciation: "/ˌsuː.pə.kənˈdʌk.tər/", meaning: "A special material that conducts electricity with absolute zero resistance when super cold.", example: "High-speed Maglev bullet trains float on magnetic tracks using superconductor coils." },
    { word: "Stator", pronunciation: "/ˈsteɪ.tər/", meaning: "The stationary, non-moving outer frame and wire coils inside an electric motor.", example: "Electric motor stators generate a spinning magnetic field that forces the rotor to turn." }
  ],

  T: [
    { word: "Transistor", pronunciation: "/trænˈzɪs.tər/", meaning: "A tiny electronic component that acts as a switch or amplifier; the building block of all computers.", example: "Modern phone processors pack over 15 billion microscopic transistors on a single chip." },
    { word: "Thermodynamics", pronunciation: "/ˌθɜː.məʊ.daɪˈnæm.ɪks/", meaning: "The branch of science that studies the relationships between heat, work, temperature, and energy.", example: "Air conditioners and refrigerators operate based on the laws of thermodynamics." },
    { word: "Torque", pronunciation: "/tɔːk/", meaning: "The rotational twisting force that causes an object or wheel to spin around an axle.", example: "Electric cars accelerate fast because electric motors deliver huge torque immediately." },
    { word: "Topology", pronunciation: "/təˈpɒl.ə.dʒi/", meaning: "The geometric layout and arrangement of devices and connections in a network.", example: "A star network topology connects all office computers to a central switch." },
    { word: "Telemetry", pronunciation: "/təˈlem.ə.tri/", meaning: "Automatically collecting sensor data and wirelessly sending it back to a control room.", example: "Space rockets beam telemetry data about fuel, speed, and heat back to launch control." },
    { word: "Turbine", pronunciation: "/ˈtɜː.baɪn/", meaning: "A machine with rotating blades driven by moving water, steam, or gas to produce power.", example: "Hydroelectric dams use powerful water turbines to generate clean electricity." },
    { word: "Tensor", pronunciation: "/ˈten.sər/", meaning: "A mathematical multi-dimensional array of numbers used extensively in artificial intelligence.", example: "AI image models represent color photos as 3D number tensors (height, width, color)." },
    { word: "Tensile", pronunciation: "/ˈten.saɪl/", meaning: "Relating to tension and the ability of a material to withstand pulling or stretching forces.", example: "Steel has high tensile strength, which is why it is used for crane cables." },
    { word: "Throttle", pronunciation: "/ˈθrɒt.əl/", meaning: "A valve or lever that controls the flow of fuel or power to regulate an engine's speed.", example: "Pressing the car gas pedal opens the throttle to speed up the vehicle." },
    { word: "Throughput", pronunciation: "/ˈθruː.pʊt/", meaning: "The actual amount of data or goods that a system successfully processes per second.", example: "High-speed SSD drives deliver incredible read throughput of over 5,000 MB per second." }
  ],

  U: [
    { word: "Ultrasound", pronunciation: "/ˈʌl.trə.saʊnd/", meaning: "High-pitched sound waves above human hearing (over 20,000 Hz) used for medical scans and sensors.", example: "Doctors use safe ultrasound scans to view unborn babies during pregnancy." },
    { word: "Unicast", pronunciation: "/ˈjuː.nɪ.kɑːst/", meaning: "Sending internet data directly from one specific sender to one specific receiver.", example: "Standard one-on-one web browsing sessions use unicast packet delivery." },
    { word: "Ubiquitous", pronunciation: "/juːˈbɪk.wɪ.təs/", meaning: "Found everywhere at all times; in computing, having technology embedded all around us.", example: "Smartphones have made high-speed internet access ubiquitous around the world." },
    { word: "Upstream", pronunciation: "/ˈʌp.striːm/", meaning: "Data traveling from your computer up to the internet (uploading files).", example: "Fiber connections provide fast upstream speeds for uploading large video files." },
    { word: "Unicode", pronunciation: "/ˈjuː.nɪ.kəʊd/", meaning: "The global international standard that assigns a unique number to every letter, symbol, and emoji.", example: "Unicode ensures emojis and international alphabets display correctly on all phones." },
    { word: "Ultimate", pronunciation: "/ˈʌl.tɪ.mət/", meaning: "The highest maximum stress a material or beam can take before it breaks completely.", example: "Cables are tested to find their ultimate breaking strength for safety ratings." },
    { word: "Underflow", pronunciation: "/ˈʌn.də.fləʊ/", meaning: "When a calculated number is so microscopic that a computer memory register rounds it to zero.", example: "Scientific simulation software uses double precision math to prevent number underflow." },
    { word: "Ultrasonic", pronunciation: "/ˌʌl.trəˈsɒn.ɪk/", meaning: "Involving sound vibrations above human hearing, used in sensors, cleaners, and sonars.", example: "Car parking sensors use ultrasonic chirps to detect how close you are to a wall." },
    { word: "Uncertainty", pronunciation: "/ʌnˈsɜː.tən.ti/", meaning: "The small estimated range of margin within which a true measurement reading lies.", example: "Every scientific measurement includes a plus-or-minus uncertainty value." },
    { word: "Unit", pronunciation: "/ˈjuː.nɪt/", meaning: "A standard quantity used to measure physical properties like meters, seconds, and kilograms.", example: "Scientists always include the correct measurement unit next to every calculated number." }
  ],

  V: [
    { word: "Voltage", pronunciation: "/ˈvəʊl.tɪdʒ/", meaning: "The electrical pushing pressure that forces electric current to flow through a wire, measured in Volts.", example: "Standard USB ports provide a steady 5 volts of electrical power for charging phones." },
    { word: "Vector", pronunciation: "/ˈvek.tər/", meaning: "A quantity in math and physics that has both a size (magnitude) and a direction.", example: "Wind velocity is a vector because it has both a speed (30 km/h) and a direction (North)." },
    { word: "Viscosity", pronunciation: "/vɪˈskɒs.ə.ti/", meaning: "A liquid's thickness and resistance to flowing smoothly (honey has high viscosity; water has low).", example: "Motor oil has the right viscosity to coat engine parts without dripping away." },
    { word: "Virtualization", pronunciation: "/ˌvɜː.tʃu.əl.aɪˈzeɪ.ʃən/", meaning: "Running multiple virtual software computers inside a single physical host computer.", example: "Cloud servers use virtualization to run multiple websites safely on one big machine." },
    { word: "Valve", pronunciation: "/vælv/", meaning: "A mechanical device that opens, closes, or throttles to control the flow of liquid or gas in a pipe.", example: "Turning the bathroom water faucet opens a valve to let water flow." },
    { word: "Vibration", pronunciation: "/vaɪˈbreɪ.ʃən/", meaning: "A rapid back-and-forth shaking motion around a central position.", example: "Your phone uses a tiny spinning motor with an off-center weight to create silent vibrations." },
    { word: "Variance", pronunciation: "/ˈveə.ri.əns/", meaning: "A statistical number showing how spread out a group of numbers is from their average value.", example: "Low variance in factory part sizes means manufacturing is precise and consistent." },
    { word: "Velocity", pronunciation: "/vəˈlɒs.ə.ti/", meaning: "The speed of a moving object combined with its specific direction of travel.", example: "The airplane was flying at a cruising velocity of 850 km/h heading East." },
    { word: "Volatile", pronunciation: "/ˈvɒl.ə.taɪl/", meaning: "Computer memory (like RAM) that loses all its stored data when the power is turned off.", example: "RAM is volatile memory, while your SSD storage holds files permanently." },
    { word: "Voltmeter", pronunciation: "/ˈvəʊltˌmiː.tər/", meaning: "An electronic tool used to measure electrical voltage between two points in a circuit.", example: "The technician used a digital voltmeter to check if the car battery had 12 volts." }
  ],

  W: [
    { word: "Wavelength", pronunciation: "/ˈweɪv.leŋθ/", meaning: "The distance from the peak of one wave to the peak of the very next wave.", example: "Red light has a longer wavelength than violet light." },
    { word: "Waveform", pronunciation: "/ˈweɪv.fɔːm/", meaning: "The visual graph shape of a sound, light, or electrical wave over time.", example: "Audio editors show the sound waveform so you can see volume changes visually." },
    { word: "Wattage", pronunciation: "/ˈwɒt.ɪdʒ/", meaning: "The amount of electrical power consumed or produced by a device, measured in Watts.", example: "LED bulbs give the same brightness as old bulbs while using only 10 watts of power." },
    { word: "Wear", pronunciation: "/weər/", meaning: "The gradual loss of surface material and damage caused by friction and daily rubbing.", example: "Tire tread wear shows when it is time to replace car tires for safety." },
    { word: "Webhook", pronunciation: "/ˈweb.hʊk/", meaning: "An automated message sent from one website to another when a specific event happens.", example: "When a customer buys an item, a webhook alerts the shipping department automatically." },
    { word: "Wireless", pronunciation: "/ˈwaɪə.ləs/", meaning: "Sending and receiving information through radio waves without needing connecting cables.", example: "Wireless headphones connect to your phone seamlessly over Bluetooth." },
    { word: "Wireframe", pronunciation: "/ˈwaɪə.freɪm/", meaning: "A simple visual outline sketch of an app or website screen layout before designing.", example: "Designers draw wireframes on paper to plan button placements before writing code." },
    { word: "Workbench", pronunciation: "/ˈwɜːk.bentʃ/", meaning: "A sturdy table equipped with tools and meters for assembling and testing projects.", example: "The electronics workbench had a soldering iron, magnifying lamp, and multimeter." },
    { word: "Workflow", pronunciation: "/ˈwɜːk.fləʊ/", meaning: "The sequence of organized steps a project follows from start to finish.", example: "Automated testing is part of the development workflow before releasing app updates." },
    { word: "Windlass", pronunciation: "/ˈwɪnd.ləs/", meaning: "A mechanical winch drum with a crank used to pull up heavy weights like ship anchors.", example: "Sailors use an electric windlass to haul the heavy anchor up from the ocean bed." }
  ],

  X: [
    { word: "XOR", pronunciation: "/ˌeks.ɔːr/", meaning: "Exclusive OR; a logic gate that turns ON only when one input is true, but not both.", example: "XOR logic gates are used in digital adders to calculate binary addition." },
    { word: "X-Ray", pronunciation: "/ˈeks.reɪ/", meaning: "A powerful, invisible form of light wave that can pass through skin to show bones inside.", example: "Doctors take X-ray images to check if an injured arm has broken bones." },
    { word: "Xenon", pronunciation: "/ˈzen.ɒn/", meaning: "A noble gas element that produces a bright white glow when electricity passes through it.", example: "Luxury car headlights and camera flash tubes use xenon gas for bright white illumination." },
    { word: "XML", pronunciation: "/ˌeks.emˈel/", meaning: "A structured text format with custom tags used to store and transfer data between systems.", example: "Android apps store screen layout designs inside formatted XML files." },
    { word: "Xylene", pronunciation: "/ˈzaɪ.liːn/", meaning: "A clear industrial chemical solvent used in paints, cleaning, and manufacturing plastics.", example: "Xylene is used by technicians to clean printed circuit boards and remove adhesives." },
    { word: "Xerography", pronunciation: "/zɪəˈrɒɡ.rə.fi/", meaning: "The dry photocopying process that uses static electricity and toner powder to make paper copies.", example: "Office photocopiers and laser printers use xerography to print documents quickly." },
    { word: "Crossbar", pronunciation: "/ˈkrɒs.bɑːr/", meaning: "A grid of crossing switches enabling any incoming line to connect with any outgoing line.", example: "Telephone exchanges originally used crossbar switch grids to route phone calls." },
    { word: "Xylometer", pronunciation: "/zaɪˈlɒm.ɪ.tər/", meaning: "A scientific tool that measures the volume and density of wood by measuring displaced water.", example: "Foresters use xylometers to determine wood density and moisture content." },
    { word: "X-Axis", pronunciation: "/ˈeks.æk.sɪs/", meaning: "The horizontal line (left-to-right) on a graph or 2D coordinate grid.", example: "On line charts, time is usually plotted horizontally along the X-axis." },
    { word: "Xylem", pronunciation: "/ˈzaɪ.ləm/", meaning: "The internal plant veins that transport water from roots up to leaves, studied for microfluidic chips.", example: "Engineers study xylem structures to design energy-free water pumping channels." }
  ],

  Y: [
    { word: "Yield", pronunciation: "/jiːld/", meaning: "The amount of stress at which a material stops springing back and bends permanently.", example: "Steel beams are designed so building loads never reach the metal's yield point." },
    { word: "Yoke", pronunciation: "/jəʊk/", meaning: "A structural cross-piece or frame that holds parts together or guides magnetic fields.", example: "Airplane control yokes allow pilots to control climb, descent, and turns." },
    { word: "Yottabyte", pronunciation: "/ˈjɒt.ə.baɪt/", meaning: "An astronomical unit of data storage equal to one trillion terabytes (10^24 bytes).", example: "All the information created by humanity combined is approaching yottabytes." },
    { word: "Yaw", pronunciation: "/jɔː/", meaning: "The twisting rotation of an airplane, car, or drone to the left or right around its vertical axis.", example: "Drone pilots adjust the yaw stick to rotate the camera left or right in place." },
    { word: "Y-Axis", pronunciation: "/ˈwaɪ.æk.sɪs/", meaning: "The vertical line (bottom-to-top) on a mathematical graph or 2D coordinate plane.", example: "On a temperature chart, heat levels are plotted vertically on the Y-axis." },
    { word: "Ytterbium", pronunciation: "/ɪˈtɜː.bi.əm/", meaning: "A rare chemical metal element used inside high-power industrial laser cutters.", example: "Ytterbium fiber lasers produce intense cutting beams that slice metal like butter." },
    { word: "YAML", pronunciation: "/ˈjæm.əl/", meaning: "A clean, human-friendly text format used to write configuration settings for programs.", example: "Developers write simple YAML files to configure how websites are hosted in the cloud." },
    { word: "Yagi", pronunciation: "/ˈjɑː.ɡi/", meaning: "A popular directional antenna made of metal rods that focuses radio signals in one direction.", example: "Rooftop TV antennas with horizontal crossbars are classic Yagi antennas." },
    { word: "Yielding", pronunciation: "/ˈjiːl.dɪŋ/", meaning: "The process of a structural material bending under high stress without snapping instantly.", example: "Steel rebar yielding gives a visual warning before concrete structures fail." },
    { word: "Y-Delta", pronunciation: "/ˌwaɪˈdel.tə/", meaning: "A starter wiring method used to start big electric motors smoothly without blowing fuses.", example: "Factory water pumps use Y-Delta starters to reduce starting power surges." }
  ],

  Z: [
    { word: "Zener", pronunciation: "/ˈziː.nər/", meaning: "A special semiconductor diode that holds a steady, reliable voltage when connected in reverse.", example: "Zener diodes provide clean reference voltages to protect delicate electronics." },
    { word: "Zero-Day", pronunciation: "/ˌzɪə.rəʊˈdeɪ/", meaning: "A newly discovered software bug or security vulnerability that has no existing patch yet.", example: "Security researchers work fast to fix zero-day bugs before hackers can exploit them." },
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", meaning: "Denoted by symbol 'Z'; the total complex resistance of an alternating current circuit.", example: "Audio engineers match speaker impedance Z to get maximum clear sound output." },
    { word: "Zenith", pronunciation: "/ˈzen.ɪθ/", meaning: "The highest point directly above an observer in the sky (elevation angle of 90 degrees).", example: "At noon in summer, the sun reaches near its highest zenith in the sky." },
    { word: "Zinc", pronunciation: "/zɪŋk/", meaning: "A protective metal element used to coat steel and make household batteries.", example: "Galvanized metal buckets are dipped in molten zinc to prevent outdoor rusting." },
    { word: "Zip", pronunciation: "/zɪp/", meaning: "A popular compressed file format that shrinks file sizes and packages multiple files together.", example: "Sending multiple project documents inside a Zip file makes emailing fast and easy." },
    { word: "Zettabyte", pronunciation: "/ˈzet.ə.baɪt/", meaning: "A massive unit of digital data storage equal to one billion terabytes (10^21 bytes).", example: "Annual global internet traffic now exceeds multiple zettabytes of data." },
    { word: "Zirconium", pronunciation: "/zɜːˈkəʊ.ni.əm/", meaning: "A strong, heat-resistant metal used inside nuclear power stations and fake diamond jewelry.", example: "Zirconium alloys house nuclear fuel safely because they withstand extreme heat." },
    { word: "Zoom", pronunciation: "/zuːm/", meaning: "Changing a camera lens focal length to make faraway objects look close up.", example: "Camera zoom lenses let photographers take clear photos of distant wildlife." },
    { word: "Zero-Crossing", pronunciation: "/ˌzɪə.rəʊˈkrɒs.ɪŋ/", meaning: "The exact moment when an alternating electrical wave crosses the zero-volt line.", example: "Dimmer switches switch power at the zero-crossing point to prevent electrical buzzing." }
  ]
};

/* ==========================================================================
   2. STORAGE & STATE MANAGEMENT
   ========================================================================== */
const STORAGE_KEYS = {
  ONBOARDING: 'wordly_onboarding_done',
  MASTERED_WORDS: 'wordly_mastered_words',
  CURRENT_LETTER: 'wordly_current_letter',
  CURRENT_INDEX: 'wordly_current_index',
  BOOKMARKS: 'wordly_bookmarks'
};

const state = {
  onboardingCompleted: false,
  masteredWords: new Set(), // Keys formatted as `${letter}_${index}` e.g. "A_0"
  bookmarks: new Set(),
  currentLetter: 'A',
  currentIndex: 0,
  currentScreen: 'home',
  searchQuery: '',
  isSpeaking: false
};

function initStorage() {
  try {
    state.onboardingCompleted = localStorage.getItem(STORAGE_KEYS.ONBOARDING) === 'true';

    const savedMastered = localStorage.getItem(STORAGE_KEYS.MASTERED_WORDS);
    if (savedMastered) {
      state.masteredWords = new Set(JSON.parse(savedMastered));
    }

    const savedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (savedBookmarks) {
      state.bookmarks = new Set(JSON.parse(savedBookmarks));
    }

    const savedLetter = localStorage.getItem(STORAGE_KEYS.CURRENT_LETTER);
    if (savedLetter && TECHNICAL_VOCABULARY[savedLetter]) {
      state.currentLetter = savedLetter;
    }

    const savedIndex = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
    if (savedIndex !== null) {
      const idx = parseInt(savedIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < (TECHNICAL_VOCABULARY[state.currentLetter] || []).length) {
        state.currentIndex = idx;
      }
    }
  } catch (err) {
    console.warn('Storage init issue:', err);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEYS.ONBOARDING, state.onboardingCompleted ? 'true' : 'false');
    localStorage.setItem(STORAGE_KEYS.MASTERED_WORDS, JSON.stringify(Array.from(state.masteredWords)));
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(Array.from(state.bookmarks)));
    localStorage.setItem(STORAGE_KEYS.CURRENT_LETTER, state.currentLetter);
    localStorage.setItem(STORAGE_KEYS.CURRENT_INDEX, state.currentIndex.toString());
  } catch (err) {
    console.warn('Storage save issue:', err);
  }
}

/* ==========================================================================
   3. WEB SPEECH API — PRONUNCIATION ENGINE
   ========================================================================== */
class AudioEngine {
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

  speak(text, onStart, onEnd) {
    if (!this.synth) {
      showToast('Audio speech is not supported in this browser.');
      return;
    }

    try {
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88; // Clear, comfortable speaking rate
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
      console.warn('Speech synthesis error:', err);
      state.isSpeaking = false;
      if (typeof onEnd === 'function') onEnd();
    }
  }

  speakLetter(char) {
    if (!this.synth) return;
    try {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(char);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.lang = 'en-US';
      if (this.selectedVoice) utterance.voice = this.selectedVoice;
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Letter audio error:', err);
    }
  }
}

const audioEngine = new AudioEngine();

/* ==========================================================================
   4. DOM MAPPINGS
   ========================================================================== */
const DOM = {
  // Screens
  onboarding: document.getElementById('screen-onboarding'),
  viewHome: document.getElementById('view-home'),
  viewLearn: document.getElementById('view-learn'),
  viewWordList: document.getElementById('view-word-list'),
  viewWordLearn: document.getElementById('view-word-learn'),
  viewSearch: document.getElementById('view-search'),
  viewProgress: document.getElementById('view-progress'),

  // Navigation
  ribbonContainer: document.getElementById('ribbon-letters-container'),
  desktopNavTabs: document.querySelectorAll('.desktop-nav-tabs .nav-tab-btn'),
  mobileNavTabs: document.querySelectorAll('.mobile-bottom-bar .mobile-tab-btn'),
  headerBranding: document.getElementById('header-branding-btn'),
  btnHeaderSearch: document.getElementById('btn-header-search'),

  // Onboarding Buttons
  btnOnboardingStart: document.getElementById('btn-onboarding-start'),
  btnOnboardingContinue: document.getElementById('btn-onboarding-continue'),
  btnOnboardingSkip: document.getElementById('btn-onboarding-skip'),

  // Home Screen Elements
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
 * Universal Navigation Function
 */
function navigateTo(screenId, options = {}) {
  const allScreens = [DOM.viewHome, DOM.viewLearn, DOM.viewWordList, DOM.viewWordLearn, DOM.viewSearch, DOM.viewProgress];
  allScreens.forEach(s => s.classList.remove('active'));

  let tabId = 'home';
  if (screenId === 'home') tabId = 'home';
  else if (screenId === 'learn' || screenId === 'word-list' || screenId === 'word-learn') tabId = 'learn';
  else if (screenId === 'search') tabId = 'search';
  else if (screenId === 'progress') tabId = 'progress';

  DOM.desktopNavTabs.forEach(tab => {
    if (tab.dataset.tab === tabId) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  DOM.mobileNavTabs.forEach(tab => {
    if (tab.dataset.tab === tabId) tab.classList.add('active');
    else tab.classList.remove('active');
  });

  updateRibbonHighlight();

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   5. QUICK A–Z RIBBON BAR
   ========================================================================== */
function buildAlphabetRibbon() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  DOM.ribbonContainer.innerHTML = '';

  letters.forEach(char => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ribbon-letter-pill';
    btn.textContent = char;
    btn.dataset.letter = char;
    btn.setAttribute('aria-label', `Navigate to Letter ${char}`);

    btn.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.ribbonContainer.appendChild(btn);
  });

  updateRibbonHighlight();
}

function updateRibbonHighlight() {
  const ribbonBtns = DOM.ribbonContainer.querySelectorAll('.ribbon-letter-pill');
  ribbonBtns.forEach(btn => {
    if (btn.dataset.letter === state.currentLetter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/* ==========================================================================
   6. PROGRESS CALCULATORS
   ========================================================================== */
function getLetterProgress(letter) {
  const words = TECHNICAL_VOCABULARY[letter] || [];
  let masteredCount = 0;
  for (let i = 0; i < words.length; i++) {
    if (state.masteredWords.has(`${letter}_${i}`)) {
      masteredCount++;
    }
  }
  return {
    letter,
    total: words.length,
    learned: masteredCount,
    percent: words.length > 0 ? Math.round((masteredCount / words.length) * 100) : 0
  };
}

function getTotalProgress() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let totalWords = 0;
  let totalMastered = 0;

  letters.forEach(lettr => {
    const p = getLetterProgress(lettr);
    totalWords += p.total;
    totalMastered += p.learned;
  });

  return {
    total: totalWords,
    learned: totalMastered,
    remaining: totalWords - totalMastered,
    percent: totalWords > 0 ? Math.round((totalMastered / totalWords) * 100) : 0
  };
}

/* ==========================================================================
   7. HOME SCREEN RENDERING
   ========================================================================== */
function renderHomeScreen() {
  // Continue Learning Card
  const currentWords = TECHNICAL_VOCABULARY[state.currentLetter] || TECHNICAL_VOCABULARY.A;
  const wordObj = currentWords[state.currentIndex] || currentWords[0];
  const letterProgress = getLetterProgress(state.currentLetter);

  DOM.homeContinueLetterBadge.textContent = `Letter ${state.currentLetter}`;
  DOM.homeContinueWordPreview.textContent = wordObj.word;
  DOM.homeContinueCounter.textContent = `Word ${state.currentIndex + 1} of ${currentWords.length}`;
  DOM.homeContinueProgressBar.style.width = `${Math.max(3, letterProgress.percent)}%`;

  // Quick Stats
  const totalProg = getTotalProgress();
  DOM.homeStatLearned.textContent = totalProg.learned;
  DOM.homeStatRemaining.textContent = totalProg.remaining;
  DOM.homeStatPercent.textContent = `${totalProg.percent}%`;

  // 26 Alphabet Cards Grid (A to Z)
  DOM.homeAlphabetQuickGrid.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card-clean';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Letter ${char}, ${p.learned} of ${p.total} learned`);

    card.innerHTML = `
      <div class="card-top-info">
        <div class="letter-avatar-box">${char}</div>
        <span class="letter-percent-tag">${p.percent}%</span>
      </div>
      <div class="card-bottom-info">
        <h4 class="letter-title-text">Letter ${char}</h4>
        <span class="letter-word-count">${p.learned} / ${p.total} Words Learned</span>
        <div class="letter-bar-track">
          <div class="letter-bar-fill" style="width: ${p.percent}%"></div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.homeAlphabetQuickGrid.appendChild(card);
  });
}

/* ==========================================================================
   8. LEARN SCREEN (A–Z HUB) RENDERING
   ========================================================================== */
function renderLearnHubScreen() {
  DOM.learnAlphabetCardsList.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card-clean';
    card.style.padding = '20px';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-top-info">
        <div class="letter-avatar-box" style="width: 48px; height: 48px; font-size: 1.5rem;">${char}</div>
        <span class="letter-percent-tag" style="color: var(--violet-700); font-weight: 800;">${p.percent}% Learned</span>
      </div>
      <div class="card-bottom-info">
        <h4 class="letter-title-text" style="font-size: 1.2rem;">Letter ${char} Words</h4>
        <span class="letter-word-count">${p.learned} of ${p.total} Words Mastered</span>
        <div class="letter-bar-track" style="height: 6px; margin-top: 6px;">
          <div class="letter-bar-fill" style="width: ${p.percent}%"></div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.learnAlphabetCardsList.appendChild(card);
  });
}

/* ==========================================================================
   9. WORD LIST SCREEN RENDERING
   ========================================================================== */
function renderWordListScreen() {
  const letter = state.currentLetter;
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const p = getLetterProgress(letter);

  DOM.wordlistTitle.textContent = `Letter ${letter} Words`;
  DOM.wordlistProgressBadge.textContent = `${p.learned} of ${p.total} Learned`;
  DOM.wordItemsContainer.innerHTML = '';

  words.forEach((item, index) => {
    const isLearned = state.masteredWords.has(`${letter}_${index}`);

    const card = document.createElement('div');
    card.className = `clean-word-item ${isLearned ? 'learned' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="word-item-info">
        <div class="word-item-header">
          <h4 class="word-item-title">${item.word}</h4>
          <span class="word-item-phonetic">${item.pronunciation}</span>
        </div>
        <p class="word-item-meaning">${item.meaning}</p>
      </div>
      <button type="button" class="btn-speaker-mini" aria-label="Listen to ${item.word}">
        <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-speaker-mini')) {
        e.stopPropagation();
        audioEngine.speak(item.word);
        return;
      }
      navigateTo('word-learn', { letter, index });
    });

    DOM.wordItemsContainer.appendChild(card);
  });
}

/* ==========================================================================
   10. WORD LEARNING FOCUS SCREEN RENDERING
   ========================================================================== */
function renderWordLearnScreen() {
  const letter = state.currentLetter;
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const index = state.currentIndex;
  const wordObj = words[index];

  if (!wordObj) return;

  const wordKey = `${letter}_${index}`;
  const isLearned = state.masteredWords.has(wordKey);
  const isBookmarked = state.bookmarks.has(wordKey);

  // Counter & Progress
  DOM.learnCounterText.textContent = `Letter ${letter} — Word ${index + 1} of ${words.length}`;
  DOM.learnProgressFill.style.width = `${((index + 1) / words.length) * 100}%`;

  DOM.learnLetterPill.textContent = `Letter ${letter}`;

  if (isLearned) {
    DOM.learnStatusPill.textContent = 'Learned ✓';
    DOM.learnStatusPill.className = 'learned-status-badge learned';
  } else {
    DOM.learnStatusPill.textContent = 'To Learn';
    DOM.learnStatusPill.className = 'learned-status-badge unlearned';
  }

  // Word Heading & Phonetics
  DOM.learnWordHeading.textContent = wordObj.word.toUpperCase();
  DOM.learnPhonetic.textContent = wordObj.pronunciation;

  // Audio Button
  DOM.btnLearnPronounce.classList.remove('speaking');
  DOM.learnPronounceLabel.textContent = 'Listen to Pronunciation';

  // Meaning & Example
  DOM.learnMeaningText.textContent = wordObj.meaning;
  DOM.learnExampleText.textContent = `"${wordObj.example}"`;

  // Interactive Spelling Letter Tiles
  DOM.learnSpellingTiles.innerHTML = '';
  const cleanWord = wordObj.word.toUpperCase().replace(/[^A-Z]/g, '');

  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'spell-letter-tile';
    tile.textContent = char;
    tile.setAttribute('aria-label', `Pronounce letter ${char}`);

    tile.addEventListener('click', () => {
      tile.classList.add('active-tile');
      audioEngine.speakLetter(char);
      setTimeout(() => tile.classList.remove('active-tile'), 350);
    });

    DOM.learnSpellingTiles.appendChild(tile);
  }

  // Mark Learned Button State
  if (isLearned) {
    DOM.btnMarkLearned.classList.add('is-learned');
    DOM.btnMarkLearnedText.textContent = 'Word Learned ✓';
  } else {
    DOM.btnMarkLearned.classList.remove('is-learned');
    DOM.btnMarkLearnedText.textContent = 'Mark as Learned';
  }

  // Bookmark Button State
  if (isBookmarked) {
    DOM.btnLearnBookmark.classList.add('active');
  } else {
    DOM.btnLearnBookmark.classList.remove('active');
  }

  // Prev & Next Buttons
  DOM.btnLearnPrev.disabled = index === 0;

  if (index === words.length - 1) {
    DOM.btnLearnNext.innerHTML = `
      <span>Complete Letter ${letter}</span>
      <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-check"></use></svg>
    `;
  } else {
    DOM.btnLearnNext.innerHTML = `
      <span>Next Word</span>
      <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-chevron-right"></use></svg>
    `;
  }
}

function handlePronounceWord() {
  const words = TECHNICAL_VOCABULARY[state.currentLetter];
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
      DOM.learnPronounceLabel.textContent = 'Listen to Pronunciation';
    }
  );
}

function toggleMasteredStatus() {
  const wordKey = `${state.currentLetter}_${state.currentIndex}`;
  const words = TECHNICAL_VOCABULARY[state.currentLetter];
  const wordObj = words[state.currentIndex];

  if (state.masteredWords.has(wordKey)) {
    state.masteredWords.delete(wordKey);
    showToast(`Removed "${wordObj.word}" from learned words`);
  } else {
    state.masteredWords.add(wordKey);
    showToast(`Marked "${wordObj.word}" as learned! ⭐`);
  }

  saveState();
  renderWordLearnScreen();
}

function handleNextWord() {
  const words = TECHNICAL_VOCABULARY[state.currentLetter];
  if (state.currentIndex < words.length - 1) {
    state.currentIndex++;
    saveState();
    renderWordLearnScreen();
  } else {
    showCompletionCelebration();
  }
}

function handlePrevWord() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    saveState();
    renderWordLearnScreen();
  }
}

function showCompletionCelebration() {
  DOM.completionTitle.textContent = `Letter ${state.currentLetter} Completed!`;
  DOM.completionMessage.textContent = `You have reviewed all words in Letter ${state.currentLetter}.`;
  DOM.modalCompletion.classList.add('active');
  DOM.modalCompletion.setAttribute('aria-hidden', 'false');
}

function hideCompletionCelebration() {
  DOM.modalCompletion.classList.remove('active');
  DOM.modalCompletion.setAttribute('aria-hidden', 'true');
}

/* ==========================================================================
   11. SEARCH SCREEN
   ========================================================================== */
function renderSearchResults() {
  const query = state.searchQuery.trim().toLowerCase();
  let matches = [];

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(lettr => {
    const list = TECHNICAL_VOCABULARY[lettr] || [];
    list.forEach((item, index) => {
      const matchWord = item.word.toLowerCase().includes(query);
      const matchMeaning = item.meaning.toLowerCase().includes(query);
      const matchExample = item.example.toLowerCase().includes(query);

      if (!query || matchWord || matchMeaning || matchExample) {
        matches.push({
          ...item,
          letter: lettr,
          index: index
        });
      }
    });
  });

  DOM.searchResultsCount.textContent = `${matches.length} word${matches.length === 1 ? '' : 's'} found in dictionary`;
  DOM.searchResultsList.innerHTML = '';

  if (matches.length === 0) {
    DOM.searchResultsList.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
        <h3 style="color: var(--text-primary); margin-bottom: 8px;">No words found</h3>
        <p>Try searching for a different word or letter.</p>
      </div>
    `;
    return;
  }

  const displayMatches = matches.slice(0, 100);

  displayMatches.forEach(res => {
    const card = document.createElement('div');
    card.className = 'clean-word-item';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    let highlightedWord = res.word;
    if (query) {
      const regex = new RegExp(`(${query})`, 'gi');
      highlightedWord = res.word.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    card.innerHTML = `
      <div class="word-item-info">
        <div class="word-item-header">
          <h4 class="word-item-title">${highlightedWord}</h4>
          <span class="word-item-phonetic">${res.pronunciation} • Letter ${res.letter}</span>
        </div>
        <p class="word-item-meaning">${res.meaning}</p>
      </div>
      <button type="button" class="btn-speaker-mini" aria-label="Listen to ${res.word}">
        <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-speaker-mini')) {
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
   12. PROGRESS DASHBOARD
   ========================================================================== */
function renderProgressDashboard() {
  const totalProg = getTotalProgress();

  DOM.progStatTotal.textContent = totalProg.total;
  DOM.progStatLearned.textContent = totalProg.learned;
  DOM.progStatRemaining.textContent = totalProg.remaining;
  DOM.progressTotalPercent.textContent = `${totalProg.percent}%`;

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (totalProg.percent / 100) * circumference;
  DOM.progressCircleFill.style.strokeDashoffset = offset;

  DOM.progressAlphabetBreakdown.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card-clean';
    card.style.padding = '16px';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-top-info" style="margin-bottom: 8px;">
        <span class="letter-title-text" style="font-size: 1rem;">Letter ${char}</span>
        <span class="letter-percent-tag">${p.learned} / ${p.total} (${p.percent}%)</span>
      </div>
      <div class="letter-bar-track">
        <div class="letter-bar-fill" style="width: ${p.percent}%"></div>
      </div>
    `;

    card.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.progressAlphabetBreakdown.appendChild(card);
  });
}

/* ==========================================================================
   13. TOAST UTILITY
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
   14. EVENT BINDINGS
   ========================================================================== */
function bindEvents() {
  // Onboarding
  const completeOnboarding = () => {
    state.onboardingCompleted = true;
    saveState();
    DOM.onboarding.classList.remove('active');
    navigateTo('home');
  };

  DOM.btnOnboardingStart.addEventListener('click', completeOnboarding);
  DOM.btnOnboardingContinue.addEventListener('click', completeOnboarding);
  DOM.btnOnboardingSkip.addEventListener('click', completeOnboarding);

  // Nav Tabs
  DOM.desktopNavTabs.forEach(tab => {
    tab.addEventListener('click', () => navigateTo(tab.dataset.tab));
  });

  DOM.mobileNavTabs.forEach(tab => {
    tab.addEventListener('click', () => navigateTo(tab.dataset.tab));
  });

  DOM.headerBranding.addEventListener('click', () => navigateTo('home'));
  DOM.btnHeaderSearch.addEventListener('click', () => navigateTo('search', { focusSearch: true }));

  // Home actions
  DOM.btnHomeContinueAction.addEventListener('click', () => {
    navigateTo('word-learn', { letter: state.currentLetter, index: state.currentIndex });
  });
  DOM.homeContinueCard.addEventListener('click', (e) => {
    if (!e.target.closest('#btn-home-continue-action')) {
      navigateTo('word-learn', { letter: state.currentLetter, index: state.currentIndex });
    }
  });
  DOM.btnHomeSeeAllLearn.addEventListener('click', () => navigateTo('learn'));

  // Wordlist actions
  DOM.btnWordlistBack.addEventListener('click', () => navigateTo('learn'));
  DOM.btnWordlistStartLearning.addEventListener('click', () => {
    navigateTo('word-learn', { letter: state.currentLetter, index: 0 });
  });

  // Word Learn actions
  DOM.btnLearnScreenBack.addEventListener('click', () => {
    navigateTo('word-list', { letter: state.currentLetter });
  });

  DOM.btnLearnPronounce.addEventListener('click', handlePronounceWord);
  DOM.btnLearnListenAgain.addEventListener('click', handlePronounceWord);
  DOM.btnMarkLearned.addEventListener('click', toggleMasteredStatus);

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
      showToast('Word saved to bookmarks! ⭐');
    }
    saveState();
  });

  // Keyboard Shortcuts (Arrow keys to navigate words, Space to pronounce)
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

  // Celebration Modal
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

  // Search actions
  DOM.searchInputField.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.length > 0) DOM.btnSearchClear.classList.add('visible');
    else DOM.btnSearchClear.classList.remove('visible');
    renderSearchResults();
  });

  DOM.btnSearchClear.addEventListener('click', () => {
    DOM.searchInputField.value = '';
    state.searchQuery = '';
    DOM.btnSearchClear.classList.remove('visible');
    renderSearchResults();
    DOM.searchInputField.focus();
  });

  // Reset progress
  DOM.btnResetProgress.addEventListener('click', () => {
    DOM.modalResetConfirm.classList.add('active');
    DOM.modalResetConfirm.setAttribute('aria-hidden', 'false');
  });

  DOM.btnModalCancelReset.addEventListener('click', () => {
    DOM.modalResetConfirm.classList.remove('active');
    DOM.modalResetConfirm.setAttribute('aria-hidden', 'true');
  });

  DOM.btnModalConfirmReset.addEventListener('click', () => {
    state.masteredWords.clear();
    state.bookmarks.clear();
    state.currentIndex = 0;
    saveState();
    DOM.modalResetConfirm.classList.remove('active');
    DOM.modalResetConfirm.setAttribute('aria-hidden', 'true');
    renderProgressDashboard();
    showToast('All learning progress has been reset.');
  });
}

function initApp() {
  initStorage();
  buildAlphabetRibbon();
  bindEvents();

  if (state.onboardingCompleted) {
    DOM.onboarding.classList.remove('active');
    navigateTo('home');
  } else {
    DOM.onboarding.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
