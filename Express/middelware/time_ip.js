
const getTimeAndIp = (req,res, next) => {
    req.requestTime = new Date(Date.now()).toLocaleString('en-GB');
    console.log("Ip: " + req.ip + "\nTime: " + req.requestTime);
    next();
}
module.exports = getTimeAndIp;