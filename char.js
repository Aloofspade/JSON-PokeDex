let charmander = `{
    "abilities": [{
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "charmander",
    "order": 5,
    "stats": [{
            "base_stat": 39,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 52,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 43,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 50,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 65,
            "effort": 1,
            "stat": {
                "name": "speed"
            }
        }
    ],
    "types": [{
        "slot": 1,
        "type": {
            "name": "fire"
        }
    }],
    "weight": 85
}`;


let charmeleon = `{
    "abilities": [{
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "Charmeleon",
    "order": 6,
    "stats": [{
            "base_stat": 58,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 64,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 58,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 65,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
                "name": "speed"
            }
        }
    ],
    "types": [{
        "slot": 1,
        "type": {
            "name": "fire"
        }
    }],
    "weight": 190
}`;

let charizard = `{
    "abilities": [{
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [{
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 84,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 109,
            "effort": 3,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 85,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 100,
            "effort": 0,
            "stat": {
                "name": "speed"
            }
        }
    ],
    "types": [{
            "slot": 1,
            "type": {
                "name": "fire"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "flying"
            }
        }
    ],
    "weight": 905
}`;


let chariObj = JSON.parse(charizard);
let header = document.getElementById("header");
let picture = document.getElementById("picute");
let pokiName = document.createElement("H1");
let pokID = document.createElement("H1");
pokID.id = "pokID";
pokID.textContent = `${chariObj["id"]}`;
pokiName.textContent = `${chariObj["name"]}`;
pokiName.id = "pokiName";
header.appendChild(pokiName);
header.appendChild(pokID);
let pokimonName = document.createElement("H1");
header.appendChild(pokimonName);
let stats = document.getElementById("stats");
function chariHeader() {
};
function chariPictue() {
};
chariPictue();
function createPowers() {
    let exp = document.createElement("p");
    exp.textContent = `Base Exp ${chariObj["base_experience"]}`;
    exp.id = "exp";
    stats.appendChild(exp);
};
createPowers();


let header2 = document.getElementById("header1");
let section2 = document.getElementById("stats1");
let charmeleonObj = JSON.parse(charmeleon);

createHeader(charmeleonObj);
// createSection(charmeleonObj);

function createHeader(obj) {
    const H1 = document.createElement("h1");
    H1.textContent = `${obj["name"]}`
    header2.appendChild(H1)

    const p1 = document.createElement("p");
    p1.textContent = `Base Experiance: ${obj["base_experience"]}`
    header2.appendChild(p1)

    const p2 = document.createElement("p");
    p2.textContent = `Height: ${obj["height"]}`
    header2.appendChild(p2)
    const p3 = document.createElement("p");
    p3.textContent = `Order: ${obj["order"]}`
    header2.appendChild(p3)



}

// function createSection(obj){

//     const status = obj["types"];

//     for(stat in status){
//         const p1 = document.createElement("p");
//         p1.textContent = `${status[stat]["type"]}`
//         header2.appendChild(p1)
//     }


// }


