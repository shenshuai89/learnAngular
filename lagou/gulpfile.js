var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath:'src/',
    devPath:'dev/',
    proPath:'pro/'
};

gulp.task('lib',function () {
   gulp.src('./bower_components/**/*.js')
       .pipe(gulp.dest(app.devPath+"vendor"))
       .pipe(gulp.dest(app.proPath+"vendor"))
       .pipe($.connect.reload())
});

gulp.task('html',function () {
    gulp.src(app.srcPath +'**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.proPath))
        .pipe($.connect.reload())
});

gulp.task('json',function () {
    gulp.src(app.srcPath +'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.proPath + 'data'))
        .pipe($.connect.reload())
});

gulp.task('less',function () {
    gulp.src(app.srcPath + 'style/**/*.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + 'style'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.proPath + 'style'))
        .pipe($.connect.reload())
});

gulp.task('js',function () {
    gulp.src(app.srcPath + 'js/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.proPath + 'js'))
        .pipe($.connect.reload())
});

gulp.task('image',function () {
    gulp.src(app.srcPath + 'image/**/*')
        .pipe(gulp.dest(app.devPath + 'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.proPath + 'image'))
        .pipe($.connect.reload())
});

gulp.task('build',['image','js','less','html','json','lib']);

gulp.task('clean',function () {
    gulp.src([app.devPath, app.proPath])
        .pipe($.clean())
});

gulp.task('serve',['build'],function () {
    $.connect.server({
        root:[app.devPath],
        livereload: true,
        port: 1616
    });
    open('http://localhost:1616');

    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch('bower_component/**/*',['lib']);
    gulp.watch(app.srcPath + '**/*.html',['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'style/**/*.less',['less']);
    gulp.watch(app.srcPath + 'js/**/*.js',['js']);
    gulp.watch(app.srcPath + 'image/**/*',['image']);
});

gulp.task('default',['serve']);