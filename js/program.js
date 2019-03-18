process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            case '/language':
                process.stdout.write('Language: ' + process.env.LANG + '\n');
                break;
            case '/version':
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break;
            default:
                process.stderr.write("Wrong instruction!\n");
        }
    }
});