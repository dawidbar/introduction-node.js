function converttime(time) {
    var h = parseInt(time/3600);
    var hs = parseInt(time%3600);
    var m = parseInt(hs/60);
    var s = parseInt(hs%60);
    if (time > 0) {
        if (h > 0) {
            return(h + ' Hours  ' + m + ' Minutes  ' + s + ' Seconds');
        }
        else {
            return(m + ' Minutes  ' + s + ' Seconds');
        }
    }
    else {
        return(s + ' Seconds');
    }
}
exports.convert = converttime;