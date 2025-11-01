import React, { useState } from "react";


const states = [
    {
        name: "Madhya Pradesh",
        description:
            "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
        city: [
            {
                name: "Indore",
                description:
                    "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
                landmarks: [
                    {
                        name: "Mhow",
                        description:
                            "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India.",
                    },
                    {
                        name: "Dewas",
                        description:
                            "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh.",
                    },
                ],
            },
            {
                name: "Bhopal",
                description:
                    "Bhopal is a city in the central Indian state of Madhya Pradesh.",
                landmarks: [
                    {
                        name: "MANIT",
                        description:
                            "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India.",
                    },
                    {
                        name: "Berasia",
                        description:
                            "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India.",
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
        ],
    },
];

function DropdownReact() {

    const [stateIndex, setStateIndex] = useState(0)
    const [cityIndex,setCityIndex] = useState(0)
    const [landmarkIndex, setLandmarkIndex] = useState(0)


    const selectedState = states[stateIndex]
    const selectedCity = selectedState.city[cityIndex]
    const selectedLandmark = selectedCity.landmarks[landmarkIndex]

    function handleStateChange(e){
        const newState = e.target.value

        setStateIndex(newState)
        // setCityIndex(0)
        // setLandmarkIndex(0)
    }

    function handleCityChange(e){
        const newCity = e.target.value;

        setCityIndex(newCity)
        // setLandmarkIndex(0)
    }

    function handleLandmarkChange(e){
        const newLandmark = e.target.value;

        setLandmarkIndex(newLandmark)
    }

    return (
        <div id="main" className="bg-gray-900 h-screen text-white p-4 flex justify-around items-center flex-col">
            <div className="flex justify-center items-center gap-3.5">
                <div >
                    <select id="state" className="text-black bg-white p-2 cursor-pointer" onChange={handleStateChange}>
                        {states.map((state, i) => {
                            return <option key={i} value={i}>{state.name}</option>
                        })}
                    </select>
                </div>

                <div>
                    <select id="city" className="text-black bg-white p-2 cursor-pointer" onChange={handleCityChange}>
                        {selectedState.city.map((city, index) => (
                            <option key={index} value={index}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <select id="landmark" className="text-black bg-white p-2 cursor-pointer" onChange={handleLandmarkChange}>
                        {selectedCity.landmarks.map((landmark, index) => (
                            <option key={index} value={index}>
                                {landmark.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            <div className=" border-2 border-white flex flex-col gap-6 justify-center items-center w-[60%]">
                <div className="">
                    <div id="state-name">{states[stateIndex].name}</div>
                    <div id="state-description">{states[stateIndex].description}</div>
                </div>
                <div className="">
                    <div id="city-name">{states[stateIndex].city[cityIndex].name}</div>
                    <div id="city-description">{states[stateIndex].city[cityIndex].description}</div>
                </div>
                <div className="">
                    <div id="landmark-name">{states[stateIndex].city[cityIndex].landmarks[landmarkIndex].name}</div>
                    <div id="landmark-description">{states[stateIndex].city[cityIndex].landmarks[landmarkIndex].description}</div>
                </div>
            </div>






        </div>

    )
}

export default DropdownReact