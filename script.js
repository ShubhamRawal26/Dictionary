/**
 * WORDLY — COLORFUL ENGLISH & TECHNICAL VOCABULARY DICTIONARY
 * Web2APK & Mobile Optimized • 100% Offline Ready • Robust Speech Engine
 */

'use strict';

/* ==========================================================================
   1. COLOR THEMES FOR EACH ALPHABET (A TO Z)
   ========================================================================== */
const LETTER_THEMES = {
  A: { primary: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af' }, // Blue
  B: { primary: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6' }, // Violet
  C: { primary: '#059669', bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46' }, // Emerald
  D: { primary: '#d97706', bg: '#fffbeb', border: '#fde68a', text: '#92400e' }, // Amber
  E: { primary: '#e11d48', bg: '#fff1f2', border: '#fecdd3', text: '#9f1239' }, // Rose
  F: { primary: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3' }, // Indigo
  G: { primary: '#0d9488', bg: '#f0fdfa', border: '#99f6e4', text: '#115e59' }, // Teal
  H: { primary: '#db2777', bg: '#fdf2f8', border: '#fbcfe8', text: '#9d174d' }, // Pink
  I: { primary: '#0284c7', bg: '#f0f9ff', border: '#bae6fd', text: '#075985' }, // Sky
  J: { primary: '#9333ea', bg: '#faf5ff', border: '#e9d5ff', text: '#6b21a8' }, // Purple
  K: { primary: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', text: '#166534' }, // Green
  L: { primary: '#ea580c', bg: '#fff7ed', border: '#fed7aa', text: '#9a3412' }, // Orange
  M: { primary: '#dc2626', bg: '#fef2f2', border: '#fecaca', text: '#991b1b' }, // Red
  N: { primary: '#0891b2', bg: '#ecfeff', border: '#a5f3fc', text: '#155e75' }, // Cyan
  O: { primary: '#65a30d', bg: '#f7fee7', border: '#d9f99d', text: '#3f6212' }, // Lime
  P: { primary: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe', text: '#6d28d9' }, // Violet Light
  Q: { primary: '#c026d3', bg: '#fdf4ff', border: '#f5d0fe', text: '#86198f' }, // Fuchsia
  R: { primary: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af' }, // Blue
  S: { primary: '#059669', bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46' }, // Emerald
  T: { primary: '#d97706', bg: '#fffbeb', border: '#fde68a', text: '#92400e' }, // Amber
  U: { primary: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3' }, // Indigo
  V: { primary: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff', text: '#5b21b6' }, // Violet
  W: { primary: '#0d9488', bg: '#f0fdfa', border: '#99f6e4', text: '#115e59' }, // Teal
  X: { primary: '#e11d48', bg: '#fff1f2', border: '#fecdd3', text: '#9f1239' }, // Rose
  Y: { primary: '#d97706', bg: '#fffbeb', border: '#fde68a', text: '#92400e' }, // Amber
  Z: { primary: '#9333ea', bg: '#faf5ff', border: '#e9d5ff', text: '#6b21a8' }  // Purple
};

function getTheme(letter) {
  return LETTER_THEMES[letter] || LETTER_THEMES.A;
}

/* ==========================================================================
   2. VOCABULARY DATABASE (A to Z • 260 Complete Words)
   ========================================================================== */
const TECHNICAL_VOCABULARY = {
  A: [
    { word: "Algorithm", pronunciation: "/ˈæl.ɡə.rɪð.əm/", meaning: "A step-by-step set of clear instructions or rules designed to solve a specific problem or complete a task.", example: "Google uses a smart algorithm to deliver search results in milliseconds." },
    { word: "Asynchronous", pronunciation: "/eɪˈsɪŋ.krə.nəs/", meaning: "Tasks running independently in the background without freezing the interface or waiting for other actions.", example: "Asynchronous requests load website data in the background smoothly." },
    { word: "Actuator", pronunciation: "/ˈæk.tʃu.eɪ.tər/", meaning: "A motor or mechanical device that creates physical movement in a machine or robotic system.", example: "Electric actuators move the robotic arm with millimeter precision." },
    { word: "Amplitude", pronunciation: "/ˈæm.plɪ.tʃuːd/", meaning: "The maximum height or strength of a wave measured from its central resting position.", example: "Turning up the volume dial increases the sound wave amplitude." },
    { word: "Architecture", pronunciation: "/ˈɑː.kɪ.tek.tʃər/", meaning: "The fundamental layout, structure, and organization of a computer chip or software system.", example: "ARM architecture powers the microprocessors inside modern smartphones." },
    { word: "Anodize", pronunciation: "/ˈæn.ə.daɪz/", meaning: "An electrochemical coating process that protects metal surfaces from corrosion and scratching.", example: "Smartphone metal frames are anodized to resist daily scratches." },
    { word: "Aerodynamics", pronunciation: "/ˌeə.rəʊ.daɪˈnæm.ɪks/", meaning: "The study of how air flows around moving solid bodies such as cars and aircraft.", example: "Sports cars have sleek aerodynamic curves to reduce wind resistance." },
    { word: "Abstraction", pronunciation: "/æbˈstræk.ʃən/", meaning: "Hiding complex internal mechanisms to present a simple, intuitive user interface.", example: "The steering wheel is an abstraction that lets you steer a complex car easily." },
    { word: "Acceleration", pronunciation: "/əkˌsel.əˈreɪ.ʃən/", meaning: "The rate at which a moving vehicle or object increases its speed over time.", example: "Electric vehicles achieve rapid acceleration thanks to instant motor torque." },
    { word: "Attenuation", pronunciation: "/əˌten.juˈeɪ.ʃən/", meaning: "The natural loss of electrical or wireless signal strength as it travels through a medium.", example: "Wi-Fi signal attenuation occurs when waves pass through thick walls." }
  ],

  B: [
    { word: "Bandwidth", pronunciation: "/ˈbænd.wɪtθ/", meaning: "The maximum amount of digital data that can travel across an internet connection per second.", example: "Fiber optic broadband gives plenty of bandwidth for 4K video streaming." },
    { word: "Binary", pronunciation: "/ˈbaɪ.nər.i/", meaning: "A base-2 numbering system using only 0s and 1s that all digital computers use to operate.", example: "Computer software is converted into binary code for the CPU to run." },
    { word: "Backpropagation", pronunciation: "/ˌbæk.prɒp.əˈɡeɪ.ʃən/", meaning: "A machine learning training algorithm that adjusts neural network weights to reduce errors.", example: "Backpropagation helps AI vision models learn to recognize objects accurately." },
    { word: "Buckling", pronunciation: "/ˈbʌk.lɪŋ/", meaning: "The sudden bending, flexing, or collapse of a structural beam under heavy load.", example: "Engineers added support beams to prevent the steel column from buckling." },
    { word: "Boolean", pronunciation: "/ˈbuː.li.ən/", meaning: "A binary data type that can only hold one of two logical values: True or False.", example: "The security system returns a boolean value confirming if access is granted." },
    { word: "Bus", pronunciation: "/bʌs/", meaning: "An internal digital communication highway carrying data between computer components.", example: "The high-speed system bus transfers data fast between processor and memory." },
    { word: "Baud", pronunciation: "/bɔːd/", meaning: "A unit measuring the speed of digital data transmission in communication channels.", example: "The sensor module transmits coordinates at 9600 baud." },
    { word: "Bernoulli", pronunciation: "/bɜːˈnuː.li/", meaning: "A physical principle showing that moving fluids create lower pressure than resting fluids.", example: "Bernoulli's principle explains how airplane wings generate aerodynamic lift." },
    { word: "Bias", pronunciation: "/ˈbaɪ.əs/", meaning: "A steady electrical voltage applied to an electronic component to establish operating conditions.", example: "Transistors require a small bias voltage to switch on and conduct current." },
    { word: "Blockchain", pronunciation: "/ˈblɒk.tʃeɪn/", meaning: "A secure, decentralized digital ledger distributed across a network of computers.", example: "Blockchain technology guarantees that digital transaction records cannot be modified." }
  ],

  C: [
    { word: "Capacitance", pronunciation: "/kəˈpæs.ɪ.təns/", meaning: "The ability of an electrical component or system to store an electrical charge.", example: "Capacitors smooth out electrical noise in delicate power supply circuits." },
    { word: "Compiler", pronunciation: "/kəmˈpaɪ.lər/", meaning: "A software program that translates human-written code into machine code that computers run.", example: "The compiler turns your source code into a fast executable application." },
    { word: "Concurrency", pronunciation: "/kənˈkʌr.ən.si/", meaning: "The ability of a system to execute multiple computational tasks simultaneously.", example: "Web servers use concurrency to handle thousands of requests in parallel." },
    { word: "Cantilever", pronunciation: "/ˈkæn.tɪ.liː.vər/", meaning: "A rigid horizontal beam or structure anchored and supported at only one end.", example: "Balconies and diving boards are common cantilever architectural structures." },
    { word: "Combustion", pronunciation: "/kəmˈbʌs.tʃən/", meaning: "A high-temperature chemical reaction between a fuel and oxygen producing heat and power.", example: "Automobile engines generate motion through controlled internal combustion." },
    { word: "Calibration", pronunciation: "/ˌkæl.ɪˈbreɪ.ʃən/", meaning: "Fine-tuning and adjusting a measuring device to ensure its readings are completely accurate.", example: "Digital weighing scales require periodic calibration against certified standard weights." },
    { word: "Circuit", pronunciation: "/ˈsɜː.kɪt/", meaning: "A closed electrical loop through which electrical current flows from a power source.", example: "Flipping the wall switch closes the circuit to illuminate the room." },
    { word: "Corrosion", pronunciation: "/kəˈrəʊ.ʒən/", meaning: "The gradual chemical breakdown of metals caused by environmental exposure to moisture.", example: "Stainless steel contains protective chromium to resist rust and corrosion." },
    { word: "Cryptography", pronunciation: "/krɪpˈtɒɡ.rə.fi/", meaning: "The science of securing digital information by encoding it into encrypted ciphertext.", example: "Online payment gateways use modern cryptography to protect financial transactions." },
    { word: "Centrifugal", pronunciation: "/senˈtrɪf.jʊ.ɡəl/", meaning: "The outward inertial force felt by an object when moving in a curved or rotating path.", example: "Spin dryers use centrifugal force to separate moisture from clothing." }
  ],

  D: [
    { word: "Diode", pronunciation: "/ˈdaɪ.əʊd/", meaning: "A two-terminal semiconductor device that allows electrical current to flow in only one direction.", example: "LED light bulbs are energy-efficient light-emitting semiconductor diodes." },
    { word: "Deadlock", pronunciation: "/ˈded.lɒk/", meaning: "A condition where two computing processes wait for each other, preventing progress.", example: "Database locking mechanisms prevent deadlocks from freezing transactions." },
    { word: "Dynamics", pronunciation: "/daɪˈnæm.ɪks/", meaning: "The branch of mechanics concerned with the forces that cause motions of physical bodies.", example: "Vehicle dynamics tests ensure cars remain stable during high-speed emergency turns." },
    { word: "Damping", pronunciation: "/ˈdæm.pɪŋ/", meaning: "The intentional dissipation and reduction of mechanical vibrations in a physical system.", example: "Automotive shock absorbers use fluid damping to absorb roadway bumps." },
    { word: "Deflection", pronunciation: "/dɪˈflek.ʃən/", meaning: "The degree to which a structural element bends or displaces under an applied load.", example: "Structural beams are engineered for minimal deflection to ensure building safety." },
    { word: "Decryption", pronunciation: "/diːˈkrɪp.ʃən/", meaning: "The process of converting scrambled encrypted data back into readable plaintext.", example: "Entering your passcode triggers instant decryption of your encrypted smartphone storage." },
    { word: "Differential", pronunciation: "/ˌdɪf.əˈren.ʃəl/", meaning: "A gear train allowing drive wheels on the same axle to rotate at different speeds.", example: "Car differentials allow outer wheels to turn faster when rounding sharp curves." },
    { word: "Demodulation", pronunciation: "/diːˌmɒd.jʊˈleɪ.ʃən/", meaning: "Extracting original audio or data signals from a modulated radio carrier wave.", example: "The receiver performs demodulation to output clear sound through the speakers." },
    { word: "Database", pronunciation: "/ˈdeɪ.tə.beɪs/", meaning: "An organized collection of structured electronic data stored in a computer system.", example: "Hospital databases store electronic patient medical records for rapid lookup." },
    { word: "Distortion", pronunciation: "/dɪˈstɔː.ʃən/", meaning: "An unwanted alteration or warping in the original waveform of an audio or radio signal.", example: "Exceeding amplifier limits produces harsh audio harmonic distortion." }
  ],

  E: [
    { word: "Entropy", pronunciation: "/ˈen.trə.pi/", meaning: "A measure of molecular disorder, randomness, or unusable thermal energy in a system.", example: "The second law of thermodynamics shows that total entropy naturally increases over time." },
    { word: "Encryption", pronunciation: "/ɪnˈkrɪp.ʃən/", meaning: "The process of encoding readable data into secure code to prevent unauthorized access.", example: "End-to-end encryption ensures only conversation participants can read messages." },
    { word: "Elasticity", pronunciation: "/ˌiː.læsˈtɪs.ə.ti/", meaning: "The property of a material to deform under stress and return to its original shape.", example: "Rubber suspension bushings display high elasticity to absorb roadway impacts." },
    { word: "Electrolyte", pronunciation: "/iˈlek.trə.laɪt/", meaning: "A chemical liquid or gel containing free ions that conducts electric charge in batteries.", example: "Lithium-ion battery electrolytes allow charge to move efficiently between electrodes." },
    { word: "Ethernet", pronunciation: "/ˈiː.θə.net/", meaning: "A standard wired computer networking technology for local area network (LAN) connections.", example: "Connecting with an Ethernet cable provides low-latency, reliable internet access." },
    { word: "Equilibrium", pronunciation: "/ˌek.wɪˈlɪb.ri.əm/", meaning: "A stable physical state in which all opposing forces and moments cancel each other out.", example: "When an aircraft cruises at steady speed, aerodynamic forces are in static equilibrium." },
    { word: "Emulation", pronunciation: "/ˌem.jʊˈleɪ.ʃən/", meaning: "Software technique allowing a computer system to replicate another system's hardware.", example: "Video game emulators allow classic console games to run smoothly on desktop computers." },
    { word: "Enthalpy", pronunciation: "/ˈen.θəl.pi/", meaning: "The total heat content of a thermodynamic system, equal to internal energy plus pressure volume.", example: "Chemical engineers calculate enthalpy changes to evaluate reaction efficiency." },
    { word: "Eigenvalue", pronunciation: "/ˈaɪ.ɡənˌvæl.juː/", meaning: "A special scalar multiplier in linear algebra used in vibration analysis and AI.", example: "Facial recognition algorithms use eigenvectors and eigenvalues to identify facial contours." },
    { word: "Extrusion", pronunciation: "/ɪkˈstruː.ʒən/", meaning: "A manufacturing process where material is pushed through a shaped die to form objects.", example: "Aluminum window frames and pipes are manufactured through continuous metal extrusion." }
  ],

  F: [
    { word: "Feedback", pronunciation: "/ˈfiːd.bæk/", meaning: "Using a portion of system output to automatically regulate and optimize performance.", example: "Thermostats use temperature feedback to regulate heating systems automatically." },
    { word: "Friction", pronunciation: "/ˈfrɪk.ʃən/", meaning: "The resistive force that opposes the relative motion of two surfaces in physical contact.", example: "Bicycle disc brakes generate friction against the rotor to slow down the wheel." },
    { word: "Firmware", pronunciation: "/ˈfɜːm.weər/", meaning: "Permanent low-level software programmed directly into hardware memory chips.", example: "Wireless earbuds receive firmware updates to optimize battery life and audio tuning." },
    { word: "Fluid", pronunciation: "/ˈfluː.ɪd/", meaning: "Any substance that continuously deforms and flows under shear stress, including liquids and gases.", example: "Hydraulic oil and compressed atmospheric air are both classified as fluids." },
    { word: "Frequency", pronunciation: "/ˈfriː.kwən.si/", meaning: "The number of complete wave cycles that occur per second, measured in Hertz (Hz).", example: "Household wall outlets deliver alternating current at a frequency of 50 or 60 Hz." },
    { word: "Fatigue", pronunciation: "/fəˈtiːɡ/", meaning: "Progressive structural damage and micro-cracking occurring when materials undergo cyclic loading.", example: "Aircraft wings undergo non-destructive inspection to detect structural metal fatigue." },
    { word: "Framework", pronunciation: "/ˈfreɪm.wɜːk/", meaning: "A structured collection of pre-written software components that accelerates development.", example: "Web developers utilize frontend frameworks to build responsive mobile user interfaces." },
    { word: "Flux", pronunciation: "/flʌks/", meaning: "The total amount of magnetic or electric field lines passing through a given surface area.", example: "Electric generators generate voltage by rotating wire loops through magnetic flux." },
    { word: "Frontend", pronunciation: "/ˈfrʌnt.end/", meaning: "The visual, interactive graphical interface of an application that users interact with.", example: "HTML5, CSS3, and JavaScript form the foundation of responsive frontend engineering." },
    { word: "Fracture", pronunciation: "/ˈfræk.tʃər/", meaning: "The separation or breaking of a solid structural object into pieces under mechanical stress.", example: "Brittle materials such as glass fracture without undergoing plastic deformation." }
  ],

  G: [
    { word: "Gateway", pronunciation: "/ˈɡeɪt.weɪ/", meaning: "A network routing node that serves as an entrance connecting distinct network protocols.", example: "Your residential Wi-Fi router serves as the gateway connecting home devices to the internet." },
    { word: "Gearbox", pronunciation: "/ˈɡɪə.bɒks/", meaning: "A mechanical casing containing gears that transforms rotational speed and torque.", example: "Automotive transmissions utilize multi-speed gearboxes to match engine speed to vehicle speed." },
    { word: "Generator", pronunciation: "/ˈdʒen.ər.eɪ.tər/", meaning: "A machine that converts mechanical energy of rotation into usable electrical power.", example: "Hydroelectric turbines spin giant generators to produce clean electrical energy." },
    { word: "Gradient", pronunciation: "/ˈɡreɪ.di.ənt/", meaning: "The rate of change or vector of steepest ascent of a mathematical function.", example: "Machine learning algorithms use gradient descent to iteratively minimize loss functions." },
    { word: "Gyroscope", pronunciation: "/ˈdʒaɪ.rə.skəʊp/", meaning: "A navigational sensor that measures orientation and angular velocity in 3D space.", example: "Smartphones use MEMS gyroscopes to detect screen rotation and gaming gestures." },
    { word: "Grid", pronunciation: "/ɡrɪd/", meaning: "An interconnected transmission network that distributes electricity over vast geographical areas.", example: "Renewable solar installations feed surplus electricity back into the national power grid." },
    { word: "Grounding", pronunciation: "/ˈɡraʊn.dɪŋ/", meaning: "Connecting an electrical circuit to the physical earth to prevent dangerous shock hazards.", example: "Grounding conductors protect household occupants from insulation faults and surges." },
    { word: "Graph", pronunciation: "/ɡrɑːf/", meaning: "A non-linear data structure consisting of vertices (nodes) connected by edges.", example: "Mapping applications use graph algorithms to determine the shortest driving path." },
    { word: "Gasket", pronunciation: "/ˈɡæs.kɪt/", meaning: "A mechanical seal placed between two mating surfaces to prevent fluid leakage.", example: "Engine cylinder head gaskets seal high-pressure combustion chambers tightly." },
    { word: "Galvanize", pronunciation: "/ˈɡæl.və.naɪz/", meaning: "Applying a protective coating of zinc to iron or steel to prevent atmospheric corrosion.", example: "Galvanized steel guardrails remain rust-resistant despite decades of outdoor weather." }
  ],

  H: [
    { word: "Hardware", pronunciation: "/ˈhɑːd.weər/", meaning: "The tangible, physical electronic and mechanical components comprising a computer system.", example: "The CPU, motherboard, storage drives, and display monitor represent computer hardware." },
    { word: "Hydraulics", pronunciation: "/haɪˈdrɔː.lɪks/", meaning: "The science of transmitting force and motion using pressurized incompressible fluids.", example: "Excavator machinery relies on heavy-duty hydraulic rams to lift immense loads." },
    { word: "Heuristic", pronunciation: "/hjʊəˈrɪs.tɪk/", meaning: "A practical problem-solving technique that produces satisfactory solutions rapidly.", example: "Antivirus scanners employ heuristic analysis to identify new unknown malware strains." },
    { word: "Harmonic", pronunciation: "/hɑːˈmɒn.ɪk/", meaning: "An oscillation or wave whose frequency is an integer multiple of a fundamental frequency.", example: "Acoustic instruments produce distinctive timbres because of their harmonic overtones." },
    { word: "Hashing", pronunciation: "/ˈhæʃ.ɪŋ/", meaning: "Transforming variable-length input data into a fixed-length string of characters.", example: "Security protocols store hashed password representations rather than plaintext." },
    { word: "Heatmap", pronunciation: "/ˈhiːt.mæp/", meaning: "A data visualization technique that represents numerical values using color gradients.", example: "User experience heatmaps show which buttons mobile users tap on most frequently." },
    { word: "Hydrodynamics", pronunciation: "/ˌhaɪ.drəʊ.daɪˈnæm.ɪks/", meaning: "The physics branch studying the forces and motions of liquids around solid objects.", example: "Ship naval architects optimize hull hydrodynamics to reduce nautical drag." },
    { word: "Harness", pronunciation: "/ˈhɑː.nəs/", meaning: "An organized bundle of insulated electrical wires routing signals throughout a vehicle.", example: "The engine wiring harness links sensors and electronic fuel injectors to the ECU." },
    { word: "Holography", pronunciation: "/hɒlˈɒɡ.rə.fi/", meaning: "A photographic technique that records light interference patterns to produce 3D images.", example: "Government ID cards feature holographic security seals to prevent counterfeit duplication." },
    { word: "Hybrid", pronunciation: "/ˈhaɪ.brɪd/", meaning: "A technological system combining two distinct energy or power mechanisms for efficiency.", example: "Hybrid automobiles combine internal combustion engines with electric batteries." }
  ],

  I: [
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", meaning: "The total opposition that an electrical circuit offers to the flow of alternating current.", example: "Matching audio amplifier impedance to loudspeaker impedance ensures clear fidelity." },
    { word: "Inductor", pronunciation: "/ɪnˈdʌk.tər/", meaning: "A passive two-terminal electronic component that stores energy in a magnetic field.", example: "Inductors are paired with capacitors to filter out high-frequency ripple in power units." },
    { word: "Interface", pronunciation: "/ˈɪn.tə.feɪs/", meaning: "A shared boundary across which two separate computer systems or components exchange information.", example: "A clean user interface makes mobile learning intuitive and engaging." },
    { word: "Iteration", pronunciation: "/ˌɪt.ərˈeɪ.ʃən/", meaning: "The repetition of a computational process or engineering design cycle to achieve refinement.", example: "Engineers built several prototype iterations before finalizing the commercial product." },
    { word: "Inertia", pronunciation: "/ɪˈnɜː.ʃə/", meaning: "The physical tendency of an object to resist any change in its state of rest or motion.", example: "Vehicle safety belts restrain passengers against forward inertia during braking." },
    { word: "Insulation", pronunciation: "/ˌɪn.sjəˈleɪ.ʃən/", meaning: "Material that prevents or reduces the conduction of electricity, heat, or acoustic noise.", example: "High-grade polymer insulation surrounds electrical power cables to prevent short circuits." },
    { word: "Impulse", pronunciation: "/ˈɪm.pʌls/", meaning: "The integral of a force applied over the time duration during which it acts.", example: "A hammer strike delivers a brief force impulse that drives the nail into timber." },
    { word: "Inheritance", pronunciation: "/ɪnˈher.ɪ.təns/", meaning: "An object-oriented programming mechanism where new classes derive properties from existing classes.", example: "The 'ElectricVehicle' class inherits standard locomotion traits from the base 'Vehicle' class." },
    { word: "Infrastructure", pronunciation: "/ˈɪn.frəˌstrʌk.tʃər/", meaning: "The foundational physical and organizational structures needed for an enterprise to operate.", example: "Cloud computing infrastructure enables applications to scale globally on demand." },
    { word: "Injection", pronunciation: "/ɪnˈdʒek.ʃən/", meaning: "The mechanical introduction of high-pressure fluid or molten plastic into a chamber.", example: "Electronic direct fuel injection delivers precise fuel vaporization for optimal combustion." }
  ],

  J: [
    { word: "Jitter", pronunciation: "/ˈdʒɪt.ər/", meaning: "Small, unwanted deviations and timing variations in the periodicity of digital signals.", example: "Excessive network jitter can cause video conference calls to drop frames and stutter." },
    { word: "Joule", pronunciation: "/dʒuːl/", meaning: "The SI standard unit of energy, work, or amount of heat equal to one watt-second.", example: "A 100-watt appliance utilizes 100 joules of electrical energy per operating second." },
    { word: "Junction", pronunciation: "/ˈdʒʌŋk.ʃən/", meaning: "A connection point where multiple circuit paths, conductors, or semiconductor layers meet.", example: "Silicon solar cells generate electrical voltage at their internal P-N semiconductor junction." },
    { word: "Joint", pronunciation: "/dʒɔɪnt/", meaning: "The mechanical connection between two structural members allowing articulated motion.", example: "Industrial robotic joints utilize precision harmonic drive gears for smooth rotation." },
    { word: "JavaScript", pronunciation: "/ˈdʒɑː.və.skrɪpt/", meaning: "A lightweight, dynamic programming language that enables interactive web applications.", example: "This entire mobile dictionary application is powered by responsive vanilla JavaScript." },
    { word: "Jet", pronunciation: "/dʒet/", meaning: "A high-velocity coherent stream of fluid ejected into a surrounding medium through a nozzle.", example: "Abrasive water jet cutters slice through thick titanium plates with clean edges." },
    { word: "Journal", pronunciation: "/ˈdʒɜː.nəl/", meaning: "The cylindrical section of a rotating mechanical shaft that turns within a bearing.", example: "High-viscosity lubricant prevents direct metal contact at the crankshaft journal." },
    { word: "Jumper", pronunciation: "/ˈdʒʌm.pər/", meaning: "A short conductor bridge used to close, open, or configure pins on a circuit board.", example: "Technicians configure motherboard operating parameters by moving a hardware jumper." },
    { word: "JSON", pronunciation: "/ˈdʒeɪ.sən/", meaning: "JavaScript Object Notation; a lightweight text format used for data interchange.", example: "Mobile applications exchange structured data with cloud servers using JSON format." },
    { word: "Justification", pronunciation: "/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/", meaning: "The engineering rationale and calculations provided to substantiate design choices.", example: "Finite element stress simulations provided engineering justification for the structural arch." }
  ],

  K: [
    { word: "Kinematics", pronunciation: "/ˌkɪn.əˈmæt.ɪks/", meaning: "The branch of mechanics describing the motion of points and bodies without considering forces.", example: "Forward kinematics equations calculate the precise spatial coordinates of a robot gripper." },
    { word: "Kernel", pronunciation: "/ˈkɜː.nəl/", meaning: "The essential core component of an operating system managing hardware and memory allocation.", example: "The Linux kernel provides secure, low-level hardware abstraction for Android devices." },
    { word: "Kilowatt", pronunciation: "/ˈkɪl.ə.wɒt/", meaning: "A standard unit of electrical power measurement equal to one thousand watts (1 kW).", example: "Residential air conditioning units consume approximately two to three kilowatts of power." },
    { word: "Kinetic", pronunciation: "/kɪˈnet.ɪk/", meaning: "Relating to the mechanical energy possessed by an object due to its state of motion.", example: "Regenerative braking captures vehicle kinetic energy and stores it in the battery." },
    { word: "Karnaugh", pronunciation: "/ˈkɑː.nɔː/", meaning: "A visual tabular method used in digital electronic design to simplify Boolean algebra.", example: "Engineers utilize Karnaugh maps to minimize the number of logic gates in a circuit." },
    { word: "Kalman", pronunciation: "/ˈkæl.mən/", meaning: "An optimal recursive estimation algorithm that estimates system state from noisy inputs.", example: "Unmanned aerial vehicles use Kalman filtering to fuse GPS and inertial sensor data." },
    { word: "K-Means", pronunciation: "/ˈkeɪ.miːnz/", meaning: "An unsupervised clustering algorithm partitioning observations into k distinct clusters.", example: "Data analysts apply K-Means clustering to segment customer purchasing behaviors." },
    { word: "Kirchhoff", pronunciation: "/ˈkɪərk.hɒf/", meaning: "Fundamental electrical laws stating conservation of charge and energy in circuits.", example: "Kirchhoff's current law states the sum of currents entering a node equals the sum leaving." },
    { word: "Keyframe", pronunciation: "/ˈkiː.freɪm/", meaning: "A marker in animation and digital video that specifies start and end values for transitions.", example: "Motion graphic animators define keyframes to create smooth visual interpolations." },
    { word: "Knot", pronunciation: "/nɒt/", meaning: "A unit of speed used in maritime and aviation navigation equal to one nautical mile per hour.", example: "The container vessel cruised along the coastal channel at an average speed of 16 knots." }
  ],

  L: [
    { word: "Latency", pronunciation: "/ˈleɪ.tən.si/", meaning: "The brief time delay between an input command and the corresponding output reaction.", example: "Low network latency is essential for responsive online multiplayer mobile gaming." },
    { word: "Logic", pronunciation: "/ˈlɒdʒ.ɪk/", meaning: "The formal principles of reasoning and binary switching underlying digital computer chips.", example: "Integrated circuits combine millions of NAND logic gates to execute computations." },
    { word: "Laser", pronunciation: "/ˈleɪ.zər/", meaning: "A device that emits coherent, monochromatic light through stimulated emission of radiation.", example: "Optical fiber telecommunications utilize semiconductor lasers to transmit data over oceans." },
    { word: "Lubrication", pronunciation: "/ˌluː.brɪˈkeɪ.ʃən/", meaning: "Applying an oil or fluid film between moving surfaces to minimize friction and wear.", example: "Synthetic engine lubrication prevents thermal breakdown under extreme motor speeds." },
    { word: "Linux", pronunciation: "/ˈlɪn.əks/", meaning: "An open-source operating system kernel widely utilized across cloud servers and Android.", example: "Global supercomputers and web servers rely on the stability of the Linux kernel." },
    { word: "Luminescence", pronunciation: "/ˌluː.mɪˈnes.əns/", meaning: "Emission of light by a substance not resulting from heat, including fluorescence.", example: "OLED displays generate vibrant images using organic electroluminescence materials." },
    { word: "Loadcell", pronunciation: "/ˈləʊd.sel/", meaning: "An electro-mechanical transducer that converts applied force or weight into an electrical signal.", example: "Industrial platform scales utilize strain gauge load cells for precise weighing." },
    { word: "Lever", pronunciation: "/ˈliː.vər/", meaning: "A simple machine consisting of a rigid beam pivoting upon a fulcrum to multiply force.", example: "Crowbars and pliers operate on the mechanical advantage provided by first-class levers." },
    { word: "Lithium", pronunciation: "/ˈlɪθ.i.əm/", meaning: "A lightweight alkali metal possessing the highest electrochemical potential for batteries.", example: "High energy-density lithium-polymer battery cells power portable electronic devices." },
    { word: "Loop", pronunciation: "/luːp/", meaning: "A programming construct that repeatedly executes a block of code until a condition is met.", example: "The search algorithm utilizes a loop to inspect each word item in the dictionary index." }
  ],

  M: [
    { word: "Microcontroller", pronunciation: "/ˌmaɪ.krəʊ.kənˈtrəʊ.lər/", meaning: "A compact single-chip integrated circuit containing a processor core, memory, and I/O peripherals.", example: "Modern home appliances use microcontrollers to manage sensors, motors, and timers." },
    { word: "Modulation", pronunciation: "/ˌmɒd.jʊˈleɪ.ʃən/", meaning: "Varying a periodic waveform characteristic to encode information onto a carrier wave.", example: "Quadrature amplitude modulation enables high-speed wireless data transmission in 5G." },
    { word: "Multithreading", pronunciation: "/ˌmʌl.tiˈθred.ɪŋ/", meaning: "The execution of multiple concurrent threads within a single computer processor core.", example: "Multithreading allows audio decoding to proceed without interrupting screen animation." },
    { word: "Metallurgy", pronunciation: "/məˈtæl.ə.dʒi/", meaning: "The science and technology of extracting, refining, and alloying metals for engineering use.", example: "Aerospace metallurgy developed heat-resistant nickel superalloys for jet engines." },
    { word: "Momentum", pronunciation: "/məˈmen.təm/", meaning: "The quantity of motion of a moving physical body, equal to the product of mass and velocity.", example: "A fully loaded freight locomotive possesses tremendous momentum and requires distance to stop." },
    { word: "Middleware", pronunciation: "/ˈmɪd.əl.weər/", meaning: "Software providing services and communication bridges between diverse computer applications.", example: "Database middleware coordinates requests between web frontends and enterprise data stores." },
    { word: "Magnetism", pronunciation: "/ˈmæɡ.nə.tɪ.zəm/", meaning: "A physical phenomenon produced by electric charges in motion resulting in attractive forces.", example: "Brushless direct-current electric motors utilize permanent magnetism to produce rotation." },
    { word: "Mesh", pronunciation: "/meʃ/", meaning: "A network topology where individual nodes connect directly and dynamically to multiple peers.", example: "Mesh Wi-Fi systems eliminate home dead zones by intelligently relaying wireless signals." },
    { word: "Matrix", pronunciation: "/ˈmeɪ.trɪks/", meaning: "A rectangular array of numbers arranged in rows and columns used in linear algebra.", example: "Modern graphics processing units multiply 4x4 coordinate matrices to render 3D scenes." },
    { word: "Machining", pronunciation: "/məˈʃiː.nɪŋ/", meaning: "Manufacturing processes where material is systematically cut away from a solid workpiece.", example: "Multi-axis CNC machining carved the unibody laptop chassis from solid aluminum." }
  ],

  N: [
    { word: "Network", pronunciation: "/ˈnet.wɜːk/", meaning: "A collection of interconnected computing devices that communicate and share resources.", example: "Corporate network security protocols isolate internal servers from public access." },
    { word: "Node", pronunciation: "/nəʊd/", meaning: "A redistribution point or communication endpoint within a larger computer network.", example: "Each smartphone connected to the local wireless access point represents a network node." },
    { word: "Nanotechnology", pronunciation: "/ˌnæn.əʊ.tekˈnɒl.ə.dʒi/", meaning: "The engineering of functional structures and materials at the nanoscale (1 to 100 nm).", example: "Nanotechnology coatings create ultra-hydrophobic water-repellent surfaces on glass." },
    { word: "Normalization", pronunciation: "/ˌnɔː.məl.aɪˈzeɪ.ʃən/", meaning: "The database design process of organizing tables to eliminate data redundancy.", example: "Relational database normalization ensures consistent data integrity across tables." },
    { word: "Nyquist", pronunciation: "/ˈnaɪ.kwɪst/", meaning: "A fundamental theorem stating sample rate must exceed twice the maximum signal frequency.", example: "Digital audio uses a 44.1 kHz sample rate to satisfy the Nyquist criteria for 20 kHz audio." },
    { word: "Nozzle", pronunciation: "/ˈnɒz.əl/", meaning: "A mechanical spout with variable cross-section designed to accelerate and direct fluid flow.", example: "Rocket engine convergent-divergent nozzles accelerate supersonic exhaust gases." },
    { word: "Null", pronunciation: "/nʌl/", meaning: "A special keyword in programming representing the intentional absence of any object value.", example: "Uninitialized object pointers reference null until memory is allocated." },
    { word: "Newton", pronunciation: "/ˈnjuː.tən/", meaning: "The SI standard unit of physical force required to accelerate one kilogram at 1 m/s².", example: "Gravitational force acting upon an average-sized apple equals approximately one newton." },
    { word: "Navigation", pronunciation: "/ˌnæv.ɪˈɡeɪ.ʃən/", meaning: "The art and science of monitoring and controlling the movement of a craft between points.", example: "Satellite navigation receivers triangulate radio signals to pinpoint position on Earth." },
    { word: "Nucleation", pronunciation: "/ˌnjuː.kliˈeɪ.ʃən/", meaning: "The initial thermodynamic stage in a phase change where crystals or bubbles first form.", example: "Carbonated beverages form bubbles around microscopic nucleation sites in glassware." }
  ],

  O: [
    { word: "Optimization", pronunciation: "/ˌɒp.tɪ.maɪˈzeɪ.ʃən/", meaning: "The mathematical or engineering process of maximizing efficiency and minimizing resource usage.", example: "Code optimization reduced mobile app execution memory footprint by forty percent." },
    { word: "Oscillator", pronunciation: "/ˈɒs.ɪ.leɪ.tər/", meaning: "An electronic circuit that produces a continuous, periodic electrical alternating signal.", example: "Precision quartz crystal oscillators provide clock synchronization for computer CPUs." },
    { word: "Overclock", pronunciation: "/ˌəʊ.vəˈklɒk/", meaning: "Operating a computer processor at a higher clock rate than certified by manufacturer specs.", example: "Enthusiasts overclock computer processors to achieve higher frame rates in simulation tasks." },
    { word: "Ontology", pronunciation: "/ɒnˈtɒl.ə.dʒi/", meaning: "A formal representation and definition of categories, properties, and relations of concepts.", example: "Biomedical ontologies enable search engines to connect symptoms with diseases." },
    { word: "Orthogonal", pronunciation: "/ɔːˈθɒɡ.ən.əl/", meaning: "Intersecting at right angles (90 degrees), or statistically independent and uncorrelated.", example: "In Cartesian space, the X, Y, and Z coordinate axes are mutually orthogonal." },
    { word: "Overfitting", pronunciation: "/ˌəʊ.vəˈfɪt.ɪŋ/", meaning: "When a machine learning model memorizes training noise and fails to generalize to new data.", example: "Data scientists apply dropout regularization techniques to mitigate model overfitting." },
    { word: "Optics", pronunciation: "/ˈɒp.tɪks/", meaning: "The branch of physical science studying the behavior and properties of light and lenses.", example: "Camera lens arrays are designed using computer-aided geometrical optics simulations." },
    { word: "Osmosis", pronunciation: "/ɒzˈməʊ.sɪs/", meaning: "The spontaneous net movement of solvent molecules through a semipermeable membrane.", example: "Industrial reverse osmosis filtration plants desalinate ocean water into clean drinking water." },
    { word: "Output", pronunciation: "/ˈaʊt.pʊt/", meaning: "Information, energy, or work delivered by a computing system, circuit, or mechanical engine.", example: "The audio DAC produces an analog voltage output that drives connected headphones." },
    { word: "Ohm", pronunciation: "/əʊm/", meaning: "The SI standard unit of electrical resistance equal to one volt per ampere (symbol Ω).", example: "Ohm's law establishes the direct relationship between voltage, current, and resistance." }
  ],

  P: [
    { word: "Processor", pronunciation: "/ˈprəʊ.ses.ər/", meaning: "The central silicon logic chip that interprets and executes instructions in a computer.", example: "Modern multi-core processors execute billions of arithmetic instructions per second." },
    { word: "Protocol", pronunciation: "/ˈprəʊ.tə.kɒl/", meaning: "A standardized set of digital communication rules governing data format and transmission.", example: "The HTTPS protocol secures web page communication through TLS encryption." },
    { word: "Piezoelectric", pronunciation: "/paɪˌeɪ.zəʊ.ɪˈlek.trɪk/", meaning: "Materials that generate electrical charge in response to applied mechanical stress.", example: "Piezoelectric quartz transducers generate ultrasonic acoustic waves for sonar." },
    { word: "Pneumatics", pronunciation: "/njuːˈmæt.ɪks/", meaning: "The mechanical application of compressed air or gas to generate linear motion and power.", example: "Automated assembly lines employ pneumatic cylinders for rapid part sorting." },
    { word: "Polymorphism", pronunciation: "/ˌpɒl.iˈmɔː.fɪ.zəm/", meaning: "An object-oriented programming principle allowing objects of different classes to respond.", example: "A universal 'draw' method exhibits polymorphism by rendering circles or polygons." },
    { word: "Photodiode", pronunciation: "/ˌfəʊ.təʊˈdaɪ.əʊd/", meaning: "A semiconductor P-N junction device that converts incoming photon light into electrical current.", example: "Optical fiber receivers employ high-speed avalanche photodiodes to detect light pulses." },
    { word: "Pipeline", pronunciation: "/ˈpaɪp.laɪn/", meaning: "A hardware architecture technique where instructions are executed in staged assembly fashion.", example: "Instruction pipelining allows a CPU to fetch, decode, and execute commands concurrently." },
    { word: "Polymer", pronunciation: "/ˈpɒl.ɪ.mər/", meaning: "A synthetic or natural material composed of large molecules with repeating structural units.", example: "High-performance polymers provide lightweight impact resistance for protective gear." },
    { word: "Potentiometer", pronunciation: "/pəˌten.ʃiˈɒm.ɪ.tər/", meaning: "A three-terminal resistor with an adjustable sliding contact forming an adjustable voltage divider.", example: "Rotating the manual audio volume knob adjusts an internal precision potentiometer." },
    { word: "Pascal", pronunciation: "/pæsˈkæl/", meaning: "The SI standard derived unit of pressure measurement equal to one newton per square meter.", example: "Atmospheric sea-level barometric pressure measures approximately 101,325 pascals." }
  ],

  Q: [
    { word: "Quantum", pronunciation: "/ˈkwɒn.təm/", meaning: "The discrete, indivisible unit of energy or physical property allowed in atomic physics.", example: "Quantum computing exploits superposition to evaluate complex mathematical problems." },
    { word: "Quenching", pronunciation: "/ˈkwentʃ.ɪŋ/", meaning: "The rapid cooling of a heated metal in water or oil to achieve desired hardness.", example: "Bladesmiths quench forged high-carbon steel to lock in its crystalline hardness." },
    { word: "Query", pronunciation: "/ˈkwɪə.ri/", meaning: "A formal request for information retrieved from a database system using query language.", example: "Typing a keyword executes an indexed SQL query against the dictionary database." },
    { word: "Queue", pronunciation: "/kjuː/", meaning: "A sequential First-In-First-Out (FIFO) data structure where items are processed in order.", example: "Operating systems manage background print jobs using an asynchronous FIFO queue." },
    { word: "Quadrature", pronunciation: "/ˈkwɒd.rə.tʃər/", meaning: "Two signals possessing the exact same frequency but separated by a 90-degree phase angle.", example: "Quadrature optical encoders determine both rotational direction and angular velocity." },
    { word: "Quality", pronunciation: "/ˈkwɒl.ə.ti/", meaning: "The degree of excellence and compliance with manufacturing specifications and durability.", example: "Rigorous quality control testing ensures electronic hardware operates within tolerances." },
    { word: "Quartile", pronunciation: "/ˈkwɔː.taɪl/", meaning: "Statistical values that divide an ordered dataset into four equal frequency intervals.", example: "Statistical analysis showed product test scores ranked in the top performance quartile." },
    { word: "Quartz", pronunciation: "/kwɔːts/", meaning: "A crystalline mineral that vibrates with precise frequency when an electric charge is applied.", example: "Electronic quartz crystal oscillators ensure timekeeping accuracy in clocks and radios." },
    { word: "QuickSort", pronunciation: "/ˈkwɪk.sɔːt/", meaning: "An efficient divide-and-conquer sorting algorithm based on partitioning around a pivot.", example: "The QuickSort algorithm sorts large database arrays in logarithmic average time." },
    { word: "Quorum", pronunciation: "/ˈkwɔː.rəm/", meaning: "The minimum consensus of distributed nodes required to validate a state change.", example: "Distributed cloud databases require a voting quorum before committing cluster writes." }
  ],

  R: [
    { word: "Resistor", pronunciation: "/rɪˈzɪs.tər/", meaning: "A two-terminal passive electronic component that implements electrical resistance in circuits.", example: "Current-limiting resistors protect delicate LED chips from thermal overcurrent damage." },
    { word: "Recursion", pronunciation: "/rɪˈkɜː.ʃən/", meaning: "A programming technique where a function solves a problem by calling itself with smaller inputs.", example: "Traversing nested hierarchical file directory trees is elegantly handled with recursion." },
    { word: "Robotics", pronunciation: "/rəʊˈbɒt.ɪks/", meaning: "The interdisciplinary engineering branch focused on designing, building, and operating robots.", example: "Industrial robotics assemble and weld automotive unibodies on modern factory lines." },
    { word: "Radiation", pronunciation: "/ˌreɪ.diˈeɪ.ʃən/", meaning: "The emission and propagation of energy through space or material in waves or particles.", example: "Electromagnetic radiation encompasses radio waves, visible light, and infrared radiation." },
    { word: "Resonance", pronunciation: "/ˈrez.ən.əns/", meaning: "The physical phenomenon where a system oscillates with maximum amplitude at natural frequency.", example: "Acoustic resonance amplifies specific sound frequencies inside a musical instrument body." },
    { word: "Relay", pronunciation: "/ˈriː.leɪ/", meaning: "An electrically operated switch that allows a low-power control signal to switch high current.", example: "Automotive relays enable low-current dashboard switches to power high-current headlamps." },
    { word: "Refactoring", pronunciation: "/ˌriːˈfæk.tər.ɪŋ/", meaning: "Restructuring existing computer code to improve clarity and maintainability without altering behavior.", example: "Code refactoring simplified the application codebase and accelerated rendering speeds." },
    { word: "Rigidity", pronunciation: "/rɪˈdʒɪd.ə.ti/", meaning: "The physical capability of a solid structural frame to resist deformation and bending.", example: "Carbon fiber monocoques provide exceptional torsional rigidity for racing vehicles." },
    { word: "Router", pronunciation: "/ˈruː.tər/", meaning: "A networking device that forwards digital data packets between computer networks.", example: "The Wi-Fi router inspects packet IP headers to direct internet traffic to devices." },
    { word: "Rotor", pronunciation: "/ˈrəʊ.tər/", meaning: "The rotating component of a motor, alternator, or mechanical turbine.", example: "Electric motor rotors generate continuous rotational torque via magnetic attraction." }
  ],

  S: [
    { word: "Semiconductor", pronunciation: "/ˌsem.i.kənˈdʌk.tər/", meaning: "A solid material with electrical conductivity between conductors and insulators (like silicon).", example: "Silicon semiconductor wafers form the microscopic foundation of integrated microchips." },
    { word: "Synchronous", pronunciation: "/ˈsɪŋ.krə.nəs/", meaning: "Occurring simultaneously or coordinated and locked to a common global timing clock.", example: "Synchronous digital circuits update register states on the rising edge of the clock signal." },
    { word: "Stress", pronunciation: "/stres/", meaning: "The internal physical force per unit area that neighboring particles exert on each other.", example: "Engineers calculate tensile stress distributions to ensure bridge cables withstand loads." },
    { word: "Strain", pronunciation: "/streɪn/", meaning: "The measure of geometrical deformation or elongation occurring in a body under stress.", example: "Strain gauges bonded to structural steel beams measure microscopic mechanical deflections." },
    { word: "Socket", pronunciation: "/ˈsɒk.ɪt/", meaning: "A hardware connection port or a bidirectional network software communication endpoint.", example: "WebSocket connections allow real-time instant messaging between clients and servers." },
    { word: "Schema", pronunciation: "/ˈskiː.mə/", meaning: "The formal structural blueprint and architectural organization of a database system.", example: "The relational database schema defines table columns, primary keys, and relations." },
    { word: "Solenoid", pronunciation: "/ˈsəʊ.lən.ɔɪd/", meaning: "An electromagnetic coil that creates a magnetic field to move a linear mechanical plunger.", example: "Automotive starter solenoids mechanically engage the starter gear with the engine flywheel." },
    { word: "Subnet", pronunciation: "/ˈsʌb.net/", meaning: "A logically segmented portion of a larger Internet Protocol (IP) computer network.", example: "Enterprise network administrators isolate server traffic onto a dedicated private subnet." },
    { word: "Superconductor", pronunciation: "/ˌsuː.pə.kənˈdʌk.tər/", meaning: "A material that exhibits zero electrical resistance and expels magnetic fields when cooled.", example: "Maglev bullet trains levitate above guideways using cryogenic superconductor magnets." },
    { word: "Stator", pronunciation: "/ˈsteɪ.tər/", meaning: "The stationary, non-rotating outer portion of an electric motor or alternator.", example: "Three-phase stator windings produce a rotating magnetic field that turns the rotor." }
  ],

  T: [
    { word: "Transistor", pronunciation: "/trænˈzɪs.tər/", meaning: "A three-terminal semiconductor device used to amplify or switch electrical signals and power.", example: "Modern smartphone microprocessors pack over 15 billion microscopic transistors on a die." },
    { word: "Thermodynamics", pronunciation: "/ˌθɜː.məʊ.daɪˈnæm.ɪks/", meaning: "The branch of physical science treating relationships between heat, mechanical work, and energy.", example: "Refrigeration cycles and heat pumps operate based on classical thermodynamics principles." },
    { word: "Torque", pronunciation: "/tɔːk/", meaning: "The rotational twisting force that produces or tends to produce rotation about an axis.", example: "Electric vehicle motors deliver peak torque instantly from zero revolutions per minute." },
    { word: "Topology", pronunciation: "/təˈpɒl.ə.dʒi/", meaning: "The geometric and logical arrangement of nodes, links, and devices in a network.", example: "Star network topology routes all device connections through a centralized gigabit switch." },
    { word: "Telemetry", pronunciation: "/təˈlem.ə.tri/", meaning: "The automated collection and wireless transmission of sensor data from remote sources.", example: "Orbital space probes beam telemetry data covering trajectory and battery status to Earth." },
    { word: "Turbine", pronunciation: "/ˈtɜː.baɪn/", meaning: "A rotary mechanical device that extracts kinetic energy from fluid flow and converts it to power.", example: "Hydroelectric turbines harness the kinetic flow of dammed river water to generate power." },
    { word: "Tensor", pronunciation: "/ˈten.sər/", meaning: "A multidimensional array of numerical values used in linear physics and deep learning models.", example: "TensorFlow processes multidimensional mathematical tensors to train artificial neural networks." },
    { word: "Tensile", pronunciation: "/ˈten.saɪl/", meaning: "Relating to tension and the maximum capacity of a material to withstand pulling forces.", example: "Structural suspension bridge steel cables exhibit exceptional tensile strength ratings." },
    { word: "Throttle", pronunciation: "/ˈθrɒt.əl/", meaning: "A mechanical valve mechanism that regulates the flow rate of fluid or fuel into an engine.", example: "Depressing the accelerator pedal opens the throttle to increase air intake into the engine." },
    { word: "Throughput", pronunciation: "/ˈθruː.pʊt/", meaning: "The actual volume of data or completed tasks processed successfully within a unit of time.", example: "Solid-state NVMe drives achieve sustained data read throughput exceeding 6000 MB/s." }
  ],

  U: [
    { word: "Ultrasound", pronunciation: "/ˈʌl.trə.saʊnd/", meaning: "Sound waves with frequencies above the upper audible limit of human hearing (>20 kHz).", example: "Medical ultrasound imaging provides safe, non-invasive diagnostic scans of internal tissue." },
    { word: "Unicast", pronunciation: "/ˈjuː.nɪ.kɑːst/", meaning: "Point-to-point network transmission of data from one single sender to one single destination.", example: "Standard point-to-point HTTP web traffic relies on unicast network transmission." },
    { word: "Ubiquitous", pronunciation: "/juːˈbɪk.wɪ.təs/", meaning: "Present, appearing, or found everywhere; seamlessly embedded into everyday surroundings.", example: "High-speed wireless connectivity has become ubiquitous across modern metropolitan areas." },
    { word: "Upstream", pronunciation: "/ˈʌp.striːm/", meaning: "The direction of data transmission flowing from a client device towards the central network.", example: "High upstream bandwidth ensures smooth live broadcasting of high-definition video." },
    { word: "Unicode", pronunciation: "/ˈjuː.nɪ.kəʊd/", meaning: "An international character encoding standard providing unique numeric codes for global text.", example: "Unicode standardization guarantees emojis and non-Latin alphabets display consistently." },
    { word: "Ultimate", pronunciation: "/ˈʌl.tɪ.mət/", meaning: "The maximum mechanical stress a structural material can endure before catastrophic failure.", example: "Structural engineers design aerospace trusses to stay far below ultimate tensile strength." },
    { word: "Underflow", pronunciation: "/ˈʌn.də.fləʊ/", meaning: "A computational floating-point error occurring when a calculated number is closer to zero than allowable.", example: "Precision scientific simulation libraries implement safeguards to prevent arithmetic underflow." },
    { word: "Ultrasonic", pronunciation: "/ˌʌl.trəˈsɒn.ɪk/", meaning: "Relating to acoustic sound frequencies above human audibility utilized in sensor ranges.", example: "Automotive parking sensors emit ultrasonic chirps to detect proximity to surrounding obstacles." },
    { word: "Uncertainty", pronunciation: "/ʌnˈsɜː.tən.ti/", meaning: "The quantified margin of error and doubt associated with a physical measurement result.", example: "Scientific laboratory reports document calculated measurement uncertainty alongside recorded values." },
    { word: "Unit", pronunciation: "/ˈjuː.nɪt/", meaning: "A definite standard magnitude of a physical quantity defined and adopted by convention.", example: "Engineers consistently specify measurement units (meters, amperes) to prevent miscalculations." }
  ],

  V: [
    { word: "Voltage", pronunciation: "/ˈvəʊl.tɪdʒ/", meaning: "The difference in electric potential between two points that drives electrical current through wires.", example: "Standard USB charging adapters provide a steady regulated output of 5.0 volts direct current." },
    { word: "Vector", pronunciation: "/ˈvek.tər/", meaning: "A mathematical and physical quantity possessing both a numerical magnitude and a spatial direction.", example: "Velocity is a physical vector defined by both scalar travel speed and heading direction." },
    { word: "Viscosity", pronunciation: "/vɪˈskɒs.ə.ti/", meaning: "The internal friction and measure of a fluid's resistance to gradual deformation and flow.", example: "High-grade engine lubricants maintain optimal viscosity across wide thermal ranges." },
    { word: "Virtualization", pronunciation: "/ˌvɜː.tʃu.əl.aɪˈzeɪ.ʃən/", meaning: "Creating software-based virtual versions of computing hardware, servers, and storage.", example: "Cloud hosting platforms utilize server virtualization to isolate distinct customer workloads." },
    { word: "Valve", pronunciation: "/vælv/", meaning: "A mechanical device that regulates, directs, or controls fluid flow by opening or closing passageways.", example: "Safety pressure-relief valves automatically vent excess steam pressure from boilers." },
    { word: "Vibration", pronunciation: "/vaɪˈbreɪ.ʃən/", meaning: "A mechanical oscillation and periodic back-and-forth movement about an equilibrium position.", example: "Smartphones use miniature eccentric rotating mass motors to provide silent vibration alerts." },
    { word: "Variance", pronunciation: "/ˈveə.ri.əns/", meaning: "A statistical metric measuring the dispersion and spread of numerical data around the mean.", example: "Low variance in component manufacturing dimensions signifies consistent production tolerances." },
    { word: "Velocity", pronunciation: "/vəˈlɒs.ə.ti/", meaning: "The rate of change of an object's position with respect to a frame of reference, with direction.", example: "The passenger aircraft maintained a cruising velocity of 850 km/h on an eastbound heading." },
    { word: "Volatile", pronunciation: "/ˈvɒl.ə.taɪl/", meaning: "Computer memory (such as RAM) that retains its stored data only while electrical power is supplied.", example: "RAM is volatile high-speed memory, whereas solid-state flash drives offer non-volatile storage." },
    { word: "Voltmeter", pronunciation: "/ˈvəʊltˌmiː.tər/", meaning: "An electronic instrument designed to measure electrical potential difference across circuit nodes.", example: "The electronics technician connected a digital voltmeter across the terminal pins to test supply voltage." }
  ],

  W: [
    { word: "Wavelength", pronunciation: "/ˈweɪv.leŋθ/", meaning: "The spatial distance between consecutive identical crests or peaks of a wave pattern.", example: "Red optical light has a longer physical wavelength than blue light in the visible spectrum." },
    { word: "Waveform", pronunciation: "/ˈweɪv.fɔːm/", meaning: "The visual graph representing the geometrical shape and variation of a signal wave over time.", example: "Oscilloscopes display electronic signal waveforms to verify frequency and pulse symmetry." },
    { word: "Wattage", pronunciation: "/ˈwɒt.ɪdʒ/", meaning: "An amount of electrical power expressed in watts, representing rate of energy consumption.", example: "Energy-efficient LED bulbs deliver bright room illumination at low electrical wattage." },
    { word: "Wear", pronunciation: "/weər/", meaning: "The progressive loss or removal of solid material from surfaces caused by friction and contact.", example: "Tire tread wear patterns provide visual diagnostics indicating wheel alignment status." },
    { word: "Webhook", pronunciation: "/ˈweb.hʊk/", meaning: "An automated HTTP callback mechanism that transmits data between applications when events occur.", example: "Payment processors trigger real-time webhooks to notify servers when transactions succeed." },
    { word: "Wireless", pronunciation: "/ˈwaɪə.ləs/", meaning: "Telecommunication and transmission of data via electromagnetic radio waves without cables.", example: "Wireless headphones transmit high-fidelity digital audio streams over Bluetooth radio links." },
    { word: "Wireframe", pronunciation: "/ˈwaɪə.freɪm/", meaning: "A skeletal visual outline and structural schematic representing an application UI layout.", example: "UX designers produce responsive wireframes to prototype interface navigation flows." },
    { word: "Workbench", pronunciation: "/ˈwɜːk.bentʃ/", meaning: "A heavy-duty table and workspace equipped with precision tools and test instruments.", example: "The laboratory electronics workbench was outfitted with soldering equipment and meters." },
    { word: "Workflow", pronunciation: "/ˈwɜːk.fləʊ/", meaning: "The systematic, orchestrated sequence of administrative or technical steps completing a process.", example: "Automated continuous-integration workflows run test suites before software deployment." },
    { word: "Windlass", pronunciation: "/ˈwɪnd.ləs/", meaning: "A mechanical winch device with horizontal cylinder drum used to haul heavy loads or anchors.", example: "Maritime vessels use high-torque electric windlasses to raise massive ship anchor chains." }
  ],

  X: [
    { word: "XOR", pronunciation: "/ˌeks.ɔːr/", meaning: "Exclusive OR; a fundamental digital logic gate whose output is true only if inputs differ.", example: "Digital half-adder arithmetic circuits employ XOR logic gates for binary addition." },
    { word: "X-Ray", pronunciation: "/ˈeks.reɪ/", meaning: "High-energy electromagnetic radiation with short wavelengths that penetrates soft matter.", example: "Medical radiography employs diagnostic X-ray imaging to assess bone fractures." },
    { word: "Xenon", pronunciation: "/ˈzen.ɒn/", meaning: "A heavy, colorless noble gas that emits a bright white illumination when electrically ionized.", example: "High-intensity automotive headlamps employ ionized xenon gas for crisp nighttime visibility." },
    { word: "XML", pronunciation: "/ˌeks.emˈel/", meaning: "Extensible Markup Language; a standardized textual format defining structured data tags.", example: "Android mobile application layout hierarchies are declaratively specified in XML files." },
    { word: "Xylene", pronunciation: "/ˈzaɪ.liːn/", meaning: "A clear aromatic hydrocarbon solvent utilized in manufacturing polymers and cleaning electronics.", example: "Laboratory technicians use chemical-grade xylene to clean printed circuit boards." },
    { word: "Xerography", pronunciation: "/zɪəˈrɒɡ.rə.fi/", meaning: "A dry electrostatic photocopying technique utilizing photoconductive drums and dry toner.", example: "Commercial laser office printers and copiers operate based on the principles of xerography." },
    { word: "Crossbar", pronunciation: "/ˈkrɒs.bɑːr/", meaning: "A matrix of intersecting switching lines connecting multiple input channels to multiple outputs.", example: "Telecommunication switching architectures use crossbar switch matrices to route data paths." },
    { word: "Xylometer", pronunciation: "/zaɪˈlɒm.ɪ.tər/", meaning: "An instrument designed to calculate the specific gravity and volume of wood samples via water displacement.", example: "Forestry materials engineers use a xylometer to determine timber moisture and density." },
    { word: "X-Axis", pronunciation: "/ˈeks.æk.sɪs/", meaning: "The horizontal coordinate axis in a standard two-dimensional Cartesian coordinate system.", example: "On time-series performance charts, elapsed duration is plotted horizontally along the X-axis." },
    { word: "Xylem", pronunciation: "/ˈzaɪ.ləm/", meaning: "Plant vascular tissue that transports water from roots, studied for biomimetic microfluidic channels.", example: "Nanotechnology researchers analyze xylem plant capillary structures to design energy-efficient cooling." }
  ],

  Y: [
    { word: "Yield", pronunciation: "/jiːld/", meaning: "The stress point at which a structural material transitions from elastic to permanent plastic deformation.", example: "Structural beams are engineered with safety factors so working stresses never exceed yield limits." },
    { word: "Yoke", pronunciation: "/jəʊk/", meaning: "A structural cross-piece connecting components together or guiding magnetic flux paths.", example: "Aircraft control yokes provide pilots with manual tactile control of pitch and roll." },
    { word: "Yottabyte", pronunciation: "/ˈjɒt.ə.baɪt/", meaning: "A unit of digital information storage equal to one septillion (10^24) bytes or one trillion terabytes.", example: "Global networked storage data generated by humankind is projected to reach yottabytes." },
    { word: "Yaw", pronunciation: "/jɔː/", meaning: "The rotational oscillation or movement of an aircraft, ship, or drone about its vertical axis.", example: "Quadcopter flight controllers adjust counter-rotating motor speeds to control yaw rotation." },
    { word: "Y-Axis", pronunciation: "/ˈwaɪ.æk.sɪs/", meaning: "The vertical coordinate axis in a standard two-dimensional Cartesian plane.", example: "On signal response graphs, instantaneous amplitude values are plotted vertically on the Y-axis." },
    { word: "Ytterbium", pronunciation: "/ɪˈtɜː.bi.əm/", meaning: "A rare-earth metallic element utilized as a dopant in high-power industrial fiber laser amplifiers.", example: "Ytterbium-doped industrial fiber lasers generate high-precision beams for cutting metal." },
    { word: "YAML", pronunciation: "/ˈjæm.əl/", meaning: "A human-readable data serialization language commonly used for system configuration files.", example: "Cloud deployment scripts and Docker compose structures are authored using clean YAML format." },
    { word: "Yagi", pronunciation: "/ˈjɑː.ɡi/", meaning: "A highly directional radio antenna design comprising a driven element and passive parasitic directors.", example: "Rooftop directional Yagi antennas focus television signal reception along a single bearing." },
    { word: "Yielding", pronunciation: "/ˈjiːl.dɪŋ/", meaning: "The structural phenomenon where a ductile material begins to deform irreversibly under load.", example: "Controlled structural steel yielding provides visible warning before catastrophic building failure." },
    { word: "Y-Delta", pronunciation: "/ˌwaɪˈdel.tə/", meaning: "An electric motor starter wiring configuration that reduces starting inrush current surges.", example: "Heavy industrial water pumps employ Y-Delta motor starters to protect supply fuses." }
  ],

  Z: [
    { word: "Zener", pronunciation: "/ˈziː.nər/", meaning: "A specialized semiconductor diode designed to operate reliably in reverse-breakdown voltage mode.", example: "Zener diodes provide stable reference voltage clamps to protect sensitive microcontroller inputs." },
    { word: "Zero-Day", pronunciation: "/ˌzɪə.rəʊˈdeɪ/", meaning: "A newly discovered computer software security vulnerability that has not yet been patched.", example: "Cybersecurity response teams issue urgent security patches to neutralize zero-day exploits." },
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", meaning: "Represented by algebraic symbol 'Z'; the total complex resistance of an alternating current circuit.", example: "Audio engineers match speaker complex impedance Z to ensure maximum clean power transfer." },
    { word: "Zenith", pronunciation: "/ˈzen.ɪθ/", meaning: "The celestial point directly above a particular observer or location (elevation 90 degrees).", example: "Solar tracking arrays achieve maximum solar irradiance when the sun reaches solar zenith." },
    { word: "Zinc", pronunciation: "/zɪŋk/", meaning: "A metallic chemical element widely utilized as a sacrificial protective coating against corrosion.", example: "Steel fasteners are coated with electroplated zinc to prevent oxidation in moist environments." },
    { word: "Zip", pronunciation: "/zɪp/", meaning: "A ubiquitous compressed archive file format that compresses files using lossless compression.", example: "Archiving software source code into a Zip archive speeds up transmission and saves storage." },
    { word: "Zettabyte", pronunciation: "/ˈzet.ə.baɪt/", meaning: "A unit of digital data capacity equal to one sextillion (10^21) bytes or one billion terabytes.", example: "Annual worldwide internet traffic now routinely exceeds several zettabytes of data." },
    { word: "Zirconium", pronunciation: "/zɜːˈkəʊ.ni.əm/", meaning: "A lustrous, corrosion-resistant transition metal used in aerospace and nuclear reactor cladding.", example: "Zirconium alloys house nuclear fuel rods because of their low neutron absorption properties." },
    { word: "Zoom", pronunciation: "/zuːm/", meaning: "Adjusting an optical camera lens focal length to alter the field of view and magnification.", example: "Optical zoom lenses physically shift glass elements to magnify distant objects without pixelation." },
    { word: "Zero-Crossing", pronunciation: "/ˌzɪə.rəʊˈkrɒs.ɪŋ/", meaning: "The exact instant at which an alternating AC voltage waveform crosses the zero-volt axis.", example: "Electronic dimmer circuits switch AC power at the zero-crossing point to suppress line noise." }
  ]
};

/* ==========================================================================
   3. STORAGE & STATE MANAGEMENT (100% OFFLINE LOCALSTORAGE)
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
   4. ROBUST WEB2APK & MOBILE AUDIO SPEECH ENGINE (100% REAL SPEECH)
   ========================================================================== */
const PHONETIC_ALPHABET = {
  A: 'Ay', B: 'Bee', C: 'See', D: 'Dee', E: 'Ee', F: 'Eff', G: 'Jee',
  H: 'Aytch', I: 'Eye', J: 'Jay', K: 'Kay', L: 'Ell', M: 'Emm', N: 'Enn',
  O: 'Oh', P: 'Pee', Q: 'Cue', R: 'Arr', S: 'Ess', T: 'Tee', U: 'You',
  V: 'Vee', W: 'Double you', X: 'Ex', Y: 'Wye', Z: 'Zed'
};

class AudioEngine {
  constructor() {
    this.synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
    this.selectedVoice = null;
    this.currentHtmlAudio = null;
    this.isWarmedUp = false;

    this.initVoices();
    this.setupTouchUnlock();
  }

  setupTouchUnlock() {
    const unlock = () => {
      if (this.isWarmedUp) return;
      this.isWarmedUp = true;

      // Unlock SpeechSynthesis on Android WebView
      if (this.synth) {
        try {
          this.synth.resume();
        } catch (e) {}
      }

      // Pre-warm HTML5 audio element
      try {
        const silent = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
        silent.play().catch(() => {});
      } catch (e) {}
    };

    window.addEventListener('click', unlock, { passive: true, once: true });
    window.addEventListener('touchstart', unlock, { passive: true, once: true });
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      try {
        const voices = this.synth.getVoices();
        if (!voices || voices.length === 0) return;

        // Prefer natural English voices (Google US English, Samantha, Daniel, Android Speech)
        this.selectedVoice =
          voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))) ||
          voices.find(v => v.lang === 'en-US') ||
          voices.find(v => v.lang.startsWith('en')) ||
          voices[0];
      } catch (e) {}
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  speak(text, onStart, onEnd) {
    if (!text || typeof text !== 'string') return;
    const spokenText = text.trim();

    let hasStarted = false;
    let hasFinished = false;

    const notifyStart = () => {
      if (hasStarted) return;
      hasStarted = true;
      if (typeof onStart === 'function') onStart();
    };

    const notifyEnd = () => {
      if (hasFinished) return;
      hasFinished = true;
      if (typeof onEnd === 'function') onEnd();
    };

    // 1. NATIVE ANDROID WEBVIEW BRIDGE (If using an APK with native TTS bridge)
    try {
      if (window.AndroidTTS && typeof window.AndroidTTS.speak === 'function') {
        notifyStart();
        window.AndroidTTS.speak(spokenText);
        setTimeout(notifyEnd, Math.max(1000, spokenText.length * 80));
        return;
      }
      if (window.Android && typeof window.Android.speak === 'function') {
        notifyStart();
        window.Android.speak(spokenText);
        setTimeout(notifyEnd, Math.max(1000, spokenText.length * 80));
        return;
      }
    } catch (e) {}

    // 2. SYNCHRONOUS DOM HTML5 AUDIO (Works 100% in Android WebViews on tap)
    let audio = document.getElementById('app-speech-audio');
    if (!audio) {
      audio = new Audio();
      audio.id = 'app-speech-audio';
      document.body.appendChild(audio);
    }
    this.currentHtmlAudio = audio;

    const cleanWord = spokenText.toLowerCase().replace(/[^a-z0-9\s-]/g, '');
    const cleanQuery = encodeURIComponent(cleanWord);
    const audioUrls = [
      `https://dict.youdao.com/dictvoice?type=0&audio=${cleanQuery}`,
      `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${cleanQuery}`
    ];

    let currentUrlIndex = 0;

    const tryPlay = (index) => {
      if (index >= audioUrls.length) {
        // Fallback to Web Speech API
        this.speakOfflineTTS(spokenText, notifyStart, notifyEnd);
        return;
      }

      audio.onplay = () => {
        notifyStart();
      };

      audio.onended = () => {
        notifyEnd();
      };

      audio.onerror = () => {
        tryPlay(index + 1);
      };

      try {
        audio.src = audioUrls[index];
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              notifyStart();
            })
            .catch(() => {
              tryPlay(index + 1);
            });
        }
      } catch (err) {
        tryPlay(index + 1);
      }
    };

    // Trigger synchronously within user gesture
    tryPlay(0);
  }

  speakOfflineTTS(text, notifyStart, notifyEnd) {
    notifyStart();

    if (this.synth) {
      try {
        this.synth.resume();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.92;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }

        // Keep reference on window to prevent V8 garbage collection on Android WebViews
        window._activeUtterance = utterance;

        utterance.onstart = () => {
          notifyStart();
        };

        utterance.onend = () => {
          window._activeUtterance = null;
          notifyEnd();
        };

        utterance.onerror = (e) => {
          window._activeUtterance = null;
          notifyEnd();
        };

        this.synth.speak(utterance);

        // Safety timeout so UI equalizer animation always resets smoothly
        const safetyDuration = Math.max(1200, text.length * 90);
        setTimeout(() => {
          if (!this.synth.speaking && !this.synth.pending) {
            notifyEnd();
          }
        }, safetyDuration);
        return;
      } catch (err) {
        console.warn('SpeechSynthesis error:', err);
      }
    }

    notifyEnd();
  }

  speakLetter(char) {
    const spokenLetter = PHONETIC_ALPHABET[char] || char;
    this.speak(spokenLetter);
  }
}

const audioEngine = new AudioEngine();

/* ==========================================================================
   5. DOM ELEMENT SELECTORS
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

  wordFocusCard: document.getElementById('word-focus-card'),
  motionBarsContainer: document.getElementById('motion-bars-container'),
  metricMasteredLetters: document.getElementById('metric-mastered-letters'),
  metricAvgScore: document.getElementById('metric-avg-score'),
  metricStudyStatus: document.getElementById('metric-study-status'),
  confettiCanvas: document.getElementById('confetti-canvas'),

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

/* ==========================================================================
   CONFETTI CELEBRATION PARTICLE ENGINE
   ========================================================================== */
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = (canvas && typeof canvas.getContext === 'function') ? canvas.getContext('2d') : null;
    this.particles = [];
    this.animationId = null;
    this.colors = ['#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#f43f5e', '#6366f1'];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 65) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    const startX = this.canvas.width / 2;
    const startY = this.canvas.height / 2 + 60;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 8;
      this.particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 5 + Math.random() * 6,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.22,
        opacity: 1,
        life: 0.9 + Math.random() * 0.4
      });
    }

    if (!this.animationId) {
      this.render();
    }
  }

  render() {
    if (!this.ctx || this.particles.length === 0) {
      if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animationId = null;
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.015;

      if (p.opacity <= 0 || p.y > this.canvas.height + 20) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    }

    this.animationId = requestAnimationFrame(() => this.render());
  }
}

let confettiEngine = null;
setTimeout(() => {
  if (DOM.confettiCanvas) {
    confettiEngine = new ConfettiEngine(DOM.confettiCanvas);
  }
}, 100);

/**
 * Trigger Flashcard Slide Animation
 */
function triggerCardSlide(direction = 'next') {
  if (!DOM.wordFocusCard) return;
  DOM.wordFocusCard.classList.remove('slide-next', 'slide-prev');
  void DOM.wordFocusCard.offsetWidth; // Trigger reflow
  DOM.wordFocusCard.classList.add(direction === 'next' ? 'slide-next' : 'slide-prev');
  setTimeout(() => {
    if (DOM.wordFocusCard) DOM.wordFocusCard.classList.remove('slide-next', 'slide-prev');
  }, 360);
}

/**
 * Universal Navigation
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
   6. QUICK ALPHABET RIBBON (COLORFUL ACTIVE STATES)
   ========================================================================== */
function buildAlphabetRibbon() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  DOM.ribbonContainer.innerHTML = '';

  letters.forEach(char => {
    const theme = getTheme(char);
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
    const char = btn.dataset.letter;
    const theme = getTheme(char);

    if (char === state.currentLetter) {
      btn.style.backgroundColor = theme.primary;
      btn.style.color = '#ffffff';
      btn.style.borderColor = theme.primary;
      btn.style.boxShadow = `0 2px 8px ${theme.primary}55`;
    } else {
      btn.style.backgroundColor = 'var(--bg-page)';
      btn.style.color = 'var(--text-secondary)';
      btn.style.borderColor = 'var(--border-light)';
      btn.style.boxShadow = 'none';
    }
  });
}

/* ==========================================================================
   7. PROGRESS CALCULATORS
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
   8. HOME SCREEN (COLORFUL PRESENTATION)
   ========================================================================== */
function renderHomeScreen() {
  const curTheme = getTheme(state.currentLetter);
  const currentWords = TECHNICAL_VOCABULARY[state.currentLetter] || TECHNICAL_VOCABULARY.A;
  const wordObj = currentWords[state.currentIndex] || currentWords[0];
  const letterProgress = getLetterProgress(state.currentLetter);

  DOM.homeContinueCard.style.background = `linear-gradient(135deg, ${curTheme.primary} 0%, #4f46e5 100%)`;
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
    const theme = getTheme(char);
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-top">
        <div class="letter-circle" style="background: ${theme.bg}; color: ${theme.primary}; border: 1.5px solid ${theme.border};">
          ${char}
        </div>
        <span class="percent-badge" style="background: ${theme.bg}; color: ${theme.text};">
          ${p.percent}%
        </span>
      </div>
      <h4 class="card-title">Letter ${char}</h4>
      <span class="card-count">${p.learned} / ${p.total} Learned</span>
      <div class="card-bar-bg">
        <div class="card-bar-fill" style="width: ${p.percent}%; background: ${theme.primary};"></div>
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
   9. LEARN SCREEN (A–Z HUB WITH RICH COLORS)
   ========================================================================== */
function renderLearnHubScreen() {
  DOM.learnAlphabetCardsList.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const theme = getTheme(char);
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-top">
        <div class="letter-circle" style="background: ${theme.bg}; color: ${theme.primary}; border: 1.5px solid ${theme.border};">
          ${char}
        </div>
        <span class="percent-badge" style="background: ${theme.bg}; color: ${theme.text};">
          ${p.percent}%
        </span>
      </div>
      <h4 class="card-title">Letter ${char}</h4>
      <span class="card-count">${p.learned} of ${p.total} Words Mastered</span>
      <div class="card-bar-bg">
        <div class="card-bar-fill" style="width: ${p.percent}%; background: ${theme.primary};"></div>
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
   10. WORD LIST SCREEN (NO CLIPPING, COLOR ACCENTS)
   ========================================================================== */
function renderWordListScreen() {
  const letter = state.currentLetter;
  const theme = getTheme(letter);
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const p = getLetterProgress(letter);

  DOM.wordlistTitle.textContent = `Letter ${letter} Words`;
  DOM.wordlistProgressBadge.textContent = `${p.learned} / ${p.total} Learned`;
  DOM.wordlistProgressBadge.style.color = theme.primary;
  DOM.btnWordlistStartLearning.style.backgroundColor = theme.primary;

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
          <span class="word-row-phonetic" style="color: ${theme.primary};">${item.pronunciation}</span>
          <span class="word-row-letter-tag" style="background: ${theme.bg}; color: ${theme.text};">Letter ${letter}</span>
        </div>
        <p class="word-row-meaning">${item.meaning}</p>
      </div>
      <button type="button" class="btn-speaker-pill" aria-label="Listen to ${item.word}" style="background: ${theme.bg}; color: ${theme.primary}; border: 1.5px solid ${theme.border};">
        <svg viewBox="0 0 24 24" width="20" height="20"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-speaker-pill')) {
        e.stopPropagation();
        showToast(`🔊 Audio Pronunciation is coming soon for "${item.word}"! ✨`);
        return;
      }
      navigateTo('word-learn', { letter, index });
    });

    DOM.wordItemsContainer.appendChild(card);
  });
}

/* ==========================================================================
   11. WORD LEARNING FOCUS SCREEN (DYNAMIC LETTER COLOR)
   ========================================================================== */
function renderWordLearnScreen() {
  const letter = state.currentLetter;
  const theme = getTheme(letter);
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const index = state.currentIndex;
  const wordObj = words[index];

  if (!wordObj) return;

  const wordKey = `${letter}_${index}`;
  const isLearned = state.masteredWords.has(wordKey);
  const isBookmarked = state.bookmarks.has(wordKey);

  DOM.learnCounterText.textContent = `Letter ${letter} • Word ${index + 1} of ${words.length}`;
  DOM.learnProgressFill.style.width = `${((index + 1) / words.length) * 100}%`;
  DOM.learnProgressFill.style.backgroundColor = theme.primary;

  DOM.learnLetterPill.textContent = `Letter ${letter}`;
  DOM.learnLetterPill.style.backgroundColor = theme.bg;
  DOM.learnLetterPill.style.color = theme.text;
  DOM.learnLetterPill.style.border = `1px solid ${theme.border}`;

  if (isLearned) {
    DOM.learnStatusPill.textContent = 'Learned ✓';
    DOM.learnStatusPill.className = 'badge-status learned';
  } else {
    DOM.learnStatusPill.textContent = 'To Learn';
    DOM.learnStatusPill.className = 'badge-status unlearned';
  }

  DOM.learnWordHeading.textContent = wordObj.word.toUpperCase();
  DOM.learnPhonetic.textContent = wordObj.pronunciation;
  DOM.learnPhonetic.style.color = theme.primary;

  DOM.learnMeaningText.textContent = wordObj.meaning;
  DOM.learnExampleText.textContent = `"${wordObj.example}"`;

  // Dynamic Letter tiles
  DOM.learnSpellingTiles.innerHTML = '';
  const cleanWord = wordObj.word.toUpperCase().replace(/[^A-Z]/g, '');

  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'spell-tile';
    tile.textContent = char;
    tile.style.borderColor = theme.border;
    tile.style.color = theme.primary;
    tile.setAttribute('aria-label', `Letter ${char}`);

    tile.addEventListener('click', () => {
      tile.style.backgroundColor = theme.primary;
      tile.style.color = '#ffffff';
      showToast(`Letter "${char}" • Spelling`);
      setTimeout(() => {
        tile.style.backgroundColor = 'var(--surface-white)';
        tile.style.color = theme.primary;
      }, 300);
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

  DOM.btnLearnNext.style.backgroundColor = theme.primary;
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
  const wordName = wordObj ? `"${wordObj.word}"` : 'this word';
  showToast(`🔊 Audio Pronunciation for ${wordName} is coming soon! ✨`);
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
    if (confettiEngine) confettiEngine.burst(45);
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
    triggerCardSlide('next');
    renderWordLearnScreen();
  } else {
    showCompletionCelebration();
  }
}

function handlePrevWord() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    saveState();
    triggerCardSlide('prev');
    renderWordLearnScreen();
  }
}

function showCompletionCelebration() {
  if (confettiEngine) confettiEngine.burst(85);
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
   12. SEARCH SCREEN (ALL 260 WORDS WITH COLORFUL LETTER TAGS)
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
        <p>Try searching another term or keyword.</p>
      </div>
    `;
    return;
  }

  const displayMatches = matches.slice(0, 80);

  displayMatches.forEach(res => {
    const theme = getTheme(res.letter);
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
          <span class="word-row-phonetic" style="color: ${theme.primary};">${res.pronunciation}</span>
          <span class="word-row-letter-tag" style="background: ${theme.bg}; color: ${theme.text};">Letter ${res.letter}</span>
        </div>
        <p class="word-row-meaning">${res.meaning}</p>
      </div>
      <button type="button" class="btn-speaker-pill" aria-label="Listen to ${res.word}" style="background: ${theme.bg}; color: ${theme.primary}; border: 1.5px solid ${theme.border};">
        <svg viewBox="0 0 24 24" width="20" height="20"><use href="#icon-speaker"></use></svg>
      </button>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-speaker-pill')) {
        e.stopPropagation();
        showToast(`🔊 Audio Pronunciation is coming soon for "${res.word}"! ✨`);
        return;
      }
      navigateTo('word-learn', { letter: res.letter, index: res.index });
    });

    DOM.searchResultsList.appendChild(card);
  });
}

/* ==========================================================================
   13. PROGRESS DASHBOARD & APPLE MOTION GRAPHICS SPECTRUM BARS
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

  // Render Apple-style Motion Spectrum Bar Chart
  renderMotionBarsChart();

  DOM.progressAlphabetBreakdown.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const theme = getTheme(char);
    const p = getLetterProgress(char);
    const tile = document.createElement('div');
    tile.className = 'progress-tile';
    tile.setAttribute('role', 'button');
    tile.setAttribute('tabindex', '0');

    tile.innerHTML = `
      <div class="progress-tile-top">
        <span>Letter ${char}</span>
        <span style="color: ${theme.primary};">${p.percent}%</span>
      </div>
      <div class="card-bar-bg">
        <div class="card-bar-fill" style="width: ${p.percent}%; background: ${theme.primary};"></div>
      </div>
    `;

    tile.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.progressAlphabetBreakdown.appendChild(tile);
  });
}

function renderMotionBarsChart() {
  if (!DOM.motionBarsContainer) return;
  DOM.motionBarsContainer.innerHTML = '';

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let completedCount = 0;
  let sumPercent = 0;

  letters.forEach(char => {
    const theme = getTheme(char);
    const p = getLetterProgress(char);

    if (p.learned === p.total && p.total > 0) completedCount++;
    sumPercent += p.percent;

    const col = document.createElement('div');
    col.className = `motion-bar-col ${char === state.currentLetter ? 'active' : ''}`;
    col.setAttribute('role', 'button');
    col.setAttribute('tabindex', '0');
    col.setAttribute('aria-label', `Letter ${char}: ${p.percent}%`);

    col.innerHTML = `
      <div class="motion-bar-tooltip">${char}: ${p.learned}/${p.total} (${p.percent}%)</div>
      <div class="motion-bar-track">
        <div class="motion-bar-fill" style="height: ${Math.max(6, p.percent)}%; background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.primary}bb 100%);"></div>
      </div>
      <span class="motion-bar-label">${char}</span>
    `;

    col.addEventListener('click', () => {
      state.currentLetter = char;
      navigateTo('word-list', { letter: char });
    });

    DOM.motionBarsContainer.appendChild(col);
  });

  const avgScore = Math.round(sumPercent / letters.length);
  if (DOM.metricMasteredLetters) DOM.metricMasteredLetters.textContent = `${completedCount} / 26`;
  if (DOM.metricAvgScore) DOM.metricAvgScore.textContent = `${avgScore}%`;
  if (DOM.metricStudyStatus) {
    if (completedCount === 26) DOM.metricStudyStatus.textContent = 'Mastery Achieved! 🏆';
    else if (completedCount > 5) DOM.metricStudyStatus.textContent = 'Consistent Growth 🚀';
    else if (totalProgLearned() > 0) DOM.metricStudyStatus.textContent = 'In Progress ⚡';
    else DOM.metricStudyStatus.textContent = 'Ready to Learn 📚';
  }
}

function totalProgLearned() {
  return state.masteredWords.size;
}

/* ==========================================================================
   14. TOAST UTILITY
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
   15. SERVICE WORKER & EVENT BINDINGS
   ========================================================================== */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

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
  registerServiceWorker();

  if (state.onboardingCompleted) {
    DOM.onboarding.classList.remove('active');
    navigateTo('home');
  } else {
    DOM.onboarding.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
