// Create Movie class
class Movie {
    private producer: string;
    private director: string;
    private hero: string;
    private musicDirector: string;
    private actionDirector: string;
    private DOP: string;

    display():void {
        console.log(`Producer: ${this.producer}`);
        console.log(`Director: ${this.director}`);
        console.log(`Hero: ${this.hero}`);
        console.log(`Music Director: ${this.musicDirector}`);
        console.log(`Action Director: ${this.actionDirector}`);
        console.log(`Director of Photography: ${this.DOP}`);
    }

    getProducer(){
        return this.producer;
    }

    setProducer(producer: string){
        this.producer = producer;
    }

    getDirector(): string {
        return this.director;
    }

    setDirector(director: string) {
        this.director = director;
    }

    getHero(): string {
        return this.hero;
    }

    setHero(hero: string) {
        this.hero = hero;
    }

    getMusicDirector(): string {
        return this.musicDirector;
    }

    setMusicDirector(musicDirector: string) {
        this.musicDirector = musicDirector;
    }

    getActionDirector(): string {
        return this.actionDirector;
    }

    setActionDirector(actionDirector: string) {
        this.actionDirector = actionDirector;
    }

    getDOP(): string {
        return this.DOP;
    }

    setDOP(DOP: string) {
        this.DOP = DOP;
    }
}

// Create Director abstract class
abstract class MovieBuilder {
    protected movie: Movie = new Movie();
    public abstract buildProducer(): void;
    public abstract buildDirector(): void;
    public abstract buildHero(): void;
    public abstract buildMusicDirector(): void;
    public abstract buildActionDirector(): void;
    public abstract buildDOP(): void;

    public getMovie(): Movie {
        return this.movie;
    }
}

// Create concrete builders
class ActionMovieBuilder extends MovieBuilder {
    public buildProducer(): void {
        this.movie.setProducer("John Doe");
    }
    public buildDirector(): void {
        this.movie.setDirector("Jane Smith");
    }
    public buildHero(): void {
        this.movie.setHero("Tom Cruise");
    }
    public buildMusicDirector(): void {
        this.movie.setMusicDirector("Tom Johnson");
    }
    public buildActionDirector(): void {
        this.movie.setActionDirector("David Lee");
    }
    public buildDOP(): void {
        this.movie.setDOP("Jane Doe");
    }
}

// Another concrete builder class
class ComedyMovieBuilder extends MovieBuilder {
    public buildProducer(): void {
        this.movie.setProducer("Jane Doe");
    }
    public buildDirector(): void {
        this.movie.setDirector("Jane Smith");
    }
    public buildHero(): void {
        this.movie.setHero("Jane Smith");
    }
    public buildMusicDirector(): void {
        this.movie.setMusicDirector("John Doe");
    }
    public buildActionDirector(): void {
        this.movie.setActionDirector("David Lee");
    }
    public buildDOP(): void {
        this.movie.setDOP("Jane Doe");
    }
}

// Create the director class to manage the construction process
class MovieCreationDirector {
    createMovie(builder: MovieBuilder): Movie{
        builder.buildProducer();
        builder.buildDirector();
        builder.buildHero();
        builder.buildMusicDirector();
        builder.buildActionDirector();
        builder.buildDOP();
        return builder.getMovie();
    }
}

// Usage
let creationDirector = new MovieCreationDirector();

let actionMovieBuilder = new ActionMovieBuilder();
let actionMovie = creationDirector.createMovie(actionMovieBuilder)

let comedyMovieBuilder = new ComedyMovieBuilder();
let comedyMovie = creationDirector.createMovie(comedyMovieBuilder)

actionMovie.display()