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

const {name: n, stats: newStats, abilities: abils, id, ...others} = charmeleon;
  document.getElementById("header1").innerHTML = [n];


let header2 = document.getElementById("header1");
let picture2 = document.getElementById("picture1");
let section2 = document.getElementById("stats1");
let charmeleonObj = JSON.parse( charmeleon);

createHeader(charmeleonObj);
createSection(charmeleonObj);
createPicture(charmeleonObj);

function createPicture(obj){

    const H1 = document.createElement("h1");
    H1.textContent = `${obj["name"]}`
    picture2.appendChild(H1)

    const myImage = document.createElement("img");
    myImage.src =  'image/charmeleon3.jpg';
    picture2.appendChild(myImage);
}

function createHeader(obj){
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



function createSection(obj){
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

        // const h10 = document.createElement("h14")
        // h10.textContent = `Abilities:`
        // section2.appendChild(h10)


        // const p13 = document.createElement("p13");
        // p13.textContent = `${abilitie[abil]["name2"]}`
        // section2.appendChild(p13)
    }

    for(stat in status){

        const stats = status[stat]["stat"]

        for(st in stats){
            const p11 = document.createElement("h3")
            p11.textContent = `${stats["name"]}`
            section2.appendChild(p11)

            // arr = charmeleon.split(",");
        //     const p11 = document.createElement("h3")
        //     p11.textContent = `${["name", arr[0]]}`
        //     section2.appendChild(p11)
        }

        // const p10 = document.createElement("p10")
        // p10.textContent = `${status[stat]["base_stat"]}`
        // section2.appendChild(p10)

        // const p12 = document.createElement("p12")
        // p12.textContent = `${status[stat]["effort"]}`
        // section2.appendChild(p12)
        

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
// let header = document.getElementById("header");
// let section = document.getElementById("section");
// let pokimonName = document.createElement("H1");
// pokimonName.textContent = `${chariObj["name"]}`;
// header.appendChild(pokimonName);
// function chariHeader(){
    
// }




  


    




