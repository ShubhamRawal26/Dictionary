/**
 * WORDLY — SIMPLE & CLEAN ENGLISH & TECHNICAL VOCABULARY DICTIONARY
 * Simple, focused, lightweight user interface for mobile & desktop
 */

'use strict';

/* ==========================================================================
   1. VOCABULARY DATABASE (A to Z • 260 Words with Plain, Concise Meanings)
   ========================================================================== */
const TECHNICAL_VOCABULARY = {
  A: [
    { word: "Algorithm", pronunciation: "/ˈæl.ɡə.rɪð.əm/", meaning: "A step-by-step set of clear instructions or rules to solve a problem or complete a task.", example: "Google uses a smart algorithm to deliver search results in milliseconds." },
    { word: "Asynchronous", pronunciation: "/eɪˈsɪŋ.krə.nəs/", meaning: "Tasks running in the background without freezing or waiting for each other.", example: "Asynchronous requests load website data in the background smoothly." },
    { word: "Actuator", pronunciation: "/ˈæk.tʃu.eɪ.tər/", meaning: "A motor or mechanical device that creates physical movement in a machine.", example: "Electric actuators move the robotic arm with millimeter precision." },
    { word: "Amplitude", pronunciation: "/ˈæm.plɪ.tʃuːd/", meaning: "The height or strength of a wave measured from its middle resting position.", example: "Turning up the volume dial increases the sound wave amplitude." },
    { word: "Architecture", pronunciation: "/ˈɑː.kɪ.tek.tʃər/", meaning: "The fundamental design and organization of a computer or software system.", example: "ARM architecture powers the microprocessors inside modern phones." },
    { word: "Anodize", pronunciation: "/ˈæn.ə.daɪz/", meaning: "An electrochemical coating process that prevents metal surfaces from rusting.", example: "Smartphone metal frames are anodized to resist daily scratches." },
    { word: "Aerodynamics", pronunciation: "/ˌeə.rəʊ.daɪˈnæm.ɪks/", meaning: "The science of how air moves around moving vehicles like cars and airplanes.", example: "Sports cars have sleek aerodynamic curves to reduce wind drag." },
    { word: "Abstraction", pronunciation: "/æbˈstræk.ʃən/", meaning: "Hiding complicated inner workings to provide a simple, easy interface.", example: "The car steering wheel is an abstraction that lets you steer easily." },
    { word: "Acceleration", pronunciation: "/əkˌsel.əˈreɪ.ʃən/", meaning: "The rate at which an object increases its speed over time.", example: "Electric cars achieve rapid acceleration thanks to instant electric torque." },
    { word: "Attenuation", pronunciation: "/əˌten.juˈeɪ.ʃən/", meaning: "The natural loss of signal strength as it travels through a cable or air.", example: "Wi-Fi signal attenuation occurs when waves pass through concrete walls." }
  ],

  B: [
    { word: "Bandwidth", pronunciation: "/ˈbænd.wɪtθ/", meaning: "The maximum amount of data that can travel across an internet connection.", example: "Fiber optic broadband gives plenty of bandwidth for 4K video streaming." },
    { word: "Binary", pronunciation: "/ˈbaɪ.nər.i/", meaning: "A number system using only 0s and 1s that all computers use to operate.", example: "Computer software is converted into binary code for the CPU to run." },
    { word: "Backpropagation", pronunciation: "/ˌbæk.prɒp.əˈɡeɪ.ʃən/", meaning: "A machine learning method that trains neural networks by correcting mistakes.", example: "Backpropagation helps AI vision models learn to recognize objects." },
    { word: "Buckling", pronunciation: "/ˈbʌk.lɪŋ/", meaning: "The sudden bending or collapse of a structural beam under heavy load.", example: "Engineers added support beams to prevent the steel column from buckling." },
    { word: "Boolean", pronunciation: "/ˈbuː.li.ən/", meaning: "A data type that has only two possible values: True or False.", example: "The password check returns a boolean confirming if it matches." },
    { word: "Bus", pronunciation: "/bʌs/", meaning: "An internal digital pathway that carries data between computer components.", example: "The system bus transfers data fast between the processor and memory." },
    { word: "Baud", pronunciation: "/bɔːd/", meaning: "A unit measuring the speed of data transmission in communication channels.", example: "The GPS module sends sensor coordinates at 9600 baud." },
    { word: "Bernoulli", pronunciation: "/bɜːˈnuː.li/", meaning: "A physical principle showing that moving air creates lower pressure.", example: "Bernoulli's principle helps explain how airplane wings create upward lift." },
    { word: "Bias", pronunciation: "/ˈbaɪ.əs/", meaning: "A steady electrical voltage applied to an electronic chip to set its operating state.", example: "Transistors require a small bias voltage to switch on and conduct current." },
    { word: "Blockchain", pronunciation: "/ˈblɒk.tʃeɪn/", meaning: "A tamper-proof digital ledger shared across a network of computers.", example: "Blockchain technology guarantees that digital records cannot be changed." }
  ],

  C: [
    { word: "Capacitance", pronunciation: "/kəˈpæs.ɪ.təns/", meaning: "The ability of an electronic component to store electrical charge.", example: "Capacitors smooth out electrical noise in power supply circuits." },
    { word: "Compiler", pronunciation: "/kəmˈpaɪ.lər/", meaning: "A program that translates human code into machine code that computers run.", example: "The compiler turns your source code into an executable application." },
    { word: "Concurrency", pronunciation: "/kənˈkʌr.ən.si/", meaning: "The ability of software to process multiple tasks at the same time.", example: "Web servers use concurrency to handle thousands of users simultaneously." },
    { word: "Cantilever", pronunciation: "/ˈkæn.tɪ.liː.vər/", meaning: "A rigid beam or structure supported at only one fixed end.", example: "Balcony decks and diving boards are classic cantilever structures." },
    { word: "Combustion", pronunciation: "/kəmˈbʌs.tʃən/", meaning: "A fast chemical reaction between fuel and oxygen producing heat and power.", example: "Car engines burn fuel through controlled internal combustion." },
    { word: "Calibration", pronunciation: "/ˌkæl.ɪˈbreɪ.ʃən/", meaning: "Adjusting a measuring tool to make sure its readings are completely accurate.", example: "Digital weighing scales require periodic calibration against standard weights." },
    { word: "Circuit", pronunciation: "/ˈsɜː.kɪt/", meaning: "A closed electrical loop through which current flows from a source and returns.", example: "Closing the wall switch completes the circuit to illuminate the room." },
    { word: "Corrosion", pronunciation: "/kəˈrəʊ.ʒən/", meaning: "The natural rusting and breakdown of metal caused by moisture and oxygen.", example: "Stainless steel contains protective chromium to resist corrosion." },
    { word: "Cryptography", pronunciation: "/krɪpˈtɒɡ.rə.fi/", meaning: "The science of securing data by converting it into encrypted codes.", example: "Online banking uses modern cryptography to keep payments safe." },
    { word: "Centrifugal", pronunciation: "/senˈtrɪf.jʊ.ɡəl/", meaning: "The outward force felt by an object when moving in a curved or spinning path.", example: "Washing machines use centrifugal force to spin water out of clothes." }
  ],

  D: [
    { word: "Diode", pronunciation: "/ˈdaɪ.əʊd/", meaning: "A one-way valve for electricity that allows current to flow in one direction.", example: "LED light bulbs are energy-efficient semiconductor diodes." },
    { word: "Deadlock", pronunciation: "/ˈded.lɒk/", meaning: "A freeze where two programs wait on each other and neither can proceed.", example: "Smart database engines prevent deadlocks so transactions never hang." },
    { word: "Dynamics", pronunciation: "/daɪˈnæm.ɪks/", meaning: "The study of forces and how they affect the motion of physical bodies.", example: "Vehicle dynamics tests ensure cars steer safely on slippery roads." },
    { word: "Damping", pronunciation: "/ˈdæm.pɪŋ/", meaning: "Absorbing and reducing mechanical vibrations and shaking in a system.", example: "Car shock absorbers use fluid damping to smooth out bumpy roads." },
    { word: "Deflection", pronunciation: "/dɪˈflek.ʃən/", meaning: "The distance a structural beam bends or flexes downward under weight.", example: "Floor beams are built for minimal deflection to prevent ceilings from sagging." },
    { word: "Decryption", pronunciation: "/diːˈkrɪp.ʃən/", meaning: "Converting scrambled secret code back into clear, readable text.", example: "Entering your passcode triggers instant decryption of your device files." },
    { word: "Differential", pronunciation: "/ˌdɪf.əˈren.ʃəl/", meaning: "Gears that let drive wheels spin at different speeds when cornering.", example: "Car differentials allow the outside wheel to turn faster on sharp curves." },
    { word: "Demodulation", pronunciation: "/diːˌmɒd.jʊˈleɪ.ʃən/", meaning: "Extracting original sound or data from a high-frequency radio wave.", example: "The radio receiver performs demodulation to play audio through speakers." },
    { word: "Database", pronunciation: "/ˈdeɪ.tə.beɪs/", meaning: "An organized electronic collection of data that can be searched quickly.", example: "Medical databases store patient records for immediate lookup." },
    { word: "Distortion", pronunciation: "/dɪˈstɔː.ʃən/", meaning: "An unwanted warping or change in an audio sound or electrical signal.", example: "Turning the speaker past max volume causes harsh sound distortion." }
  ],

  E: [
    { word: "Entropy", pronunciation: "/ˈen.trə.pi/", meaning: "A measure of randomness, disorder, or unusable energy in a physical system.", example: "Thermodynamics shows that entropy in closed systems naturally increases." },
    { word: "Encryption", pronunciation: "/ɪnˈkrɪp.ʃən/", meaning: "Scrambling readable data into secret code to protect it from snooping.", example: "End-to-end encryption keeps your private chat messages secure." },
    { word: "Elasticity", pronunciation: "/ˌiː.læsˈtɪs.ə.ti/", meaning: "The ability of a material to spring back to its shape after being stretched.", example: "Rubber bands show high elasticity by snapping back when released." },
    { word: "Electrolyte", pronunciation: "/iˈlek.trə.laɪt/", meaning: "A liquid or gel containing ions that carries electric charge in batteries.", example: "Lithium battery electrolytes allow electric charge to flow between terminals." },
    { word: "Ethernet", pronunciation: "/ˈiː.θə.net/", meaning: "A standard wired system for connecting computers in a fast local network.", example: "Connecting with an Ethernet cable provides stable, lag-free gaming." },
    { word: "Equilibrium", pronunciation: "/ˌek.wɪˈlɪb.ri.əm/", meaning: "A balanced state where all opposing forces cancel each other out.", example: "When a drone hovers motionless in the air, lift and gravity are in equilibrium." },
    { word: "Emulation", pronunciation: "/ˌem.jʊˈleɪ.ʃən/", meaning: "Software allowing a computer to imitate and run games from another console.", example: "Retro emulators let you play classic arcade games on a PC." },
    { word: "Enthalpy", pronunciation: "/ˈen.θəl.pi/", meaning: "The total heat and energy content of a thermodynamic system.", example: "Chemical engineers calculate enthalpy to measure heat in chemical reactions." },
    { word: "Eigenvalue", pronunciation: "/ˈaɪ.ɡənˌvæl.juː/", meaning: "A special scaling number in matrix math used in engineering and AI.", example: "Face recognition algorithms use eigenvalues to map key facial landmarks." },
    { word: "Extrusion", pronunciation: "/ɪkˈstruː.ʒən/", meaning: "Shaping material by pushing it through a shaped nozzle (like 3D printing).", example: "Aluminum window frames are manufactured using continuous metal extrusion." }
  ],

  F: [
    { word: "Feedback", pronunciation: "/ˈfiːd.bæk/", meaning: "Using output results to automatically adjust and improve future performance.", example: "Thermostats use temperature feedback to regulate heating automatically." },
    { word: "Friction", pronunciation: "/ˈfrɪk.ʃən/", meaning: "The force that resists the sliding movement of two touching surfaces.", example: "Bicycle brakes create friction against the wheel to slow down safely." },
    { word: "Firmware", pronunciation: "/ˈfɜːm.weər/", meaning: "Permanent low-level code stored inside a chip to control hardware basics.", example: "Wireless earbuds receive firmware updates to enhance noise canceling." },
    { word: "Fluid", pronunciation: "/ˈfluː.ɪd/", meaning: "Any substance that flows easily, including both liquids and gases.", example: "Hydraulic oil and compressed air are both categorized as fluids." },
    { word: "Frequency", pronunciation: "/ˈfriː.kwən.si/", meaning: "The number of wave cycles that happen per second, measured in Hertz (Hz).", example: "Wall power outlets deliver electricity at a frequency of 50 or 60 Hz." },
    { word: "Fatigue", pronunciation: "/fəˈtiːɡ/", meaning: "Material weakening and tiny cracks caused by repeated bending stress.", example: "Airplane wings undergo regular inspection for metal fatigue." },
    { word: "Framework", pronunciation: "/ˈfreɪm.wɜːk/", meaning: "A pre-built library of coding tools that speeds up software development.", example: "Developers use frameworks to build responsive mobile apps quickly." },
    { word: "Flux", pronunciation: "/flʌks/", meaning: "The total amount of magnetic field passing through a specific surface area.", example: "Electric generators produce electricity by rotating coils through magnetic flux." },
    { word: "Frontend", pronunciation: "/ˈfrʌnt.end/", meaning: "The visual, interactive interface of an app that users touch and see.", example: "HTML, CSS, and JavaScript form the foundation of frontend web design." },
    { word: "Fracture", pronunciation: "/ˈfræk.tʃər/", meaning: "The breaking or snapping of a solid material under excessive load.", example: "Cast iron will fracture rather than bend if struck with a heavy hammer." }
  ],

  G: [
    { word: "Gateway", pronunciation: "/ˈɡeɪt.weɪ/", meaning: "A networking hub that links two different computer networks together.", example: "Your Wi-Fi router serves as a gateway to the global internet." },
    { word: "Gearbox", pronunciation: "/ˈɡɪə.bɒks/", meaning: "A casing containing gears that changes motor speed, direction, and torque.", example: "Car gearboxes change gear ratios for climbing steep hills easily." },
    { word: "Generator", pronunciation: "/ˈdʒen.ər.eɪ.tər/", meaning: "A machine that turns spinning motion into useful electrical energy.", example: "Wind turbines spin giant generators to produce clean electricity." },
    { word: "Gradient", pronunciation: "/ˈɡreɪ.di.ənt/", meaning: "The rate of change, slope, or steepness of a mathematical curve.", example: "AI optimization uses gradient descent to minimize prediction errors." },
    { word: "Gyroscope", pronunciation: "/ˈdʒaɪ.rə.skəʊp/", meaning: "A sensor that measures rotation, tilt, and orientation in 3D space.", example: "Smartphones use gyroscopes to detect when you rotate screen orientation." },
    { word: "Grid", pronunciation: "/ɡrɪd/", meaning: "An interconnected network that delivers electricity across whole regions.", example: "Rooftop solar panels send extra power back to the electrical grid." },
    { word: "Grounding", pronunciation: "/ˈɡraʊn.dɪŋ/", meaning: "Connecting an electrical circuit to the physical earth for safety.", example: "Grounding wires protect home appliances from hazardous power surges." },
    { word: "Graph", pronunciation: "/ɡrɑːf/", meaning: "A data structure of connected points (nodes) and connecting lines (edges).", example: "Navigation apps use graph algorithms to find the fastest driving route." },
    { word: "Gasket", pronunciation: "/ˈɡæs.kɪt/", meaning: "A rubber or metal seal placed between joined parts to prevent leaks.", example: "Rubber door gaskets keep the refrigerator cold air tightly sealed." },
    { word: "Galvanize", pronunciation: "/ˈɡæl.və.naɪz/", meaning: "Coating iron with protective zinc to prevent outdoor rusting.", example: "Galvanized steel fences stay rust-free in rain for decades." }
  ],

  H: [
    { word: "Hardware", pronunciation: "/ˈhɑːd.weər/", meaning: "The physical electronic parts of a computer system that you can touch.", example: "Keyboards, hard drives, and circuit boards are all computer hardware." },
    { word: "Hydraulics", pronunciation: "/haɪˈdrɔː.lɪks/", meaning: "Using pressurized liquids to move heavy machinery and multiply force.", example: "Excavators use hydraulic pistons to dig and lift heavy boulders." },
    { word: "Heuristic", pronunciation: "/hjʊəˈrɪs.tɪk/", meaning: "A practical rule of thumb used to find quick solutions to problems.", example: "Antivirus software uses heuristic rules to spot suspicious files." },
    { word: "Harmonic", pronunciation: "/hɑːˈmɒn.ɪk/", meaning: "A wave frequency that is an exact multiple of a base sound tone.", example: "Musical instruments produce distinct tones because of their harmonics." },
    { word: "Hashing", pronunciation: "/ˈhæʃ.ɪŋ/", meaning: "Converting any text into a fixed scrambled code to secure passwords.", example: "Websites store hashed passwords so nobody can read user credentials." },
    { word: "Heatmap", pronunciation: "/ˈhiːt.mæp/", meaning: "A color-coded visual map showing where activity or values are highest.", example: "App heatmaps show which buttons users tap on most frequently." },
    { word: "Hydrodynamics", pronunciation: "/ˌhaɪ.drəʊ.daɪˈnæm.ɪks/", meaning: "The physics of how liquids move and flow around solid objects.", example: "Boat hulls are sculpted with hydrodynamics to glide smoothly over waves." },
    { word: "Harness", pronunciation: "/ˈhɑː.nəs/", meaning: "An organized bundle of insulated electrical wires inside a vehicle.", example: "The car's wiring harness connects all sensors to the dashboard." },
    { word: "Holography", pronunciation: "/hɒlˈɒɡ.rə.fi/", meaning: "A 3D image technique using laser beams to produce freestanding visuals.", example: "Credit cards feature small holographic security seals to prevent forgery." },
    { word: "Hybrid", pronunciation: "/ˈhaɪ.brɪd/", meaning: "A system combining two different technologies to maximize efficiency.", example: "Hybrid cars pair a gasoline engine with an electric battery to save fuel." }
  ],

  I: [
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", meaning: "The total resistance an electrical circuit presents to alternating current.", example: "Matching headphone impedance ensures crystal-clear audio output." },
    { word: "Inductor", pronunciation: "/ɪnˈdʌk.tər/", meaning: "A wire coil that stores electrical energy inside a magnetic field.", example: "Inductors filter out voltage spikes in sensitive electronics." },
    { word: "Interface", pronunciation: "/ˈɪn.tə.feɪs/", meaning: "The shared boundary where two systems meet and exchange data.", example: "A clean user interface makes apps pleasant and simple to use." },
    { word: "Iteration", pronunciation: "/ˌɪt.ərˈeɪ.ʃən/", meaning: "Repeating a design or coding cycle to gradually improve the result.", example: "Engineers built several prototype iterations before launching the final phone." },
    { word: "Inertia", pronunciation: "/ɪˈnɜː.ʃə/", meaning: "The natural tendency of an object to resist changes in speed or direction.", example: "Seatbelts protect passengers from inertia when a vehicle stops fast." },
    { word: "Insulation", pronunciation: "/ˌɪn.sjəˈleɪ.ʃən/", meaning: "A protective barrier that prevents the leakage of electricity or heat.", example: "Plastic insulation around electrical cords prevents electric shocks." },
    { word: "Impulse", pronunciation: "/ˈɪm.pʌls/", meaning: "A sudden burst of force over a brief time that changes an object's speed.", example: "Hitting a tennis ball delivers an instant force impulse." },
    { word: "Inheritance", pronunciation: "/ɪnˈher.ɪ.təns/", meaning: "A coding mechanism where new code reuses properties from existing code.", example: "An 'ElectricCar' class inherits standard driving traits from a 'Car' class." },
    { word: "Infrastructure", pronunciation: "/ˈɪn.frəˌstrʌk.tʃər/", meaning: "Fundamental systems like roads, water pipes, power lines, and internet.", example: "High-speed broadband infrastructure powers modern digital economies." },
    { word: "Injection", pronunciation: "/ɪnˈdʒek.ʃən/", meaning: "Forcing pressurized liquid or material into a mold or engine chamber.", example: "Electronic fuel injection sprays exact fuel mists for efficient burning." }
  ],

  J: [
    { word: "Jitter", pronunciation: "/ˈdʒɪt.ər/", meaning: "Tiny, irregular timing delays in digital signals causing stuttering.", example: "High internet jitter causes video calls to stutter and freeze." },
    { word: "Joule", pronunciation: "/dʒuːl/", meaning: "The standard international unit measuring physical work and energy.", example: "A 60-watt light bulb uses 60 joules of electrical energy every second." },
    { word: "Junction", pronunciation: "/ˈdʒʌŋk.ʃən/", meaning: "A point where two or more wires, pipes, or semiconductor layers meet.", example: "Solar cells generate electrical voltage at their internal P-N junction." },
    { word: "Joint", pronunciation: "/dʒɔɪnt/", meaning: "The connection point joining two or more mechanical parts together.", example: "Robotic arm joints rotate smoothly using precision ball bearings." },
    { word: "JavaScript", pronunciation: "/ˈdʒɑː.və.skrɪpt/", meaning: "The core programming language that makes websites interactive and alive.", example: "This entire vocabulary app is powered by interactive JavaScript." },
    { word: "Jet", pronunciation: "/dʒet/", meaning: "A fast, high-pressure stream of liquid or gas forced out through a nozzle.", example: "Water jet cutters spray pressurized water to slice through thick metal." },
    { word: "Journal", pronunciation: "/ˈdʒɜː.nəl/", meaning: "The polished section of a rotating machine shaft resting inside a bearing.", example: "Motor oil keeps the crankshaft journal floating without metal friction." },
    { word: "Jumper", pronunciation: "/ˈdʒʌm.pər/", meaning: "A small metal connector clip used to bridge pins on a circuit board.", example: "Technicians move a jumper pin to reset motherboard BIOS settings." },
    { word: "JSON", pronunciation: "/ˈdʒeɪ.sən/", meaning: "A clean, lightweight text format used by apps to exchange internet data.", example: "Weather apps receive live forecasts packaged in structured JSON format." },
    { word: "Justification", pronunciation: "/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/", meaning: "The technical reasoning provided to prove a design is safe and sound.", example: "The engineer submitted stress calculations as justification for the beam." }
  ],

  K: [
    { word: "Kinematics", pronunciation: "/ˌkɪn.əˈmæt.ɪks/", meaning: "The study of motion describing speed and path without considering forces.", example: "Kinematics formulas calculate the robotic arm's position and speed." },
    { word: "Kernel", pronunciation: "/ˈkɜː.nəl/", meaning: "The central core program of an operating system managing CPU and memory.", example: "The Linux kernel manages hardware access safely for all installed apps." },
    { word: "Kilowatt", pronunciation: "/ˈkɪl.ə.wɒt/", meaning: "A unit of electrical power equal to 1,000 watts (1 kW).", example: "Electric water heaters consume around 2 kilowatts of electric power." },
    { word: "Kinetic", pronunciation: "/kɪˈnet.ɪk/", meaning: "Relating to the physical energy that an object possesses due to its motion.", example: "Car brakes turn kinetic energy of movement into harmless heat." },
    { word: "Karnaugh", pronunciation: "/ˈkɑː.nɔː/", meaning: "A visual grid map used in electronics to simplify binary logic expressions.", example: "Engineering students use Karnaugh maps to reduce required logic gates." },
    { word: "Kalman", pronunciation: "/ˈkæl.mən/", meaning: "An algorithm combining multiple noisy sensor readings to find true position.", example: "Drones use Kalman filters to combine GPS and compass data for stability." },
    { word: "K-Means", pronunciation: "/ˈkeɪ.miːnz/", meaning: "A machine learning algorithm grouping similar data points into clusters.", example: "Music streaming services use K-means to group users with similar tastes." },
    { word: "Kirchhoff", pronunciation: "/ˈkɪərk.hɒf/", meaning: "Circuit laws proving that electric current and voltage are always conserved.", example: "Kirchhoff's current law states all current entering a wire node must exit it." },
    { word: "Keyframe", pronunciation: "/ˈkiː.freɪm/", meaning: "A main milestone marker in animation that defines a key movement position.", example: "Video editors place keyframes to animate objects smoothly on screen." },
    { word: "Knot", pronunciation: "/nɒt/", meaning: "A speed unit used on water and air equal to one nautical mile per hour.", example: "The ferry crossed the bay at a steady cruising speed of 18 knots." }
  ],

  L: [
    { word: "Latency", pronunciation: "/ˈleɪ.tən.si/", meaning: "The brief time delay between sending a command and receiving a response.", example: "Low network latency is essential for lag-free multiplayer gaming." },
    { word: "Logic", pronunciation: "/ˈlɒdʒ.ɪk/", meaning: "The systematic rules and reasoning that govern computer programs and chips.", example: "Logic gates combine binary 0s and 1s to execute math calculations." },
    { word: "Laser", pronunciation: "/ˈleɪ.zər/", meaning: "A device that emits a focused, intense beam of monochromatic light.", example: "Supermarket barcode scanners use safe laser beams to scan item tags." },
    { word: "Lubrication", pronunciation: "/ˌluː.brɪˈkeɪ.ʃən/", meaning: "Applying oil or grease between moving parts to reduce wear and heat.", example: "Engine oil lubrication keeps car pistons sliding smoothly." },
    { word: "Linux", pronunciation: "/ˈlɪn.əks/", meaning: "A popular open-source operating system powering servers and Android.", example: "Most cloud servers and supercomputers run on reliable Linux." },
    { word: "Luminescence", pronunciation: "/ˌluː.mɪˈnes.əns/", meaning: "Light emitted by chemicals or electricity without creating heat.", example: "Glow sticks and fireflies produce cool light through luminescence." },
    { word: "Loadcell", pronunciation: "/ˈləʊd.sel/", meaning: "An electronic weight sensor turning physical pressure into a digital signal.", example: "Bathroom digital scales use load cells to measure body weight." },
    { word: "Lever", pronunciation: "/ˈliː.vər/", meaning: "A simple rigid tool pivoting on a fulcrum to multiply lifting power.", example: "Crowbars and bottle openers are simple, effective mechanical levers." },
    { word: "Lithium", pronunciation: "/ˈlɪθ.i.əm/", meaning: "A lightweight metal storing high electrical energy in rechargeable batteries.", example: "Lithium batteries power modern smartphones and electric vehicles." },
    { word: "Loop", pronunciation: "/luːp/", meaning: "A programming command repeating instructions until a goal is reached.", example: "A music app uses a loop to play all songs in a playlist sequentially." }
  ],

  M: [
    { word: "Microcontroller", pronunciation: "/ˌmaɪ.krəʊ.kənˈtrəʊ.lər/", meaning: "A single computer chip with CPU, memory, and pins to control a device.", example: "Microwaves and washing machines are controlled by microcontrollers." },
    { word: "Modulation", pronunciation: "/ˌmɒd.jʊˈleɪ.ʃən/", meaning: "Encoding voice or data onto radio carrier waves for wireless broadcast.", example: "Wi-Fi routers modulate digital data into high-speed radio signals." },
    { word: "Multithreading", pronunciation: "/ˌmʌl.tiˈθred.ɪŋ/", meaning: "Allowing a computer processor to run multiple tasks at the same time.", example: "Multithreading lets you edit a document while music plays smoothly." },
    { word: "Metallurgy", pronunciation: "/məˈtæl.ə.dʒi/", meaning: "The science of metal properties and creating stronger metal alloys.", example: "Metallurgy innovations created lightweight titanium alloys for planes." },
    { word: "Momentum", pronunciation: "/məˈmen.təm/", meaning: "The quantity of motion an object has, calculated as mass times velocity.", example: "A heavy truck has high momentum and takes distance to stop completely." },
    { word: "Middleware", pronunciation: "/ˈmɪd.əl.weər/", meaning: "Bridge software helping two different computer applications talk together.", example: "Middleware connects the website safely to backend banking databases." },
    { word: "Magnetism", pronunciation: "/ˈmæɡ.nə.tɪ.zəm/", meaning: "The invisible force produced by magnets and currents that attracts metal.", example: "Electric motors use magnetism to turn electrical current into rotation." },
    { word: "Mesh", pronunciation: "/meʃ/", meaning: "A network design where multiple hubs connect together to share coverage.", example: "Mesh Wi-Fi spreads multiple small hubs to cover an entire house." },
    { word: "Matrix", pronunciation: "/ˈmeɪ.trɪks/", meaning: "A rectangular grid of numbers in rows and columns used in 3D graphics.", example: "Graphics cards multiply 3D matrices millions of times per second." },
    { word: "Machining", pronunciation: "/məˈʃiː.nɪŋ/", meaning: "Cutting and carving solid raw metal into a precise finished part.", example: "CNC machining carved the aluminum camera body from a single block." }
  ],

  N: [
    { word: "Network", pronunciation: "/ˈnet.wɜːk/", meaning: "A group of linked computers and devices sharing data and internet access.", example: "Office computers connect to a shared network to print and share files." },
    { word: "Node", pronunciation: "/nəʊd/", meaning: "Any single connected device or junction point within a larger network.", example: "Every phone and smart TV connected to your Wi-Fi is a network node." },
    { word: "Nanotechnology", pronunciation: "/ˌnæn.əʊ.tekˈnɒl.ə.dʒi/", meaning: "Engineering materials at a microscopic atomic scale under 100 nanometers.", example: "Nanotechnology creates ultra-thin water-repellent coatings on jackets." },
    { word: "Normalization", pronunciation: "/ˌnɔː.məl.aɪˈzeɪ.ʃən/", meaning: "Organizing database tables neatly to eliminate duplicate entries.", example: "Data normalization keeps customer records organized and searches fast." },
    { word: "Nyquist", pronunciation: "/ˈnaɪ.kwɪst/", meaning: "A digital rule stating sound must be sampled at least twice its frequency.", example: "Audio CDs sample sound 44,100 times per second for crisp playback." },
    { word: "Nozzle", pronunciation: "/ˈnɒz.əl/", meaning: "A shaped opening at the end of a pipe that speeds up and directs fluid flow.", example: "Fire hose nozzles accelerate water streams to reach tall building roofs." },
    { word: "Null", pronunciation: "/nʌl/", meaning: "A special value in programming representing empty or unassigned data.", example: "Leaving an optional form field empty saves it as a null value." },
    { word: "Newton", pronunciation: "/ˈnjuː.tən/", meaning: "The standard international scientific unit used for measuring physical force.", example: "Lifting an average apple takes about one newton of lifting force." },
    { word: "Navigation", pronunciation: "/ˌnæv.ɪˈɡeɪ.ʃən/", meaning: "Directing movement and tracking location to reach a target destination.", example: "GPS satellite navigation provides real-time turn-by-turn driving routes." },
    { word: "Nucleation", pronunciation: "/ˌnjuː.kliˈeɪ.ʃən/", meaning: "The initial starting point where ice crystals or bubbles first form.", example: "Carbonated soda forms bubbles around tiny rough nucleation spots in a glass." }
  ],

  O: [
    { word: "Optimization", pronunciation: "/ˌɒp.tɪ.maɪˈzeɪ.ʃən/", meaning: "Making a program, system, or process as fast and efficient as possible.", example: "Code optimization made the mobile application launch in half the time." },
    { word: "Oscillator", pronunciation: "/ˈɒs.ɪ.leɪ.tər/", meaning: "An electronic circuit that creates a steady, repeating electrical wave pulse.", example: "Quartz crystal oscillators keep accurate time inside digital wristwatches." },
    { word: "Overclock", pronunciation: "/ˌəʊ.vəˈklɒk/", meaning: "Running a computer chip at a faster speed than its factory default rating.", example: "Gamers overclock graphics cards to get smoother frame rates in games." },
    { word: "Ontology", pronunciation: "/ɒnˈtɒl.ə.dʒi/", meaning: "A structured map showing how different concepts in a subject relate.", example: "Medical ontologies help computers organize health symptoms and treatments." },
    { word: "Orthogonal", pronunciation: "/ɔːˈθɒɡ.ən.əl/", meaning: "Meeting at a 90-degree right angle, or being completely independent.", example: "The horizontal and vertical grid lines on graph paper are orthogonal." },
    { word: "Overfitting", pronunciation: "/ˌəʊ.vəˈfɪt.ɪŋ/", meaning: "When an AI memorizes training data too closely and fails on new examples.", example: "Engineers added diverse photos to prevent the AI model from overfitting." },
    { word: "Optics", pronunciation: "/ˈɒp.tɪks/", meaning: "The branch of science studying how light travels and bends through lenses.", example: "Eyeglasses and camera lenses are designed using the principles of optics." },
    { word: "Osmosis", pronunciation: "/ɒzˈməʊ.sɪs/", meaning: "The natural movement of water molecules through a semi-permeable filter.", example: "Reverse osmosis water purifiers remove contaminants to create clean water." },
    { word: "Output", pronunciation: "/ˈaʊt.pʊt/", meaning: "The final information, sound, or action produced by a computer system.", example: "The computer output was shown on the display screen and printed on paper." },
    { word: "Ohm", pronunciation: "/əʊm/", meaning: "The standard international unit measuring electrical resistance in circuits.", example: "A standard household speaker has a resistance rating of 4 or 8 ohms." }
  ],

  P: [
    { word: "Processor", pronunciation: "/ˈprəʊ.ses.ər/", meaning: "The primary computer chip (CPU) executing all software calculations.", example: "Multi-core processors allow computers to run dozens of apps at once." },
    { word: "Protocol", pronunciation: "/ˈprəʊ.tə.kɒl/", meaning: "An agreed set of digital rules computers follow to exchange information.", example: "HTTPS is the secure protocol used to browse websites safely." },
    { word: "Piezoelectric", pronunciation: "/paɪˌeɪ.zəʊ.ɪˈlek.trɪk/", meaning: "Materials creating an electric spark when pressed, or vibrating with voltage.", example: "Barbecue lighters use a piezoelectric crystal to generate an ignition spark." },
    { word: "Pneumatics", pronunciation: "/njuːˈmæt.ɪks/", meaning: "Using pressurized air to power tools and movements in factory machines.", example: "Pneumatic wrenches let mechanics remove race car wheel nuts in seconds." },
    { word: "Polymorphism", pronunciation: "/ˌpɒl.iˈmɔː.fɪ.zəm/", meaning: "A coding principle where different objects respond to commands in their own way.", example: "A 'render' command can draw a circle or square using polymorphism." },
    { word: "Photodiode", pronunciation: "/ˌfəʊ.təʊˈdaɪ.əʊd/", meaning: "A light sensor chip that turns incoming light into an electrical current.", example: "TV remote receivers use photodiodes to detect infrared light pulses." },
    { word: "Pipeline", pronunciation: "/ˈpaɪp.laɪn/", meaning: "An assembly line workflow where data passes through sequential steps.", example: "Processors use instruction pipelines to prepare commands in advance." },
    { word: "Polymer", pronunciation: "/ˈpɒl.ɪ.mər/", meaning: "A material made of long repeating molecular chains, like plastics and rubber.", example: "Modern polymers make motorcycle helmets lightweight and impact-proof." },
    { word: "Potentiometer", pronunciation: "/pəˌten.ʃiˈɒm.ɪ.tər/", meaning: "An adjustable rotary dial resistor used to control volume or brightness.", example: "Turning the stereo volume knob adjusts an internal potentiometer." },
    { word: "Pascal", pronunciation: "/pæsˈkæl/", meaning: "The international unit for measuring physical pressure (N/m²).", example: "Car tire pressures are measured in kilopascals (kPa) or PSI units." }
  ],

  Q: [
    { word: "Quantum", pronunciation: "/ˈkwɒn.təm/", meaning: "The smallest possible indivisible unit of energy or matter in physics.", example: "Quantum computers use subatomic particles to solve complex math quickly." },
    { word: "Quenching", pronunciation: "/ˈkwentʃ.ɪŋ/", meaning: "Quickly cooling hot metal in water or oil to make it harder and tougher.", example: "Bladesmiths quench forged steel in oil to harden the sharp edge." },
    { word: "Query", pronunciation: "/ˈkwɪə.ri/", meaning: "A specific search request sent to a database to look up information.", example: "Typing a keyword into a search box sends a query to the database." },
    { word: "Queue", pronunciation: "/kjuː/", meaning: "A first-in first-out list where the first item entered is the first served.", example: "Printers manage print queues to print documents in the order received." },
    { word: "Quadrature", pronunciation: "/ˈkwɒd.rə.tʃər/", meaning: "Two wave signals separated by a 90-degree phase difference.", example: "Quadrature sensors let computer mice track both forward and backward rolling." },
    { word: "Quality", pronunciation: "/ˈkwɒl.ə.ti/", meaning: "How well a product meets durability, safety, and performance standards.", example: "Quality assurance tests ensure every phone screen is free from defects." },
    { word: "Quartile", pronunciation: "/ˈkwɔː.taɪl/", meaning: "Dividing a data set into four equal quarters for statistical analysis.", example: "Scores in the top quartile represent the best 25% of all students." },
    { word: "Quartz", pronunciation: "/kwɔːts/", meaning: "A hard mineral vibrating at exact frequencies when electricity is applied.", example: "Quartz crystal movements keep clocks ticking with precision accuracy." },
    { word: "QuickSort", pronunciation: "/ˈkwɪk.sɔːt/", meaning: "A fast sorting algorithm organizing lists of numbers or names quickly.", example: "QuickSort organizes thousands of contact names in alphabetical order in seconds." },
    { word: "Quorum", pronunciation: "/ˈkwɔː.rəm/", meaning: "The minimum number of nodes required to agree before a change is approved.", example: "Cloud database servers require a quorum before saving financial changes." }
  ],

  R: [
    { word: "Resistor", pronunciation: "/rɪˈzɪs.tər/", meaning: "An electronic part that limits and controls the flow of electrical current.", example: "Resistors prevent LEDs from receiving excessive current and burning out." },
    { word: "Recursion", pronunciation: "/rɪˈkɜː.ʃən/", meaning: "A coding technique where a function calls itself to solve smaller sub-tasks.", example: "Searching through nested computer folders is easily coded with recursion." },
    { word: "Robotics", pronunciation: "/rəʊˈbɒt.ɪks/", meaning: "The branch of engineering designing and programming automated robots.", example: "Robotics in car factories assemble and weld vehicle frames automatically." },
    { word: "Radiation", pronunciation: "/ˌreɪ.diˈeɪ.ʃən/", meaning: "Energy that travels through space or air as waves or fast particles.", example: "Sunlight is a natural form of electromagnetic radiation giving heat." },
    { word: "Resonance", pronunciation: "/ˈrez.ən.əns/", meaning: "When a system vibrates with large amplitude at its natural frequency.", example: "Rubbing the rim of a wine glass creates sound through acoustic resonance." },
    { word: "Relay", pronunciation: "/ˈriː.leɪ/", meaning: "An electrically operated switch letting a small signal control high power.", example: "Car headlights use relays so small dashboard switches control bright lights." },
    { word: "Refactoring", pronunciation: "/ˌriːˈfæk.tər.ɪŋ/", meaning: "Cleaning and restructuring code without changing its outside behavior.", example: "Code refactoring made the software much easier for developers to maintain." },
    { word: "Rigidity", pronunciation: "/rɪˈdʒɪd.ə.ti/", meaning: "The ability of a solid material or frame to resist bending under weight.", example: "Steel bicycle frames offer high rigidity for efficient pedaling power." },
    { word: "Router", pronunciation: "/ˈruː.tər/", meaning: "A network device directing and forwarding internet data packets.", example: "Your home Wi-Fi router connects your devices to the wider internet." },
    { word: "Rotor", pronunciation: "/ˈrəʊ.tər/", meaning: "The rotating component inside an electric motor or helicopter that spins.", example: "Helicopter main rotors create both upward lift and forward flight." }
  ],

  S: [
    { word: "Semiconductor", pronunciation: "/ˌsem.i.kənˈdʌk.tər/", meaning: "A material (like silicon) that can conduct or block electricity as needed.", example: "Silicon microchips pack billions of microscopic semiconductor switches." },
    { word: "Synchronous", pronunciation: "/ˈsɪŋ.krə.nəs/", meaning: "Happening at the exact same time or locked to a shared clock rhythm.", example: "Synchronous online classes happen live with teacher and students present." },
    { word: "Stress", pronunciation: "/stres/", meaning: "The internal pulling or pushing force per unit area inside a material.", example: "Bridge cables are designed to handle high tensile stress during traffic." },
    { word: "Strain", pronunciation: "/streɪn/", meaning: "The amount of stretching or deformation a material undergoes under stress.", example: "Strain gauges detect microscopic bending in airplane wings during flight." },
    { word: "Socket", pronunciation: "/ˈsɒk.ɪt/", meaning: "A hardware connection port or a software network communication endpoint.", example: "Websockets allow live messaging apps to exchange chat messages instantly." },
    { word: "Schema", pronunciation: "/ˈskiː.mə/", meaning: "The structural blueprint layout defining how database data is organized.", example: "The database schema outlines what user info is stored in each column." },
    { word: "Solenoid", pronunciation: "/ˈsəʊ.lən.ɔɪd/", meaning: "A wire coil that becomes an electromagnet to push a pin mechanically.", example: "Car starter solenoids engage the engine starter gear when you turn the key." },
    { word: "Subnet", pronunciation: "/ˈsʌb.net/", meaning: "A smaller logical subdivision of a larger computer IP network.", example: "Company computers are separated on a different subnet from guest Wi-Fi." },
    { word: "Superconductor", pronunciation: "/ˌsuː.pə.kənˈdʌk.tər/", meaning: "A material conducting electricity with absolute zero resistance when cold.", example: "Maglev bullet trains hover over tracks using superconductor magnets." },
    { word: "Stator", pronunciation: "/ˈsteɪ.tər/", meaning: "The stationary, non-moving outer frame and wire coils of an electric motor.", example: "Electric motor stators generate magnetic fields forcing the rotor to spin." }
  ],

  T: [
    { word: "Transistor", pronunciation: "/trænˈzɪs.tər/", meaning: "A microscopic electronic switch that forms the building block of all CPUs.", example: "Modern phone processors contain over 15 billion microscopic transistors." },
    { word: "Thermodynamics", pronunciation: "/ˌθɜː.məʊ.daɪˈnæm.ɪks/", meaning: "The science studying relations between heat, energy, work, and temperature.", example: "Refrigerators and car engines operate on the laws of thermodynamics." },
    { word: "Torque", pronunciation: "/tɔːk/", meaning: "The twisting rotational force that causes an object or wheel to spin.", example: "Electric vehicles accelerate quickly because electric motors deliver instant torque." },
    { word: "Topology", pronunciation: "/təˈpɒl.ə.dʒi/", meaning: "The geometric layout and connection pattern of devices in a network.", example: "A star network topology links all office PCs to one central switch." },
    { word: "Telemetry", pronunciation: "/təˈlem.ə.tri/", meaning: "Automatically measuring sensor data and sending it wirelessly to base.", example: "Spacecraft beam telemetry data on speed and fuel levels back to mission control." },
    { word: "Turbine", pronunciation: "/ˈtɜː.baɪn/", meaning: "A machine with rotating blades driven by water, steam, or gas to make power.", example: "Hydroelectric dams use water turbines to generate clean electricity." },
    { word: "Tensor", pronunciation: "/ˈten.sər/", meaning: "A multi-dimensional grid array of numbers used in AI and machine learning.", example: "AI image models store photos as 3D number tensors (height, width, color)." },
    { word: "Tensile", pronunciation: "/ˈten.saɪl/", meaning: "Relating to tension and the ability to withstand pulling forces without breaking.", example: "Steel has high tensile strength, which is why it is used in suspension bridges." },
    { word: "Throttle", pronunciation: "/ˈθrɒt.əl/", meaning: "A valve controlling the flow of power or fuel to regulate engine speed.", example: "Pressing the gas pedal opens the engine throttle to speed up the car." },
    { word: "Throughput", pronunciation: "/ˈθruː.pʊt/", meaning: "The actual amount of data or tasks processed successfully per second.", example: "Fast SSD drives deliver data throughput of over 5,000 megabytes per second." }
  ],

  U: [
    { word: "Ultrasound", pronunciation: "/ˈʌl.trə.saʊnd/", meaning: "High-frequency sound waves above human hearing used for medical scans.", example: "Doctors use safe ultrasound scans to monitor babies during pregnancy." },
    { word: "Unicast", pronunciation: "/ˈjuː.nɪ.kɑːst/", meaning: "Sending network data directly from one specific sender to one receiver.", example: "Standard one-on-one web browsing sessions use unicast transmission." },
    { word: "Ubiquitous", pronunciation: "/juːˈbɪk.wɪ.təs/", meaning: "Present and found everywhere; technology embedded in everyday life.", example: "Smartphones have made high-speed internet access ubiquitous globally." },
    { word: "Upstream", pronunciation: "/ˈʌp.striːm/", meaning: "Data traveling from your device up to the internet (uploading).", example: "Fast upstream speeds allow smooth video uploading to the cloud." },
    { word: "Unicode", pronunciation: "/ˈjuː.nɪ.kəʊd/", meaning: "The global international standard assigning unique numbers to all letters and emojis.", example: "Unicode ensures emojis and global alphabets display correctly everywhere." },
    { word: "Ultimate", pronunciation: "/ˈʌl.tɪ.mət/", meaning: "The highest maximum stress a material can take before breaking completely.", example: "Cables are tested to find their ultimate breaking strength for safety." },
    { word: "Underflow", pronunciation: "/ˈʌn.də.fləʊ/", meaning: "When a calculated number is so tiny that computer memory rounds it to zero.", example: "Scientific simulation software uses high-precision math to prevent underflow." },
    { word: "Ultrasonic", pronunciation: "/ˌʌl.trəˈsɒn.ɪk/", meaning: "Sound frequencies above human hearing used in parking sensors and sonar.", example: "Car parking sensors use ultrasonic chirps to detect nearby obstacles." },
    { word: "Uncertainty", pronunciation: "/ʌnˈsɜː.tən.ti/", meaning: "The small estimated margin of error within which a true measurement lies.", example: "Scientific measurements always include a plus-or-minus uncertainty value." },
    { word: "Unit", pronunciation: "/ˈjuː.nɪt/", meaning: "A standard quantity used to measure physical properties like meters and seconds.", example: "Engineers always write the correct measurement unit next to calculated numbers." }
  ],

  V: [
    { word: "Voltage", pronunciation: "/ˈvəʊl.tɪdʒ/", meaning: "The electrical pushing pressure that forces electric current through wires.", example: "USB ports supply 5 volts of electrical power for charging smartphones." },
    { word: "Vector", pronunciation: "/ˈvek.tər/", meaning: "A quantity in math and physics that has both a size (magnitude) and a direction.", example: "Wind velocity is a vector because it has both a speed and a direction." },
    { word: "Viscosity", pronunciation: "/vɪˈskɒs.ə.ti/", meaning: "A liquid's thickness and resistance to flowing (honey has high viscosity).", example: "Motor oil has the right viscosity to coat engine parts smoothly." },
    { word: "Virtualization", pronunciation: "/ˌvɜː.tʃu.əl.aɪˈzeɪ.ʃən/", meaning: "Running multiple virtual software computers inside one physical machine.", example: "Cloud servers use virtualization to run multiple websites safely together." },
    { word: "Valve", pronunciation: "/vælv/", meaning: "A mechanical device that opens or closes to control fluid flow in pipes.", example: "Turning the sink water faucet opens a valve to allow water to flow." },
    { word: "Vibration", pronunciation: "/vaɪˈbreɪ.ʃən/", meaning: "A rapid back-and-forth shaking motion around a central position.", example: "Smartphones use small vibrating motors for silent call notifications." },
    { word: "Variance", pronunciation: "/ˈveə.ri.əns/", meaning: "A statistical number showing how spread out numbers are from the average.", example: "Low variance in factory part sizes means manufacturing is consistent." },
    { word: "Velocity", pronunciation: "/vəˈlɒs.ə.ti/", meaning: "The speed of a moving object combined with its specific travel direction.", example: "The airplane was flying at a cruising velocity of 850 km/h heading East." },
    { word: "Volatile", pronunciation: "/ˈvɒl.ə.taɪl/", meaning: "Computer memory (like RAM) that clears when the power is turned off.", example: "RAM is volatile memory, while SSD storage saves files permanently." },
    { word: "Voltmeter", pronunciation: "/ˈvəʊltˌmiː.tər/", meaning: "An electronic tool used to measure electrical voltage in a circuit.", example: "The technician used a digital voltmeter to check the 12V car battery." }
  ],

  W: [
    { word: "Wavelength", pronunciation: "/ˈweɪv.leŋθ/", meaning: "The distance from the peak of one wave to the peak of the next wave.", example: "Red light has a longer wavelength than violet light in the spectrum." },
    { word: "Waveform", pronunciation: "/ˈweɪv.fɔːm/", meaning: "The visual wave graph shape of sound, light, or electrical signals over time.", example: "Audio editors display the sound waveform to view volume levels visually." },
    { word: "Wattage", pronunciation: "/ˈwɒt.ɪdʒ/", meaning: "The amount of electrical power used or produced by a device, in Watts.", example: "LED bulbs give bright room lighting while consuming only 10 watts." },
    { word: "Wear", pronunciation: "/weər/", meaning: "The gradual loss of surface material caused by daily friction and rubbing.", example: "Tire tread wear indicates when it is time to replace car tires." },
    { word: "Webhook", pronunciation: "/ˈweb.hʊk/", meaning: "An automated message sent from one website to another when an event happens.", example: "When an order is placed, a webhook alerts the warehouse automatically." },
    { word: "Wireless", pronunciation: "/ˈwaɪə.ləs/", meaning: "Transmitting information through radio waves without physical cables.", example: "Wireless headphones connect to your phone seamlessly over Bluetooth." },
    { word: "Wireframe", pronunciation: "/ˈwaɪə.freɪm/", meaning: "A simple visual outline sketch of an app screen layout before coding.", example: "Designers draw wireframes to plan button placements clearly." },
    { word: "Workbench", pronunciation: "/ˈwɜːk.bentʃ/", meaning: "A sturdy table equipped with tools and meters for testing projects.", example: "The electronics workbench had a soldering iron, magnifying lamp, and meter." },
    { word: "Workflow", pronunciation: "/ˈwɜːk.fləʊ/", meaning: "The sequence of organized steps a project follows from start to finish.", example: "Automated testing is part of the development workflow before releasing updates." },
    { word: "Windlass", pronunciation: "/ˈwɪnd.ləs/", meaning: "A mechanical winch drum used to haul up heavy weights like ship anchors.", example: "Sailors use an electric windlass to pull the heavy anchor up easily." }
  ],

  X: [
    { word: "XOR", pronunciation: "/ˌeks.ɔːr/", meaning: "Exclusive OR; a logic gate outputting true only when one input is true.", example: "XOR logic gates are used inside digital computer adders for binary math." },
    { word: "X-Ray", pronunciation: "/ˈeks.reɪ/", meaning: "A powerful form of light wave that passes through skin to reveal bones.", example: "Doctors take X-ray scans to check if an injured arm has broken bones." },
    { word: "Xenon", pronunciation: "/ˈzen.ɒn/", meaning: "A noble gas that gives a bright white glow when electric current passes.", example: "High-end car headlights use xenon gas for bright white illumination." },
    { word: "XML", pronunciation: "/ˌeks.emˈel/", meaning: "A structured text format with custom tags used to store and transfer data.", example: "Android apps store screen layout designs inside formatted XML files." },
    { word: "Xylene", pronunciation: "/ˈzaɪ.liːn/", meaning: "A clear industrial solvent used in paints and cleaning circuit boards.", example: "Technicians use xylene to clean printed circuit boards and adhesives." },
    { word: "Xerography", pronunciation: "/zɪəˈrɒɡ.rə.fi/", meaning: "The dry photocopying process using static electricity and toner powder.", example: "Office photocopiers and laser printers use xerography to copy pages." },
    { word: "Crossbar", pronunciation: "/ˈkrɒs.bɑːr/", meaning: "A grid of crossing switches connecting any input line to any output line.", example: "Telephone networks originally used crossbar switch grids to route calls." },
    { word: "Xylometer", pronunciation: "/zaɪˈlɒm.ɪ.tər/", meaning: "A tool measuring the volume of wood samples through displaced water.", example: "Foresters use xylometers to determine wood density and moisture." },
    { word: "X-Axis", pronunciation: "/ˈeks.æk.sɪs/", meaning: "The horizontal line (left to right) on a graph or 2D coordinate grid.", example: "On line charts, time is plotted horizontally along the X-axis." },
    { word: "Xylem", pronunciation: "/ˈzaɪ.ləm/", meaning: "Plant veins transporting water from roots to leaves, studied for microchips.", example: "Engineers study xylem structures to design energy-free cooling channels." }
  ],

  Y: [
    { word: "Yield", pronunciation: "/jiːld/", meaning: "The stress level at which a material stops springing back and bends permanently.", example: "Steel beams are designed so building loads never reach the yield point." },
    { word: "Yoke", pronunciation: "/jəʊk/", meaning: "A structural cross-piece connecting parts together or guiding magnetic fields.", example: "Airplane control yokes allow pilots to control climb, descent, and turns." },
    { word: "Yottabyte", pronunciation: "/ˈjɒt.ə.baɪt/", meaning: "A massive unit of data storage equal to one trillion terabytes (10^24 bytes).", example: "All digital data created by humanity combined is approaching yottabytes." },
    { word: "Yaw", pronunciation: "/jɔː/", meaning: "The twisting rotation of a plane or drone to left or right around its vertical axis.", example: "Drone pilots adjust the yaw stick to rotate the camera left or right." },
    { word: "Y-Axis", pronunciation: "/ˈwaɪ.æk.sɪs/", meaning: "The vertical line (bottom to top) on a math graph or coordinate plane.", example: "On a temperature graph, heat degrees are plotted vertically on the Y-axis." },
    { word: "Ytterbium", pronunciation: "/ɪˈtɜː.bi.əm/", meaning: "A rare chemical metal element used inside high-power industrial lasers.", example: "Ytterbium fiber lasers produce intense cutting beams slicing thick metal." },
    { word: "YAML", pronunciation: "/ˈjæm.əl/", meaning: "A clean, human-friendly text format used to write configuration settings.", example: "Developers write simple YAML files to configure cloud server hosting." },
    { word: "Yagi", pronunciation: "/ˈjɑː.ɡi/", meaning: "A directional antenna made of metal rods focusing radio signals in one path.", example: "Rooftop TV antennas with horizontal crossbars are classic Yagi antennas." },
    { word: "Yielding", pronunciation: "/ˈjiːl.dɪŋ/", meaning: "The process of a structural material bending under stress without snapping.", example: "Steel rebar yielding gives a visual safety warning before concrete fails." },
    { word: "Y-Delta", pronunciation: "/ˌwaɪˈdel.tə/", meaning: "A starter wiring method to start big electric motors without blowing fuses.", example: "Factory water pumps use Y-Delta starters to reduce starting power surges." }
  ],

  Z: [
    { word: "Zener", pronunciation: "/ˈziː.nər/", meaning: "A special semiconductor diode holding a steady voltage in reverse bias.", example: "Zener diodes provide clean reference voltages to protect delicate chips." },
    { word: "Zero-Day", pronunciation: "/ˌzɪə.rəʊˈdeɪ/", meaning: "A newly discovered software bug that has no existing security patch yet.", example: "Security researchers work fast to fix zero-day bugs before hackers exploit them." },
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", meaning: "Represented by symbol 'Z'; the total complex resistance of an AC circuit.", example: "Audio engineers match speaker impedance Z to get maximum clear sound." },
    { word: "Zenith", pronunciation: "/ˈzen.ɪθ/", meaning: "The highest point directly overhead in the sky (elevation angle of 90°).", example: "At noon in summer, the sun reaches near its highest zenith in the sky." },
    { word: "Zinc", pronunciation: "/zɪŋk/", meaning: "A protective metal element used to coat steel and prevent rusting.", example: "Galvanized metal buckets are dipped in molten zinc to prevent rust." },
    { word: "Zip", pronunciation: "/zɪp/", meaning: "A popular compressed file format shrinking file sizes and bundling files.", example: "Sending multiple project documents inside a Zip file makes emailing fast." },
    { word: "Zettabyte", pronunciation: "/ˈzet.ə.baɪt/", meaning: "A giant unit of digital data storage equal to one billion terabytes (10^21 bytes).", example: "Annual global internet traffic now exceeds multiple zettabytes of data." },
    { word: "Zirconium", pronunciation: "/zɜːˈkəʊ.ni.əm/", meaning: "A strong, heat-resistant metal used inside nuclear power stations.", example: "Zirconium alloys house nuclear fuel safely because they withstand extreme heat." },
    { word: "Zoom", pronunciation: "/zuːm/", meaning: "Changing camera lens focal length to make faraway objects appear close.", example: "Camera zoom lenses let photographers take sharp photos of distant wildlife." },
    { word: "Zero-Crossing", pronunciation: "/ˌzɪə.rəʊˈkrɒs.ɪŋ/", meaning: "The exact moment when an alternating AC wave intersects the zero-volt line.", example: "Light dimmers switch power at the zero-crossing point to prevent electrical buzz." }
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
  masteredWords: new Set(),
  bookmarks: new Set(),
  currentLetter: 'A',
  currentIndex: 0,
  currentScreen: 'home',
  searchQuery: ''
};

function initStorage() {
  try {
    state.onboardingCompleted = localStorage.getItem(STORAGE_KEYS.ONBOARDING) === 'true';

    const savedMastered = localStorage.getItem(STORAGE_KEYS.MASTERED_WORDS);
    if (savedMastered) state.masteredWords = new Set(JSON.parse(savedMastered));

    const savedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (savedBookmarks) state.bookmarks = new Set(JSON.parse(savedBookmarks));

    const savedLetter = localStorage.getItem(STORAGE_KEYS.CURRENT_LETTER);
    if (savedLetter && TECHNICAL_VOCABULARY[savedLetter]) state.currentLetter = savedLetter;

    const savedIndex = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
    if (savedIndex !== null) {
      const idx = parseInt(savedIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < (TECHNICAL_VOCABULARY[state.currentLetter] || []).length) {
        state.currentIndex = idx;
      }
    }
  } catch (err) {
    console.warn('Storage issue:', err);
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
   3. SPEECH AUDIO ENGINE
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
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';
      if (this.selectedVoice) utterance.voice = this.selectedVoice;

      utterance.onstart = () => { if (typeof onStart === 'function') onStart(); };
      utterance.onend = () => { if (typeof onEnd === 'function') onEnd(); };
      utterance.onerror = () => { if (typeof onEnd === 'function') onEnd(); };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Audio speak error:', err);
      if (typeof onEnd === 'function') onEnd();
    }
  }

  speakLetter(char) {
    if (!this.synth) return;
    try {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(char);
      utterance.rate = 0.95;
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
  onboarding: document.getElementById('screen-onboarding'),
  viewHome: document.getElementById('view-home'),
  viewLearn: document.getElementById('view-learn'),
  viewWordList: document.getElementById('view-word-list'),
  viewWordLearn: document.getElementById('view-word-learn'),
  viewSearch: document.getElementById('view-search'),
  viewProgress: document.getElementById('view-progress'),

  ribbonContainer: document.getElementById('ribbon-letters-container'),
  desktopNavTabs: document.querySelectorAll('.desktop-nav .nav-btn'),
  mobileNavTabs: document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn'),
  headerBranding: document.getElementById('header-branding-btn'),
  btnHeaderSearch: document.getElementById('btn-header-search'),

  btnOnboardingStart: document.getElementById('btn-onboarding-start'),
  btnOnboardingSkip: document.getElementById('btn-onboarding-skip'),

  homeContinueCard: document.getElementById('home-continue-card'),
  homeContinueLetterBadge: document.getElementById('home-continue-letter-badge'),
  homeContinueWordPreview: document.getElementById('home-continue-word-preview'),
  homeContinueCounter: document.getElementById('home-continue-counter'),
  btnHomeContinueAction: document.getElementById('btn-home-continue-action'),
  homeContinueProgressBar: document.getElementById('home-continue-progress-bar'),
  homeStatLearned: document.getElementById('home-stat-learned'),
  homeStatRemaining: document.getElementById('home-stat-remaining'),
  homeStatPercent: document.getElementById('home-stat-percent'),
  homeAlphabetQuickGrid: document.getElementById('home-alphabet-quick-grid'),

  learnAlphabetCardsList: document.getElementById('learn-alphabet-cards-list'),

  btnWordlistBack: document.getElementById('btn-wordlist-back'),
  wordlistTitle: document.getElementById('wordlist-title'),
  wordlistProgressBadge: document.getElementById('wordlist-progress-badge'),
  btnWordlistStartLearning: document.getElementById('btn-wordlist-start-learning'),
  wordItemsContainer: document.getElementById('word-items-container'),

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

  searchInputField: document.getElementById('search-input-field'),
  btnSearchClear: document.getElementById('btn-search-clear'),
  searchResultsCount: document.getElementById('search-results-count'),
  searchResultsList: document.getElementById('search-results-list'),

  progressCircleFill: document.getElementById('progress-circle-fill'),
  progressTotalPercent: document.getElementById('progress-total-percent'),
  progStatTotal: document.getElementById('prog-stat-total'),
  progStatLearned: document.getElementById('prog-stat-learned'),
  progStatRemaining: document.getElementById('prog-stat-remaining'),
  progressAlphabetBreakdown: document.getElementById('progress-alphabet-breakdown'),
  btnResetProgress: document.getElementById('btn-reset-progress'),

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
   5. QUICK ALPHABET RIBBON (A THROUGH Z)
   ========================================================================== */
function buildAlphabetRibbon() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  DOM.ribbonContainer.innerHTML = '';

  letters.forEach(char => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ribbon-btn';
    btn.textContent = char;
    btn.dataset.letter = char;
    btn.setAttribute('aria-label', `Letter ${char}`);

    btn.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.ribbonContainer.appendChild(btn);
  });

  updateRibbonHighlight();
}

function updateRibbonHighlight() {
  const ribbonBtns = DOM.ribbonContainer.querySelectorAll('.ribbon-btn');
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
  const currentWords = TECHNICAL_VOCABULARY[state.currentLetter] || TECHNICAL_VOCABULARY.A;
  const wordObj = currentWords[state.currentIndex] || currentWords[0];
  const letterProgress = getLetterProgress(state.currentLetter);

  DOM.homeContinueLetterBadge.textContent = `Letter ${state.currentLetter}`;
  DOM.homeContinueWordPreview.textContent = wordObj.word;
  DOM.homeContinueCounter.textContent = `Word ${state.currentIndex + 1} of ${currentWords.length}`;
  DOM.homeContinueProgressBar.style.width = `${Math.max(4, letterProgress.percent)}%`;

  const totalProg = getTotalProgress();
  DOM.homeStatLearned.textContent = totalProg.learned;
  DOM.homeStatRemaining.textContent = totalProg.remaining;
  DOM.homeStatPercent.textContent = `${totalProg.percent}%`;

  DOM.homeAlphabetQuickGrid.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-top">
        <div class="letter-circle">${char}</div>
        <span class="percent-badge">${p.percent}%</span>
      </div>
      <h4 class="card-title">Letter ${char}</h4>
      <span class="card-count">${p.learned} / ${p.total} Learned</span>
      <div class="card-bar-bg">
        <div class="card-bar-fill" style="width: ${p.percent}%"></div>
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
   8. LEARN SCREEN (A–Z HUB)
   ========================================================================== */
function renderLearnHubScreen() {
  DOM.learnAlphabetCardsList.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-top">
        <div class="letter-circle">${char}</div>
        <span class="percent-badge" style="color: var(--violet-700);">${p.percent}%</span>
      </div>
      <h4 class="card-title">Letter ${char}</h4>
      <span class="card-count">${p.learned} of ${p.total} Words Mastered</span>
      <div class="card-bar-bg">
        <div class="card-bar-fill" style="width: ${p.percent}%"></div>
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
   9. WORD LIST SCREEN
   ========================================================================== */
function renderWordListScreen() {
  const letter = state.currentLetter;
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const p = getLetterProgress(letter);

  DOM.wordlistTitle.textContent = `Letter ${letter} Words`;
  DOM.wordlistProgressBadge.textContent = `${p.learned} / ${p.total} Learned`;
  DOM.wordItemsContainer.innerHTML = '';

  words.forEach((item, index) => {
    const isLearned = state.masteredWords.has(`${letter}_${index}`);

    const card = document.createElement('div');
    card.className = `word-row-card ${isLearned ? 'is-learned' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="word-row-left">
        <div class="word-row-head">
          <h4 class="word-row-title">${item.word}</h4>
          <span class="word-row-phonetic">${item.pronunciation}</span>
        </div>
        <p class="word-row-meaning">${item.meaning}</p>
      </div>
      <button type="button" class="btn-speaker-pill" aria-label="Listen">
        <svg viewBox="0 0 24 24" width="16" height="16"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-speaker-pill')) {
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
   10. WORD LEARNING FOCUS SCREEN
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

  DOM.learnCounterText.textContent = `Letter ${letter} • Word ${index + 1} of ${words.length}`;
  DOM.learnProgressFill.style.width = `${((index + 1) / words.length) * 100}%`;

  DOM.learnLetterPill.textContent = `Letter ${letter}`;

  if (isLearned) {
    DOM.learnStatusPill.textContent = 'Learned ✓';
    DOM.learnStatusPill.className = 'badge-status learned';
  } else {
    DOM.learnStatusPill.textContent = 'To Learn';
    DOM.learnStatusPill.className = 'badge-status unlearned';
  }

  DOM.learnWordHeading.textContent = wordObj.word.toUpperCase();
  DOM.learnPhonetic.textContent = wordObj.pronunciation;

  DOM.btnLearnPronounce.classList.remove('speaking');
  DOM.learnPronounceLabel.textContent = 'Pronounce Word';

  DOM.learnMeaningText.textContent = wordObj.meaning;
  DOM.learnExampleText.textContent = `"${wordObj.example}"`;

  // Letter tiles
  DOM.learnSpellingTiles.innerHTML = '';
  const cleanWord = wordObj.word.toUpperCase().replace(/[^A-Z]/g, '');

  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'spell-tile';
    tile.textContent = char;
    tile.setAttribute('aria-label', `Pronounce letter ${char}`);

    tile.addEventListener('click', () => {
      tile.classList.add('tile-active');
      audioEngine.speakLetter(char);
      setTimeout(() => tile.classList.remove('tile-active'), 300);
    });

    DOM.learnSpellingTiles.appendChild(tile);
  }

  if (isLearned) {
    DOM.btnMarkLearned.classList.add('is-learned');
    DOM.btnMarkLearnedText.textContent = 'Learned ✓';
  } else {
    DOM.btnMarkLearned.classList.remove('is-learned');
    DOM.btnMarkLearnedText.textContent = 'Mark as Learned';
  }

  if (isBookmarked) DOM.btnLearnBookmark.classList.add('active');
  else DOM.btnLearnBookmark.classList.remove('active');

  DOM.btnLearnPrev.disabled = index === 0;

  if (index === words.length - 1) {
    DOM.btnLearnNext.innerHTML = `
      <span>Finish</span>
      <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-check"></use></svg>
    `;
  } else {
    DOM.btnLearnNext.innerHTML = `
      <span>Next</span>
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
    () => { DOM.btnLearnPronounce.classList.add('speaking'); },
    () => {
      DOM.btnLearnPronounce.classList.remove('speaking');
      DOM.learnPronounceLabel.textContent = 'Pronounce Word';
    }
  );
}

function toggleMasteredStatus() {
  const wordKey = `${state.currentLetter}_${state.currentIndex}`;
  const words = TECHNICAL_VOCABULARY[state.currentLetter];
  const wordObj = words[state.currentIndex];

  if (state.masteredWords.has(wordKey)) {
    state.masteredWords.delete(wordKey);
    showToast(`Removed "${wordObj.word}"`);
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
  DOM.completionTitle.textContent = `Letter ${state.currentLetter} Done!`;
  DOM.completionMessage.textContent = `You have learned all words in Letter ${state.currentLetter}.`;
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

      if (!query || matchWord || matchMeaning) {
        matches.push({
          ...item,
          letter: lettr,
          index: index
        });
      }
    });
  });

  DOM.searchResultsCount.textContent = `${matches.length} word${matches.length === 1 ? '' : 's'} available`;
  DOM.searchResultsList.innerHTML = '';

  if (matches.length === 0) {
    DOM.searchResultsList.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 16px; color: var(--text-muted);">
        <h3 style="color: var(--text-primary); margin-bottom: 4px;">No words found</h3>
        <p>Try searching another keyword.</p>
      </div>
    `;
    return;
  }

  const displayMatches = matches.slice(0, 80);

  displayMatches.forEach(res => {
    const card = document.createElement('div');
    card.className = 'word-row-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    let highlightedWord = res.word;
    if (query) {
      const regex = new RegExp(`(${query})`, 'gi');
      highlightedWord = res.word.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    card.innerHTML = `
      <div class="word-row-left">
        <div class="word-row-head">
          <h4 class="word-row-title">${highlightedWord}</h4>
          <span class="word-row-phonetic">${res.pronunciation} • Letter ${res.letter}</span>
        </div>
        <p class="word-row-meaning">${res.meaning}</p>
      </div>
      <button type="button" class="btn-speaker-pill" aria-label="Listen">
        <svg viewBox="0 0 24 24" width="16" height="16"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-speaker-pill')) {
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

  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (totalProg.percent / 100) * circumference;
  DOM.progressCircleFill.style.strokeDashoffset = offset;

  DOM.progressAlphabetBreakdown.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const tile = document.createElement('div');
    tile.className = 'progress-tile';
    tile.setAttribute('role', 'button');
    tile.setAttribute('tabindex', '0');

    tile.innerHTML = `
      <div class="progress-tile-top">
        <span>Letter ${char}</span>
        <span style="color: var(--violet-700);">${p.percent}%</span>
      </div>
      <div class="card-bar-bg">
        <div class="card-bar-fill" style="width: ${p.percent}%"></div>
      </div>
    `;

    tile.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.progressAlphabetBreakdown.appendChild(tile);
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
  }, 2000);
}

/* ==========================================================================
   14. EVENT BINDINGS
   ========================================================================== */
function bindEvents() {
  const completeOnboarding = () => {
    state.onboardingCompleted = true;
    saveState();
    DOM.onboarding.classList.remove('active');
    navigateTo('home');
  };

  DOM.btnOnboardingStart.addEventListener('click', completeOnboarding);
  DOM.btnOnboardingSkip.addEventListener('click', completeOnboarding);

  DOM.desktopNavTabs.forEach(tab => {
    tab.addEventListener('click', () => navigateTo(tab.dataset.tab));
  });

  DOM.mobileNavTabs.forEach(tab => {
    tab.addEventListener('click', () => navigateTo(tab.dataset.tab));
  });

  DOM.headerBranding.addEventListener('click', () => navigateTo('home'));
  DOM.btnHeaderSearch.addEventListener('click', () => navigateTo('search', { focusSearch: true }));

  DOM.btnHomeContinueAction.addEventListener('click', () => {
    navigateTo('word-learn', { letter: state.currentLetter, index: state.currentIndex });
  });
  DOM.homeContinueCard.addEventListener('click', (e) => {
    if (!e.target.closest('#btn-home-continue-action')) {
      navigateTo('word-learn', { letter: state.currentLetter, index: state.currentIndex });
    }
  });

  DOM.btnWordlistBack.addEventListener('click', () => navigateTo('learn'));
  DOM.btnWordlistStartLearning.addEventListener('click', () => {
    navigateTo('word-learn', { letter: state.currentLetter, index: 0 });
  });

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
      showToast('Saved to bookmarks! ⭐');
    }
    saveState();
  });

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
    showToast('All progress reset.');
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
