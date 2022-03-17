var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Puntosapartirdetabla_1 = new ol.format.GeoJSON();
var features_Puntosapartirdetabla_1 = format_Puntosapartirdetabla_1.readFeatures(json_Puntosapartirdetabla_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosapartirdetabla_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosapartirdetabla_1.addFeatures(features_Puntosapartirdetabla_1);
var lyr_Puntosapartirdetabla_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntosapartirdetabla_1, 
                style: style_Puntosapartirdetabla_1,
                interactive: true,
                title: '<img src="styles/legend/Puntosapartirdetabla_1.png" /> Puntos a partir de tabla'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Puntosapartirdetabla_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Puntosapartirdetabla_1];
lyr_Puntosapartirdetabla_1.set('fieldAliases', {'No. INVENTARIO': 'No. INVENTARIO', 'ESTACION': 'ESTACION', 'No. INST.': 'No. INST.', 'CAP. EN HP': 'CAP. EN HP', 'TOTAL EN HP': 'TOTAL EN HP', 'DISPONIBLES': 'DISPONIBLES', 'FUERA DE SERVICIO': 'FUERA DE SERVICIO', 'OBSERVACIONES': 'OBSERVACIONES', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Puntosapartirdetabla_1.set('fieldImages', {'No. INVENTARIO': '', 'ESTACION': '', 'No. INST.': '', 'CAP. EN HP': '', 'TOTAL EN HP': '', 'DISPONIBLES': '', 'FUERA DE SERVICIO': '', 'OBSERVACIONES': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_Puntosapartirdetabla_1.set('fieldLabels', {'No. INVENTARIO': 'inline label', 'ESTACION': 'inline label', 'No. INST.': 'inline label', 'CAP. EN HP': 'inline label', 'TOTAL EN HP': 'inline label', 'DISPONIBLES': 'inline label', 'FUERA DE SERVICIO': 'inline label', 'OBSERVACIONES': 'inline label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_Puntosapartirdetabla_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});