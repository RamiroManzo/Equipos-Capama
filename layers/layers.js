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
var format_Puntosapartirdetabla_2 = new ol.format.GeoJSON();
var features_Puntosapartirdetabla_2 = format_Puntosapartirdetabla_2.readFeatures(json_Puntosapartirdetabla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosapartirdetabla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosapartirdetabla_2.addFeatures(features_Puntosapartirdetabla_2);
var lyr_Puntosapartirdetabla_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntosapartirdetabla_2, 
                style: style_Puntosapartirdetabla_2,
                interactive: true,
                title: '<img src="styles/legend/Puntosapartirdetabla_2.png" /> Puntos a partir de tabla'
            });
var format_Puntosapartirdetabla_3 = new ol.format.GeoJSON();
var features_Puntosapartirdetabla_3 = format_Puntosapartirdetabla_3.readFeatures(json_Puntosapartirdetabla_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosapartirdetabla_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosapartirdetabla_3.addFeatures(features_Puntosapartirdetabla_3);
var lyr_Puntosapartirdetabla_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntosapartirdetabla_3, 
                style: style_Puntosapartirdetabla_3,
                interactive: true,
                title: '<img src="styles/legend/Puntosapartirdetabla_3.png" /> Puntos a partir de tabla'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Puntosapartirdetabla_1.setVisible(true);lyr_Puntosapartirdetabla_2.setVisible(true);lyr_Puntosapartirdetabla_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Puntosapartirdetabla_1,lyr_Puntosapartirdetabla_2,lyr_Puntosapartirdetabla_3];
lyr_Puntosapartirdetabla_1.set('fieldAliases', {'No. INVENTARIO': 'No. INVENTARIO', 'ESTACION': 'ESTACION', 'No. INST.': 'No. INST.', 'CAP. EN HP': 'CAP. EN HP', 'TOTAL EN HP': 'TOTAL EN HP', 'DISPONIBLES': 'DISPONIBLES', 'FUERA DE SERVICIO': 'FUERA DE SERVICIO', 'OBSERVACIONES': 'OBSERVACIONES', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Puntosapartirdetabla_2.set('fieldAliases', {'No INVENTARIO': 'No INVENTARIO', 'ESTACION': 'ESTACION', 'No. INST.': 'No. INST.', 'CAP. EN HP': 'CAP. EN HP', 'TOTAL EN HP': 'TOTAL EN HP', 'DISPONIBLES': 'DISPONIBLES', 'FUERA DE SERVICIO': 'FUERA DE SERVICIO', 'OBSERVACIONES': 'OBSERVACIONES', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Puntosapartirdetabla_3.set('fieldAliases', {'No.': 'No.', 'Planta de tratamiento': 'Planta de tratamiento', 'Gasto de diseño': 'Gasto de diseño', 'Gasto de Operación': 'Gasto de Operación', 'Equipos Instalados': 'Equipos Instalados', 'Hps Instalados': 'Hps Instalados', 'Equipos Fuera de Servicio': 'Equipos Fuera de Servicio', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Puntosapartirdetabla_1.set('fieldImages', {'No. INVENTARIO': '', 'ESTACION': '', 'No. INST.': '', 'CAP. EN HP': '', 'TOTAL EN HP': '', 'DISPONIBLES': '', 'FUERA DE SERVICIO': '', 'OBSERVACIONES': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_Puntosapartirdetabla_2.set('fieldImages', {'No INVENTARIO': '', 'ESTACION': '', 'No. INST.': '', 'CAP. EN HP': '', 'TOTAL EN HP': '', 'DISPONIBLES': '', 'FUERA DE SERVICIO': '', 'OBSERVACIONES': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_Puntosapartirdetabla_3.set('fieldImages', {'No.': '', 'Planta de tratamiento': '', 'Gasto de diseño': '', 'Gasto de Operación': '', 'Equipos Instalados': '', 'Hps Instalados': '', 'Equipos Fuera de Servicio': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_Puntosapartirdetabla_1.set('fieldLabels', {'No. INVENTARIO': 'no label', 'ESTACION': 'inline label', 'No. INST.': 'inline label', 'CAP. EN HP': 'inline label', 'TOTAL EN HP': 'inline label', 'DISPONIBLES': 'inline label', 'FUERA DE SERVICIO': 'inline label', 'OBSERVACIONES': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', });
lyr_Puntosapartirdetabla_2.set('fieldLabels', {'No INVENTARIO': 'no label', 'ESTACION': 'inline label', 'No. INST.': 'inline label', 'CAP. EN HP': 'inline label', 'TOTAL EN HP': 'inline label', 'DISPONIBLES': 'inline label', 'FUERA DE SERVICIO': 'inline label', 'OBSERVACIONES': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', });
lyr_Puntosapartirdetabla_3.set('fieldLabels', {'No.': 'no label', 'Planta de tratamiento': 'inline label', 'Gasto de diseño': 'inline label', 'Gasto de Operación': 'inline label', 'Equipos Instalados': 'inline label', 'Hps Instalados': 'inline label', 'Equipos Fuera de Servicio': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', });
lyr_Puntosapartirdetabla_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});