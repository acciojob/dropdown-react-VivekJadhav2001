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
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const handleStateChange = (e) => {
    setStateIndex(Number(e.target.value));
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  const handleCityChange = (e) => {
    setCityIndex(Number(e.target.value));
    setLandmarkIndex(0);
  };

  const handleLandmarkChange = (e) => {
    setLandmarkIndex(Number(e.target.value));
  };

  const selectedState = states[stateIndex];
  const selectedCity = selectedState.city[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  return (
    <div id="main">
      {/* Title for Cypress test */}
      <h1 id="state-title">Dropdown React</h1>

      {/* Dropdowns */}
      <select id="state" onChange={handleStateChange}>
        {states.map((s, i) => (
          <option key={i} value={i}>
            {s.name}
          </option>
        ))}
      </select>

      <select id="city" onChange={handleCityChange}>
        {selectedState.city.map((c, i) => (
          <option key={i} value={i}>
            {c.name}
          </option>
        ))}
      </select>

      <select id="landmark" onChange={handleLandmarkChange}>
        {selectedCity.landmarks.map((l, i) => (
          <option key={i} value={i}>
            {l.name}
          </option>
        ))}
      </select>

      {/* Info Sections */}
      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>

      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>

      <div id="landmark-name">{selectedLandmark.name}</div>
      <div id="landmark-description">{selectedLandmark.description}</div>
    </div>
  );
}

export default DropdownReact;
