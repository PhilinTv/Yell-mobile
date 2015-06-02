module.exports = function (name, obj) {
	var attrs = '',
        cssClass;
	
    obj = obj || {};
    obj.attrs = obj.attrs || {};
    cssClass = [name];

    if (obj.mods instanceof Object) {
    	for (var i in obj.mods) {
            if (obj.mods[i] !== false) {
        		cssClass.push(name + '_' + i + (obj.mods[i] === true ? '' : '_' + obj.mods[i]));
            }
    	}
    }

    if (obj.mix instanceof Array) {
    	cssClass = cssClass.concat(obj.mix);
    }

    obj.attrs.class = cssClass.join(' ');

    for (var i in obj.attrs) {
        if (obj.attrs[i] !== false) {
            attrs += i + (obj.attrs[i] === true ? '' : '="' + obj.attrs[i] + '"') + ' ';
        }
    }

    return attrs;
};
