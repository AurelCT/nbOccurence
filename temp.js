var searchcaractere = function (data, callback) {
    j = 0;
    for (var i = 0; i <= data.chaine.length; i++) {
        if (data.chaine.substr(i,(data.filter.length )) == data.filter) 
        j++ ;
    }
    if (j > 0){
        return callback(null, j);
    } else {
        return callback("la sous chaine" + data.filter + "n'a pas été retrouvé")
    }
   

};


var str = "abaabbbaaaab";
var substr = "ab";
var data = { chaine: str, filter: substr};
searchcaractere (data, function (err, result) {
    if (err) return console.error("une erreur est survenue:", err);
    console.log(substr + " apparait " +  result + " fois dans la chaine principale")
}); 