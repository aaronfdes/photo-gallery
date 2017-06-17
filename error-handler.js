var mylog = require('./photo-logger');

module.exports = {
    handleError: function handleError(error, req, res) {
        mylog.logError(req, res, err);
        return next(err);
    }
};