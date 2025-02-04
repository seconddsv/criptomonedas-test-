class API {
    constructor(apikey){
        this.apikey = apikey;
    }
    //obtener todas las monedas
    async obtenerMonedasAPI(){
        const url = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR?api_key=${this.apikey}`;

        // fetch a la api
        const urlObtenerMonedas = await fetch(url);

        //respuesta en json
        const monedas = await urlObtenerMonedas.json();

        console.log(monedas);

        return {
            monedas
        }
    }
}