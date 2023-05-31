const express = require("express");
const route = express.Router();



const {Creatnewbook,findAllbook,findOnebook,singleBookUpdate,deleteAbook} = require("../controllers/bookController");

route.post("/Creatnewbook",Creatnewbook);
route.get("/findAllbook",findAllbook);
route.get("/findOnebook/:id",findOnebook);
route.put("/singleBookUpdate/:id",singleBookUpdate);
route.delete("/deleteAbook/:id",deleteAbook);

module.exports=route;