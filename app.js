var database = GetDatabase();

// Cargar el último valor almacenado al cargar la página
window.onload = function() {
    console.log(database);
    for (const name in database.characters) {
        const character = database.characters[name];
        addToCharacterContainer(name);
    }
};
function changeCharacterElement(name, elementName, This){
    const character = database.characters[name];
    var nextElement = "";
    var thisElement = "";
    var isNext = false;
    for (const element in character.element) {
        if(isNext){
            nextElement = element;
            isNext = false;
            break;
        }else if(character.element[element].name == elementName){
            thisElement = element;
            isNext = true;
        }
    }
    if(isNext){
        nextElement = 0;
    }
    document.getElementsByName(`${name}-Quality${character.quality}-Element${elementName}-Id${character.id}`)[0].getElementsByClassName("data")[thisElement].style.display = "none";
    document.getElementsByName(`${name}-Quality${character.quality}-Element${elementName}-Id${character.id}`)[0].getElementsByClassName("data")[nextElement].style.display = "";
    document.getElementsByName(`${name}-Quality${character.quality}-Element${elementName}-Id${character.id}`)[0].setAttribute('name',`${name}-Quality${character.quality}-Element${character.element[nextElement].name}-Id${character.id}`);
    This.setAttribute('onclick',`changeCharacterElement('${name}','${character.element[nextElement].name}',this)`);
    This.setAttribute('src',`assets/element/${character.element[nextElement].name} Icon.webp`)
}
function addToCharacterContainer(name){
    const character = database.characters[name];
    var prefab = ``;
    prefab += `<item name="${name}-Quality${character.quality}-Element${character.element[0].name}-Id${character.id}">`;
    prefab += `    <h2 class="name">${name}</h2>`;
    prefab += `    <div class="images">`;
    prefab += `        <img onclick="changeCharacterElement('${name}','${character.element[0].name}',this)" class="image-element" src="assets/element/${character.element[0].name} Icon.webp" alt="">`;
    prefab += `        <img class="image-icon" src="assets/character/${name} Icon.webp" alt="">`;
    prefab += `        <img class="image-weapon" src="assets/weaponType/${character.weaponType} Icon.webp" alt="">`;
    prefab += `    </div>`;
    var count = 0;
    for (const elementId in character.element) {
        if(count == 0){
            prefab += `    <div class="data">`;
        }else{
            prefab += `    <div class="data" style="display:none">`;
        }
        prefab += `        <p class="data-col1">`;
        prefab += `            <strong>Level</strong><br><span class="level">${character.level.from} > ${character.level.to}</span><br>`;
        prefab += `            <strong>Constellation</strong><br><span class="constellation">${character.element[elementId].constellations.from} > ${character.element[elementId].constellations.to}</span>`;
        prefab += `        </p>`;
        prefab += `        <p class="data-col2"><strong>Talent</strong><br><span>${character.element[elementId].talents.basic.from} > ${character.element[elementId].talents.basic.to}</span><br><span>${character.element[elementId].talents.elemental.from} > ${character.element[elementId].talents.elemental.to}</span><br><span>${character.element[elementId].talents.burst.from} > ${character.element[elementId].talents.burst.to}</span></p>`;
        prefab += `    </div>`;
        count++;
    }
    prefab += `</item>`;
    document.getElementById("characters-container").getElementsByTagName("container")[0].innerHTML += prefab;
}
function saveData() { localStorage.setItem('mainData', database); }

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
    alert('Todos los datos han sido borrados.');
    window.location.reload();
}
