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
function chariHeader(chariObj) {
    let header = document.getElementById("header");
    let pokiName = document.createElement("h1");
    let pokiOrder = document.createElement("h1");
    let id = document.createElement("h2");
    pokiOrder.id = "pokOrder";
    pokiOrder.textContent = `${chariObj["order"]}`;
    pokiName.textContent = `${chariObj["name"]}`;
    pokiName.id = "pokiName";
    id.id = "id";
    id.textContent = `(${chariObj.id})`;
    header.appendChild(pokiOrder);
    header.appendChild(pokiName);
    header.appendChild(id);
};
function createPowers(chariObj) {
    let stati = chariObj["stats"];
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
            statSec.appendChild(moveText);
            statSec.appendChild(baseText);
            statSec.appendChild(effortText);
            stats.appendChild(statSec);
        }
    }
    let statSec = document.createElement("div");
    statSec.id = "statSec";
    let weightHeader = document.createElement("h1");
    weightHeader.id = "weight";
    weightHeader.textContent = "weight";
    let weightText = document.createElement("p");
    weightText.textContent = `${chariObj["weight"]}`;
    weightText.id = "base";
    statSec.appendChild(weightHeader);
    statSec.appendChild(weightText);
    stats.appendChild(statSec);
};
function createTypes(chariObj) {
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
let clicks = 1;
$("#izardHTML").on("click", function(){
    if(clicks == 1){
        chariHeader(chariObj);
        createPowers(chariObj);
        createTypes(chariObj);
        $("#click").hide();
    }
    clicks++;
})
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
$("#charBody").on("click", function(){
    let header1 = document.getElementById("header1")
    let pokimonName = document.createElement("h1");
    let dexOrd = document.createElement("h1");
    dexOrd.id = "pokOrder1";
    dexOrd.textContent = `${charmObj["order"]}`;
    pokimonName.textContent = `${charmObj["name"]}`;
    pokimonName.id = "pokiName1";
    let pokimonIdNum = document.createElement("h2");
    pokimonIdNum.id = "id1";
    pokimonIdNum.textContent = `(${charmObj.id})`;
    header1.appendChild(dexOrd);
    header1.appendChild(pokimonName);
    header1.appendChild(pokimonIdNum);
    let pokeType = charmObj["types"];
    let statistical = document.getElementById("stats1");
    for (pokType of pokeType) {
        let typesDiv = document.createElement("div");
        let typesText = document.createElement("h3");
        typesDiv.id = "fires";
        typesText.textContent = `${pokType.type.name}`;
        typesDiv.appendChild(typesText);
        statistical.appendChild(typesDiv);
    }
    let statis = charmObj["stats"];
    let i = 0;
    for (statistics in statis) {
        let statsArea = document.createElement("div");
        statsArea.id = "statSecs";
        if (statis[statistics]["stat"]["name"] != "hp") {
            let moveText = document.createElement("h1");
            let baseExpText = document.createElement("p");
            let effortText = document.createElement("p");
            moveText.textContent = `${statis[statistics]["stat"]["name"]}`;
            baseExpText.textContent = `base stat: ${statis[statistics]["base_stat"]}`;
            effortText.textContent = `effort: ${statis[statistics]["effort"]}`;
            statistical.appendChild(statsArea);
            statsArea.appendChild(moveText);
            statsArea.appendChild(baseExpText);
            statsArea.appendChild(effortText);
        } else {
            let baseExpText = document.createElement("h3");
            baseExpText.id = "hp";
            baseExpText.textContent = `${statis[statistics]["base_stat"]}`;
        }
        if (statis[statistics]["stat"]["name"] == "special-attack" || statis[statistics]["stat"]["name"] == "special-defense") {
            statsArea.id = "stat2";
        }
        if (statis[statistics]["stat"]["name"] == "speed") {
            statsArea.id = "stat3";
        }
    }
    let statsArea = document.createElement("div");
    statsArea.id = "statSecs3";
    let weightHead = document.createElement("h1");
    weightHead.textContent = "Weight";
    let weightStatText = document.createElement("p");
    weightStatText.textContent = `${charmObj["weight"]}`;
    statsArea.appendChild(weightHead);
    statsArea.appendChild(weightStatText);
    statistical.appendChild(statsArea);
})
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

let header2 = document.getElementById("header1");
let section2 = document.getElementById("stats1");
let charmeleonObj = JSON.parse(charmeleon);
function createsHeader(charmeleonObj) {
    const H1 = document.createElement("h1");
    H1.textContent = `${obj["name"]}`
    header2.appendChild(H1)
    const p1 = document.createElement("p");
    p1.textContent = `Base Experiance: ${obj["base_experience"]}`
    header2.appendChild(p1)
    const p2 = document.createElement("p");
    p2.textContent = `Height: ${obj["height"]}`
    header2.appendChild(p2)
    const p6 = document.createElement("p");
    p6.textContent = `Weight: ${obj["weight"]}`
    header2.appendChild(p6)
    const p3 = document.createElement("p");
    p3.textContent = `Order: ${obj["order"]}`
    header2.appendChild(p3)
    const p4 = document.createElement("p");
    p4.textContent = `Id: ${obj["id"]}`
    header2.appendChild(p4)
}

function createsSection(charmeleonObj) {
    const abilitie = charmeleonObj["abilities"];
    const types = charmeleonObj["types"];
    const status = charmeleonObj["stats"]
    for (tys in types) {
        const p7 = document.createElement("p");
        p7.textContent = `Slot: ${types[tys]["slot"]}`
        section2.appendChild(p7)
        const type = types[tys]["type"]
        for (ty in type) {
            const p9 = document.createElement("h2")
            p9.textContent = `Type:`
            section2.appendChild(p9)
            const p8 = document.createElement("p")
            p8.textContent = `${type["name"]}`
            section2.appendChild(p8)
        }
    }
    for (abil in abilitie) {
        const p5 = document.createElement("p");
        p5.textContent = `Abilities: ${abilitie[abil]["name"]}`
        section2.appendChild(p5)
    }
    for (stat in status) {
        const stats = status[stat]["stat"]
        for (st in stats) {
            const p11 = document.createElement("h3")
            p11.textContent = `${stats["name"]}`
            section2.appendChild(p11)
        }
        const p10 = document.createElement("p")
        p10.textContent = `${status[stat]["base_stat"]}`
        section2.appendChild(p10)
        const p12 = document.createElement("p")
        p12.textContent = `${status[stat]["effort"]}`
        section2.appendChild(p12)
    }
}
createsSection(charmeleonObj);
createsHeader(charmeleonObj)
