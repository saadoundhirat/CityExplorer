// landingRoute 


function landingRoute (req,res){
    res.status(200).send(" Landing Routes HERE ...");
}

// handleTestRoute 
function handleTestRoute(req,res){
    res.send('server works correctly ...');
}
// ======================================================================
// othersRoute
function othersRoute (req,res){
    res.send("This route not coverd yet ... bye");
}

module.exports ={landingRoute,handleTestRoute,othersRoute}