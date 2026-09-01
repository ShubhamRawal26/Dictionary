/**
 * ENGILEX — PROFESSIONAL ENGINEERING & TECHNICAL VOCABULARY DICTIONARY
 * Complete A–Z Technical Lexicon for Engineering Students & Researchers
 * Disciplines: Computer Science, Electrical, Mechanical, Civil, Robotics, Physics, Aerospace
 */

'use strict';

/* ==========================================================================
   1. COMPREHENSIVE A–Z ENGINEERING VOCABULARY DATASET (260 Technical Terms)
   ========================================================================== */
const TECHNICAL_VOCABULARY = {
  A: [
    { word: "Algorithm", pronunciation: "/ˈæl.ɡə.rɪð.əm/", discipline: "Computer Science", meaning: "A finite, unambiguous sequence of mathematical or computational steps to solve a specific problem.", example: "Dijkstra's shortest-path algorithm is implemented in autonomous vehicle routing systems." },
    { word: "Asynchronous", pronunciation: "/eɪˈsɪŋ.krə.nəs/", discipline: "Computer Science", meaning: "Operations that occur independently of the main program execution flow without blocking.", example: "Non-blocking asynchronous I/O allows modern microservices to handle millions of concurrent socket requests." },
    { word: "Actuator", pronunciation: "/ˈæk.tʃu.eɪ.tər/", discipline: "Mechanical", meaning: "A mechanical device for moving or controlling a mechanism or system via electrical or hydraulic power.", example: "Hydraulic actuators generate the high torque required for aerospace flight control surfaces." },
    { word: "Amplitude", pronunciation: "/ˈæm.plɪ.tʃuːd/", discipline: "Electrical", meaning: "The maximum extent of a vibration or oscillation, measured from the position of equilibrium.", example: "The signal amplitude must not exceed the analog-to-digital converter's maximum input voltage." },
    { word: "Architecture", pronunciation: "/ˈɑː.kɪ.tek.tʃər/", discipline: "Computer Science", meaning: "The fundamental organization of a system embodied in its components, relationships, and design principles.", example: "RISC-V architecture provides an open-standard instruction set for low-power edge computing." },
    { word: "Anodize", pronunciation: "/ˈæn.ə.daɪz/", discipline: "Materials Science", meaning: "An electrolytic passivation process used to increase the thickness of the natural oxide layer on metal parts.", example: "Aerospace aluminum brackets are anodized to protect against atmospheric corrosion and mechanical wear." },
    { word: "Aerodynamics", pronunciation: "/ˌeə.rəʊ.daɪˈnæm.ɪks/", discipline: "Mechanical", meaning: "The branch of fluid dynamics concerned with the study of the motion of air and its interaction with solid bodies.", example: "Computational fluid dynamics (CFD) is used to optimize the aerodynamic drag coefficient of high-speed trains." },
    { word: "Abstraction", pronunciation: "/æbˈstræk.ʃən/", discipline: "Computer Science", meaning: "The process of removing physical, spatial, or temporal details to focus on essential system interfaces.", example: "Object-oriented programming utilizes data abstraction to hide low-level memory implementations." },
    { word: "Acceleration", pronunciation: "/əkˌsel.əˈreɪ.ʃən/", discipline: "Physics", meaning: "The rate of change of velocity of an object with respect to time (dv/dt).", example: "MEMS capacitive accelerometers measure linear acceleration in smartphone inertial navigation units." },
    { word: "Attenuation", pronunciation: "/əˌten.juˈeɪ.ʃən/", discipline: "Electrical", meaning: "The gradual reduction in the strength or intensity of a signal as it propagates through a transmission medium.", example: "Fiber optic cables exhibit minimal optical attenuation over long-distance telecommunication spans." }
  ],

  B: [
    { word: "Bandwidth", pronunciation: "/ˈbænd.wɪtθ/", discipline: "Electrical", meaning: "The range of frequencies within a given band used for transmitting signals, or data transfer capacity.", example: "Modern 5G networks operate in millimeter-wave spectrum to deliver gigabit wireless bandwidth." },
    { word: "Backpropagation", pronunciation: "/ˌbæk.prɒp.əˈɡeɪ.ʃən/", discipline: "Computer Science", meaning: "An algorithmic method for calculating gradient descent to update weights in artificial neural networks.", example: "Backpropagation with stochastic gradient descent optimizes the deep convolutional neural network weights." },
    { word: "Binary", pronunciation: "/ˈbaɪ.nər.i/", discipline: "Computer Science", meaning: "A base-2 numeral system that uses only two digits (0 and 1) to represent all digital logic states.", example: "All arithmetic logic units (ALU) execute mathematical operations at the gate level in pure binary." },
    { word: "Buckling", pronunciation: "/ˈbʌk.lɪŋ/", discipline: "Civil", meaning: "A mathematical instability leading to a failure mode characterized by sudden sideways deflection of a structural member under compression.", example: "Euler's critical load formula calculates the maximum compressive force a slender column can endure before buckling." },
    { word: "Boolean", pronunciation: "/ˈbuː.li.ən/", discipline: "Computer Science", meaning: "A binary algebraic system in which operations are performed on variables that have two values: true and false.", example: "Boolean logic gates (AND, OR, NOT, XOR) form the structural bedrock of all digital microprocessors." },
    { word: "Bus", pronunciation: "/bʌs/", discipline: "Computer Science", meaning: "A high-speed communication system that transfers data between components inside a computer or network.", example: "PCIe 5.0 expansion buses provide high-throughput interconnects between the CPU and graphics processors." },
    { word: "Baud", pronunciation: "/bɔːd/", discipline: "Electrical", meaning: "A unit of data transmission speed representing the number of discrete signaling events per second.", example: "The serial UART transceiver was configured to transmit asynchronous telemetry packets at 115200 baud." },
    { word: "Bernoulli", pronunciation: "/bɜːˈnuː.li/", discipline: "Mechanical", meaning: "A fluid dynamics principle stating that an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure.", example: "Bernoulli's equation explains the aerodynamic pressure differential that generates lift across an aircraft airfoil." },
    { word: "Bias", pronunciation: "/ˈbaɪ.əs/", discipline: "Electrical", meaning: "A steady DC voltage or current applied to an electronic device to establish its proper operating point.", example: "The bipolar junction transistor requires precise base-emitter forward bias to operate linearly in the active region." },
    { word: "Blockchain", pronunciation: "/ˈblɒk.tʃeɪn/", discipline: "Computer Science", meaning: "A decentralized, distributed digital ledger consisting of cryptographically linked blocks of data.", example: "Cryptographic hashing and consensus algorithms ensure zero tampering across the blockchain network." }
  ],

  C: [
    { word: "Capacitance", pronunciation: "/kəˈpæs.ɪ.təns/", discipline: "Electrical", meaning: "The ability of a system to store an electric charge per unit potential difference (Farads: C = Q/V).", example: "Ceramic decoupling capacitors are placed adjacent to IC power pins to filter high-frequency switching noise." },
    { word: "Compiler", pronunciation: "/kəmˈpaɪ.lər/", discipline: "Computer Science", meaning: "A program that translates source code in a high-level programming language into machine code or bytecode.", example: "The LLVM optimizing compiler converts C++ source code into machine instructions for ARM64 processors." },
    { word: "Concurrency", pronunciation: "/kənˈkʌr.ən.si/", discipline: "Computer Science", meaning: "The ability of different parts or units of a program, algorithm, or problem to be executed out-of-order without affecting final outcome.", example: "Mutexes and semaphores are utilized in multi-threaded programming to prevent race conditions during concurrent execution." },
    { word: "Cantilever", pronunciation: "/ˈkæn.tɪ.liː.vər/", discipline: "Civil", meaning: "A rigid structural element that extends horizontally and is supported at only one fixed end.", example: "The architect designed a post-tensioned cantilevered concrete deck extending twelve meters over the canyon." },
    { word: "Combustion", pronunciation: "/kəmˈbʌs.tʃən/", discipline: "Mechanical", meaning: "A high-temperature exothermic chemical reaction between a fuel and an oxidant that produces energy.", example: "Internal combustion engines rely on stoichiometric air-fuel ratios to achieve complete thermodynamic efficiency." },
    { word: "Calibration", pronunciation: "/ˌkæl.ɪˈbreɪ.ʃən/", discipline: "Electrical", meaning: "The comparison of measurement values delivered by a device under test with those of a calibration standard of known accuracy.", example: "The strain gauge load cell underwent multi-point temperature calibration to eliminate zero-offset drift." },
    { word: "Circuit", pronunciation: "/ˈsɜː.kɪt/", discipline: "Electrical", meaning: "A closed loop through which an electric current flows from a power source to loads and returns.", example: "Kirchhoff's Current Law states that the algebraic sum of currents entering any circuit node is zero." },
    { word: "Corrosion", pronunciation: "/kəˈrəʊ.ʒən/", discipline: "Materials Science", meaning: "The gradual destruction of materials by chemical and electrochemical reaction with their environment.", example: "Galvanic corrosion occurs when two dissimilar metals are placed in electrical contact within an electrolyte." },
    { word: "Cryptography", pronunciation: "/krɪpˈtɒɡ.rə.fi/", discipline: "Computer Science", meaning: "The practice and study of techniques for secure communication in the presence of adversarial third parties.", example: "Asymmetric public-key cryptography (RSA and ECC) guarantees digital signatures and encrypted web sessions." },
    { word: "Centrifugal", pronunciation: "/senˈtrɪf.jʊ.ɡəl/", discipline: "Mechanical", meaning: "An apparent inertial force that acts outward on a body moving around a center, arising from the body's inertia.", example: "Centrifugal pumps utilize high-speed impellers to convert rotational kinetic energy into hydrodynamic fluid flow." }
  ],

  D: [
    { word: "Diode", pronunciation: "/ˈdaɪ.əʊd/", discipline: "Electrical", meaning: "A two-terminal semiconductor electronic component that conducts current primarily in one direction.", example: "Schottky diodes with low forward voltage drop are used as freewheeling rectifiers in switching power supplies." },
    { word: "Deadlock", pronunciation: "/ˈded.lɒk/", discipline: "Computer Science", meaning: "A condition in concurrent computing where two or more processes are permanently blocked because each is holding a resource and waiting for another.", example: "Database engines implement resource allocation graphs and timeout monitors to detect and break transaction deadlocks." },
    { word: "Dynamics", pronunciation: "/daɪˈnæm.ɪks/", discipline: "Physics", meaning: "The branch of mechanics concerned with the motion of bodies under the action of forces.", example: "Multibody vehicle dynamics simulations model suspension kinematic responses across uneven terrain." },
    { word: "Damping", pronunciation: "/ˈdæm.pɪŋ/", discipline: "Mechanical", meaning: "An influence within or upon an oscillatory system that has the effect of reducing, restricting, or preventing its oscillations.", example: "Tuned mass dampers installed at the crown of skyscrapers dissipate kinetic energy during seismic excitations." },
    { word: "Deflection", pronunciation: "/dɪˈflek.ʃən/", discipline: "Civil", meaning: "The degree to which a structural element is displaced under a load.", example: "The reinforced concrete beam was engineered to ensure maximum elastic deflection remained under the serviceability limit." },
    { word: "Decryption", pronunciation: "/diːˈkrɪp.ʃən/", discipline: "Computer Science", meaning: "The process of transforming ciphertext into readable plaintext using a cryptographic key.", example: "Hardware cryptographic accelerators perform AES-256 decryption at wire-speed on enterprise firewalls." },
    { word: "Differential", pronunciation: "/ˌdɪf.əˈren.ʃəl/", discipline: "Mechanical", meaning: "A gear train with three drive shafts that can allocate torque and allow outer drive wheels to rotate faster than inner wheels during turns.", example: "A limited-slip differential automatically distributes tractive torque to the drive wheel with maximum grip." },
    { word: "Demodulation", pronunciation: "/diːˌmɒd.jʊˈleɪ.ʃən/", discipline: "Electrical", meaning: "The process of extracting the original information-bearing signal from a modulated carrier wave.", example: "Quadrature amplitude demodulation decodes high-order digital constellations into binary data streams." },
    { word: "Database", pronunciation: "/ˈdeɪ.tə.beɪs/", discipline: "Computer Science", meaning: "An organized collection of data stored and accessed electronically from a computer system.", example: "Relational database management systems (RDBMS) enforce ACID compliance for mission-critical financial transactions." },
    { word: "Distortion", pronunciation: "/dɪˈstɔː.ʃən/", discipline: "Electrical", meaning: "The alteration of the original shape of an audio or electronic signal waveform.", example: "Total Harmonic Distortion (THD) is a critical performance figure of merit in high-fidelity audio amplifiers." }
  ],

  E: [
    { word: "Entropy", pronunciation: "/ˈen.trə.pi/", discipline: "Physics", meaning: "A thermodynamic quantity representing the unavailability of a system's thermal energy for conversion into mechanical work, or a measure of disorder.", example: "The Second Law of Thermodynamics states that the total entropy of an isolated system always increases over time." },
    { word: "Encryption", pronunciation: "/ɪnˈkrɪp.ʃən/", discipline: "Computer Science", meaning: "The cryptographic process of encoding information so only authorized parties can access it.", example: "End-to-end encryption utilizes AES-GCM to protect sensitive biometric payloads during transit." },
    { word: "Elasticity", pronunciation: "/ˌiː.læsˈtɪs.ə.ti/", discipline: "Materials Science", meaning: "The ability of a deformed material body to return to its original shape and size when the forces causing the deformation are removed.", example: "Hooke's law defines linear elasticity within the proportional limit where stress is directly proportional to strain." },
    { word: "Electrolyte", pronunciation: "/iˈlek.trə.laɪt/", discipline: "Electrical", meaning: "A medium containing ions that is electrically conducting through the movement of those ions, essential in batteries.", example: "Solid-state lithium-metal batteries utilize ceramic electrolytes to enhance energy density and thermal safety." },
    { word: "Ethernet", pronunciation: "/ˈiː.θə.net/", discipline: "Computer Science", meaning: "A family of wired computer networking technologies commonly used in local area networks (LAN).", example: "100 Gigabit Ethernet (IEEE 802.3ck) utilizes PAM4 signaling over twisted pair and optical links." },
    { word: "Equilibrium", pronunciation: "/ˌek.wɪˈlɪb.ri.əm/", discipline: "Physics", meaning: "A state in which opposing forces or influences are balanced such that net force and net torque equal zero.", example: "Static equilibrium calculations are applied to determine internal reaction forces across a steel bridge truss." },
    { word: "Emulation", pronunciation: "/ˌem.jʊˈleɪ.ʃən/", discipline: "Computer Science", meaning: "Hardware or software that enables one computer system to behave like another computer system.", example: "QEMU provides full-system emulation to run ARM operating system binaries on x86-64 host servers." },
    { word: "Enthalpy", pronunciation: "/ˈen.θəl.pi/", discipline: "Mechanical", meaning: "A thermodynamic quantity equivalent to the total heat content of a system (H = U + PV).", example: "Rankine cycle steam turbine efficiency calculations evaluate enthalpy drops across high-pressure stages." },
    { word: "Eigenvalue", pronunciation: "/ˈaɪ.ɡənˌvæl.juː/", discipline: "Computer Science", meaning: "A special set of scalar values associated with a linear system of matrix equations (Av = λv).", example: "Principal Component Analysis (PCA) computes the eigenvalues of data covariance matrices for dimensionality reduction." },
    { word: "Extrusion", pronunciation: "/ɪkˈstruː.ʒən/", discipline: "Mechanical", meaning: "A manufacturing process used to create objects of a fixed cross-sectional profile by pushing material through a die.", example: "Direct aluminum extrusion is used to fabricate lightweight structural heat sinks and aerospace chassis rails." }
  ],

  F: [
    { word: "Feedback", pronunciation: "/ˈfiːd.bæk/", discipline: "Electrical", meaning: "The process in which the output of a system is circled back and used as an input in control loops.", example: "Negative feedback in operational amplifier circuits stabilizes gain and minimizes nonlinear harmonic distortion." },
    { word: "Friction", pronunciation: "/ˈfrɪk.ʃən/", discipline: "Mechanical", meaning: "The force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other.", example: "Hydrodynamic journal bearings establish an oil film to drastically reduce the coefficient of sliding friction." },
    { word: "Firmware", pronunciation: "/ˈfɜːm.weər/", discipline: "Computer Science", meaning: "A specific class of low-level computer software that provides the basic machine control for hardware.", example: "UEFI firmware initializes CPU registers and DRAM controllers before bootstrapping the operating system kernel." },
    { word: "Fluid", pronunciation: "/ˈfluː.ɪd/", discipline: "Physics", meaning: "A substance that has no fixed shape and yields easily to external pressure; a gas or a liquid.", example: "Navier-Stokes differential equations govern the viscous flow and pressure gradients of incompressible fluids." },
    { word: "Frequency", pronunciation: "/ˈfriː.kwən.si/", discipline: "Electrical", meaning: "The number of occurrences of a repeating event per unit of time, measured in Hertz (Hz).", example: "Phase-locked loop (PLL) frequency synthesizers generate the multi-gigahertz clock signals powering CPU cores." },
    { word: "Fatigue", pronunciation: "/fəˈtiːɡ/", discipline: "Materials Science", meaning: "The progressive and localized structural damage that occurs when a material is subjected to cyclic loading.", example: "Aircraft aluminum airframes undergo rigorous non-destructive ultrasonic testing to detect microscopic fatigue cracks." },
    { word: "Framework", pronunciation: "/ˈfreɪm.wɜːk/", discipline: "Computer Science", meaning: "A standardized set of concepts, practices, and criteria for solving common technical programming tasks.", example: "PyTorch is an open-source deep learning framework used for accelerated tensor computing and neural network training." },
    { word: "Flux", pronunciation: "/flʌks/", discipline: "Electrical", meaning: "The rate of transfer of fluid, particles, or energy across a given surface area, such as magnetic flux (Φ).", example: "Faraday's Law dictates that a time-varying magnetic flux through a conductor loop induces an electromotive force (EMF)." },
    { word: "Frontend", pronunciation: "/ˈfrʌnt.end/", discipline: "Computer Science", meaning: "The presentation layer of an application directly responsible for client-side user interface rendering and interaction.", example: "Modern frontend web architectures utilize reactive virtual DOM state machines for sub-millisecond page updates." },
    { word: "Fracture", pronunciation: "/ˈfræk.tʃər/", discipline: "Materials Science", meaning: "The separation of an object or material into two or more pieces under the action of stress.", example: "Charpy V-notch impact testing measures the ductile-to-brittle fracture transition temperature of structural steels." }
  ],

  G: [
    { word: "Gateway", pronunciation: "/ˈɡeɪt.weɪ/", discipline: "Computer Science", meaning: "A network node that connects two different networks using different protocols, acting as an entry and exit point.", example: "API gateways route microservice traffic, enforce rate limits, and terminate SSL handshakes at the edge." },
    { word: "Gearbox", pronunciation: "/ˈɡɪə.bɒks/", discipline: "Mechanical", meaning: "A mechanical system of gears contained in a housing by which power is transmitted from an engine to an axle.", example: "Epicyclic planetary gearboxes provide high reduction ratios and compact torque density in electric vehicles." },
    { word: "Generator", pronunciation: "/ˈdʒen.ər.eɪ.tər/", discipline: "Electrical", meaning: "A machine that converts mechanical energy into electrical energy by electromagnetic induction.", example: "Three-phase synchronous generators in hydroelectric dams deliver alternating current directly to the power grid." },
    { word: "Gradient", pronunciation: "/ˈɡreɪ.di.ənt/", discipline: "Computer Science", meaning: "A vector of partial derivatives pointing in the direction of the greatest rate of increase of a scalar field.", example: "Gradient descent iteratively adjusts weight parameters toward the local minimum of a machine learning loss function." },
    { word: "Gyroscope", pronunciation: "/ˈdʒaɪ.rə.skəʊp/", discipline: "Robotics", meaning: "A sensor or device used for measuring or maintaining orientation and angular velocity based on angular momentum.", example: "Three-axis MEMS gyroscopes provide real-time yaw, pitch, and roll telemetry for drone flight stabilization." },
    { word: "Grid", pronunciation: "/ɡrɪd/", discipline: "Electrical", meaning: "An interconnected network for delivering electricity from producers to consumers across broad geographic regions.", example: "Smart grid infrastructure utilizes real-time phasor measurement units (PMUs) to balance dynamic load variations." },
    { word: "Grounding", pronunciation: "/ˈɡraʊn.dɪŋ/", discipline: "Electrical", meaning: "A direct electrical connection of a circuit to the earth or to a common conductor serving as zero volt reference.", example: "Star grounding topologies prevent ground loop noise from coupling into sensitive high-gain instrumentation amplifiers." },
    { word: "Graph", pronunciation: "/ɡrɑːf/", discipline: "Computer Science", meaning: "A non-linear data structure consisting of nodes (vertices) and the connections (edges) between them.", example: "Graph traversal algorithms like Breadth-First Search (BFS) are applied in social network recommendation engines." },
    { word: "Gasket", pronunciation: "/ˈɡæs.kɪt/", discipline: "Mechanical", meaning: "A mechanical seal that fills the space between two or more mating surfaces to prevent leakage of fluids.", example: "Multi-layer steel cylinder head gaskets withstand extreme combustion peak pressures and thermal cycles." },
    { word: "Galvanize", pronunciation: "/ˈɡæl.və.naɪz/", discipline: "Materials Science", meaning: "To coat iron or steel with a protective layer of sacrificial zinc to prevent rusting and atmospheric oxidation.", example: "Hot-dip galvanized structural steel beams are specified for marine civil infrastructure and bridges." }
  ],

  H: [
    { word: "Hardware", pronunciation: "/ˈhɑːd.weər/", discipline: "Computer Science", meaning: "The physical, electronic, and mechanical components of an information processing system.", example: "Custom ASIC hardware accelerators deliver 100x efficiency gains over general-purpose CPUs for matrix multiplication." },
    { word: "Hydraulics", pronunciation: "/haɪˈdrɔː.lɪks/", discipline: "Mechanical", meaning: "A technology and applied science using fluid mechanics to transmit power and motion via pressurized liquids.", example: "Pascal's principle governs hydraulic heavy machinery, multiplying actuator output force through fluid displacement." },
    { word: "Heuristic", pronunciation: "/hjʊəˈrɪs.tɪk/", discipline: "Computer Science", meaning: "A practical problem-solving technique or rule of thumb that is not guaranteed to be optimal but is sufficient for immediate goals.", example: "The A* pathfinding algorithm incorporates an Euclidean distance heuristic to accelerate graph search." },
    { word: "Harmonic", pronunciation: "/hɑːˈmɒn.ɪk/", discipline: "Electrical", meaning: "A wave whose frequency is an integral multiple of the fundamental frequency of a reference signal.", example: "Active power factor correction filters out harmonic distortion generated by non-linear switched-mode power supplies." },
    { word: "Hashing", pronunciation: "/ˈhæʃ.ɪŋ/", discipline: "Computer Science", meaning: "The transformation of a string of characters into a fixed-length value or key using a mathematical function.", example: "Cryptographic SHA-256 hashing produces a 256-bit digest used to verify message integrity and blockchain blocks." },
    { word: "Heatmap", pronunciation: "/ˈhiːt.mæp/", discipline: "Computer Science", meaning: "A data visualization technique that represents values of a matrix as colors along a continuous spectrum.", example: "Thermal imaging heatmaps pinpoint hot spots on printed circuit boards during high-power stress testing." },
    { word: "Hydrodynamics", pronunciation: "/ˌhaɪ.drəʊ.daɪˈnæm.ɪks/", discipline: "Physics", meaning: "The branch of science concerned with forces acting upon or exerted by liquids in motion.", example: "Naval architects optimize submarine hull geometries using hydrodynamics simulations to minimize turbulent boundary wake." },
    { word: "Harness", pronunciation: "/ˈhɑː.nəs/", discipline: "Electrical", meaning: "An assembly of electrical cables or wires bound together to transmit signals or electrical power.", example: "Automotive wiring harnesses are shielded and color-coded to simplify assembly and reduce electromagnetic interference." },
    { word: "Holography", pronunciation: "/hɒlˈɒɡ.rə.fi/", discipline: "Physics", meaning: "A photographic technique that records the light scattered from an object and displays it as a three-dimensional image.", example: "Laser optical holography is employed in non-destructive testing to detect sub-surface stress cracks in composite materials." },
    { word: "Hybrid", pronunciation: "/ˈhaɪ.brɪd/", discipline: "Mechanical", meaning: "A system combining two or more distinct technologies or energy sources to achieve optimal performance.", example: "Plug-in hybrid electric vehicles seamlessly integrate internal combustion engines with high-voltage battery powertrains." }
  ],

  I: [
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", discipline: "Electrical", meaning: "The total opposition that a circuit presents to the flow of alternating current (AC) at a given frequency (Z = R + jX).", example: "RF transmission lines require 50-ohm characteristic impedance matching to eliminate power reflections and VSWR losses." },
    { word: "Inductor", pronunciation: "/ɪnˈdʌk.tər/", discipline: "Electrical", meaning: "A passive two-terminal electrical component that stores energy in a magnetic field when electric current flows through it.", example: "Ferrite core inductors in buck converters store and discharge magnetic energy to step down DC voltage efficiently." },
    { word: "Interface", pronunciation: "/ˈɪn.tə.feɪs/", discipline: "Computer Science", meaning: "A shared boundary across which two or more separate components of a computer system exchange information.", example: "RESTful JSON APIs and gRPC interfaces standardize communications between distributed microservices." },
    { word: "Iteration", pronunciation: "/ˌɪt.ərˈeɪ.ʃən/", discipline: "Computer Science", meaning: "The repetition of a computational process in order to generate a sequence of outcomes or approach a desired goal.", example: "Newton-Raphson iteration computes accurate square roots and non-linear roots within microsecond execution budgets." },
    { word: "Inertia", pronunciation: "/ɪˈnɜː.ʃə/", discipline: "Physics", meaning: "The tendency of an object to resist changes in its state of motion (proportional to mass, or rotational moment of inertia I).", example: "Heavy steel flywheels utilize rotational inertia to smooth out power pulses delivered by reciprocating engines." },
    { word: "Insulation", pronunciation: "/ˌɪn.sjəˈleɪ.ʃən/", discipline: "Electrical", meaning: "A material or method that impedes the transmission of heat, electricity, or sound through a barrier.", example: "Cross-linked polyethylene (XLPE) provides high-dielectric electrical insulation for underground high-voltage cables." },
    { word: "Impulse", pronunciation: "/ˈɪm.pʌls/", discipline: "Physics", meaning: "The integral of a force over the time interval for which it acts, resulting in a change in linear momentum (J = ∫F dt).", example: "Rocket motor specific impulse (Isp) measures propellant efficiency and total thrust delivered per unit weight of fuel." },
    { word: "Inheritance", pronunciation: "/ɪnˈher.ɪ.təns/", discipline: "Computer Science", meaning: "A mechanism in object-oriented programming where a new class is derived from an existing class, inheriting its fields and methods.", example: "Class inheritance promotes reusable design patterns while polymorphism allows derived classes to override base methods." },
    { word: "Infrastructure", pronunciation: "/ˈɪn.frəˌstrʌk.tʃər/", discipline: "Civil", meaning: "The fundamental physical and organizational structures and facilities needed for the operation of a society or enterprise.", example: "Civil engineers model water treatment pipelines, transit bridges, and power distribution infrastructure with BIM software." },
    { word: "Injection", pronunciation: "/ɪnˈdʒek.ʃən/", discipline: "Mechanical", meaning: "The forced introduction of a substance into a cavity or chamber under pressure, such as fuel injection or plastic molding.", example: "Common-rail electronic fuel injection atomizes diesel fuel at pressures exceeding 2,500 bar for optimal thermal efficiency." }
  ],

  J: [
    { word: "Jitter", pronunciation: "/ˈdʒɪt.ər/", discipline: "Electrical", meaning: "The undesirable deviation from true periodicity of an assumed periodic signal in telecommunications and digital clocks.", example: "Phase jitter on the master crystal oscillator causes timing margin degradation in high-speed serializer/deserializer links." },
    { word: "Joule", pronunciation: "/dʒuːl/", discipline: "Physics", meaning: "The SI unit of work or energy, equal to the work done by a force of one newton when its point of application moves one meter.", example: "Supercapacitors store electrical potential energy measured in Joules (E = 0.5 * C * V^2)." },
    { word: "Junction", pronunciation: "/ˈdʒʌŋk.ʃən/", discipline: "Electrical", meaning: "A point where two or more conductors meet in a circuit, or the boundary between p-type and n-type semiconductor regions.", example: "Photons absorbed near a semiconductor P-N junction generate electron-hole pairs that produce photovoltaic current." },
    { word: "Joint", pronunciation: "/dʒɔɪnt/", discipline: "Civil", meaning: "A connection between two or more structural components or mechanical links.", example: "Welded gusset plate joints transfer shear and axial forces across heavy steel building trusses." },
    { word: "JavaScript", pronunciation: "/ˈdʒɑː.və.skrɪpt/", discipline: "Computer Science", meaning: "A dynamic, high-level, interpreted programming language conforming to the ECMAScript specification.", example: "V8 engine JIT compilation executes asynchronous JavaScript at near-native performance inside modern browsers." },
    { word: "Jet", pronunciation: "/dʒet/", discipline: "Mechanical", meaning: "A rapid stream of liquid or gas forced out through a narrow opening or nozzle.", example: "Abrasive water jet cutters expel water at 60,000 PSI mixed with garnet grit to slice through titanium plates." },
    { word: "Journal", pronunciation: "/ˈdʒɜː.nəl/", discipline: "Mechanical", meaning: "The part of a rotating shaft or axle that turns in a bearing.", example: "Pressurized lubrication oil is pumped continuously into the journal bearing to eliminate metal-to-metal contact." },
    { word: "Jumper", pronunciation: "/ˈdʒʌm.pər/", discipline: "Electrical", meaning: "A short length of conductor used to close, open, or configure an electrical circuit on a printed circuit board.", example: "Configuration jumpers allow technicians to select I2C address offsets on embedded microcontroller breakout boards." },
    { word: "JSON", pronunciation: "/ˈdʒeɪ.sən/", discipline: "Computer Science", meaning: "JavaScript Object Notation; a lightweight, human-readable text-based data-interchange format.", example: "Microservice backends exchange structured configuration payloads over HTTPS serialized in JSON format." },
    { word: "Justification", pronunciation: "/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/", discipline: "Civil", meaning: "The technical, economic, and safety rationale demonstrated during engineering feasibility studies.", example: "The structural engineer submitted finite element modeling reports to provide formal justification for the design." }
  ],

  K: [
    { word: "Kinematics", pronunciation: "/ˌkɪn.əˈmæt.ɪks/", discipline: "Mechanical", meaning: "The branch of classical mechanics that describes the motion of points, bodies, and systems of bodies without considering forces.", example: "Inverse kinematics algorithms calculate the required joint actuator angles to position a robotic gripper in 3D space." },
    { word: "Kernel", pronunciation: "/ˈkɜː.nəl/", discipline: "Computer Science", meaning: "The core computer program that constitutes the central module of an operating system, managing CPU, memory, and devices.", example: "The Linux monolithic kernel executes interrupt handlers, virtual memory paging, and process thread scheduling." },
    { word: "Kilowatt", pronunciation: "/ˈkɪl.ə.wɒt/", discipline: "Electrical", meaning: "A unit of electrical power equal to 1,000 watts (1 kW = 1,000 J/s).", example: "The DC fast charging station delivers 350 kilowatts of continuous power to recharge electric vehicle battery packs." },
    { word: "Kinetic", pronunciation: "/kɪˈnet.ɪk/", discipline: "Physics", meaning: "Relating to or resulting from the motion of physical bodies (Kinetic Energy Ek = 0.5 * m * v^2).", example: "Regenerative braking systems recover kinetic energy from deceleration and store it as chemical energy in batteries." },
    { word: "Karnaugh", pronunciation: "/ˈkɑː.nɔː/", discipline: "Electrical", meaning: "A visual method used in digital electronics to simplify Boolean algebra expressions without algebraic manipulation.", example: "Engineers utilize 4-variable Karnaugh maps (K-maps) to group adjacent binary terms and minimize logic gate counts." },
    { word: "Kalman", pronunciation: "/ˈkæl.mən/", discipline: "Robotics", meaning: "An optimal estimation algorithm that estimates unknown variables given measurements observed over time containing statistical noise.", example: "Extended Kalman filters fuse accelerometer, gyroscope, and GPS data for real-time spacecraft trajectory tracking." },
    { word: "K-Means", pronunciation: "/ˈkeɪ.miːnz/", discipline: "Computer Science", meaning: "An unsupervised clustering algorithm that partitions n observations into k clusters based on nearest mean centroid.", example: "The machine learning pipeline applies K-means clustering to segment customer sensor profiles into operational clusters." },
    { word: "Kirchhoff", pronunciation: "/ˈkɪərk.hɒf/", discipline: "Electrical", meaning: "Fundamental circuit laws governing the conservation of charge (KCL) and energy (KVL) in electrical networks.", example: "Applying Kirchhoff's Voltage Law (KVL) proves that the directed sum of potential differences around any closed loop is zero." },
    { word: "Keyframe", pronunciation: "/ˈkiː.freɪm/", discipline: "Computer Science", meaning: "A drawing or recorded point that defines the starting and ending points of any smooth transition or digital video sequence.", example: "Hardware video encoders insert periodic IDR keyframes to allow random-access decoding and seek capabilities." },
    { word: "Knot", pronunciation: "/nɒt/", discipline: "Physics", meaning: "A unit of speed equal to one nautical mile per hour, approximately 1.852 km/h or 1.151 mph.", example: "The maritime radar system tracked the container ship cruising at a steady velocity of twenty-two knots." }
  ],

  L: [
    { word: "Latency", pronunciation: "/ˈleɪ.tən.si/", discipline: "Computer Science", meaning: "The time elapsed between the cause and the effect of some physical change in the system being observed; delay.", example: "Edge computing nodes reduce round-trip network latency to under 5 milliseconds for mission-critical industrial robotics." },
    { word: "Logic", pronunciation: "/ˈlɒdʒ.ɪk/", discipline: "Computer Science", meaning: "The principles of reasoning and mathematical operations underlying digital electronic circuits and programming.", example: "Field Programmable Gate Arrays (FPGAs) contain millions of configurable logic blocks (CLBs) for custom hardware logic." },
    { word: "Laser", pronunciation: "/ˈleɪ.zər/", discipline: "Physics", meaning: "A device that generates an intense beam of coherent, monochromatic electromagnetic radiation by stimulated emission.", example: "Fiber laser cutting machines focus high-density coherent photon beams to cut stainless steel plates with micron precision." },
    { word: "Lubrication", pronunciation: "/ˌluː.brɪˈkeɪ.ʃən/", discipline: "Mechanical", meaning: "The application of a friction-reducing substance between moving surfaces in contact.", example: "Synthetic polyalphaolefin oil provides superior hydrodynamic lubrication across extreme engine operating temperatures." },
    { word: "Linux", pronunciation: "/ˈlɪn.əks/", discipline: "Computer Science", meaning: "An open-source, Unix-like operating system kernel originally developed by Linus Torvalds in 1991.", example: "Over 90% of the world's cloud computing infrastructure and supercomputers execute on Linux distributions." },
    { word: "Luminescence", pronunciation: "/ˌluː.mɪˈnes.əns/", discipline: "Physics", meaning: "The emission of light by a substance not resulting from heat; cold light produced by chemical, electrical, or subatomic actions.", example: "Organic light-emitting diodes (OLED) utilize electro-luminescence across organic thin-film semiconductor layers." },
    { word: "Loadcell", pronunciation: "/ˈləʊd.sel/", discipline: "Electrical", meaning: "A transducer that converts mechanical force or weight into an electrical signal using bonded resistive strain gauges.", example: "Industrial digital scales utilize four-wire Wheatstone bridge load cells to measure component weights with high repeatability." },
    { word: "Lever", pronunciation: "/ˈliː.vər/", discipline: "Mechanical", meaning: "A simple machine consisting of a rigid beam pivoted at a fixed hinge, or fulcrum, to multiply mechanical force.", example: "Archimedes' law of the lever demonstrates how mechanical advantage scales proportionally with effort arm length." },
    { word: "Lithium", pronunciation: "/ˈlɪθ.i.əm/", discipline: "Materials Science", meaning: "A soft, silvery-white alkali metal with the lowest atomic mass of all solid elements, central to modern batteries.", example: "Lithium iron phosphate (LiFePO4) cathode chemistries offer high thermal stability and multi-thousand charge cycles." },
    { word: "Loop", pronunciation: "/luːp/", discipline: "Computer Science", meaning: "A programming sequence of instructions that is continually repeated until a specific logical condition is met.", example: "Vectorized SIMD loop unrolling instructs CPU registers to process eight 32-bit floating point numbers per clock cycle." }
  ],

  M: [
    { word: "Microcontroller", pronunciation: "/ˌmaɪ.krəʊ.kənˈtrəʊ.lər/", discipline: "Electrical", meaning: "A compact integrated circuit designed to govern a specific operation in an embedded system, containing CPU, memory, and I/O.", example: "The 32-bit ARM Cortex-M4 microcontroller executes real-time digital signal processing algorithms on sensor telemetry." },
    { word: "Modulation", pronunciation: "/ˌmɒd.jʊˈleɪ.ʃən/", discipline: "Electrical", meaning: "The process of varying one or more properties of a periodic waveform (carrier signal) with an information-bearing modulating signal.", example: "Quadrature Amplitude Modulation (QAM-1024) encodes multiple bits per symbol to maximize spectral transmission density." },
    { word: "Multithreading", pronunciation: "/ˌmʌl.tiˈθred.ɪŋ/", discipline: "Computer Science", meaning: "The ability of a central processing unit or a single core to execute multiple processes or threads concurrently.", example: "Simultaneous multithreading (SMT) duplicates architectural register state to maximize superscalar pipeline utilization." },
    { word: "Metallurgy", pronunciation: "/məˈtæl.ə.dʒi/", discipline: "Materials Science", meaning: "The branch of science and technology concerned with the properties of metals and their production and purification.", example: "Powder metallurgy enables the sintering of high-strength net-shape components from tungsten carbide alloys." },
    { word: "Momentum", pronunciation: "/məˈmen.təm/", discipline: "Physics", meaning: "The quantity of motion of a moving body, measured as a product of its mass and velocity (p = mv).", example: "The law of conservation of linear momentum applies during elastic collision analyses between autonomous vehicles." },
    { word: "Middleware", pronunciation: "/ˈmɪd.əl.weər/", discipline: "Computer Science", meaning: "Software that lies between an operating system and the applications running on it, enabling distributed communication.", example: "Message-oriented middleware (RabbitMQ, Apache Kafka) decouples asynchronous microservice event streams." },
    { word: "Magnetism", pronunciation: "/ˈmæɡ.nə.tɪ.zəm/", discipline: "Physics", meaning: "A class of physical phenomena that are mediated by magnetic fields produced by electric currents and magnetic moments.", example: "Neodymium rare-earth permanent magnets produce intense magnetic flux densities inside high-efficiency electric motors." },
    { word: "Mesh", pronunciation: "/meʃ/", discipline: "Computer Science", meaning: "A network topology in which infrastructure nodes connect directly, dynamically and non-hierarchically to as many other nodes as possible.", example: "Wireless Zigbee mesh networks route sensor packets dynamically across multiple hops in smart factory floors." },
    { word: "Matrix", pronunciation: "/ˈmeɪ.trɪks/", discipline: "Computer Science", meaning: "A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.", example: "Graphics processing units (GPUs) leverage specialized Tensor Cores to perform 4x4 matrix multiply-accumulate operations in a single cycle." },
    { word: "Machining", pronunciation: "/məˈʃiː.nɪŋ/", discipline: "Mechanical", meaning: "Any manufacturing process in which a piece of raw material is cut into a desired final shape by a controlled material-removal process.", example: "5-axis CNC machining centers mill complex impellers and turbine blades with surface tolerances under 5 microns." }
  ],

  N: [
    { word: "Network", pronunciation: "/ˈnet.wɜːk/", discipline: "Computer Science", meaning: "A group of interconnected computing devices that share resources and exchange data using standardized protocols.", example: "The OSI seven-layer reference model standardizes network communications from physical transceivers to application protocols." },
    { word: "Node", pronunciation: "/nəʊd/", discipline: "Computer Science", meaning: "A basic unit of a data structure, or a connection point/device in a telecommunication network.", example: "Distributed blockchain consensus requires two-thirds of validator nodes to sign each state transition block." },
    { word: "Nanotechnology", pronunciation: "/ˌnæn.əʊ.tekˈnɒl.ə.dʒi/", discipline: "Materials Science", meaning: "The branch of technology that deals with dimensions and tolerances of less than 100 nanometers, manipulation of individual atoms.", example: "Modern 3nm FinFET semiconductor lithography utilizes extreme ultraviolet (EUV) light to pattern nanoscale transistors." },
    { word: "Normalization", pronunciation: "/ˌnɔː.məl.aɪˈzeɪ.ʃən/", discipline: "Computer Science", meaning: "The process of structuring a database or scaling feature vectors into a standardized range to optimize algorithms.", example: "Batch normalization layers in deep neural networks prevent vanishing gradients and accelerate training convergence." },
    { word: "Nyquist", pronunciation: "/ˈnaɪ.kwɪst/", discipline: "Electrical", meaning: "A fundamental theorem stating that continuous signals must be sampled at at least twice their highest frequency component to avoid aliasing.", example: "Audio engineers sample 20 kHz human hearing signals at a Nyquist rate of 44.1 kHz on digital compact discs." },
    { word: "Nozzle", pronunciation: "/ˈnɒz.əl/", discipline: "Mechanical", meaning: "A device designed to control the direction or characteristics of a fluid flow (especially to increase velocity) as it exits an enclosed chamber.", example: "Convergent-divergent de Laval rocket nozzles accelerate supersonic combustion exhaust gases to maximize thrust." },
    { word: "Null", pronunciation: "/nʌl/", discipline: "Computer Science", meaning: "A special value representing the absence of an assigned value or an uninitialized memory pointer.", example: "Modern type-safe languages like Rust prevent null pointer dereference runtime panics at compile time." },
    { word: "Newton", pronunciation: "/ˈnjuː.tən/", discipline: "Physics", meaning: "The SI unit of force, equal to the force that would give a mass of one kilogram an acceleration of one meter per second squared (N = kg·m/s²).", example: "Tension sensors calibrated in newtons measure dynamic tow-cable loads during maritime salvage operations." },
    { word: "Navigation", pronunciation: "/ˌnæv.ɪˈɡeɪ.ʃən/", discipline: "Robotics", meaning: "The science or art of determining the position, course, and distance traveled of a vehicle or robot.", example: "Simultaneous Localization and Mapping (SLAM) algorithms enable autonomous mobile robots to navigate without GPS." },
    { word: "Nucleation", pronunciation: "/ˌnjuː.kliˈeɪ.ʃən/", discipline: "Materials Science", meaning: "The initial process that occurs in the formation of a crystal from a solution, liquid, or vapor.", example: "Controlling grain boundary nucleation during molten alloy solidification enhances the tensile yield strength of superalloys." }
  ],

  O: [
    { word: "Optimization", pronunciation: "/ˌɒp.tɪ.maɪˈzeɪ.ʃən/", discipline: "Computer Science", meaning: "The mathematical process of finding the best solution, parameters, or efficiency from a set of available alternatives.", example: "Constrained quadratic programming optimization algorithms calculate optimal power load dispatch across national energy grids." },
    { word: "Oscillator", pronunciation: "/ˈɒs.ɪ.leɪ.tər/", discipline: "Electrical", meaning: "An electronic circuit that produces a continuous, repeated, alternating waveform without any external input.", example: "Temperature-compensated crystal oscillators (TCXO) provide ultrastable reference clocks for GPS synchronization." },
    { word: "Overclock", pronunciation: "/ˌəʊ.vəˈklɒk/", discipline: "Computer Science", meaning: "To configure a computer component to run at a higher clock rate than the manufacturer intended.", example: "Liquid nitrogen cooling systems enable extreme overclocking of microprocessors by preventing thermal throttling." },
    { word: "Ontology", pronunciation: "/ɒnˈtɒl.ə.dʒi/", discipline: "Computer Science", meaning: "A formal naming and definition of the types, properties, and interrelationships of the entities that exist in a domain of discourse.", example: "Semantic Web knowledge graphs utilize OWL ontologies to facilitate automated machine reasoning and entity linking." },
    { word: "Orthogonal", pronunciation: "/ɔːˈθɒɡ.ən.əl/", discipline: "Mathematics", meaning: "Involving right angles; statistically independent or mutually perpendicular in vector spaces.", example: "Orthogonal Frequency Division Multiplexing (OFDM) spaces subcarriers so they do not cause inter-carrier interference." },
    { word: "Overfitting", pronunciation: "/ˌəʊ.vəˈfɪt.ɪŋ/", discipline: "Computer Science", meaning: "A modeling error in machine learning that occurs when a function is too closely fit to a limited set of data points.", example: "Dropout regularization and L2 weight decay penalties prevent deep neural networks from overfitting training datasets." },
    { word: "Optics", pronunciation: "/ˈɒp.tɪks/", discipline: "Physics", meaning: "The branch of physics that studies the behavior and properties of light, including its interactions with matter.", example: "Diffraction-limited optical lens assemblies focus laser beams onto silicon wafers in photolithography scanners." },
    { word: "Osmosis", pronunciation: "/ɒzˈməʊ.sɪs/", discipline: "Chemical", meaning: "The spontaneous net movement or diffusion of solvent molecules through a selectively permeable membrane.", example: "Reverse osmosis desalination plants apply high hydrostatic pressure to extract pure potable water from seawater." },
    { word: "Output", pronunciation: "/ˈaʊt.pʊt/", discipline: "Computer Science", meaning: "The data produced by a computer system, process, or electronic transducer after processing.", example: "The DAC module converts processed 24-bit digital audio output streams into analog line-level voltage." },
    { word: "Ohm", pronunciation: "/əʊm/", discipline: "Electrical", meaning: "The SI unit of electrical resistance, equal to the resistance between two points of a conductor when a constant potential difference of one volt produces one ampere.", example: "Ohm's Law (V = I * R) defines the fundamental relationship between voltage, current, and electrical resistance." }
  ],

  P: [
    { word: "Processor", pronunciation: "/ˈprəʊ.ses.ər/", discipline: "Computer Science", meaning: "The electronic circuitry that executes instructions comprising a computer program (Central Processing Unit).", example: "Heterogeneous multi-core processors combine high-performance cores with power-efficient cores to maximize battery life." },
    { word: "Protocol", pronunciation: "/ˈprəʊ.tə.kɒl/", discipline: "Computer Science", meaning: "A system of digital rules that allow two or more entities of a communications system to transmit information.", example: "The Transmission Control Protocol (TCP) guarantees reliable, in-order packet delivery using acknowledgments and windowing." },
    { word: "Piezoelectric", pronunciation: "/paɪˌeɪ.zəʊ.ɪˈlek.trɪk/", discipline: "Electrical", meaning: "The electric charge that accumulates in certain solid materials in response to applied mechanical stress.", example: "Piezoelectric lead zirconate titanate (PZT) actuators deliver sub-nanometer positional control in scanning tunneling microscopes." },
    { word: "Pneumatics", pronunciation: "/njuːˈmæt.ɪks/", discipline: "Mechanical", meaning: "A branch of engineering that makes use of gas or pressurized air to generate linear and rotary motion.", example: "Factory automated sorting lines deploy high-speed pneumatic cylinders to eject defective packages." },
    { word: "Polymorphism", pronunciation: "/ˌpɒl.iˈmɔː.fɪ.zəm/", discipline: "Computer Science", meaning: "The provision of a single interface to entities of different data types or implementations.", example: "Runtime polymorphism enables dynamic method dispatch through virtual method tables (vtable) in C++." },
    { word: "Photodiode", pronunciation: "/ˌfəʊ.təʊˈdaɪ.əʊd/", discipline: "Electrical", meaning: "A semiconductor device that converts light photons into an electrical current.", example: "Avalanche photodiodes with internal photoelectric gain are used in long-range LiDAR distance measurement receivers." },
    { word: "Pipeline", pronunciation: "/ˈpaɪp.laɪn/", discipline: "Computer Science", meaning: "A set of data processing elements connected in series, where the output of one element is the input of the next.", example: "Superscalar execution pipelines divide instruction processing into fetch, decode, execute, memory, and writeback stages." },
    { word: "Polymer", pronunciation: "/ˈpɒl.ɪ.mər/", discipline: "Materials Science", meaning: "A substance that has a molecular structure consisting chiefly or entirely of a large number of similar units bonded together.", example: "Carbon-fiber reinforced polymer (CFRP) composites provide exceptional strength-to-weight ratios for aerospace structures." },
    { word: "Potentiometer", pronunciation: "/pəˌten.ʃiˈɒm.ɪ.tər/", discipline: "Electrical", meaning: "A three-terminal resistor with a sliding or rotating contact that forms an adjustable voltage divider.", example: "Rotary potentiometers provide analog angle feedback in analog flight control yoke simulator assemblies." },
    { word: "Pascal", pronunciation: "/pæsˈkæl/", discipline: "Physics", meaning: "The SI unit of pressure, equivalent to one newton per square meter (1 Pa = 1 N/m²).", example: "Hydrostatic testing pressurizes carbon-fiber rocket fuel tanks to over 30 megapascals (MPa) to verify structural integrity." }
  ],

  Q: [
    { word: "Quantum", pronunciation: "/ˈkwɒn.təm/", discipline: "Physics", meaning: "The minimum amount of any physical entity (such as energy or angular momentum) involved in an interaction.", example: "Superconducting quantum computing processors utilize Josephson junction qubits operating at 15 millikelvin temperatures." },
    { word: "Quenching", pronunciation: "/ˈkwentʃ.ɪŋ/", discipline: "Materials Science", meaning: "The rapid cooling of a workpiece in water, oil, or air to obtain specific material properties and microstructures.", example: "Quenching and tempering alloy steel transforms soft austenite into hard martensite with enhanced yield strength." },
    { word: "Query", pronunciation: "/ˈkwɪə.ri/", discipline: "Computer Science", meaning: "A precise request for data retrieval or manipulation from a database or information system.", example: "SQL queries with indexed joins execute in milliseconds across multi-terabyte distributed analytical databases." },
    { word: "Queue", pronunciation: "/kjuː/", discipline: "Computer Science", meaning: "A linear abstract data structure that follows the First-In-First-Out (FIFO) principle for ordering elements.", example: "Operating system I/O schedulers manage priority queues to service disk read requests without starvation." },
    { word: "Quadrature", pronunciation: "/ˈkwɒd.rə.tʃər/", discipline: "Electrical", meaning: "The phase relationship between two periodic quantities when their phase difference is ninety degrees (a quarter of a period).", example: "Quadrature encoders generate two out-of-phase square wave channels to detect motor rotational speed and direction." },
    { word: "Quality", pronunciation: "/ˈkwɒl.ə.ti/", discipline: "Industrial", meaning: "The degree of excellence and conformance to engineering specifications, tolerances, and customer requirements.", example: "Six Sigma quality engineering frameworks reduce industrial manufacturing defects to fewer than 3.4 parts per million." },
    { word: "Quartile", pronunciation: "/ˈkwɔː.taɪl/", discipline: "Mathematics", meaning: "Values that divide a set of ordered data into four equal parts in statistical reliability analysis.", example: "Interquartile range analysis is applied to filter out sensor outlier telemetry in predictive maintenance systems." },
    { word: "Quartz", pronunciation: "/kwɔːts/", discipline: "Materials Science", meaning: "A hard, crystalline mineral composed of silica that exhibits precise piezoelectric resonance properties.", example: "AT-cut quartz crystals vibrate at precise harmonic frequencies to stabilize radio frequency transmitters." },
    { word: "QuickSort", pronunciation: "/ˈkwɪk.sɔːt/", discipline: "Computer Science", meaning: "An efficient divide-and-conquer sorting algorithm with an average computational complexity of O(n log n).", example: "Dual-pivot QuickSort is implemented as the standard primitive array sorting algorithm in modern runtime libraries." },
    { word: "Quorum", pronunciation: "/ˈkwɔː.rəm/", discipline: "Computer Science", meaning: "The minimum number of votes or nodes that a distributed system transaction has to obtain in order to be allowed to perform an operation.", example: "Raft and Paxos consensus protocols mandate a majority quorum to guarantee distributed data consistency during network partitions." }
  ],

  R: [
    { word: "Resistor", pronunciation: "/rɪˈzɪs.tər/", discipline: "Electrical", meaning: "A passive electrical component with two terminals that implements electrical resistance as a circuit element.", example: "Precision metal-film pull-up resistors maintain digital I/O lines at 3.3V logic high when unasserted." },
    { word: "Recursion", pronunciation: "/rɪˈkɜː.ʃən/", discipline: "Computer Science", meaning: "A method of solving computational problems where a function calls itself as a subroutine.", example: "Recursive algorithms naturally traverse hierarchical tree structures, such as DOM trees and abstract syntax trees." },
    { word: "Robotics", pronunciation: "/rəʊˈbɒt.ɪks/", discipline: "Robotics", meaning: "An interdisciplinary branch of computer science and engineering that involves the design, construction, operation, and use of robots.", example: "Industrial 6-axis articulated robotics perform automated high-precision laser welding on automotive chassis lines." },
    { word: "Radiation", pronunciation: "/ˌreɪ.diˈeɪ.ʃən/", discipline: "Physics", meaning: "The emission or transmission of energy in the form of waves or particles through space or through a material medium.", example: "Radiation-hardened semiconductors incorporate silicon-on-insulator (SOI) substrates to withstand deep-space cosmic rays." },
    { word: "Resonance", pronunciation: "/ˈrez.ən.əns/", discipline: "Mechanical", meaning: "A phenomenon in which a dynamic system responds at maximum amplitude to an external driving frequency matching its natural frequency.", example: "Structural engineers calculate natural resonant modal frequencies to ensure bridges do not oscillate under vortex shedding wind forces." },
    { word: "Relay", pronunciation: "/ˈriː.leɪ/", discipline: "Electrical", meaning: "An electrically operated switch utilizing an electromagnet or solid-state optocoupler to control high-power circuits.", example: "Solid-state relays switch high-current three-phase heater loads with zero mechanical contact arcing." },
    { word: "Refactoring", pronunciation: "/ˌriːˈfæk.tər.ɪŋ/", discipline: "Computer Science", meaning: "The process of restructuring existing computer code without changing its external behavior to improve non-functional attributes.", example: "Continuous code refactoring eliminates technical debt and improves software maintainability and unit test coverage." },
    { word: "Rigidity", pronunciation: "/rɪˈdʒɪd.ə.ti/", discipline: "Civil", meaning: "The property of a solid body to resist deformation, deflection, or bending when subjected to external force.", example: "High torsional rigidity in vehicle monocoque chassis structures sharpens suspension response and handling precision." },
    { word: "Router", pronunciation: "/ˈruː.tər/", discipline: "Computer Science", meaning: "A networking device that forwards data packets between computer networks based on IP routing tables.", example: "Core BGP routers direct multi-terabit internet backbone traffic across transoceanic fiber optic links." },
    { word: "Rotor", pronunciation: "/ˈrəʊ.tər/", discipline: "Mechanical", meaning: "The rotating member of an electrical machine, turbine, pump, or helicopter mechanism.", example: "Permanent magnet synchronous motor rotors are balanced dynamically to eliminate high-speed harmonic vibration." }
  ],

  S: [
    { word: "Semiconductor", pronunciation: "/ˌsem.i.kənˈdʌk.tər/", discipline: "Electrical", meaning: "A material whose electrical conductivity lies between that of a conductor and an insulator, enabling electronic switching.", example: "Silicon, Gallium Nitride (GaN), and Silicon Carbide (SiC) are wide-bandgap semiconductors powering electric vehicle inverters." },
    { word: "Synchronous", pronunciation: "/ˈsɪŋ.krə.nəs/", discipline: "Electrical", meaning: "Occurring at the same time or coordinated by a common clock pulse or timing reference signal.", example: "Synchronous dynamic RAM (SDRAM) synchronizes memory address and data bursts with the CPU bus clock." },
    { word: "Stress", pronunciation: "/stres/", discipline: "Civil", meaning: "The internal force per unit area exerted within a material body by adjoining particles (σ = F/A).", example: "Finite element stress analysis calculates von Mises yield stress concentrations surrounding bolt mounting holes." },
    { word: "Strain", pronunciation: "/streɪn/", discipline: "Materials Science", meaning: "The measure of the deformation of a material normalized to its original un-deformed length (ε = ΔL/L).", example: "Bonded foil strain gauges detect micro-strain deformations in aerospace wing spars during high-G flight maneuvers." },
    { word: "Socket", pronunciation: "/ˈsɒk.ɪt/", discipline: "Computer Science", meaning: "An internal endpoint for sending or receiving data between processes over a computer network (IP + Port).", example: "Non-blocking TCP sockets stream real-time financial market price updates with sub-millisecond latencies." },
    { word: "Schema", pronunciation: "/ˈskiː.mə/", discipline: "Computer Science", meaning: "The structural definition and organization of a database system, including tables, columns, data types, and relationships.", example: "PostgreSQL enforces relational database schemas with primary keys, foreign key constraints, and indices." },
    { word: "Solenoid", pronunciation: "/ˈsəʊ.lən.ɔɪd/", discipline: "Electrical", meaning: "A coil of wire that acts as an electromagnet, producing a uniform magnetic field to generate linear actuation motion.", example: "Electromechanical solenoid valves regulate hydraulic transmission fluid pressure in modern automatic gearboxes." },
    { word: "Subnet", pronunciation: "/ˈsʌb.net/", discipline: "Computer Science", meaning: "A logical subdivision of an IP network that groups connected devices into a distinct routing domain.", example: "Virtual Private Cloud (VPC) subnets isolate backend database clusters from public internet ingress." },
    { word: "Superconductor", pronunciation: "/ˌsuː.pə.kənˈdʌk.tər/", discipline: "Physics", meaning: "A material that conducts electricity with exactly zero electrical resistance when cooled below its critical temperature.", example: "Superconducting niobium-titanium electromagnets generate the intense 3-Tesla magnetic fields in MRI medical scanners." },
    { word: "Stator", pronunciation: "/ˈsteɪ.tər/", discipline: "Electrical", meaning: "The stationary portion of an electric generator or motor that contains the stationary electromagnetic field windings.", example: "Copper hairpin stator windings maximize copper fill factors and thermal conduction in electric traction motors." }
  ],

  T: [
    { word: "Transistor", pronunciation: "/trænˈzɪs.tər/", discipline: "Electrical", meaning: "A semiconductor device used to amplify or switch electrical signals and power; the basic building block of modern electronics.", example: "A modern smartphone system-on-chip (SoC) packs over fifteen billion FinFET transistors onto a single silicon die." },
    { word: "Thermodynamics", pronunciation: "/ˌθɜː.məʊ.daɪˈnæm.ɪks/", discipline: "Mechanical", meaning: "The branch of physical science that deals with the relations between heat and other forms of energy (such as mechanical or electrical).", example: "Carnot's theorem defines the maximum theoretical thermodynamic efficiency limit for any heat engine operating between two temperatures." },
    { word: "Torque", pronunciation: "/tɔːk/", discipline: "Mechanical", meaning: "The rotational equivalent of linear force; a measure of the force that can cause an object to rotate about an axis (τ = r × F).", example: "Electric motors deliver maximum instantaneous torque starting at zero RPM, providing rapid vehicle acceleration." },
    { word: "Topology", pronunciation: "/təˈpɒl.ə.dʒi/", discipline: "Computer Science", meaning: "The arrangement of the elements (links, nodes, etc.) of a communication network or mathematical space.", example: "Redundant ring network topologies ensure automatic sub-50ms failover if an industrial fiber link is severed." },
    { word: "Telemetry", pronunciation: "/təˈlem.ə.tri/", discipline: "Robotics", meaning: "The automatic measurement and wireless transmission of data from remote sources to receiving equipment for monitoring.", example: "Rocket telemetry streams thousands of engine pressure, temperature, and attitude channels during orbital launch." },
    { word: "Turbine", pronunciation: "/ˈtɜː.baɪn/", discipline: "Mechanical", meaning: "A rotary mechanical device that extracts energy from a fluid flow and converts it into useful work.", example: "Gas turbine engines utilize multi-stage axial compressors and nickel superalloy turbine blades to generate jet propulsion." },
    { word: "Tensor", pronunciation: "/ˈten.sər/", discipline: "Computer Science", meaning: "A mathematical object that generalizes scalars, vectors, and matrices to an arbitrary number of dimensions.", example: "Deep learning models represent multi-channel image batches as 4-dimensional tensors (Batch × Height × Width × Channels)." },
    { word: "Tensile", pronunciation: "/ˈten.saɪl/", discipline: "Materials Science", meaning: "Relating to tension or the resistance of a material to breaking under longitudinal tension stress.", example: "Ultimate tensile strength (UTS) is measured using universal testing machines pulling standard metal dogbone specimens." },
    { word: "Throttle", pronunciation: "/ˈθrɒt.əl/", discipline: "Mechanical", meaning: "A valve or mechanism that regulates the supply of fuel or working fluid to an engine to control power output.", example: "Electronic drive-by-wire throttle bodies position butterfly valves based on accelerator pedal sensor inputs." },
    { word: "Throughput", pronunciation: "/ˈθruː.pʊt/", discipline: "Computer Science", meaning: "The amount of material, data, or items passing through a system or process per unit time.", example: "High-performance NVMe SSDs deliver sequential data throughput exceeding 14,000 megabytes per second." }
  ],

  U: [
    { word: "Ultrasound", pronunciation: "/ˈʌl.trə.saʊnd/", discipline: "Physics", meaning: "Sound waves with frequencies higher than the upper audible limit of human hearing (greater than 20 kHz).", example: "Phased array ultrasonic testing non-destructively inspects thick welded joints for internal porosity defects." },
    { word: "Unicast", pronunciation: "/ˈjuː.nɪ.kɑːst/", discipline: "Computer Science", meaning: "A one-to-one transmission from one point in the network to another point; a single sender to a single receiver.", example: "Standard TCP HTTP web sessions operate via unicast IP packet routing between client and server." },
    { word: "Ubiquitous", pronunciation: "/juːˈbɪk.wɪ.təs/", discipline: "Computer Science", meaning: "Present, appearing, or found everywhere; in computing, computing capability embedded in everyday objects.", example: "Ubiquitous computing paradigms connect smart sensors, smart meters, and connected vehicles to cloud IoT platforms." },
    { word: "Upstream", pronunciation: "/ˈʌp.striːm/", discipline: "Computer Science", meaning: "The transmission of data from the client to the server, or the source direction in engineering supply chains.", example: "Gigabit symmetrical fiber connections deliver equal downstream and upstream network bandwidth." },
    { word: "Unicode", pronunciation: "/ˈjuː.nɪ.kəʊd/", discipline: "Computer Science", meaning: "An international encoding standard for use with different languages and scripts, assigning a unique numeric code point to every character.", example: "UTF-8 encoding provides backward compatibility with ASCII while encoding all global Unicode characters in variable bytes." },
    { word: "Ultimate", pronunciation: "/ˈʌl.tɪ.mət/", discipline: "Civil", meaning: "The maximum stress that a structure or material can withstand before catastrophic failure.", example: "Structural design codes apply safety factors to ensure working loads remain far below ultimate capacity." },
    { word: "Underflow", pronunciation: "/ˈʌn.də.fləʊ/", discipline: "Computer Science", meaning: "A condition in a computer program where the result of a calculation is a number of smaller absolute value than the computer can actually represent in memory.", example: "IEEE 754 floating point arithmetic handles subnormal numbers to prevent abrupt underflow to zero." },
    { word: "Ultrasonic", pronunciation: "/ˌʌl.trəˈsɒn.ɪk/", discipline: "Robotics", meaning: "Of or involving sound waves with a frequency above the human ear's audible range, used for ranging and sensing.", example: "Ultrasonic sonar sensors measure echo time-of-flight to provide proximity warnings during robotic docking." },
    { word: "Uncertainty", pronunciation: "/ʌnˈsɜː.tən.ti/", discipline: "Physics", meaning: "The estimated amount or percentage by which an observed or calculated value may differ from the true value; or Heisenberg's uncertainty principle (Δx Δp ≥ ℏ/2).", example: "Metrology calibration reports document standard measurement uncertainty using Gaussian error distributions." },
    { word: "Unit", pronunciation: "/ˈjuː.nɪt/", discipline: "Physics", meaning: "An individual standard quantity against which other quantities are measured and compared (SI base units: m, kg, s, A, K, mol, cd).", example: "Dimensional analysis ensures that all terms in engineering equations share consistent physical units." }
  ],

  V: [
    { word: "Voltage", pronunciation: "/ˈvəʊl.tɪdʒ/", discipline: "Electrical", meaning: "An electromotive force or potential difference expressed in volts (V = W/Q).", example: "Switching regulators convert nominal 48V telecom bus voltage down to 1.0V to supply CPU core voltage rails." },
    { word: "Vector", pronunciation: "/ˈvek.tər/", discipline: "Mathematics", meaning: "A geometric entity endowed with both magnitude and direction, represented by an ordered list of components.", example: "Vector cross products calculate rotational torque vectors and magnetic Lorentz forces acting on moving charges." },
    { word: "Viscosity", pronunciation: "/vɪˈskɒs.ə.ti/", discipline: "Mechanical", meaning: "A measure of a fluid's resistance to gradual deformation by shear stress or tensile stress; thickness.", example: "Multi-grade motor oils maintain dynamic viscosity across cold startup and high-temperature operating conditions." },
    { word: "Virtualization", pronunciation: "/ˌvɜː.tʃu.əl.aɪˈzeɪ.ʃən/", discipline: "Computer Science", meaning: "The act of creating a virtual rather than physical version of a hardware platform, operating system, or storage device.", example: "Type-1 hypervisors (KVM, ESXi) execute multiple isolated guest operating system virtual machines on bare-metal hardware." },
    { word: "Valve", pronunciation: "/vælv/", discipline: "Mechanical", meaning: "A device that regulates, directs, or controls the flow of a fluid by opening, closing, or partially obstructing various passageways.", example: "Pneumatically actuated proportional valves modulate high-pressure steam flow into chemical reactor jackets." },
    { word: "Vibration", pronunciation: "/vaɪˈbreɪ.ʃən/", discipline: "Mechanical", meaning: "A mechanical phenomenon whereby oscillations occur about an equilibrium point.", example: "Fast Fourier Transform (FFT) vibration spectrum analysis identifies inner race bearing defects before catastrophic machine failure." },
    { word: "Variance", pronunciation: "/ˈveə.ri.əns/", discipline: "Mathematics", meaning: "The expectation of the squared deviation of a random variable from its population mean (σ²).", example: "Statistical process control software monitors manufacturing tolerance variance to maintain Cpk indices above 1.67." },
    { word: "Velocity", pronunciation: "/vəˈlɒs.ə.ti/", discipline: "Physics", meaning: "The directional speed of an object in motion as an indication of its rate of change in position (v = dx/dt).", example: "Orbital mechanics equations calculate the escape velocity required for a satellite to break Earth's gravitational field." },
    { word: "Volatile", pronunciation: "/ˈvɒl.ə.taɪl/", discipline: "Computer Science", meaning: "A type of memory that requires power to maintain the stored information; or a C/C++ keyword preventing compiler cache optimization.", example: "Static RAM (SRAM) is high-speed volatile memory utilized in L1, L2, and L3 CPU cache hierarchies." },
    { word: "Voltmeter", pronunciation: "/ˈvəʊltˌmiː.tər/", discipline: "Electrical", meaning: "An instrument used for measuring electrical potential difference between two points in an electric circuit.", example: "Digital multimeters configure high input impedance (10 MΩ) in voltmeter mode to avoid loading the circuit under test." }
  ],

  W: [
    { word: "Wavelength", pronunciation: "/ˈweɪv.leŋθ/", discipline: "Physics", meaning: "The distance between successive crests of a wave, especially points in a sound wave or electromagnetic wave (λ = v/f).", example: "Dense wavelength division multiplexing (DWDM) transmits 96 optical wavelengths across a single single-mode fiber." },
    { word: "Waveform", pronunciation: "/ˈweɪv.fɔːm/", discipline: "Electrical", meaning: "The shape and form of a signal, such as a wave moving through a physical medium or an abstract representation.", example: "Digital oscilloscopes capture and display pulse-width modulated (PWM) voltage waveforms with 5 GS/s sampling rates." },
    { word: "Wattage", pronunciation: "/ˈwɒt.ɪdʒ/", discipline: "Electrical", meaning: "An amount of electrical power expressed in watts (P = V * I = I² * R).", example: "Server power supply units are rated for 1,600 watts of continuous output at 80 Plus Titanium 96% efficiency." },
    { word: "Wear", pronunciation: "/weər/", discipline: "Materials Science", meaning: "The progressive loss of material from the operating surface of a solid body caused by mechanical action.", example: "Titanium nitride (TiN) physical vapor deposition coatings increase drill bit abrasive wear resistance tenfold." },
    { word: "Webhook", pronunciation: "/ˈweb.hʊk/", discipline: "Computer Science", meaning: "A method of augmenting or altering the behavior of a web page or web application with custom callbacks over HTTP.", example: "GitHub sends automated JSON webhook payloads to CI/CD pipelines to trigger unit test builds upon every git push." },
    { word: "Wireless", pronunciation: "/ˈwaɪə.ləs/", discipline: "Electrical", meaning: "The transfer of information or power between two or more points without the use of an electrical conductor.", example: "Wi-Fi 7 (IEEE 802.11be) introduces 320 MHz channels and 4K-QAM modulation for multi-gigabit wireless networking." },
    { word: "Wireframe", pronunciation: "/ˈwaɪə.freɪm/", discipline: "Computer Science", meaning: "A visual guide that represents the skeletal framework of a website, application, or 3D polygonal model.", example: "UI/UX engineers draft low-fidelity wireframes before coding component design systems and responsive web interfaces." },
    { word: "Workbench", pronunciation: "/ˈwɜːk.bentʃ/", discipline: "Electrical", meaning: "A workbench equipped with specialized instruments, ESD protection, and tools for engineering prototyping.", example: "The electronics workbench features a four-channel oscilloscope, programmable DC power supply, and hot-air rework station." },
    { word: "Workflow", pronunciation: "/ˈwɜːk.fləʊ/", discipline: "Industrial", meaning: "The sequence of industrial, administrative, or computational processes through which a piece of work passes from initiation to completion.", example: "DevOps automated workflows execute linting, container builds, security scans, and production Kubernetes deployments." },
    { word: "Windlass", pronunciation: "/ˈwɪnd.ləs/", discipline: "Mechanical", meaning: "A mechanical device used on ships and civil sites to heave up weights like anchors or cargo via a horizontal cylinder.", example: "The electric anchor windlass generates over 50 kN of pulling torque to haul heavy chain and anchor from the sea floor." }
  ],

  X: [
    { word: "XOR", pronunciation: "/ˌeks.ɔːr/", discipline: "Computer Science", meaning: "Exclusive OR; a digital logic operation that outputs true only when an odd number of inputs are true.", example: "Cryptographic stream ciphers combine pseudo-random keystreams with plaintext using fast bitwise XOR operations." },
    { word: "X-Ray", pronunciation: "/ˈeks.reɪ/", discipline: "Physics", meaning: "Electromagnetic radiation of high energy and very short wavelength (0.01 to 10 nanometers) capable of passing through solids.", example: "Industrial X-ray computed tomography inspects internal voids in 3D-printed metal aerospace components." },
    { word: "Xenon", pronunciation: "/ˈzen.ɒn/", discipline: "Physics", meaning: "A heavy, colorless, odorless noble gas used in ion thrusters, high-intensity discharge lamps, and flash tubes.", example: "Deep-space probe Hall effect thrusters ionize xenon gas to produce continuous high-efficiency electrostatic propulsion." },
    { word: "XML", pronunciation: "/ˌeks.emˈel/", discipline: "Computer Science", meaning: "Extensible Markup Language; a flexible text format derived from SGML designed to store and transport structured data.", example: "Enterprise SOAP web services and Android layout manifests utilize XML schema definitions for strict validation." },
    { word: "Xylene", pronunciation: "/ˈzaɪ.liːn/", discipline: "Chemical", meaning: "An aromatic hydrocarbon based on benzene, widely used as an industrial solvent and precursor in polymer synthesis.", example: "Xylene solvents clean printed circuit boards and thin epoxy conformal coatings during manufacturing." },
    { word: "Xerography", pronunciation: "/zɪəˈrɒɡ.rə.fi/", discipline: "Electrical", meaning: "A dry electrostatic photocopying process in which an electrostatically charged photoconductive plate is used to produce copies.", example: "Laser printers deploy electro-photographic xerography to transfer toner particles onto paper using electrostatic charges." },
    { word: "Crossbar", pronunciation: "/ˈkrɒs.bɑːr/", discipline: "Electrical", meaning: "A matrix of switches or interconnects enabling any input channel to be dynamically connected to any output channel.", example: "Memristor crossbar arrays compute analog in-memory matrix multiplication for neuromorphic computing chips." },
    { word: "Xylometer", pronunciation: "/zaɪˈlɒm.ɪ.tər/", discipline: "Physics", meaning: "An instrument for determining the specific gravity and volume of wood samples through liquid displacement.", example: "Materials engineers apply xylometers to determine the dry density and moisture absorption of timber specimens." },
    { word: "X-Axis", pronunciation: "/ˈeks.æk.sɪs/", discipline: "Mathematics", meaning: "The principal horizontal axis in a two- or three-dimensional Cartesian coordinate system.", example: "The CNC milling tool path coordinates offset along the X-axis to machine precision face grooves." },
    { word: "Xylem", pronunciation: "/ˈzaɪ.ləm/", discipline: "Materials Science", meaning: "The vascular tissue in plants that conducts water and dissolved nutrients, studied for bio-mimetic microfluidic transport channels.", example: "Biomimetic engineers design capillary cooling microfluidic heat sinks inspired by xylem plant transport networks." }
  ],

  Y: [
    { word: "Yield", pronunciation: "/jiːld/", discipline: "Materials Science", meaning: "The stress level at which a material transitions from elastic behavior to permanent plastic deformation (Yield Point).", example: "Structural Grade 50 steel exhibits a minimum yield strength of 50,000 PSI (345 MPa) before permanent plastic deformation." },
    { word: "Yoke", pronunciation: "/jəʊk/", discipline: "Mechanical", meaning: "A structural or magnetic cross-piece connecting components together, or a ferromagnetic frame directing magnetic flux.", example: "The electrical motor's ferromagnetic stator yoke conducts magnetic return flux with minimal core hysteresis loss." },
    { word: "Yottabyte", pronunciation: "/ˈjɒt.ə.baɪt/", discipline: "Computer Science", meaning: "A unit of digital data storage equal to 10^24 bytes (one trillion terabytes, or 2^80 bytes).", example: "Global telecommunication networks transport zettabytes of data, with aggregate cloud storage approaching yottabytes." },
    { word: "Yaw", pronunciation: "/jɔː/", discipline: "Robotics", meaning: "The rotation of an aircraft, vehicle, or robot about its vertical axis.", example: "Flight controller PID loops modulate differential propeller thrust to eliminate unwanted aerodynamic yaw rotations." },
    { word: "Y-Axis", pronunciation: "/ˈwaɪ.æk.sɪs/", discipline: "Mathematics", meaning: "The secondary perpendicular axis in a two- or three-dimensional Cartesian coordinate system.", example: "Stress-strain curve graphs plot engineering tensile stress on the vertical Y-axis against strain on the horizontal X-axis." },
    { word: "Ytterbium", pronunciation: "/ɪˈtɜː.bi.əm/", discipline: "Materials Science", meaning: "A rare-earth chemical element used as a dopant in high-power fiber lasers and atomic clocks.", example: "Ytterbium-doped double-clad fiber lasers produce multi-kilowatt coherent 1070nm beams for industrial metal cutting." },
    { word: "YAML", pronunciation: "/ˈjæm.əl/", discipline: "Computer Science", meaning: "YAML Ain't Markup Language; a human-readable data-serialization language commonly used for configuration files.", example: "Kubernetes pod manifests, CI/CD pipeline definitions, and Docker Compose configurations are written in structured YAML." },
    { word: "Yagi", pronunciation: "/ˈjɑː.ɡi/", discipline: "Electrical", meaning: "A directional antenna consisting of a driven element, a reflector, and one or more director elements.", example: "High-gain Yagi-Uda antenna arrays transmit directional RF telemetry signals across long line-of-sight distances." },
    { word: "Yielding", pronunciation: "/ˈjiːl.dɪŋ/", discipline: "Civil", meaning: "The process of plastic deformation of a structural member undergoing loads beyond its elastic limit.", example: "Ductile yielding in steel reinforcement bars provides structural warning before catastrophic concrete slab failure." },
    { word: "Y-Delta", pronunciation: "/ˌwaɪˈdel.tə/", discipline: "Electrical", meaning: "A starter configuration or transformation used to reduce motor inrush current in three-phase power circuits.", example: "Wye-Delta (Y-Δ) motor starters limit initial starting current surges to one-third of standard direct-on-line levels." }
  ],

  Z: [
    { word: "Zener", pronunciation: "/ˈziː.nər/", discipline: "Electrical", meaning: "A type of semiconductor diode that permits current to flow in the reverse direction when its Zener breakdown voltage is reached.", example: "Zener diodes are configured in reverse bias to create simple, stable reference voltages in power supplies." },
    { word: "Zero-Day", pronunciation: "/ˌzɪə.rəʊˈdeɪ/", discipline: "Computer Science", meaning: "A previously unknown computer software vulnerability that hackers can exploit before developers issue a patch.", example: "Automated static analysis and fuzz testing tools identify memory corruption zero-day vulnerabilities in C codebases." },
    { word: "Impedance", pronunciation: "/ɪmˈpiː.dəns/", discipline: "Electrical", meaning: "Commonly denoted by the symbol 'Z'; the total complex resistance of a circuit to alternating current (Z = R + jX).", example: "Smith charts map complex impedance (Z) to calculate matching network component values for RF power amplifiers." },
    { word: "Zenith", pronunciation: "/ˈzen.ɪθ/", discipline: "Physics", meaning: "The point in the celestial sphere directly overhead an observer or geographical location (elevation angle of 90°).", example: "Parabolic satellite tracking ground antennas orient toward zenith to establish communications with overhead spacecraft." },
    { word: "Zinc", pronunciation: "/zɪŋk/", discipline: "Materials Science", meaning: "A metallic chemical element used widely as an anti-corrosion coating and in battery chemistries.", example: "Zinc-air battery cells extract atmospheric oxygen as a cathode reactant, offering high specific energy density." },
    { word: "Zip", pronunciation: "/zɪp/", discipline: "Computer Science", meaning: "An archive file format that supports lossless data compression using DEFLATE algorithms.", example: "Software deployment pipelines package artifact binaries and dependency assets into compressed Zip archives." },
    { word: "Zettabyte", pronunciation: "/ˈzet.ə.baɪt/", discipline: "Computer Science", meaning: "A unit of digital data storage equal to 10^21 bytes (one billion terabytes, or 2^70 bytes).", example: "Annual global internet IP traffic surpassed multiple zettabytes due to 4K video streaming and cloud workloads." },
    { word: "Zirconium", pronunciation: "/zɜːˈkəʊ.ni.əm/", discipline: "Materials Science", meaning: "A lustrous, grey-white transition metal highly resistant to corrosion and high temperatures, used in nuclear reactors.", example: "Zirconium alloy (Zircaloy) tubes clad nuclear fuel pellets due to their extremely low neutron absorption cross-section." },
    { word: "Zoom", pronunciation: "/zuːm/", discipline: "Physics", meaning: "An optical system that allows the focal length to be continuously varied while keeping the focal plane stationary.", example: "Robotic machine vision inspection cameras deploy motorized optical zoom lenses to resolve micro-defects on IC pins." },
    { word: "Zero-Crossing", pronunciation: "/ˌzɪə.rəʊˈkrɒs.ɪŋ/", discipline: "Electrical", meaning: "A point where the sign of a mathematical function or voltage waveform changes (e.g. from positive to negative), intersecting zero.", example: "Zero-crossing solid-state AC switches trigger triacs precisely at 0V phase to eliminate voltage transients and EMI." }
  ]
};

/* ==========================================================================
   2. STORAGE MANAGER & STATE ENGINE
   ========================================================================== */
const STORAGE_KEYS = {
  ONBOARDING: 'engilex_onboarding_done',
  MASTERED_WORDS: 'engilex_mastered_words',
  CURRENT_LETTER: 'engilex_current_letter',
  CURRENT_INDEX: 'engilex_current_index',
  BOOKMARKS: 'engilex_bookmarks',
  DISCIPLINE_FILTER: 'engilex_discipline_filter'
};

const state = {
  onboardingCompleted: false,
  masteredWords: new Set(), // Keys formatted as `${letter}_${index}` e.g. "A_0"
  bookmarks: new Set(),
  currentLetter: 'A',
  currentIndex: 0,
  currentScreen: 'home',
  wordListDisciplineFilter: 'all',
  searchQuery: '',
  searchDisciplineFilter: 'ALL',
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
   3. WEB SPEECH API — TECHNICAL PRONUNCIATION SYNTHESIZER
   ========================================================================== */
class TechnicalAudioEngine {
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
        voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('Samantha'))) ||
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
      showToast('Speech audio synthesizer unavailable in this browser environment.');
      return;
    }

    try {
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88; // Clear technical cadence
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
      console.warn('Speech engine error:', err);
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
      console.warn('Character audio error:', err);
    }
  }
}

const audioEngine = new TechnicalAudioEngine();

/* ==========================================================================
   4. DOM MAPPINGS & ROUTER
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
  desktopNavTabs: document.querySelectorAll('.header-nav-tabs .nav-btn'),
  mobileNavTabs: document.querySelectorAll('.mobile-bottom-nav .mobile-nav-tab'),
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
  homeContinueDiscipline: document.getElementById('home-continue-discipline'),
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
  disciplineFilterTabs: document.querySelectorAll('.discipline-filter-bar .filter-tab'),
  wordItemsContainer: document.getElementById('word-items-container'),

  // Word Learn Screen Elements
  btnLearnScreenBack: document.getElementById('btn-learn-screen-back'),
  learnCounterText: document.getElementById('learn-counter-text'),
  learnProgressFill: document.getElementById('learn-progress-fill'),
  btnLearnBookmark: document.getElementById('btn-learn-bookmark'),
  learnLetterPill: document.getElementById('learn-letter-pill'),
  learnDisciplinePill: document.getElementById('learn-discipline-pill'),
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
  searchDisciplineChips: document.querySelectorAll('.search-discipline-chips .chip-filter'),
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
 * Universal Navigation Router
 */
function navigateTo(screenId, options = {}) {
  const allScreens = [DOM.viewHome, DOM.viewLearn, DOM.viewWordList, DOM.viewWordLearn, DOM.viewSearch, DOM.viewProgress];
  allScreens.forEach(s => s.classList.remove('active'));

  // Determine active tab id
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

  // Update Alphabet Ribbon highlight
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
   5. ALPHABET RIBBON (A THROUGH Z)
   ========================================================================== */
function buildAlphabetRibbon() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  DOM.ribbonContainer.innerHTML = '';

  letters.forEach(char => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ribbon-letter-btn';
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
  const ribbonBtns = DOM.ribbonContainer.querySelectorAll('.ribbon-letter-btn');
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
   7. HOME / DASHBOARD SCREEN RENDERING
   ========================================================================== */
function renderHomeScreen() {
  // 1. Resume Learning Card
  const currentWords = TECHNICAL_VOCABULARY[state.currentLetter] || TECHNICAL_VOCABULARY.A;
  const wordObj = currentWords[state.currentIndex] || currentWords[0];
  const letterProgress = getLetterProgress(state.currentLetter);

  DOM.homeContinueLetterBadge.textContent = `Section ${state.currentLetter}`;
  DOM.homeContinueWordPreview.textContent = wordObj.word;
  DOM.homeContinueCounter.textContent = `Keyword ${state.currentIndex + 1} of ${currentWords.length}`;
  DOM.homeContinueDiscipline.textContent = wordObj.discipline;
  DOM.homeContinueProgressBar.style.width = `${Math.max(2, letterProgress.percent)}%`;

  // 2. Metrics Overview
  const totalProg = getTotalProgress();
  DOM.homeStatLearned.textContent = totalProg.learned;
  DOM.homeStatRemaining.textContent = totalProg.remaining;
  DOM.homeStatPercent.textContent = `${totalProg.percent}%`;

  // 3. Alphabet Matrix Grid (A through Z)
  DOM.homeAlphabetQuickGrid.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const card = document.createElement('div');
    card.className = 'alphabet-card-item';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Section ${char}, ${p.learned} of ${p.total} mastered`);

    card.innerHTML = `
      <div class="alpha-card-header">
        <div class="alpha-letter-badge">${char}</div>
        <span class="alpha-percent">${p.percent}%</span>
      </div>
      <div class="alpha-card-body">
        <h4 class="alpha-card-title">Section ${char}</h4>
        <span class="alpha-card-count">${p.learned} / ${p.total} Mastered</span>
        <div class="alpha-card-progress">
          <div class="alpha-progress-fill" style="width: ${p.percent}%"></div>
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
   8. A–Z ALPHABET HUB SCREEN RENDERING
   ========================================================================== */
function renderLearnHubScreen() {
  DOM.learnAlphabetCardsList.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(char => {
    const p = getLetterProgress(char);
    const words = TECHNICAL_VOCABULARY[char] || [];
    const sampleDisciplines = Array.from(new Set(words.map(w => w.discipline))).slice(0, 2).join(', ');

    const card = document.createElement('div');
    card.className = 'alphabet-card-item';
    card.style.padding = '20px';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="alpha-card-header">
        <div class="alpha-letter-badge" style="width: 46px; height: 46px; font-size: 1.5rem;">${char}</div>
        <span class="alpha-percent" style="font-size: 0.875rem;">${p.percent}% Mastered</span>
      </div>
      <div class="alpha-card-body" style="gap: 8px;">
        <h4 class="alpha-card-title" style="font-size: 1.15rem;">Letter ${char} Terminology</h4>
        <span class="alpha-card-count" style="color: var(--cyan-primary);">${sampleDisciplines}</span>
        <div class="alpha-card-progress" style="height: 6px; margin-top: 4px;">
          <div class="alpha-progress-fill" style="width: ${p.percent}%"></div>
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
   9. WORD LIST / TECHNICAL INDEX SCREEN RENDERING
   ========================================================================== */
function renderWordListScreen() {
  const letter = state.currentLetter;
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const p = getLetterProgress(letter);

  DOM.wordlistTitle.textContent = `Letter ${letter} Keywords`;
  DOM.wordlistProgressBadge.textContent = `${p.learned} / ${p.total} Mastered`;

  // Update discipline filter tabs
  DOM.disciplineFilterTabs.forEach(tab => {
    if (tab.dataset.filter === state.wordListDisciplineFilter) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  DOM.wordItemsContainer.innerHTML = '';

  words.forEach((item, index) => {
    const isMastered = state.masteredWords.has(`${letter}_${index}`);

    // Apply Discipline Filter
    if (state.wordListDisciplineFilter !== 'all') {
      const target = state.wordListDisciplineFilter.toUpperCase();
      const disc = item.discipline.toUpperCase();
      if (!disc.includes(target)) return;
    }

    const card = document.createElement('div');
    card.className = `tech-word-card ${isMastered ? 'mastered' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div>
        <div class="word-card-top">
          <span class="word-card-disc">${item.discipline}</span>
          <button type="button" class="btn-card-audio" aria-label="Pronounce ${item.word}">
            <svg viewBox="0 0 24 24" width="16" height="16"><use href="#icon-speaker"></use></svg>
          </button>
        </div>
        <h4 class="word-card-title">${item.word}</h4>
        <div class="word-card-phonetic">${item.pronunciation}</div>
        <p class="word-card-meaning">${item.meaning}</p>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-card-audio')) {
        e.stopPropagation();
        audioEngine.speak(item.word);
        return;
      }
      navigateTo('word-learn', { letter, index });
    });

    DOM.wordItemsContainer.appendChild(card);
  });

  if (DOM.wordItemsContainer.children.length === 0) {
    DOM.wordItemsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-muted);">
        <h3 style="color: var(--text-white); margin-bottom: 8px;">No keywords match this discipline filter</h3>
        <p>Select "All Disciplines" to view all terms in Section ${letter}.</p>
      </div>
    `;
  }
}

/* ==========================================================================
   10. TECHNICAL WORD LEARNING SCREEN (FOCUS EXPERIENCE)
   ========================================================================== */
function renderWordLearnScreen() {
  const letter = state.currentLetter;
  const words = TECHNICAL_VOCABULARY[letter] || [];
  const index = state.currentIndex;
  const wordObj = words[index];

  if (!wordObj) return;

  const wordKey = `${letter}_${index}`;
  const isMastered = state.masteredWords.has(wordKey);
  const isBookmarked = state.bookmarks.has(wordKey);

  // 1. Counter & Progress
  DOM.learnCounterText.textContent = `Section ${letter} — Keyword ${index + 1} of ${words.length}`;
  DOM.learnProgressFill.style.width = `${((index + 1) / words.length) * 100}%`;

  // 2. Badges
  DOM.learnLetterPill.textContent = `Section ${letter}`;
  DOM.learnDisciplinePill.textContent = wordObj.discipline;

  if (isMastered) {
    DOM.learnStatusPill.textContent = 'Mastered ✓';
    DOM.learnStatusPill.className = 'mastery-status-pill mastered';
  } else {
    DOM.learnStatusPill.textContent = 'To Master';
    DOM.learnStatusPill.className = 'mastery-status-pill unmastered';
  }

  // 3. Word Title & Phonetics
  DOM.learnWordHeading.textContent = wordObj.word.toUpperCase();
  DOM.learnPhonetic.textContent = wordObj.pronunciation;

  // 4. Audio Button
  DOM.btnLearnPronounce.setAttribute('aria-label', `Pronounce ${wordObj.word}`);
  DOM.btnLearnPronounce.classList.remove('speaking');
  DOM.learnPronounceLabel.textContent = 'Synthesize Audio';

  // 5. Definition & System Application
  DOM.learnMeaningText.textContent = wordObj.meaning;
  DOM.learnExampleText.textContent = `"${wordObj.example}"`;

  // 6. Interactive Character Breakdown Tiles
  DOM.learnSpellingTiles.innerHTML = '';
  const cleanWord = wordObj.word.toUpperCase().replace(/[^A-Z]/g, '');

  for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'tech-char-tile';
    tile.textContent = char;
    tile.setAttribute('aria-label', `Character ${char}`);

    tile.addEventListener('click', () => {
      tile.classList.add('tile-active');
      audioEngine.speakLetter(char);
      setTimeout(() => tile.classList.remove('tile-active'), 350);
    });

    DOM.learnSpellingTiles.appendChild(tile);
  }

  // 7. Mastered Button State
  if (isMastered) {
    DOM.btnMarkLearned.classList.add('is-mastered');
    DOM.btnMarkLearnedText.textContent = 'Keyword Mastered ✓';
  } else {
    DOM.btnMarkLearned.classList.remove('is-mastered');
    DOM.btnMarkLearnedText.textContent = 'Mark Keyword as Mastered';
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
      <span>Complete Section ${letter}</span>
      <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-check"></use></svg>
    `;
  } else {
    DOM.btnLearnNext.innerHTML = `
      <span>Next Keyword</span>
      <svg viewBox="0 0 24 24" width="18" height="18"><use href="#icon-chevron-right"></use></svg>
    `;
  }
}

function handlePronounceWord() {
  const words = TECHNICAL_VOCABULARY[state.currentLetter];
  const wordObj = words[state.currentIndex];
  if (!wordObj) return;

  DOM.btnLearnPronounce.classList.add('speaking');
  DOM.learnPronounceLabel.textContent = 'Synthesizing...';

  audioEngine.speak(
    wordObj.word,
    () => {
      DOM.btnLearnPronounce.classList.add('speaking');
    },
    () => {
      DOM.btnLearnPronounce.classList.remove('speaking');
      DOM.learnPronounceLabel.textContent = 'Replay Audio';
    }
  );
}

function toggleMasteredStatus() {
  const wordKey = `${state.currentLetter}_${state.currentIndex}`;
  const words = TECHNICAL_VOCABULARY[state.currentLetter];
  const wordObj = words[state.currentIndex];

  if (state.masteredWords.has(wordKey)) {
    state.masteredWords.delete(wordKey);
    showToast(`Removed "${wordObj.word}" from mastered terms`);
  } else {
    state.masteredWords.add(wordKey);
    showToast(`Mastered "${wordObj.word}"! ⚡`);
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
  DOM.completionTitle.textContent = `Section ${state.currentLetter} Completed!`;
  DOM.completionMessage.textContent = `You have reviewed all engineering keywords in Section ${state.currentLetter}.`;
  DOM.modalCompletion.classList.add('active');
  DOM.modalCompletion.setAttribute('aria-hidden', 'false');
}

function hideCompletionCelebration() {
  DOM.modalCompletion.classList.remove('active');
  DOM.modalCompletion.setAttribute('aria-hidden', 'true');
}

/* ==========================================================================
   11. TECHNICAL SEARCH ENGINE
   ========================================================================== */
function renderSearchResults() {
  const query = state.searchQuery.trim().toLowerCase();
  const discFilter = state.searchDisciplineFilter;
  let matches = [];

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  letters.forEach(lettr => {
    const list = TECHNICAL_VOCABULARY[lettr] || [];
    list.forEach((item, index) => {
      const matchDisc = discFilter === 'ALL' || item.discipline.toLowerCase().includes(discFilter.toLowerCase());
      const matchWord = item.word.toLowerCase().includes(query);
      const matchMeaning = item.meaning.toLowerCase().includes(query);
      const matchExample = item.example.toLowerCase().includes(query);

      if (matchDisc && (!query || matchWord || matchMeaning || matchExample)) {
        matches.push({
          ...item,
          letter: lettr,
          index: index
        });
      }
    });
  });

  DOM.searchResultsCount.textContent = `${matches.length} keyword${matches.length === 1 ? '' : 's'} indexed across A–Z`;
  DOM.searchResultsList.innerHTML = '';

  if (matches.length === 0) {
    DOM.searchResultsList.innerHTML = `
      <div class="empty-search-state">
        <h3>No engineering terms matched your search</h3>
        <p>Try searching for a different keyword or reset the discipline filter.</p>
      </div>
    `;
    return;
  }

  const displayMatches = matches.slice(0, 120);

  displayMatches.forEach(res => {
    const card = document.createElement('div');
    card.className = 'tech-word-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    let highlightedWord = res.word;
    if (query) {
      const regex = new RegExp(`(${query})`, 'gi');
      highlightedWord = res.word.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    card.innerHTML = `
      <div>
        <div class="word-card-top">
          <span class="word-card-disc">${res.discipline} • Sec ${res.letter}</span>
          <button type="button" class="btn-card-audio" aria-label="Pronounce ${res.word}">
            <svg viewBox="0 0 24 24" width="16" height="16"><use href="#icon-speaker"></use></svg>
          </button>
        </div>
        <h4 class="word-card-title">${highlightedWord}</h4>
        <div class="word-card-phonetic">${res.pronunciation}</div>
        <p class="word-card-meaning">${res.meaning}</p>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-card-audio')) {
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
   12. MASTERY ANALYTICS RENDERING
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
    card.className = 'alphabet-card-item';
    card.style.padding = '16px';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="alpha-card-header">
        <span class="alpha-card-title">Section ${char}</span>
        <span class="alpha-percent">${p.learned} / ${p.total} (${p.percent}%)</span>
      </div>
      <div class="alpha-card-progress" style="height: 6px;">
        <div class="alpha-progress-fill" style="width: ${p.percent}%"></div>
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
   13. TOAST NOTIFICATION UTILITY
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
   14. EVENT BINDINGS & BOOTSTRAPPER
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

  // Desktop & Mobile Navigation
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

  DOM.disciplineFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.wordListDisciplineFilter = tab.dataset.filter;
      renderWordListScreen();
    });
  });

  // Word Learning Screen actions
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
      showToast('Saved to technical bookmarks! ★');
    }
    saveState();
  });

  // Global Keyboard Shortcuts (Ctrl+K = Search, Arrow keys = navigation)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      navigateTo('search', { focusSearch: true });
    } else if (state.currentScreen === 'word-learn' && !DOM.modalCompletion.classList.contains('active')) {
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

  DOM.searchDisciplineChips.forEach(chip => {
    chip.addEventListener('click', () => {
      DOM.searchDisciplineChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.searchDisciplineFilter = chip.dataset.discipline;
      renderSearchResults();
    });
  });

  // Reset Progress Modal
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
    showToast('All engineering progress has been reset.');
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
