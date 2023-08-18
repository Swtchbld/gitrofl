const numberOfFilms = +prompt('How many films have you seen arleady?', '');

const personalMovieDB =  {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres:[],
	private: false
};

const a =prompt ('What film you have watched last?',''),
	b= prompt ('how you can rate it?',''),
	c= prompt('What film you have watched last?',''),
	d= prompt ('how you can rate it?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);