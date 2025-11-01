import React, { useState, useEffect } from "react";

// const states = [
//     {
//         name: "Madhya Pradesh",
//         description:
//             "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
//         city: [
//             {
//                 name: "Indore",
//                 description:
//                     "Indore is a city in west-central India. It's known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore's 19th-century Holkar dynasty.",
//                 landmarks: [
//                     {
//                         name: "Mhow",
//                         description:
//                             "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",

//                     },
//                     {
//                         name: "Dewas",
//                         description:
//                             "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
//                     },
//                 ],
//             },
//             {
//                 name: "Bhopal",
//                 description:
//                     "DBhopal is a city in the central Indian state of Madhya Pradesh. It\'s one of India\'s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
//                 landmarks: [
//                     {
//                         name: "MANIT",
//                         description:
//                             "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
//                     },
//                     {
//                         name: "Berasia",
//                         description:
//                             'Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ',
//                     },
//                 ],
//             },
//             {
//                 name: "Gwalior",
//                 description:
//                     'Gwalior is a city in the central Indian state of Madhya Pradesh. It\'s known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ',
//                 landmarks: [
//                     {
//                         name: "Ajaypur",
//                         description: "Little less known city Ajaypur.",
//                     },
//                 ],
//             },
//         ],
//     },

//     {
//         name: "Jharkhand",
//         description:
//             'Jharkhand is a state in eastern India. It\'s known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.',
//         city: [
//             {
//                 name: "Dhanbad",
//                 description:
//                     'Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.',
//                 landmarks: [
//                     {
//                         name: "IIT(ISM) Dhanbad",
//                         description:
//                             "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
//                     },
//                     {
//                         name: "Hirapur",
//                         description:
//                             "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
//                     },
//                 ],
//             },
//             {
//                 name: "Wasseypur",
//                 description:
//                     "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
//                 landmarks: [
//                     {
//                         name: "Pandey muhalla",
//                         description: "Located behind the dhanbad junction is must visit place.",
//                     },
//                     {
//                         name: "MPI Hall",
//                         description: "Space for everyone",
//                     },
//                 ],
//             },
//             {
//                 name: "Hazaribagh",
//                 description:
//                     "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
//                 landmarks: [
//                     {
//                         name: "Shaheed Nirmal Mahto Park",
//                         description: "Famous for its giant dinosaur structure",
//                     },
//                     {
//                         name: "Gandhi Maidan",
//                         description: 'Ideal for conduction major events',
//                     },
//                 ],
//             },
//         ],
//     },

//     {
//         name: "Assam",
//         description:
//             "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
//         city: [
//             {
//                 name: "Guwhati", // <-- change here
//                 description:
//                     "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It\'s known for holy sites like the hilltop Kamakhya Temple,",
//                 landmarks: [
//                     {
//                         name: "Ganesh Guri",
//                         description:
//                             "Famous because of PVR city center.",
//                     },
//                     {
//                         name: "Kalyani Nagar",
//                         description:
//                             "A well-known residential and business neighborhood located near Lakshmi Nagar, offering a mix of modern lifestyle, cafes, and green spaces for families.",
//                     },
//                 ],
//             },
//             {
//                 name: "Dimapur",
//                 description:
//                     "Dimapur, though officially in Nagaland, is often associated with Assam due to its proximity and connectivity. It serves as the commercial capital of Nagaland.",
//                 landmarks: [
//                     {
//                         name: "City Tower",
//                         description:
//                             "A prominent landmark in the heart of Dimapur, City Tower stands as a symbol of the city’s vibrant commercial life, surrounded by busy streets and shops.",
//                     },
//                     {
//                         name: "Sunday Market",
//                         description:
//                             "A colorful and lively market famous for its weekend hustle, offering everything from local produce to handcrafted goods and unique traditional items.",
//                     },
//                 ],
//             },
//             {
//                 name: "Tezpur",
//                 description:
//                     "Tezpur, located in the Sonitpur district of Assam, is often referred to as the 'Cultural Capital of Assam'. Known for its scenic beauty, ancient temples, and mythological significance.",
//                 landmarks: [
//                     {
//                         name: "Bamuni Hills",
//                         description:
//                             "An archaeological site famous for its ancient stone carvings and sculptures, Bamuni Hills is also a favorite location for photography enthusiasts due to its stunning views.",
//                     },
//                     {
//                         name: "Bhujkhowa Bazar",
//                         description:
//                             "The central marketplace of Tezpur, Bhujkhowa Bazar is always buzzing with life, offering a wide variety of local produce, crafts, and traditional Assamese goods.",
//                     },
//                 ],
//             },
//         ],
//     },

//     {
//         name: "Bihar",
//         description:
//             "Bihar, located in eastern India, is one of the oldest inhabited regions in the world and holds immense historical, cultural, and spiritual importance. Known as the birthplace of Buddhism and Jainism.",
//         city: [
//             {
//                 name: "Patna",
//                 description:
//                     "Patna, the capital of Bihar, is one of the world’s oldest continuously inhabited cities, located along the southern bank of the Ganges River.",
//                 landmarks: [
//                     {
//                         name: "Sonpur",
//                         description:
//                             "Famous for the Sonpur Cattle Fair, one of Asia’s largest animal fairs, Sonpur lies at the confluence of the Ganges and Gandak rivers and holds immense cultural and trade significance.",
//                     },
//                     {
//                         name: "Maner",
//                         description:
//                             "Maner, also known as Maner Sharif, is a historic town near Patna renowned for its ancient Sufi shrines and as a center of spirituality and architecture dating back several centuries.",
//                     },
//                 ],
//             },
//             {
//                 name: "Gaya",
//                 description:
//                     "Gaya is a sacred city located on the banks of the Falgu River in Bihar. It holds immense religious importance for both Hindus and Buddhists. ",
//                 landmarks: [
//                     {
//                         name: "Bakraur",
//                         description:
//                             "Situated just across the Falgu River from Bodh Gaya, Bakraur is believed to be the home of Sujata, the woman who offered food to Gautama Buddha before his enlightenment — a key moment in Buddhist history.",
//                     },
//                     {
//                         name: "Barachatti",
//                         description:
//                             "A developing block in Gaya district, Barachatti is known for its rich agricultural surroundings and growing importance as a connecting region for travelers moving toward Jharkhand and southern Bihar.",
//                     },
//                 ],
//             },
//             {
//                 name: "Darbhanga",
//                 description:
//                     "Darbhanga, often referred to as the cultural heart of Bihar, is a historic city known for its royal heritage, palaces, and contributions to Maithili culture and music.",
//                 landmarks: [
//                     {
//                         name: "Singhwara",
//                         description:
//                             "A well-known town near Darbhanga, Singhwara is famous for its bustling groundnut market and serves as a key agricultural trading point in the region.",
//                     },
//                     {
//                         name: "Jale",
//                         description:
//                             "Located in the Darbhanga district, Jale is known for its traditional roasted seeds market and its contribution to local trade and community gatherings.",
//                     },
//                 ],
//             },
//         ],
//     },

// ];


const states = [{
	name : "Madhya Pradesh",
	description:"Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
	city :[{
		name : "Indore",
		description:"Indore is a city in west-central India. It's known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore's 19th-century Holkar dynasty.",
		landmarks :[{
			name : "Mhow",
			description:"Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",				
		},{
			name : "Dewas",
			description:"Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
		}]
	},{
		name : "Bhopal",
		description:"DBhopal is a city in the central Indian state of Madhya Pradesh. It's one of India's greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
		landmarks :[{
			name : "MANIT",
			description:"Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
		},{
			name: "Berasia",
			description:"Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
		}]
	},{
		name : "Gwalior",
		description:"Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
		landmarks :[{
			name : "Ajaypur",
			description:"Little less known city Ajaypur.",
		}]
	}]
},{
	name : "Jharkhand",
	description:"Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
	city :[{
		name : "Dhanbad",
		description:"Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
		landmarks :[{
			name : "IIT(ISM) Dhanbad",
			description:"Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
		},{
			name : "Hirapur",
			description:"Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
		}]
	},{
		name : "Wasseypur",
		description:"Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
		landmarks :[{
			name : "Pandey muhalla",
			description:"Located behind the dhanbad junction is must visit place.",
		},{
			name : "MPI Hall",
			description:"Space for everyone",
		}]
	},{
		name : "Hazaribagh",
		description:"Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
		landmarks :[{
			name : "Shaheed Nirmal Mahto Park",
			description:"Famous for its giant dinosaur structure",
		},{
			name : "Gandhi Maidan",
			description:"Ideal for conduction major events",
		}]
	}]
},{
	name : "Assam",
	description:"Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
	city :[{
		name : "Guwhati",
		description:"Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It's known for holy sites like the hilltop Kamakhya Temple,",
		landmarks :[{
			name : "Ganesh Guri",
			description:"Famous because of PVR city center.",
		},{
			name : "Kalyani Nagar",
			description:"located near famous Lakshmi Nagar",
		}]
	},{
		name : "dimapur",
		description:"Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
		landmarks :[{
			name : "City Tower",
			description:"Giant Tower standing by the road since history.",
		},{
			name : "Sunday Market",
			description:"Famous for its weekend Sale on all items.",
		}]
	},{
		name : "Tezpur",
		description:"Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
		landmarks :[{
			name : "Bamuni Hills",
			description:"Best location for photoshoots",
		},{
			name : "Bhujkhowa Bazar",
			description:"Central Market for Tezpur",
		}]
	}]
},{
	name : "Bihar",
	description:"Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
	city :[{
		name : "Patna",
		description:"Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
		landmarks :[{
			name : "Sonpur",
			description:"Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
		},{
			name : "Maner",
			description:"Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
		}]
	},{
		name : "Gaya",
		description:"Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It's known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
		landmarks :[{
			name : "Bakraur",
			description:"Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
		},{
			name : "Barachatti",
			description:"Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
		}]	
	},{
		name : "Darbhanga",
		description:"Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
		landmarks :[{
			name : "Singhwara",
			description:"Famous for its Groundnut Market",
		},{
			name : "Jale",
			description:"Famous for its roasted seads market.",
		}]
	}]
}];


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