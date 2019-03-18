function ConvertTime(time) {
    var h = (time/3600);
    var hs = (time%3600);
    var m = (hs/60);
    var s = (hs%60);
    if (time > 0) {
        if (h > 0) {
            return(h.toFixed(0) + ' Hours  ' + m.toFixed(0) + ' Minutes  ' + s.toFixed(0) + ' Seconds');
        }
        else {
            creturn(m.toFixed(0) + ' Minutes  ' + s.toFixed(0) + ' Seconds');
        }
    }
    else {
        return(s.toFixed(0) + ' Seconds');
    }
}
exports.Convert = ConvertTime;