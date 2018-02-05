// Install
//
// $ npm install --save-dev del
// Usage

/*我的实例*/
gulp.task('clear', function (cb) {
    // 删除文件
    var delOk = del(['./dist/*'], cb);
    // console.dir(cb);
    // console.dir(delOk);
    return delOk;
});



/*官方实例*/


const del = require('del');

del(['tmp/*.js', '!tmp/unicorn.js']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
// Beware

// The glob pattern ** matches all children and the parent.
//
//     So this won't work:

del.sync(['public/assets/**', '!public/assets/goat.png']);
// You have to explicitly ignore the parent directories too:

    del.sync(['public/assets/**', '!public/assets', '!public/assets/goat.png']);
// Suggestions on how to improve this welcome!

//     API
//
// del(patterns, [options])
//
// Returns a promise for an array of deleted paths.
//
// del.sync(patterns, [options])
//
// Returns an array of deleted paths.
//
//     patterns
//
// Type: string Array
//
// See supported minimatch patterns.
//
//     Pattern examples with expected matches
// Quick globbing pattern overview
// options
//
// Type: Object
//
// See the glob options.
//
//     force
//
// Type: boolean
// Default: false
//
// Allow deleting the current working directory and outside.
//
//     dryRun
//
// Type: boolean
// Default: false

// See what would be deleted.

    const del = require('del');

del(['tmp/*.js'], {dryRun: true}).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});
// concurrency
//
// Type: number
// Default: Infinity
// Minimum: 1
//
// Concurrency limit.
//
//     CLI
//
// See del-cli for a CLI for this module and trash-cli for a safe version that is suitable for running by hand.
//
//     Related
//
// make-dir - Make a directory and its parents if needed
//     globby - User-friendly glob matching