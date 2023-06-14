const router = require("express").Router();
const u = require('../controllers/user-controller/js');

router.get("/users", u.getAllUsers);
router.get("/users/:id", u.getSingleUsers);
router.post("/users/auth", u.auth);
router.post("/users/add", u.addUser);
router.put("/users/update/:id", u.updUser);
router.delete("/users/:id", u.delUser);

module.exports = router;