const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
})

router.get('/new', (req, res) => {
    res.render('users/new', { firstName: 'Test'} );
})

router.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send('Hello ' + req.body.firstName);
})

router
.route("/:id")
.get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.id}`);
})
.put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
})

const users = [{ name: 'Stanislaw'}, { name: 'Andrew'}, {name: 'Eustachy'}]

router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})

module.exports = router;