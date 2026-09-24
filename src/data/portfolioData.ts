import { Project, ExperienceItem, AchievementItem, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Kishore BV',
  role: 'Automation & Robotics Engineer',
  email: 'Kishorebv612@gmail.com',
  headline: 'I build things that move.',
  subheadline:
    'I work on robots, drones, mechanisms and autonomous systems. I enjoy taking an idea from CAD to prototype, then testing it until it behaves the way it was supposed to.',
  introParagraph:
    'Most of what I enjoy in engineering sits somewhere between mechanical design, physical prototyping, and troubleshooting why a mechanism didn’t work on the first try. I focus on hands-on robotics, UAV payloads, and automation systems built for real-world testing.',
  education: {
    degree: 'B.Tech in Automation and Robotics Engineering',
    institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    completed: 'June 2025',
    cgpa: '7.24',
  },
  languages: ['English', 'Tamil'],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'October 2025 – Present',
    role: 'Junior Engineer',
    organization: 'Garuda Aerospace Limited',
    department: 'New Product Development',
    description:
      'Hands-on engineering focused on customized UAV development, hardware integration, and field validation within the New Product Development team.',
    keyWork: [
      'Customized UAV system development and structural integration',
      'Assembly, calibration, and bench testing of sub-assemblies',
      'Hands-on flight testing and hardware refinement',
    ],
  },
  {
    period: 'December 2024 – June 2025',
    role: 'R&D and New Product Development Intern',
    organization: 'Garuda Aerospace Limited',
    department: 'New Product Development',
    description:
      'Contributed to mechanical design, rapid prototype development, and component testing for industrial drone platforms.',
    keyWork: [
      'Mechanical CAD design and physical prototype fabrication',
      'Drone mechanism and component-level development',
      'Practical testing, failure analysis, and iterative product refinement',
    ],
  },
  {
    period: 'June 2024 – July 2024',
    role: 'Engineering Intern',
    organization: 'Garuda Aerospace Limited',
    department: 'Engineering & Testing',
    description:
      'Gained intensive foundational exposure to industrial drone technologies, robotics applications, automation workflows, and test procedures.',
    keyWork: [
      'Exposure to drone technologies and automation workflows',
      'Bench testing and test flight data collection',
      'Robotics application studies and product development support',
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'fixed-wing-systems',
    number: '01',
    title: 'Fixed-Wing Systems',
    subtitle: 'R&D to Field Testing',
    category: 'UAV Systems / Fixed-Wing',
    year: '2024 – Present',
    summary:
      'Engineered and field-tested specialized composite fixed-wing UAV platforms, spanning foam and carbon-fiber surveillance airframes, loiter munition mechanisms, and high-endurance heavy payload carriers.',
    coreContributions: [
      'Surveillance Fixed-Wing Platform (Foam & Carbon Fiber) — Designed and developed a lightweight composite fixed-wing platform for surveillance applications. Utilized foam and carbon fiber construction for optimal strength-to-weight ratio, enabling extended loiter times and stable camera payload integration. Conducted field testing for real-world surveillance mission validation.',
      'Loiter Munition Capable Fixed-Wing System — Engineered a fixed-wing platform with integrated payload deployment mechanism for loiter munition applications. Developed robust mechanical systems for stability and precise payload control during low-speed hover and transition phases. Completed comprehensive R&D phase through prototype validation and field testing.',
      'High-Endurance Payload Carrier Fixed-Wing — Designed a long-range fixed-wing system with extended flight endurance for heavy payload carrying. Incorporated aerodynamic optimization, carbon fiber reinforced composite structure, and efficient power management. Tested in field conditions for payload delivery and reconnaissance missions.',
      'Long-Range High-Endurance Surveillance Fixed-Wing — Developed an advanced fixed-wing platform optimized for extended range operations and mission endurance. Integrated cutting-edge composite materials (carbon fiber with foam core) for maximum efficiency. Field-tested for long-duration surveillance and area mapping applications with real-time data transmission capabilities.',
    ],
    themes: [
      'Fixed-Wing UAVs',
      'Composite Structures (CF & Foam)',
      'Payload Release Mechanisms',
      'Aerodynamic Optimization',
      'Loiter Munition Systems',
      'Flight Validation',
      'Long-Range Surveillance',
    ],
    details: {
      overview:
        'Comprehensive fixed-wing UAV development program progressing from initial conceptual design and composite layups through actuator integration, bench testing, and extensive outdoor flight validation.',
      focusAreas: [
        'Lightweight composite sandwich airframe fabrication with foam core and carbon fiber reinforcement',
        'Aerodynamic profiling and propulsion optimization for extended loiter duration and heavy payload capacity',
        'Fail-safe electromechanical release and deployment mechanisms for loiter munition and delivery payloads',
        'Flight envelope characterization and telemetry validation during live field-testing missions',
      ],
      engineeringNote:
        'Selected carbon fiber skin over precision foam cores to achieve optimal torsional rigidity during high-speed transitions while keeping empty airframe mass low enough for maximum payload fraction.',
    },
  },
  {
    id: 'traffic-management',
    number: '02',
    title: 'Intelligent Traffic Management System',
    subtitle: 'Predictive Modeling & Flow Optimization',
    category: 'Machine Learning / Automation',
    year: '2024',
    summary:
      'Developed a dynamic traffic signal control system using machine-learning models to explore real-time traffic information, signal timing optimization, traffic-flow prediction and congestion reduction.',
    coreContributions: [
      'Engineered dynamic signal optimization algorithms replacing static, timer-based cycle intervals.',
      'Trained predictive ML models analyzing queue buildup rates and intersection vehicular density.',
      'Authored research manuscript "AI & ML System for Traffic Analysis and Optimization" (currently under review).',
    ],
    themes: [
      'Machine Learning',
      'Python',
      'Traffic Prediction',
      'Optimization Algorithms',
      'Data Modeling',
    ],
    publication: {
      title: 'AI & ML System for Traffic Analysis and Optimization',
      status: 'Under Review',
    },
    details: {
      overview:
        'Addresses intersection bottlenecking through data-driven dynamic signal control rather than rigid pre-programmed schedules.',
      focusAreas: [
        'Queue prediction algorithms using incoming vehicle density vectors',
        'Dynamic green-time recalculation minimizing aggregate wait seconds',
        'Benchmark comparative simulations under peak and off-peak congestion profiles',
      ],
      engineeringNote:
        'Academic paper "AI & ML System for Traffic Analysis and Optimization" is currently under peer review.',
    },
  },
  {
    id: 'simulation-optimization',
    number: '03',
    title: 'Robotic System Simulation & Engineering Optimization',
    subtitle: 'Dynamics & Finite Optimization',
    category: 'Simulation & Optimization',
    year: '2023 – 2024',
    summary:
      'Analysed robotic-arm dynamics using ADAMS simulation and evaluated system behaviour prior to physical implementation.',
    coreContributions: [
      'Analysed robotic-arm dynamics using ADAMS simulation and evaluated system behaviour prior to physical implementation.',
      'Performed reverse engineering, topology optimisation and parameter optimisation of mechanical components to support design improvement.',
      'Combined simulation, CAD, rapid prototyping and physical validation to support data-driven engineering iterations.',
    ],
    themes: [
      'ADAMS Dynamics',
      'Topology Optimization',
      'Parameter Optimization',
      'Reverse Engineering',
      'Physical Validation',
    ],
    details: {
      overview:
        'Applied computational multi-body dynamics and mathematical optimization tools to reduce structural weight, eliminate stress concentrations, and predict motor torque requirements.',
      focusAreas: [
        'Multi-body dynamic simulation of articulated links in MSC ADAMS',
        'Topology optimization for additive-manufactured brackets and structural linkages',
        'Parameter optimization to balance structural stiffness against mass reduction',
        'Dimensional correlation comparing simulated stress profiles with physical test coupons',
      ],
      engineeringNote:
        'Verified ADAMS torque prediction curves against bench-scale servo current readings to confirm dynamic model accuracy.',
    },
  },
  {
    id: 'payload-end-effector-systems',
    number: '04',
    title: 'Automated Payload & End-Effector Systems',
    subtitle: 'Product Development & Verification',
    category: 'Mechanism Design & Verification',
    year: '2024',
    summary:
      'Designed and developed multiple electrically actuated mechanisms including lifebuoy deployment, canister release, firefighting payload deployment and automated solar-panel cleaning systems.',
    coreContributions: [
      'Designed and developed multiple electrically actuated mechanisms including lifebuoy deployment, canister release, firefighting payload deployment and automated solar-panel cleaning systems.',
      'Progressed concepts through CAD design, prototype fabrication, actuator integration, functional verification, troubleshooting and design refinement.',
      'Evaluated mechanism behaviour and failure conditions during testing and implemented design improvements to achieve more reliable and repeatable operation.',
    ],
    themes: [
      'Actuator Integration',
      'Deployment Mechanisms',
      'CAD Design',
      'Rapid Prototyping',
      'Failure Mode Testing',
    ],
    details: {
      overview:
        'A suite of specialized drone and robotic end-effectors: lifebuoy rapid-release triggers, aerial firefighting ball dispensers, canister drops, and pressurized fluid arrays.',
      focusAreas: [
        'Mechanical latch geometries providing positive retention under flight vibration',
        'Low-power electrical release actuators triggered via radio telemetry or autonomy loops',
        'Rapid physical prototyping (3D printing + CNC hardware) for rapid fit checks',
        'High-cycle drop repeatability and failure-condition stress testing',
      ],
      engineeringNote:
        'Implemented dual mechanical-detent fail-safes ensuring releases only actuate upon deliberate electrical command pulses.',
    },
  },
  {
    id: 'tethered-uav-system',
    number: '05',
    title: 'Tethered UAV System',
    subtitle: 'Electronic/System Integration & Validation',
    category: 'UAV Systems',
    year: '2024 – 2025',
    summary:
      'Designed and integrated a tethered UAV platform for extended-duration operation and continuous real-time data transmission.',
    coreContributions: [
      'Designed and integrated a tethered UAV platform for extended-duration operation and continuous real-time data transmission.',
      'Worked across power, mechanical, communication and flight-system interfaces to achieve stable integrated operation.',
      'Evaluated operating constraints, conducted system testing and troubleshooting, and validated platform behaviour under practical operating conditions.',
    ],
    themes: [
      'Tethered Flight',
      'High-Voltage DC',
      'Continuous Power Delivery',
      'Communication Interfaces',
      'Flight Validation',
    ],
    details: {
      overview:
        'Overcomes flight endurance limits by supplying continuous high-voltage electrical power from a ground station via a reinforced umbilical tether while streaming low-latency telemetry.',
      focusAreas: [
        'Onboard DC-DC step-down converter thermal dissipation and power budgeting',
        'Tether catenary tension compensation inside flight stability algorithms',
        'Noise isolation between high-current power cables and low-voltage digital telemetry',
        'Long-duration continuous hover endurance benchmarks',
      ],
      engineeringNote:
        'Balanced onboard converter weight against umbilical copper cross-section to maintain maximum net lift margin in hover.',
    },
  },
  {
    id: 'process-rover',
    number: '06',
    title: 'Multi-Function Automated Process Rover',
    subtitle: 'Mechatronics System Development',
    category: 'Mechatronics / Field Robotics',
    year: '2023 – 2024',
    summary:
      'Developed an automated robotic platform integrating positioning, sensing, control logic and electromechanical mechanisms for multiple field operations.',
    coreContributions: [
      'Developed an automated robotic platform integrating positioning, sensing, control logic and electromechanical mechanisms for multiple field operations.',
      'Coordinated mechanical, electrical and software interfaces during prototype integration and functional testing.',
      'Identified integration issues during testing and iteratively modified mechanisms and control behaviour to improve overall system performance.',
    ],
    themes: [
      'Mechatronics Integration',
      'Electromechanical Actuation',
      'Sensor Positioning',
      'Field Validation',
      'Iterative Prototyping',
    ],
    details: {
      overview:
        'A field-ready agricultural and environmental rover engineered with interchangeable tooling modules for automated seeding, weeding, and targeted soil treatment.',
      focusAreas: [
        'Integration of high-torque drivetrain with encoder-based dead-reckoning',
        'Electromechanical tool actuation interfaces designed for rapid physical swap-outs',
        'Dust- and moisture-resistant compartmentalization for onboard electronic controllers',
        'Iterative chassis revision to lower rolling resistance in loose agricultural soil',
      ],
      engineeringNote:
        'Addressed motor driver thermal throttling during prolonged high-drag field traversals by redesigning heat-sink dissipation pathways.',
    },
  },
  {
    id: 'autonomous-mobile-control',
    number: '07',
    title: 'Autonomous Mobile Robot Control Systems',
    subtitle: 'Closed-Loop Control & Validation',
    category: 'Autonomous Systems / Controls',
    year: '2023 – 2024',
    summary:
      'Developed line-following, maze-solving and autonomous delivery robots using C++/Python, sensor feedback and closed-loop control logic.',
    coreContributions: [
      'Developed line-following, maze-solving and autonomous delivery robots using C++/Python, sensor feedback and closed-loop control logic.',
      'Converted functional objectives into control behaviours, sensor-processing logic and system operating sequences.',
      'Tested normal and failure conditions, investigated inconsistent system behaviour and refined control responses to improve repeatability and robustness.',
    ],
    themes: [
      'Closed-Loop Control',
      'C++',
      'Python',
      'Sensor Feedback',
      'State Sequences',
      'Failure Analysis',
    ],
    details: {
      overview:
        'Encompasses autonomous ground platforms (including line-followers, maze navigators, and the HYGIEIA delivery robot) designed for deterministic routing and robust trajectory tracking.',
      focusAreas: [
        'Sensor processing logic for rapid reflective optical and distance sensor arrays',
        'Finite-state machine sequences governing waypoint transitions and obstacle avoidance',
        'Closed-loop steering corrections to eliminate hunting and overshoot at higher velocities',
        'Extensive edge-case validation testing under uneven track conditions',
      ],
      engineeringNote:
        'Tuned feedback parameters to maintain deterministic behavior despite battery discharge curves and surface friction variances.',
    },
  },
  {
    id: 'mobile-robotic-system',
    number: '08',
    title: 'Mobile Robotic System with Manipulator',
    subtitle: 'Systems Integration & Controls',
    category: 'Robotics & Controls',
    year: '2024',
    summary:
      'Designed and integrated a ROS/ROS2-based mobile robotic platform combining navigation, sensing, actuation and robotic manipulation subsystems.',
    coreContributions: [
      'Designed and integrated a ROS/ROS2-based mobile robotic platform combining navigation, sensing, actuation and robotic manipulation subsystems.',
      'Developed C++ control nodes and integrated hardware/software interfaces for coordinated mobile-base and manipulator operation.',
      'Performed system-level functional testing, fault isolation, control tuning and iterative troubleshooting to improve reliable operation under real-world conditions.',
    ],
    themes: [
      'ROS / ROS2',
      'C++',
      'Robotic Manipulation',
      'Hardware/Software Interfaces',
      'Control Tuning',
      'Fault Isolation',
    ],
    details: {
      overview:
        'A comprehensive mobile manipulation testbed engineered to coordinate base mobility with multi-axis arm kinematics for competition and research deployment.',
      focusAreas: [
        'Kinematic analysis and coordinated trajectory generation for arm and base',
        'C++ node communication over ROS2 middleware for low-latency command dispatch',
        'Actuator feedback loops and driver isolation to mitigate electrical noise',
        'Systematic fault isolation under unexpected mechanical resistance',
      ],
      engineeringNote:
        'Ensured center of gravity remained dynamically stable during sudden manipulator accelerations by counterbalancing chassis placement and battery mass.',
    },
  },
];

export const ADDITIONAL_PROJECTS: string[] = [
  'Autonomous Line-Tracking Robot',
  'Autonomous Maze Navigation Robot',
  'HYGIEIA — Autonomous Drug Delivery Robot',
  'Drone-Mounted Firefighting Deployment Mechanism',
  'UAV Canister Release System',
  'Lifebuoy Emergency Deployment Mechanism',
  'Automated Solar-Panel Cleaning Payload',
  'Tethered UAV Power & Data System',
  'Robotic Arm Dynamic Simulation — ADAMS',
  'Topology-Optimized Component Design',
  'Reverse Engineering & CAD Reconstruction',
  'Mobile Manipulator Control Prototype',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Electronics, Controls & Software',
    skills: [
      'ROS / ROS2 Integration',
      'C++ (Control Nodes)',
      'Python',
      'Closed-Loop Control Logic',
      'Hardware/Software Interfaces',
      'Fault Isolation & Tuning',
      'Machine Learning Algorithms',
    ],
  },
  {
    name: 'Robotics & UAV Systems',
    skills: [
      'Mobile Robotic Systems',
      'Manipulator Integration',
      'Tethered UAV Platforms',
      'Autonomous Mobile Robots',
      'High-Voltage Power Integration',
      'Field Testing & Validation',
    ],
  },
  {
    name: 'Mechanical & Simulation',
    skills: [
      'CAD Design & Modeling',
      'ADAMS Dynamics Simulation',
      'Topology Optimization',
      'Parameter Optimization',
      'Electromechanical Mechanisms',
      'Rapid Prototyping & Verification',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Mr. BOT — Roborg ’22',
    category: 'Robotics Competition',
    award: 'Overall Title',
    institution: 'SKCET, Coimbatore',
    year: '2022',
  },
  {
    title: 'Inferno ’23 — Bionic Brawl',
    category: 'Combat / Robotics Competition',
    award: 'First Position',
    institution: 'Amrita Vishwa Vidyapeetham',
    year: '2023',
  },
  {
    title: 'Forsch ’23 — Trace It',
    category: 'Autonomous Path Tracking',
    award: 'First Position',
    institution: 'Anna University Regional Campus, Coimbatore',
    year: '2023',
  },
  {
    title: 'Junkyard',
    category: 'Mechanism Fabrication',
    award: 'Second Position',
    institution: 'Amrita Vishwa Vidyapeetham',
    year: '2023',
  },
  {
    title: 'TechFest ’23 — Meshmerize',
    category: 'Maze / Autonomous Robotics',
    award: 'Third Position',
    institution: 'IIT Bombay',
    year: '2023',
  },
];

export const LEADERSHIP_AND_ACTIVITIES = {
  role: 'Head of Public Relations',
  event: 'Anokha Techfest',
  years: '2023 & 2024',
  description:
    'Spearheaded university-wide media outreach, cross-college promotional advertising campaigns, and public communications for one of South India’s premier collegiate technical festivals.',
  otherActivities: [
    'Debate & Public Speaking',
    'Community Service & Food Drives',
    'Peer Tutoring Initiatives',
    'Engineering Freelancing',
  ],
};
