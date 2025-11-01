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
                    "Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples.",
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
            "Jharkhand is a state in eastern India. It's known for its waterfalls, temples, and wildlife.",
        city: [
            {
                name: "Dhanbad",
                description:
                    "Dhanbad is the second-most populated city in the Indian state of Jharkhand.",
                landmarks: [
                    {
                        name: "IIT(ISM) Dhanbad",
                        description:
                            "Indian Institute of Technology (ISM) Dhanbad is a premier institute in India.",
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
                    "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district.",
                landmarks: [
                    {
                        name: "Pandey muhalla",
                        description: "Located behind the dhanbad junction; must visit place.",
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
                    "Hazaribagh is a city and a municipal corporation in Hazaribagh district.",
                landmarks: [
                    {
                        name: "Shaheed Nirmal Mahto Park",
                        description: "Famous for its giant dinosaur structure",
                    },
                    {
                        name: "Gandhi Maidan",
                        description: "Ideal for conducting major events",
                    },
                ],
            },
        ],
    },

    {
        name: "Assam",
        description:
            "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations.",
        city: [
            {
                name: "Guwahati",
                description:
                    "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam.",
                landmarks: [
                    {
                        name: "Ganesh Guri",
                        description: "Famous because of PVR city center.",
                    },
                    {
                        name: "Kalyani Nagar",
                        description: "Located near famous Lakshmi Nagar",
                    },
                ],
            },
            {
                name: "Dimapur",
                description:
                    "Dimapur is a city in Nagaland (listed here for the test data).",
                landmarks: [
                    {
                        name: "City Tower",
                        description: "Giant Tower standing by the road since history.",
                    },
                    {
                        name: "Sunday Market",
                        description: "Famous for its weekend sale on all items.",
                    },
                ],
            },
            {
                name: "Tezpur",
                description:
                    "Tezpur is an urban agglomeration in Sonitpur district, Assam state, India.",
                landmarks: [
                    {
                        name: "Bamuni Hills",
                        description: "Best location for photoshoots",
                    },
                    {
                        name: "Bhujkhowa Bazar",
                        description: "Central Market for Tezpur",
                    },
                ],
            },
        ],
    },

    {
        name: "Bihar",
        description:
            "Bihar is a state in East India, bordering Nepal. Important Buddhist pilgrimage sites include Bodh Gaya.",
        city: [
            {
                name: "Patna",
                description:
                    "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar.",
                landmarks: [
                    {
                        name: "Sonpur",
                        description:
                            "Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River.",
                    },
                    {
                        name: "Maner",
                        description:
                            "Maner (Maner Sharif) is a notable satellite landmark in Patna Metropolitan Region.",
                    },
                ],
            },
            {
                name: "Gaya",
                description:
                    "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar.",
                landmarks: [
                    {
                        name: "Bakraur",
                        description:
                            "Bakraur is a village located slightly east of Bodh Gaya; lies across the Phalgu River from Bodh Gaya.",
                    },
                    {
                        name: "Barachatti",
                        description:
                            "Barachatti is a block in the Gaya district of Bihar. It contains many villages and panchayats.",
                    },
                ],
            },
            {
                name: "Darbhanga",
                description:
                    "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar.",
                landmarks: [
                    {
                        name: "Singhwara",
                        description: "Famous for its Groundnut Market",
                    },
                    {
                        name: "Jale",
                        description: "Famous for its roasted seeds market.",
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