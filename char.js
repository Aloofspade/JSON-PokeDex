// Everett // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// let header2 = document.getElementById("header2");
// let section = document.getElementById("stats2");
// let charmanderObj = JSON.parse(charmander);





// function createCard(obj) {
//     const H1 = document.createElement("h1")
//     const DIV = document.createElement("div")
//     DIV.className = document.createElement("card-body")
//     H1.className = `${"card-title"}`
//     H1.textContent = `${obj["name"]}`
//     header2.appendChild(H1)
//     const p1 = document.createElement("p");
//     p1.textContent = `Base Experiance: ${obj["base_experience"]}`
//     header2.appendChild(p1)

//     const p2 = document.createElement("p");
//     p2.textContent = `Height: ${obj["height"]}`
//     header2.appendChild(p2)
//     const p3 = document.createElement("p");
//     p3.textContent = `Order: ${obj["order"]}`
//     header2.appendChild(p3)
// }

// createCard(charmanderObj);
// // Everett // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
let picture = document.getElementById("picute");
let stats = document.getElementById("stats");
function chariHeader() {
    let header = document.getElementById("header");
    let pokiName = document.createElement("h1");
    let pokiOrder = document.createElement("h1");
    pokiOrder.id = "pokOrder";
    pokiOrder.textContent = `${chariObj["order"]}`;
    pokiName.textContent = `${chariObj["name"]}`;
    pokiName.id = "pokiName";
    header.appendChild(pokiOrder);
    header.appendChild(pokiName);
};
chariHeader();
function chariPictue() {
};
chariPictue();
function createPowers() {
    let stati = chariObj["stats"];
    let i = 0;
    for (statistics in stati) {
        let statSec = document.createElement("div");
        statSec.id = "statSec";
        if(stati[statistics]["stat"]["name"] == "hp"){
            let baseText = document.createElement("h3");
            baseText.id = "health";
            baseText.textContent = `${stati[statistics]["base_stat"]}`;
            header.appendChild(baseText);
        }
        if (stati[statistics]["stat"]["name"] != "hp") {
            let moveText = document.createElement("h1");
            let baseText = document.createElement("p");
            let effortText = document.createElement("p");
            moveText.textContent = `${stati[statistics]["stat"]["name"]}`;
            baseText.textContent = `base stat: ${stati[statistics]["base_stat"]}`;
            effortText.textContent = `effort: ${stati[statistics]["effort"]}`;
            if(stati[statistics]["stat"]["name"] == "special attack"){
                statSec.id = "statSec2";
                i = 0;
            }
            if(stati[statistics]["stat"]["name"] == "speed"){
                statSec.id = "statSec3";
            }
            stats.appendChild(statSec);
            statSec.appendChild(moveText);
            statSec.appendChild(baseText);
            statSec.appendChild(effortText);
        }
    }
};
createPowers();


// let header2 = document.getElementById("header1");
// let section2 = document.getElementById("stats1");
// let charmeleonObj = JSON.parse(charmeleon);
// createHeader(charmeleonObj);
// // createSection(charmeleonObj);
// function createHeader(obj) {
//     const H1 = document.createElement("h1");
//     H1.textContent = `${obj["name"]}`
//     header2.appendChild(H1)
//     const p1 = document.createElement("p");
//     p1.textContent = `Base Experiance: ${obj["base_experience"]}`
//     header2.appendChild(p1)
//     const p2 = document.createElement("p");
//     p2.textContent = `Height: ${obj["height"]}`
//     header2.appendChild(p2)
//     const p3 = document.createElement("p");
//     p3.textContent = `Order: ${obj["order"]}`
//     header2.appendChild(p3)
// }

// // function createSection(obj){

// //     const status = obj["types"];

// //     for(stat in status){
// //         const p1 = document.createElement("p");
// //         p1.textContent = `${status[stat]["type"]}`
// //         header2.appendChild(p1)
// //     }


// // }