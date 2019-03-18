function ConvertTime(time) {
    var H = (time/3600);
    var M = (time/60);
    var S = (time%60);
    if (time > 0) {
        if (H > 0) {
            console.log(H.toFixed(0) + ' Hours  ' + M.toFixed(0) + ' Minutes  ' + S.toFixed(0) + ' Seconds');
        }
        else {
            console.log(M.toFixed(0) + ' Minutes  ' + S.toFixed(0) + ' Seconds');
        }
    }
    else {
        console.log(S.toFixed(0) + ' Seconds');
    }
}
exports.Convert = ConvertTime;