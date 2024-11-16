function temp(req, res, next) {
    console.log(`Middleware called for path: ${req.url}`);
    next();
}

module.exports = {
    temp,
}