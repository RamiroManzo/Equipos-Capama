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
lyr_Puntosapartirdetabla_1.set('fieldAliases', {'CONC.': 'CONC.', 'ESTACIONES': 'ESTACIONES', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'No. INST.': 'No. INST.', 'CAP. EN H.P.': 'CAP. EN H.P.', 'TOTAL EN H.P.': 'TOTAL EN H.P.', 'DISPONIBLES': 'DISPONIBLES', 'F/S': 'F/S', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Puntosapartirdetabla_1.set('fieldImages', {'CONC.': '', 'ESTACIONES': '', 'LATITUD': '', 'LONGITUD': '', 'No. INST.': '', 'CAP. EN H.P.': '', 'TOTAL EN H.P.': '', 'DISPONIBLES': '', 'F/S': '', 'OBSERVACIONES': '', });
lyr_Puntosapartirdetabla_1.set('fieldLabels', {'CONC.': 'inline label', 'ESTACIONES': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', 'No. INST.': 'inline label', 'CAP. EN H.P.': 'inline label', 'TOTAL EN H.P.': 'inline label', 'DISPONIBLES': 'inline label', 'F/S': 'inline label', 'OBSERVACIONES': 'inline label', });
lyr_Puntosapartirdetabla_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});