/* eslint-disable indent */
 let numberOfFilms ;
function start(){
     numberOfFilms = +prompt('How many films have you seen arleady?', '');
    while(numberOfFilms==''|| numberOfFilms ==null||isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have you seen arleady?', '');
    }
}
start();

const personalMovieDB =  {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres:[],
	private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What film you have watched last?', '').trim(),
            b = prompt('how you can rate it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectedPersonaleLevel() {
    if (personalMovieDB.count < 10) {
        console.log('you are gay');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you are gaylord');
    } else if (personalMovieDB.count >= 30) {
        console.log('you are fucking pidar');
    } else {
        console.log('errorrrr');
    }


}
detectedPersonaleLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);

    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {

        personalMovieDB.genres[i - 1] = prompt(`What is yours favorite genre?${i}`);
    }
}
writeYourGenres(); 
 
 /*     let num;
    let volume;
    let square;
    function calculateVolumeAndArea() {
        num=+prompt('put cube length','');
        volume=num*num*num;
        square =(num*num)*6;
        if(volume==0 || volume<0||square==0||square<0){
            console.log('this is error');
        } else  console.log('this your volume of cube',volume,'this is cube square',square);
       
    }
    calculateVolumeAndArea(num); 

     */

