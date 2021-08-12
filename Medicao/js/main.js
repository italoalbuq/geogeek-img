require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Measurement",
], function (esriConfig, Map, MapView, Measurement,) {


    // API KEY
    esriConfig.apiKey = "AAPK61edbdd0f01c44c0adeda810146c582eL4K7oq2u4eI3U0B7lR5ZwJlOm9GHJaEZSZQ5MGk1-WOTHO_w1_LrTdcaQVmA4r0e";


    // IMPORTANDO O WEBMAP
    const map = new Map({
        basemap: "arcgis-imagery"
    });


    // CRIANDO A VISUALIZAÇÃO DO MAPA
    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 15,
        center: {
            latitude: -23.1791,
            longitude: -45.8872
        }
    });


    // OPÇÃO DE MEDIÇÃO
    const measurement = new Measurement({
        view: view,
        activeTool: "distance",
    });

    view.ui.add(measurement, "bottom-right")

});