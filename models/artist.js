class Artist {
    constructor(name, genre, albums = []) {
        this.name = name;
        this.genre = genre;
        this.albums = albums; // Array de títulos de álbuns
    }
}

module.exports = Artist;