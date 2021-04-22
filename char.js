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


// let chariObj = JSON.parse(charizard);

// function chariHeader() {
//     let header = document.getElementById("header");
//     let pokiName = document.createElement("h1");
//     let pokiOrder = document.createElement("h1");
//     pokiOrder.id = "pokOrder";
//     pokiOrder.textContent = `${chariObj["order"]}`;
//     pokiName.textContent = `${chariObj["name"]}`;
//     pokiName.id = "pokiName";
//     let id = document.createElement("h2");
//     id.id = "id";
//     id.textContent = `(${chariObj.id})`;
//     header.appendChild(pokiOrder);
//     header.appendChild(pokiName);
//     header.appendChild(id);
// };
// chariHeader(chariObj);
// // function chariPicture() {
// //     let picture = document.getElementById("picute");
// // };
// // chariPicture();
// function createPowers() {
//     let stati = chariObj["stats"];
//     for (statistics in stati) {
//         let statSec = document.createElement("div");
//         statSec.id = "statSec";
//         if (stati[statistics]["stat"]["name"] == "hp") {
//             let baseText = document.createElement("h1");
//             baseText.id = "health";
//             baseText.textContent = `${stati[statistics]["base_stat"]}`;
//             header.appendChild(baseText);
//         }
//         if (stati[statistics]["stat"]["name"] != "hp") {
//             let moveText = document.createElement("h1");
//             moveText.id = "move";
//             let baseText = document.createElement("p");
//             baseText.id = "base";
//             let effortText = document.createElement("p");
//             effortText.id = "effort"
//             moveText.textContent = `${stati[statistics]["stat"]["name"]}`;
//             baseText.textContent = `base stat: ${stati[statistics]["base_stat"]}`;
//             effortText.textContent = `effort: ${stati[statistics]["effort"]}`;
//             statSec.appendChild(moveText);
//             statSec.appendChild(baseText);
//             statSec.appendChild(effortText);
//             stats.appendChild(statSec);
//         }
//     }
//     let statSec = document.createElement("div");
//     statSec.id = "statSec";
//     let weightHeader = document.createElement("h1");
//     weightHeader.id = "weight";
//     weightHeader.textContent = "weight";
//     let weightText = document.createElement("p");
//     weightText.textContent = `${chariObj["weight"]}`;
//     weightText.id = "base";
//     statSec.appendChild(weightHeader);
//     statSec.appendChild(weightText);
//     stats.appendChild(statSec);
// };
// createPowers();

// function createTypes() {
//     let types = chariObj["types"];
//     let typeDiv = document.createElement("div");
//     for (typer of types) {
//         let type = typer.type.name;
//         typeDiv.id = "typeDiv";
//         let typeText = document.createElement("h3");
//         if (type == "fire") {
//             typeText.id = "fire";
//             typeText.textContent = `${type}`;
//             typeDiv.appendChild(typeText);
//         } else {
//             typeText.id = "flying";
//             typeText.textContent = `${type}`;
//             typeDiv.appendChild(typeText);
//         }
//         stats.appendChild(typeDiv);
//     }
// }
// createTypes();

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

// let charmObj = JSON.parse(charmander);

// function charmandersHeader() {
//     let header1 = document.getElementById("header1");
//     let pokimonName = document.createElement("h1");
//     let dexOrd = document.createElement("h1");
//     dexOrd.id = "pokOrder1";
//     dexOrd.textContent = `${charmObj["order"]}`;
//     pokimonName.textContent = `${charmObj["name"]}`;
//     pokimonName.id = "pokiName1";
//     let pokimonIdNum = document.createElement("h2");
//     pokimonIdNum.id = "id1";
//     pokimonIdNum.textContent = `(${charmObj.id})`;
//     header1.appendChild(dexOrd);
//     header1.appendChild(pokimonName);
//     header1.appendChild(pokimonIdNum);
// };

// function charmandersTypes() {
//     let pokeType = charmObj["types"];
//     let statistical = document.getElementById("stats1");
//     for (pokType of pokeType) {
//         let typesDiv = document.createElement("div");
//         let typesText = document.createElement("h3");
//         typesDiv.id = "fires";
//         typesText.textContent = `${pokType.type.name}`;
//         typesDiv.appendChild(typesText);
//         statistical.appendChild(typesDiv);
//     }
// }

// function charmandersPowers() {
//     let statistical = document.getElementById("stats1");
//     let statis = charmObj["stats"];
//     let i = 0;
//     for (statistics in statis) {
//         let statsArea = document.createElement("div");
//         statsArea.id = "statSecs";
//         if (statis[statistics]["stat"]["name"] != "hp") {
//             let moveText = document.createElement("h1");
//             let baseExpText = document.createElement("p");
//             let effortText = document.createElement("p");
//             moveText.textContent = `${statis[statistics]["stat"]["name"]}`;
//             baseExpText.textContent = `base stat: ${statis[statistics]["base_stat"]}`;
//             effortText.textContent = `effort: ${statis[statistics]["effort"]}`;
//             statistical.appendChild(statsArea);
//             statsArea.appendChild(moveText);
//             statsArea.appendChild(baseExpText);
//             statsArea.appendChild(effortText);
//         } else {
//             let baseExpText = document.createElement("h3");
//             baseExpText.id = "hp";
//             baseExpText.textContent = `${statis[statistics]["base_stat"]}`;
//             header1.appendChild(baseExpText);
//         }
//         if (statis[statistics]["stat"]["name"] == "special-attack" || statis[statistics]["stat"]["name"] == "special-defense") {
//             statsArea.id = "stat2";
//         }
//         if (statis[statistics]["stat"]["name"] == "speed") {
//             statsArea.id = "stat3";
//         }
//     }
//     let statsArea = document.createElement("div");
//     statsArea.id = "statSecs3";
//     let weightHead = document.createElement("h1");
//     weightHead.textContent = "Weight";
//     let weightStatText = document.createElement("p");
//     weightStatText.textContent = `${charmObj["weight"]}`;
//     statsArea.appendChild(weightHead);
//     statsArea.appendChild(weightStatText);
//     statistical.appendChild(statsArea);
// };
// charmandersHeader(charmObj);
// charmandersPowers(charmObj);
// charmandersTypes(charmObj);
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

// const {name: n, stats: newStats, abilities: abils, id, ...others} = charmeleon;
//   document.getElementById("header1").innerHTML = [n];


let header2 = document.getElementById("header1");
let picture2 = document.getElementById("picture1");
let section2 = document.getElementById("stats1");
let charmeleonObj = JSON.parse(charmeleon);

$("#charmBody").on("click", function(){
	createHeader(charmeleonObj);
	createSection(charmeleonObj);
	createPicture(charmeleonObj);
})

function createPicture(charmeleonObj){

    const H1 = document.createElement("h1");
    H1.textContent = `${obj["name"]}`
    picture2.appendChild(H1)

    const myImage = document.createElement("img");
    myImage.src =  'image/charmeleon3.jpg';
    picture2.appendChild(myImage);
}

function createHeader(charmeleonObj){
    //base 
    const h2 = document.createElement("h2");
    h2.textContent = `Base Experience:`;
    header2.appendChild(h2)
    const p1 = document.createElement("p1");
    p1.textContent = ` ${obj["base_experience"]}`
    header2.appendChild(p1)

    //height
    const h3 = document.createElement("h7");
    h3.textContent = `Height:`;
    header2.appendChild(h3)
    
    const p2 = document.createElement("p2");
    p2.textContent = `${obj["height"]}`
    header2.appendChild(p2)




    //weight
    const h4 = document.createElement("h8");
    h4.textContent = `Weight:`;
    header2.appendChild(h4)

    const p6 = document.createElement("p6");
    p6.textContent = `${obj["weight"]}`
    header2.appendChild(p6)

    //order
    const h5 = document.createElement("h9");
    h5.textContent = `Order:`;
    header2.appendChild(h5)

    const p3 = document.createElement("p3");
    p3.textContent = `${obj["order"]}`
    header2.appendChild(p3)

    //id

    const h6 = document.createElement("h10");
    h6.textContent = `Id:`;
    header2.appendChild(h6)

    const p4 = document.createElement("p4");
    p4.textContent = `${obj["id"]}`
    header2.appendChild(p4)
    
  
  
   
    
    }



function createSection(charmeleonObj){
    const abilitie = obj["abilities"];

    const types = obj["types"];
    const status = obj["stats"]
    for(tys in types){

        //slot

        const h7 = document.createElement("h11");
        h7.textContent = `Slot:`;
        header2.appendChild(h7)

        const p7 = document.createElement("p7");
        p7.textContent = `${types[tys]["slot"]}`
        header2.appendChild(p7)

        //Type
        const type = types[tys]["type"]
        for(ty in type){

            const h8 = document.createElement("h12")
            h8.textContent = `Type:`
            section2.appendChild(h8)

    
            const p8 = document.createElement("p8")
            p8.textContent = `${type["name"]}`
            section2.appendChild(p8)

           

        }
    }

    for(abil in abilitie){
        //Abilities
        const h9 = document.createElement("h13")
        h9.textContent = `Abilities:`
        section2.appendChild(h9)

        const p5 = document.createElement("p5");
        p5.textContent = `${abilitie[abil]["name"]}`
        section2.appendChild(p5)

      
    }
    for(stat in status){
        const stats = status[stat]["stat"]
        for(st in stats){
            const p11 = document.createElement("h3")
            p11.textContent = `${stats["name"]}`
            section2.appendChild(p11)

            // arr = charmeleon.split(",");
            // const p11 = document.createElement("h3")
            // p11.textContent = `${["name", arr[0]]}`
            // section2.appendChild(p11)
        

        

        const p10 = document.createElement("p10")
        p10.textContent = `${status[stat]["base_stat"]}`
        section2.appendChild(p10)

        const p12 = document.createElement("p12")
        p12.textContent = `${status[stat]["effort"]}`
        section2.appendChild(p12)
        }
    }
}

//float

!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 4,
		screenHeight = $win.screen.height / 4,
		$elems = $doc.getElementsByClassName("elem"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}

	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.05,
			degY = centroY * 0.05,
			$elem

		for (var i = 0; i < $elems.length; i++) {
   			$elem = $elems[i];
			$elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	});
})(document, window);




