const getHome = (req, res) => {
    res.json({ message: "Hello from server 'getHome" });
};

module.exports = {
    getHome,
};