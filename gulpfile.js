var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var del = require('del');
var moment = require('moment');


// 为什么gulp要安装两遍？防止版本错误使用，在这里安装可以下载相应的版本
// gulp实现文件更改自动刷新

gulp.task('clear', function (cb) {
    // 删除文件
    var delOk = del(['./dist/*'], cb);
    // console.dir(cb);
    // console.dir(delOk);
    return delOk;
});

gulp.task('renameTest1',['clear'], function () {
    // 将你的默认的任务代码放在这
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(rename(function (path) {
            // path==> { dirname: '.', basename: 'header', extname: '.css' }
            path.dirname += "/css/";
            path.basename += ".min-" + moment().format('HH-MM-SS');
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
            path.basename += moment().format('HH-MM-SS');
        }))
        .pipe(gulp.dest('./dist/'));
});





