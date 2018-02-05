// 用于更改文件的名称
// 如果rename不传入参数rename({})要插入一个空对象
/**
 *
 *
 * 我的例子
 *
 *
 *
 *
 */
gulp.task('renameTest1', function () {
    // 将你的默认的任务代码放在这
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(rename(function (path) {
            // path==> { dirname: '.', basename: 'header', extname: '.css' }
            path.dirname += "/css/";
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('renameTest2', function () {
    // 将你的默认的任务代码放在这
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(rename(function (path) {
            console.log(path);
            // { dirname: 'less', basename: 'header', extname: '.css' }
            // { dirname: 'less2', basename: 'footer', extname: '.css' }

            path.dirname += "/css/";
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./dist/'));
});


/**
 *
 *
 * 下面的是官方的例子
 *
 *
 *
 *
 */
var rename = require("gulp-rename");

// rename via string
gulp.src("./src/main/text/hello.txt")
    .pipe(rename("main/text/ciao/goodbye.md"))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md

// rename via function
gulp.src("./src/**/hello.txt")
    .pipe(rename(function (path) {
        path.dirname += "/ciao";
        path.basename += "-goodbye";
        path.extname = ".md";
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md

// rename via hash
gulp.src("./src/main/text/hello.txt", {base: process.cwd()})
    .pipe(rename({
        dirname: "main/text/ciao",
        basename: "aloha",
        prefix: "bonjour-",
        suffix: "-hola",
        extname: ".md"
    }))
    .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/bonjour-aloha-hola.md

//
// See test/rename.spec.js for more examples and test/path-parsing.spec.js for hairy details.
//
//     Notes
//
// dirname is the relative path from the base directory set by gulp.src to the filename.
// gulp.src() uses glob-stream which sets the base to the parent of the first directory glob (*, **, [], or extglob). dirname is the remaining directories or ./ if none. glob-stream versions >= 3.1.0 (used by gulp >= 3.2.2) accept a base option, which can be used to explicitly set the base.
// gulp.dest() renames the directories between process.cwd() and dirname (i.e. the base relative to CWD). Use dirname to rename the directories matched by the glob or descendents of the base of option.
//     basename is the filename without the extension like path.basename(filename, path.extname(filename)).
//     extname is the file extension including the '.' like path.extname(filename).
//     License






