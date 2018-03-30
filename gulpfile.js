var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var fileSystem = require('fs');

var tsProject = ts.createProject('./tsconfig.json');

// typescript代码路径
var srcPath = './ts';
// 编译后的js输出路径
var targetPath = './js';

function compile() {
    // 编译ts
    tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(targetPath));
    // 复制非ts文件
    gulp.src(srcPath + '/**/*.!(ts|d.ts)')
        .pipe(gulp.dest(targetPath))
}

gulp.task('default', function () {
    // 启动时重新编译
    compile();
    // 监听更改
    watch(srcPath + '/**/*', function(e){
        switch(e.event)
        {
            case 'add':
            case 'change':
                if('.ts' === e.extname)
                {
                    gulp.src(e.path, {base : srcPath})
                        .pipe(sourcemaps.init())
                        .pipe(tsProject())
                        .pipe(sourcemaps.write())
                        .pipe(gulp.dest(targetPath));
                }
                else
                {
                    gulp.src(e.path, {base : srcPath})
                        .pipe(gulp.dest(targetPath))
                }
                break;
            case 'unlink':
                var fileName = '';
                if('.ts' === e.extname)
                {
                    fileName = targetPath + '/' + path.relative(srcPath, e.dirname + '/' + e.stem + '.js');
                }
                else
                {
                    fileName = targetPath + '/' + path.relative(srcPath, e.path);
                }
                fileSystem.existsSync(fileName) && fileSystem.unlink(fileName);
        }
    });
});