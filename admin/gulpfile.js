var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compilar o Sass
gulp.task('sass', gulp.series(function(){

    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}));

// Mover Js para src/js
gulp.task('js', function(){

    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/popper.js/dist/umd/popper.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());

});

// Servidor p/ ver HTML e CSS
gulp.task('serve', gulp.series(function(){
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.parallel(['sass']));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series(['js', 'serve']));
