module.exports = function (name, obj) {
	var attrs = '';
	
    obj.attrs = obj.attrs || {};
    obj.attrs.class = [name];

    if (obj.mods instanceof Object) {
    	for (var i in obj.mods) {
            if (obj.mods[i] !== false) {
        		obj.attrs.class.push(name + '_' + i + (obj.mods[i] === true ? '' : '_' + obj.mods[i]));
            }
    	}
    }

    if (obj.mix instanceof Array) {
    	obj.attrs.class = obj.attrs.class.concat(obj.mix);
    }

    console.log(obj.attrs);

    for (var i in obj.attrs) {
        if (obj.attrs[i] !== false) {
            attrs += i + (obj.attrs[i] === true ? '' : '="' + obj.attrs[i] + '"') + ' ';
        }
    }

    return attrs;
};
