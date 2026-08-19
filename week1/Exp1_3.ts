let movieTitle: string = "Baahubali: The Beginning";
let releaseYear: number = 2015;
let isBlockbuster: boolean = true;

function getMovieStatus(title:string,year:number):string{
    return '${title} was a massive git released in ${year}';
}

let leadActors:string[] = ["Prabhas","Rana Daggubati","Anushka Shetty","Thamannah"];

const summary:string = getMovieStatus(movieTitle,releaseYear);

console.log(summary);
console.log('Starrig: ${leadActors.join(",")}');
console.log('Is it a blockbuster? $isBlockbuster? "Yes,Jai Mahishmati!":"No"}');
