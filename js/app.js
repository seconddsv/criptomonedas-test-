const cotizador = new API("f6de3ce604cf3a8c25985649941a9ff1c15a2ca8e5803716c727464462e3c2ea");
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();


ui.mostrarMensaje("texto", "clase");

// Leer el formulario. 

const formulario = document.querySelector("#formulario");
// event listener
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // leer la moneda seleccionada

    const monedaSelect = document.querySelector("#moneda");
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value

    // leer la criptomoneda seleccionada

    const criptoMonedaSelect = document.querySelector("#criptomoneda");
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value

    // Comprobar que ambos campos tengan algo seleccionado

    if(monedaSeleccionada === "" || criptoMonedaSeleccionada === ""){
        //arrojar una alerta de error
        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center")

    } else {
        //todo bien, consultar la API
    
    }




})