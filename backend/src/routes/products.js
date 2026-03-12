import express from "express"

//"Router()" nos ayudará a colocar los métodos
//Que tendrá el endpoint

const router = express.Router();

router.route("/")
.get()
.post()

//Si la ruta trae ID se trata de un update o delete
router.route("/:id")
.put()
.delete();

export default router;