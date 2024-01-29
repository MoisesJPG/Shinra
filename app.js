// Obtener el elemento de entrada y el elemento para mostrar el dato
const datoInput = document.getElementById('datoInput');
const mostrarDato = document.getElementById('mostrarDato');
var database = GetDatabase();

// Cargar el último valor almacenado al cargar la página
window.onload = function() {
};

// Función para guardar el dato en localStorage
function saveData() {
    localStorage.setItem('mainData', dato);
}

// Función para exportar los datos almacenados
function exportarDatos() {
    const datoAlmacenado = localStorage.getItem('dato');
    
    if (datoAlmacenado) {
        // Crear un objeto para exportar
        const exportData = {
            dato: datoAlmacenado
        };

        // Convertir el objeto a formato JSON
        const jsonData = JSON.stringify(exportData);

        // Crear un enlace de descarga
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonData);
        enlaceDescarga.download = 'datos_exportados.json';

        // Simular clic en el enlace para iniciar la descarga
        enlaceDescarga.click();
    } else {
        alert('No hay datos para exportar.');
    }
}

// Función para importar datos desde un archivo JSON
function importarDatos() {
    const inputImportar = document.createElement('input');
    inputImportar.type = 'file';

    inputImportar.addEventListener('change', function() {
        const archivo = inputImportar.files[0];
        
        if (archivo) {
            const lector = new FileReader();

            lector.onload = function(e) {
                try {
                    const datosImportados = JSON.parse(e.target.result);

                    // Verificar si el archivo tiene la estructura esperada
                    if (datosImportados && datosImportados.dato) {
                        // Almacenar el dato importado en localStorage
                        localStorage.setItem('dato', datosImportados.dato);

                        // Mostrar el dato importado
                        mostrarDato.innerText = datosImportados.dato;

                        alert('Datos importados correctamente.');
                    } else {
                        alert('Formato de archivo incorrecto.');
                    }
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
function borrarTodosLosDatos() {
    localStorage.clear();
    mostrarDato.innerText = 'Ningún dato almacenado';
    alert('Todos los datos han sido borrados.');
}
