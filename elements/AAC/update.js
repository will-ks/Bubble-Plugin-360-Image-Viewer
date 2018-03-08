function(instance, properties, context) {

    var elementId = instance.data.elementId;

    $(document).ready(function() {

        if (properties.image) {
            pannellum.viewer(elementId, {
                "type": "equirectangular",
                "panorama": properties.image,
                "autoLoad": properties.autoload,
                "autoRotate": properties.autorotate,
                "preview": properties.preview_image,
                "showControls": properties.show_controls
            });
        }

    });

}