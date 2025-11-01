import React, { useState, useEffect } from "react";

const states = [
    {
        name: "Madhya Pradesh",
        description:
            "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
        city: [
            {
                name: "Indore",
                description:
                    "Indore is a city in west-central India. It's known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore's 19th-century Holkar dynasty.",
                landmarks: [
                    {
                        name: "Mhow",
                        description:
                            "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",

                    },
                    {
                        name: "Dewas",
                        description:
                            "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
                    },
                ],
            },
            {
                name: "Bhopal",
                description:
                    "DBhopal is a city in the central Indian state of Madhya Pradesh. It\'s one of India\'s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
                landmarks: [
                    {
                        name: "MANIT",
                        description:
                            "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
                    },
                    {
                        name: "Berasia",
                        description:
                            'Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ',
                    },
                ],
            },
            {
                name: "Gwalior",
                description:
                    'Gwalior is a city in the central Indian state of Madhya Pradesh. It\'s known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ',
                landmarks: [
                    {
                        name: "Ajaypur",
                        description: "Little less known city Ajaypur.",
                    },
                ],
            },
        ],
    },

    {
        name: "Jharkhand",
        description:
            'Jharkhand is a state in eastern India. It\'s known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.',
        city: [
            {
                name: "Dhanbad",
                description:
                    'Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.',
                landmarks: [
                    {
                        name: "IIT(ISM) Dhanbad",
                        description:
                            "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
                    },
                    {
                        name: "Hirapur",
                        description:
                            "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
                    },
                ],
            },
            {
                name: "Wasseypur",
                description:
                    "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
                landmarks: [
                    {
                        name: "Pandey muhalla",
                        description: "Located behind the dhanbad junction is must visit place.",
                    },
                    {
                        name: "MPI Hall",
                        description: "Space for everyone",
                    },
                ],
            },
            {
                name: "Hazaribagh",
                description:
                    "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
                landmarks: [
                    {
                        name: "Shaheed Nirmal Mahto Park",
                        description: "Famous for its giant dinosaur structure",
                    },
                    {
                        name: "Gandhi Maidan",
                        description: 'Ideal for conduction major events',
                    },
                ],
            },
        ],
    },

    {
        name: "Assam",
        description:
            "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
        city: [
            {
                name: "Guwhati", // <-- change here
                description:
                    "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It\'s known for holy sites like the hilltop Kamakhya Temple,",
                landmarks: [
                    {
                        name: "Ganesh Guri",
                        description:
                            "A bustling commercial area in Guwahati, Ganesh Guri is known for its shopping complexes, eateries, and the popular PVR City Center that draws both locals and tourists alike.",
                    },
                    {
                        name: "Kalyani Nagar",
                        description:
                            "A well-known residential and business neighborhood located near Lakshmi Nagar, offering a mix of modern lifestyle, cafes, and green spaces for families.",
                    },
                ],
            },
            {
                name: "Dimapur",
                description:
                    "Dimapur, though officially in Nagaland, is often associated with Assam due to its proximity and connectivity. It serves as the commercial capital of Nagaland.",
                landmarks: [
                    {
                        name: "City Tower",
                        description:
                            "A prominent landmark in the heart of Dimapur, City Tower stands as a symbol of the city’s vibrant commercial life, surrounded by busy streets and shops.",
                    },
                    {
                        name: "Sunday Market",
                        description:
                            "A colorful and lively market famous for its weekend hustle, offering everything from local produce to handcrafted goods and unique traditional items.",
                    },
                ],
            },
            {
                name: "Tezpur",
                description:
                    "Tezpur, located in the Sonitpur district of Assam, is often referred to as the 'Cultural Capital of Assam'. Known for its scenic beauty, ancient temples, and mythological significance.",
                landmarks: [
                    {
                        name: "Bamuni Hills",
                        description:
                            "An archaeological site famous for its ancient stone carvings and sculptures, Bamuni Hills is also a favorite location for photography enthusiasts due to its stunning views.",
                    },
                    {
                        name: "Bhujkhowa Bazar",
                        description:
                            "The central marketplace of Tezpur, Bhujkhowa Bazar is always buzzing with life, offering a wide variety of local produce, crafts, and traditional Assamese goods.",
                    },
                ],
            },
        ],
    },

    {
        name: "Bihar",
        description:
            "Bihar, located in eastern India, is one of the oldest inhabited regions in the world and holds immense historical, cultural, and spiritual importance. Known as the birthplace of Buddhism and Jainism.",
        city: [
            {
                name: "Patna",
                description:
                    "Patna, the capital of Bihar, is one of the world’s oldest continuously inhabited cities, located along the southern bank of the Ganges River.",
                landmarks: [
                    {
                        name: "Sonpur",
                        description:
                            "Famous for the Sonpur Cattle Fair, one of Asia’s largest animal fairs, Sonpur lies at the confluence of the Ganges and Gandak rivers and holds immense cultural and trade significance.",
                    },
                    {
                        name: "Maner",
                        description:
                            "Maner, also known as Maner Sharif, is a historic town near Patna renowned for its ancient Sufi shrines and as a center of spirituality and architecture dating back several centuries.",
                    },
                ],
            },
            {
                name: "Gaya",
                description:
                    "Gaya is a sacred city located on the banks of the Falgu River in Bihar. It holds immense religious importance for both Hindus and Buddhists. ",
                landmarks: [
                    {
                        name: "Bakraur",
                        description:
                            "Situated just across the Falgu River from Bodh Gaya, Bakraur is believed to be the home of Sujata, the woman who offered food to Gautama Buddha before his enlightenment — a key moment in Buddhist history.",
                    },
                    {
                        name: "Barachatti",
                        description:
                            "A developing block in Gaya district, Barachatti is known for its rich agricultural surroundings and growing importance as a connecting region for travelers moving toward Jharkhand and southern Bihar.",
                    },
                ],
            },
            {
                name: "Darbhanga",
                description:
                    "Darbhanga, often referred to as the cultural heart of Bihar, is a historic city known for its royal heritage, palaces, and contributions to Maithili culture and music.",
                landmarks: [
                    {
                        name: "Singhwara",
                        description:
                            "A well-known town near Darbhanga, Singhwara is famous for its bustling groundnut market and serves as a key agricultural trading point in the region.",
                    },
                    {
                        name: "Jale",
                        description:
                            "Located in the Darbhanga district, Jale is known for its traditional roasted seeds market and its contribution to local trade and community gatherings.",
                    },
                ],
            },
        ],
    },

];

const DropdownReact = () => {
    const [stateIndex, setStateIndex] = useState(0);
    const [cityIndex, setCityIndex] = useState(0);
    const [landmarkIndex, setLandmarkIndex] = useState(0);

    const [state, setState] = useState(states[0]);
    const [city, setCity] = useState(states[0].city[0]);
    const [landmark, setLandmark] = useState(states[0].city[0].landmarks[0]);

    useEffect(() => {
        setState(states[stateIndex]);
        setCity(states[stateIndex].city[0]);
        setLandmark(states[stateIndex].city[0].landmarks[0]);
        setCityIndex(0);
        setLandmarkIndex(0);
    }, [stateIndex]);

    useEffect(() => {
        setCity(states[stateIndex].city[cityIndex]);
        setLandmark(states[stateIndex].city[cityIndex].landmarks[0]);
        setLandmarkIndex(0);
    }, [cityIndex]);

    useEffect(() => {
        setLandmark(states[stateIndex].city[cityIndex].landmarks[landmarkIndex]);
    }, [landmarkIndex]);

    return (
        <div>
            <h1 id="state-title">{state.name}</h1>

            {/* Dropdowns */}
            <select
                id="state"
                value={stateIndex}
                onChange={(e) => setStateIndex(Number(e.target.value))}
            >
                {states.map((s, i) => (
                    <option key={i} value={i}>
                        {s.name}
                    </option>
                ))}
            </select>

            <select
                id="city"
                value={cityIndex}
                onChange={(e) => setCityIndex(Number(e.target.value))}
            >
                {state.city.map((c, i) => (
                    <option key={i} value={i}>
                        {c.name}
                    </option>
                ))}
            </select>

            <select
                id="landmark"
                value={landmarkIndex}
                onChange={(e) => setLandmarkIndex(Number(e.target.value))}
            >
                {city.landmarks.map((l, i) => (
                    <option key={i} value={i}>
                        {l.name}
                    </option>
                ))}
            </select>

            {/* State Info */}
            <h1 id="state-name">{state.name}</h1>
            <div id="state-description">{state.description}</div>

            {/* City Info */}
            <h1 id="city-title">{city.name}</h1>
            <div id="city-description">{city.description}</div>

            {/* Landmark Info */}
            <h1 id="landmark-title">{landmark.name}</h1>
            <div id="landmark-description">{landmark.description}</div>
        </div>
    );
};

export default DropdownReact;