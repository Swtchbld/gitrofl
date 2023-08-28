/* eslint-disable indent */


const personalMovieDB =  {
	count: 0,
	movies: {},
	actors: {},
	genres:[],
	private: false,
    start: function(){
        personalMovieDB.count = +prompt('How many films have you seen arleady?', '');
       while(personalMovieDB==''|| personalMovieDB ==null||isNaN(personalMovieDB)) {
           personalMovieDB = +prompt('How many films have you seen arleady?', '');
       }
   },rememberMyFilms: function() {
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
},
detectedPersonaleLevel:function() {
    if (personalMovieDB.count < 10) {
        console.log('you are gay');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you are gaylord');
    } else if (personalMovieDB.count >= 30) {
        console.log('you are fucking pidar');
    } else {
        console.log('errorrrr');
    }


},
showMyDB:function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    },toggleVisibleMyDB:function(){
        if(personalMovieDB.private){
            personalMovieDB.private=false;
        } else{
            personalMovieDB.private=true;
        }
    }, 
     writeYourGenres:function() {
        for (let i = 1; i <= 3; i++) {
    let genre =prompt(`What is yours favorite genre?${i}`);
    if(genre===''|| genre==null){
        console.log('erorr');
        i--;
    } else{
            personalMovieDB.genres[i - 1] = genre;
              }      }
              personalMovieDB.genres.forEach((item,i) =>{ console.log(`your favorite genre ${i+1} - this ${item}`); } );
            
            }
};