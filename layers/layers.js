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
lyr_Puntosapartirdetabla_1.set('fieldAliases', {'CONC.': 'CONC.', 'ESTACION': 'ESTACION', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'No. INST.': 'No. INST.', 'CAP. EN H.': 'CAP. EN H.', 'TOTAL EN H': 'TOTAL EN H', 'DISPONIBLE': 'DISPONIBLE', 'F/S': 'F/S', 'OBSERVACIO': 'OBSERVACIO', });
lyr_Puntosapartirdetabla_1.set('fieldImages', {'CONC.': '', 'ESTACION': '', 'LATITUD': '', 'LONGITUD': '', 'No. INST.': '', 'CAP. EN H.': '', 'TOTAL EN H': '', 'DISPONIBLE': '', 'F/S': '', 'OBSERVACIO': '', });
lyr_Puntosapartirdetabla_1.set('fieldLabels', {'CONC.': 'inline label', 'ESTACION': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', 'No. INST.': 'inline label', 'CAP. EN H.': 'inline label', 'TOTAL EN H': 'inline label', 'DISPONIBLE': 'inline label', 'F/S': 'inline label', 'OBSERVACIO': 'inline label', });
lyr_Puntosapartirdetabla_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});