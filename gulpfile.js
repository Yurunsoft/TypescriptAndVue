var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

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
    gulp.watch(srcPath + '/**/*', () => compile());
    compile();
});