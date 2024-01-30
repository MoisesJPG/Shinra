var database = {}
var lastCharacterId = -1;
function GetDatabase(){
    if(localStorage.getItem("mainData")){
        return JSON.parse(localStorage.getItem("mainData"));
    } else {
        database = {
            "user": {
                "username": "",
                "character": "",
                "birthday": ""
            },
            "characters": {
            }
        }
        AddCharacterToDatabase('Traveler',              5, [
            ['Anemo',   null,null,null,null,null,null],
            ['Geo',     null,null,null,null,null,null],
            ['Electro', null,null,null,null,null,null],
            ['Dendro',  null,null,null,null,null,null],
            ['Hydro',   null,null,null,null,null,null],
            ['Pyro',    null,null,null,null,null,null],
            ['Cryo',    null,null,null,null,null,null]
        ], 'Sword');
        AddCharacterToDatabase('Amber',                 4, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kaeya',                 4, [['Cryo',    null,null,null,null,null,null]], 'Sword');
        AddCharacterToDatabase('Lisa',                  4, [['Electro', null,null,null,null,null,null]], 'Catalyst');
        AddCharacterToDatabase('Barbara',               4, [['Hydro',   null,null,null,null,null,null]], 'Catalyst');
        AddCharacterToDatabase('Razor',                 4, [['Electro', null,null,null,null,null,null]], 'Claymore');
        AddCharacterToDatabase('Xiangling',             4, [['Pyro',    null,null,null,null,null,null]], 'Polearm');
        AddCharacterToDatabase('Beidou',                4, [['Electro', null,null,null,null,null,null]], 'Claymore');
        AddCharacterToDatabase('Xingchiu',              4, [['Hydro',   null,null,null,null,null,null]], 'Sword');
        AddCharacterToDatabase('Ninguang',              4, [['Geo',     null,null,null,null,null,null]], 'Catalyst');
        AddCharacterToDatabase('Fischl',                4, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Bennett',               4, [['Pyro',    null,null,null,null,null,null]], 'Sword');
        AddCharacterToDatabase('Noelle',                4, [['Geo',     null,null,null,null,null,null]], 'Claymore');
        AddCharacterToDatabase('Chongyun',              4, [['Cryo',    null,null,null,null,null,null]], 'Claymore');
        AddCharacterToDatabase('Sacarosa',              4, [['Anemo',   null,null,null,null,null,null]], 'Catalyst');
        AddCharacterToDatabase('Jean',                  5, [['Anemo',   null,null,null,null,null,null]], 'Sword');
        AddCharacterToDatabase('Diluc',                 5, [['Pyro',    null,null,null,null,null,null]], 'Claymore');
        AddCharacterToDatabase('Qiqi',                  5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Mona',                  5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Keching',               5, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Venti',                 5, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Klee',                  5, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Diona',                 4, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Tartaglia',             5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Xinyan',                4, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Zhongli',               5, [['Geo',     null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Albedo',                5, [['Geo',     null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Ganyu',                 5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Xiao',                  5, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Hu Tao',                5, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Rosaria',               4, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Yanfei',                4, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Eula',                  5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kaedehara Kazuha',      5, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kamisato Ayaka',        5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Sayu',                  4, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Yoimiya',               5, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Aloy',                  5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kujou Sara',            4, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Shogun Raiden',         5, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Sangonomiya Kokomi',    5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Thoma',                 4, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Gorou',                 4, [['Geo',     null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Arataki Itto',          5, [['Geo',     null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Yun Jin',               4, [['Geo',     null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Shenhe',                5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Yae Miko',              5, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kamisato Ayato',        5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Yelan',                 5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kuki Shinobu',          4, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Shikanoin Heizou',      4, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Collei',                4, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Tignari',               5, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Dori',                  4, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Candace',               4, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Cyno',                  5, [['Electro', null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Nilou',                 5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Nahida',                5, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Laila',                 4, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Faruzan',               4, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Wanderer',              5, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Yaoyao',                4, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Alhacen',               5, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Dehya',                 5, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Mika',                  4, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kaveh',                 4, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Baizhu',                5, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Kirara',                4, [['Dendro',  null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Lynette',               4, [['Anemo',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Lyney',                 5, [['Pyro',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Freminet',              4, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Neuvillette',           5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Wriothesley',           5, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Charlotte',             4, [['Cryo',    null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Furina',                5, [['Hydro',   null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Navia',                 5, [['Geo',     null,null,null,null,null,null]], 'Bow');
        AddCharacterToDatabase('Chevreuse',             4, [['Pyro',    null,null,null,null,null,null]], 'Bow');

        //AddCharacterToDatabase("", , [""], "");
        localStorage.setItem("mainData",JSON.stringify(database));
        return returnDatabase();
    }
}
function returnDatabase() { return database; }
function AddCharacterToDatabase(name, quality, elements, weaponType){
    lastCharacterId++;
    const characterData = {
        [name]: {
            "id": lastCharacterId,
            "name": name,
            "order": lastCharacterId,
            "quality": quality,
            "weaponType": weaponType,
            "active": false,
            "level": { "from": 1, "to": 90 },
            "friendship": { "from": 1, "to": 10 },
            "element": elements.map(element => ({
                "name": element[0],
                "constellations": { "from": 0, "to": 6, "basic": element[1], "elemental": element[2], "burst": element[3] },
                "talents": {
                    "basic": { "from": 1, "to": 10, "added": element[4] },
                    "elemental": { "from": 1, "to": 10, "added": element[5] },
                    "burst": { "from": 1, "to": 10, "added": element[6] }
                }
            }))
        }
    };
    // Assuming database is an object
    database.characters = { ...database.characters, ...characterData };
}
function saveData() { localStorage.setItem('mainData', JSON.stringify(database)); }

// Función para exportar los datos almacenados
function exportData() {
    const jsonData = JSON.stringify(localStorage.getItem('mainData'));
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonData);
    enlaceDescarga.download = 'datos_exportados.json';
    enlaceDescarga.click();
}

// Función para importar datos desde un archivo JSON
function importData() {
    const inputImportar = document.createElement('input');
    inputImportar.type = 'file';

    inputImportar.addEventListener('change', function() {
        const archivo = inputImportar.files[0];
        
        if (archivo) {
            const lector = new FileReader();

            lector.onload = function(e) {
                try {
                    const datosImportados = JSON.parse(e.target.result);

                    localStorage.setItem('mainData', datosImportados);
                    console.log(datosImportados);
                } catch (error) {
                    alert('Error al leer el archivo.');
                }
            };

            lector.readAsText(archivo);
        }
    });

    // Simular clic en el input para abrir el explorador de archivos
    inputImportar.click();
}

// Función para borrar todos los datos almacenados
function clearData() { 
    localStorage.clear();
    window.location.reload();
}