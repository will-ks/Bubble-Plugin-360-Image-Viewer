function(instance, context) {


    var randomId = Math.floor((Math.random() * 100000) + 1);
    var elementId = 'panElement_' + randomId;
    instance.canvas.append("<div style='width:100%;height:100%' id='" + elementId + "'></div>");
    instance.data.elementId = elementId;


}