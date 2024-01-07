
module.exports.home = function(req, res) {


    //this is for tag 
    res.setHeader('Content-Type', 'text/html');

    return res.end('<h2> Express is up for codial! </h2>');
}