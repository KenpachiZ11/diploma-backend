const auth = (req, res) => {
    res.json({ message: "Hello from server 'auth'" });
}

module.exports = {
    auth
};