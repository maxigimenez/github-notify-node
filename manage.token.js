var fs = require('fs'),
    path = require('path'),
    file = path.join(process.env.HOME, '.ssh/config.gitlist');

var exists = function(){
    if(fs.existsSync(file, 'utf8')){
        return true;
    } else {
        return false;
    }
}

var create = function(token, callback){
    fs.writeFile(file, token, callback);
};

var get = function(){
    return fs.readFileSync(file, 'utf8');
};

module.exports.exists = exists;
module.exports.create = create;
module.exports.get = get;