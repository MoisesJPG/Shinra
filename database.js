function GetDatabase(){
    var database = {
        "user": {
            "username": "",
            "character": "",
            "birthday": ""
        },
        "characters": {
            "Traveler": {
                "Id": 0,
                "Level": { "from": 1, "to": 90 },
                "Frinedship": null,
                "Element": [
                    {
                        "name": "Anemo",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Geo",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Electro",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Dendro",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Hydro",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Pyro",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }, {
                        "name": "Cryo",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 0, "burst": 0},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }
                ]
            },
            "Amber": {
                "Id": 1,
                "Level": { "from": 1, "to": 90 },
                "Frinedship": { "from": 1, "to": 10 },
                "Element": [
                    {
                        "name": "Pyro",
                        "Constellations": { "from": 0, "to": 6, "basic": null, "elemental": 5, "burst": 3},
                        "Talents":{
                            "Basic": {"from":1,"to":10},
                            "Elemental": {"from":1,"to":10},
                            "Burst": {"from":1,"to":10}
                        }
                    }
                ]
            }
        }
    }
    return database;
}