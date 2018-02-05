var searchindex = function (data, callback) {
    for (var i = 0; i < data.table.length; i++) {
        if (data.table[i] == data.filter) return callback(null, i);
    }
   return callback("impossible de trouver l'index dans le tableau");

};

var table = [1, 3, 6, 8, 9];
var filter = 6;
var data = { table: table, filter: filter };
searchindex(data, function (err, result) {
    if (err) return console.error("une erreur est survenue:", err);
    console.log(filter + " est à l'index : " +  result)
});

 

