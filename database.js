var database = {}
var lastCharacterId = 6;
function GetDatabase(){
    database = {
        "user": {
            "username": "",
            "character": "",
            "birthday": ""
        },
        "characters": {
            "Traveler": {
                "id": 0,
                "quality": 5,
                "weaponType": "Sword",
                "active": true,
                "level": { "from": 81, "to": 81 },
                "frinedship": null,
                "element": [
                    {
                        "name": "Anemo",
                        "constellations": { "from": 6, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents": {
                            "basic": {"from":9,"to":9},
                            "elemental": {"from":9,"to":9},
                            "burst": {"from":9,"to":9}
                        }
                    }, {
                        "name": "Geo",
                        "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents":{
                            "basic": {"from":1,"to":10},
                            "elemental": {"from":1,"to":10},
                            "burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Electro",
                        "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents":{
                            "basic": {"from":1,"to":10},
                            "elemental": {"from":1,"to":10},
                            "burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Dendro",
                        "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents":{
                            "basic": {"from":1,"to":10},
                            "elemental": {"from":1,"to":10},
                            "burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Hydro",
                        "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents":{
                            "basic": {"from":1,"to":10},
                            "elemental": {"from":1,"to":10},
                            "burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Pyro",
                        "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents":{
                            "basic": {"from":1,"to":10},
                            "elemental": {"from":1,"to":10},
                            "burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Cryo",
                        "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "talents":{
                            "basic": {"from":1,"to":10},
                            "elemental": {"from":1,"to":10},
                            "burst": {"from":1,"to":10}
                        }
                    }
                ]
            }
        }
    }
    AddCharacterToDatabase("Amber", 4, ["Pyro"], "Bow");
    AddCharacterToDatabase("Kaeya", 4, ["Cryo"], "Sword");
    AddCharacterToDatabase("Lisa", 4, ["Electro"], "Catalyst");
    AddCharacterToDatabase("Barbara", 4, ["Hydro"], "Catalyst");
    AddCharacterToDatabase("Razor", 4, ["Electro"], "Claymore");
    AddCharacterToDatabase("Xiangling", 4, ["Pyro"], "Polearm");
    AddCharacterToDatabase("Beidou", 4, ["Electro"], "Claymore");
    AddCharacterToDatabase("", , [""], "");
    return returnDatabase();
    if(localStorage.getItem("mainData")){
        return JSON.parse(localStorage.getItem("mainData"));
    } else {
        localStorage.setItem("mainData",JSON.stringify(database));
        return database;
    }
}
function returnDatabase(){
    return database;
}
function AddCharacterToDatabase(name, quality, elements, weaponType){
    lastCharacterId++;
    const characterData = {
        [name]: {
            "id": lastCharacterId,
            "quality": quality,
            "weaponType": weaponType,
            "active": false,
            "level": { "from": 1, "to": 90 },
            "friendship": { "from": 1, "to": 10 },
            "element": elements.map(element => ({
                "name": element,
                "constellations": { "from": 0, "to": 6, "basic": null, "elemental": 5, "burst": 3 },
                "talents": {
                    "basic": { "from": 1, "to": 10 },
                    "elemental": { "from": 1, "to": 10 },
                    "burst": { "from": 1, "to": 10 }
                }
            }))
        }
    };
    // Assuming database is an object
    database.characters = { ...database.characters, ...characterData };
}