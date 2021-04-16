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

let charmObj = JSON.parse(charmander);

function chariHeader() {
    let header1 = document.getElementById("header1");
    let pokimonName = document.createElement("h1");
    let pokiOrder = document.createElement("h1");
    pokiOrder.id = "pokOrder1";
    pokiOrder.textContent = `${charmObj["order"]}`;
    pokimonName.textContent = `${charmObj["name"]}`;
    pokimonName.id = "pokiName1";
    let id = document.createElement("h2");
    id.id = "id1";
    id.textContent = `(${charmObj.id})`
    header1.appendChild(pokiOrder);
    header1.appendChild(pokimonName);
    header1.appendChild(id);
};
chariHeader(charmObj);


function createPowers() {
    let stati = charmObj["stats"];
    let i = 0;
    for (statistics in stati) {
        let statSec = document.createElement("div");
        statSec.id = "statSecs";
        if (stati[statistics]["stat"]["name"] == "hp") {
            let baseText = document.createElement("h3");
            baseText.id = "hp";
            baseText.textContent = `${stati[statistics]["base_stat"]}`;
            header1.appendChild(baseText);
        }
        if (stati[statistics]["stat"]["name"] != "hp") {
            let moveText = document.createElement("h1");
            let baseText = document.createElement("p");
            let effortText = document.createElement("p");
            moveText.textContent = `${stati[statistics]["stat"]["name"]}`;
            baseText.textContent = `base stat: ${stati[statistics]["base_stat"]}`;
            effortText.textContent = `effort: ${stati[statistics]["effort"]}`;
            stats1.appendChild(statSec);
            statSec.appendChild(moveText);
            statSec.appendChild(baseText);
            statSec.appendChild(effortText);
        }
        if (stati[statistics]["stat"]["name"] == "special-attack" || stati[statistics]["stat"]["name"] == "special-defense") {
            statSec.id = "statSecs2";
        }
        if (stati[statistics]["stat"]["name"] == "speed") {
            statSec.id = "statSecs3";
        }
    }
    let statSec = document.createElement("div");
    statSec.id = "statSecs3";
    let weightHeader = document.createElement("h1");
    weightHeader.textContent = "Weight";
    let weightText = document.createElement("p");
    weightText.textContent = `${charmObj["weight"]}`;
    statSec.appendChild(weightHeader);
    statSec.appendChild(weightText);
    stats1.appendChild(statSec);
};
createPowers();

function createTypes() {
    let types = charmObj["types"];
    for (typer of types) {
        let type = typer.type.name;
        let typeDiv = document.createElement("div");
        let typeText = document.createElement("h3");
        if (type == "fire") {
            typeDiv.id = "fires";
            typeText.textContent = `${type}`;
            typeDiv.appendChild(typeText);
        }
        stats1.appendChild(typeDiv);
    }
}
createTypes();
// Everett // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





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

// let header2 = document.getElementById("header1");
// let section2 = document.getElementById("stats1");
// let charmeleonObj = JSON.parse(charmeleon);

// createHeader(charmeleonObj);
// createSection(charmeleonObj);

// function createHeader(obj){
//     const H1 = document.createElement("h1");
//     H1.textContent = `${obj["name"]}`
//     header2.appendChild(H1)

//     const p1 = document.createElement("p");
//     p1.textContent = `Base Experiance: ${obj["base_experience"]}`
//     header2.appendChild(p1)


//     const p2 = document.createElement("p");
//     p2.textContent = `Height: ${obj["height"]}`
//     header2.appendChild(p2)
//     const p6 = document.createElement("p");
//     p6.textContent = `Weight: ${obj["weight"]}`
//     header2.appendChild(p6)
//     const p3 = document.createElement("p");
//     p3.textContent = `Order: ${obj["order"]}`
//     header2.appendChild(p3)
//     const p4 = document.createElement("p");
//     p4.textContent = `Id: ${obj["id"]}`
//     header2.appendChild(p4)
//     }

// function createSection(obj){
//     const abilitie = obj["abilities"];

//     const types = obj["types"];

//     const status = obj["stats"]

//     for(tys in types){
//         const p7 = document.createElement("p");
//         p7.textContent = `Slot: ${types[tys]["slot"]}`
//         section2.appendChild(p7)
//         const type = types[tys]["type"]
//         for(ty in type){

//             const p9 = document.createElement("h2")
//             p9.textContent = `Type:`
//             section2.appendChild(p9)
//             const p8 = document.createElement("p")
//             p8.textContent = `${type["name"]}`
//             section2.appendChild(p8)
//         }
//     }


//     for(abil in abilitie){
//         const p5 = document.createElement("p");
//         p5.textContent = `Abilities: ${abilitie[abil]["name"]}`
//         section2.appendChild(p5)
//     }

//     for(stat in status){

//         const stats = status[stat]["stat"]

//         for(st in stats){
//             const p11 = document.createElement("h3")
//             p11.textContent = `${stats["name"]}`
//             section2.appendChild(p11)
//         }

//         const p10 = document.createElement("p")
//         p10.textContent = `${status[stat]["base_stat"]}`
//         section2.appendChild(p10)

//         const p12 = document.createElement("p")
//         p12.textContent = `${status[stat]["effort"]}`
//         section2.appendChild(p12)


//     }




<<<<<<< HEAD
// }




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

function chariHeader() {
    let header = document.getElementById("header")
    let pokiName = document.createElement("h1");
    let pokiOrder = document.createElement("h1");
    pokiOrder.id = "pokOrder";
    pokiOrder.textContent = `${chariObj["order"]}`;
    pokiName.textContent = `${chariObj["name"]}`;
    pokiName.id = "pokiName";
    let id = document.createElement("h2");
    id.id = "id";
    id.textContent = `(${chariObj.id})`
    header.appendChild(pokiOrder);
    header.appendChild(pokiName);
    header.appendChild(id);
};
chariHeader(chariObj);

function chariPicture() {
    let picture = document.getElementById("picute");
};
chariPicture();

function createPowers() {
    let stati = chariObj["stats"];
    let i = 0;
    for (statistics in stati) {
        let statSec = document.createElement("div");
        statSec.id = "statSec";
        if (stati[statistics]["stat"]["name"] == "hp") {
            let baseText = document.createElement("h1");
            baseText.id = "health";
            baseText.textContent = `${stati[statistics]["base_stat"]}`;
            header.appendChild(baseText);
        }
        if (stati[statistics]["stat"]["name"] != "hp") {
            let moveText = document.createElement("h1");
            moveText.id = "move";
            let baseText = document.createElement("p");
            baseText.id = "base";
            let effortText = document.createElement("p");
            effortText.id = "effort"
            moveText.textContent = `${stati[statistics]["stat"]["name"]}`;
            baseText.textContent = `base stat: ${stati[statistics]["base_stat"]}`;
            effortText.textContent = `effort: ${stati[statistics]["effort"]}`;
            stats.appendChild(statSec);
            statSec.appendChild(moveText);
            statSec.appendChild(baseText);
            statSec.appendChild(effortText);
        }
        if (stati[statistics]["stat"]["name"] == "special-attack" || stati[statistics]["stat"]["name"] == "special-defense") {
            statSec.id = "statSec2";
        }
        if (stati[statistics]["stat"]["name"] == "speed") {
            statSec.id = "statSec3";
        }
    }
    let statSec = document.createElement("div");
    statSec.id = "statSec3";
    let weightHeader = document.createElement("h1");
    weightHeader.textContent = "Weight";
    let weightText = document.createElement("p");
    weightText.textContent = `${chariObj["weight"]}`;
    statSec.appendChild(weightHeader);
    statSec.appendChild(weightText);
    stats.appendChild(statSec);
};
createPowers();

function createTypes() {
    let types = chariObj["types"];
    let typeDiv = document.createElement("div");
    for (typer of types) {
        let type = typer.type.name;
        typeDiv.id = "typeDiv";
        let typeText = document.createElement("h3");
        if (type == "fire") {
            typeText.id = "fire";
            typeText.textContent = `${type}`;
            typeDiv.appendChild(typeText);
        } else {
            typeText.id = "flying";
            typeText.textContent = `${type}`;
            typeDiv.appendChild(typeText);
        }
        stats.appendChild(typeDiv);
    }
}
createTypes();
=======
// }
>>>>>>> 3dafefc766c1e30628024c6892adfe2d9be19a0b
