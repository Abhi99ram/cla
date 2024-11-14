var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_cell_1 = new ol.format.GeoJSON();
var features_cell_1 = format_cell_1.readFeatures(json_cell_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cell_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cell_1.addFeatures(features_cell_1);
var lyr_cell_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cell_1, 
                style: style_cell_1,
                popuplayertitle: "cell ",
                interactive: true,
                title: '<img src="styles/legend/cell_1.png" /> cell '
            });
var format_Reprojected_2 = new ol.format.GeoJSON();
var features_Reprojected_2 = format_Reprojected_2.readFeatures(json_Reprojected_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_2.addFeatures(features_Reprojected_2);
var lyr_Reprojected_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_2, 
                style: style_Reprojected_2,
                popuplayertitle: "Reprojected",
                interactive: true,
                title: '<img src="styles/legend/Reprojected_2.png" /> Reprojected'
            });
var format_cell_3 = new ol.format.GeoJSON();
var features_cell_3 = format_cell_3.readFeatures(json_cell_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cell_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cell_3.addFeatures(features_cell_3);
var lyr_cell_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cell_3, 
                style: style_cell_3,
                popuplayertitle: "cell",
                interactive: true,
                title: '<img src="styles/legend/cell_3.png" /> cell'
            });
var format_buffer_4 = new ol.format.GeoJSON();
var features_buffer_4 = format_buffer_4.readFeatures(json_buffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_4.addFeatures(features_buffer_4);
var lyr_buffer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_4, 
                style: style_buffer_4,
                popuplayertitle: "buffer",
                interactive: true,
                title: '<img src="styles/legend/buffer_4.png" /> buffer'
            });
var format_buildings_5 = new ol.format.GeoJSON();
var features_buildings_5 = format_buildings_5.readFeatures(json_buildings_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_5.addFeatures(features_buildings_5);
var lyr_buildings_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_5, 
                style: style_buildings_5,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_5.png" /> buildings'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_cell_1.setVisible(true);lyr_Reprojected_2.setVisible(true);lyr_cell_3.setVisible(true);lyr_buffer_4.setVisible(true);lyr_buildings_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_cell_1,lyr_Reprojected_2,lyr_cell_3,lyr_buffer_4,lyr_buildings_5];
lyr_cell_1.set('fieldAliases', {'id': 'id', });
lyr_Reprojected_2.set('fieldAliases', {'id': 'id', });
lyr_cell_3.set('fieldAliases', {'id': 'id', });
lyr_buffer_4.set('fieldAliases', {'id': 'id', });
lyr_buildings_5.set('fieldAliases', {'id': 'id', });
lyr_cell_1.set('fieldImages', {'id': '', });
lyr_Reprojected_2.set('fieldImages', {'id': '', });
lyr_cell_3.set('fieldImages', {'id': '', });
lyr_buffer_4.set('fieldImages', {'id': '', });
lyr_buildings_5.set('fieldImages', {'id': '', });
lyr_cell_1.set('fieldLabels', {'id': 'no label', });
lyr_Reprojected_2.set('fieldLabels', {'id': 'no label', });
lyr_cell_3.set('fieldLabels', {'id': 'no label', });
lyr_buffer_4.set('fieldLabels', {'id': 'no label', });
lyr_buildings_5.set('fieldLabels', {'id': 'no label', });
lyr_buildings_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});