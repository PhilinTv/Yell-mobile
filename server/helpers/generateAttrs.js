module.exports = function (name, obj) {
	obj = obj || {};
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

    obj.attrs.class = obj.attrs.class.join(' ');
    
    for (var i in obj.attrs) {
        if (typeof obj.attrs[i] == 'object') {
            obj.attrs[i] = JSON.stringify(obj.attrs[i]);
        }
    }

    return obj.attrs;
};
