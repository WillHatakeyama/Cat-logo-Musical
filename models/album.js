class Album {
    constructor(title, year, cover, tracks, genres = []) {
        this.title = title;
        this.year = year;
        this.cover = cover;

        // Verifica se 'tracks' é uma string, caso contrário inicializa como um array vazio
        if (typeof tracks === 'string') {
            this.tracks = tracks.split(',').map(track => track.trim());
        } else if (Array.isArray(tracks)) {
            this.tracks = tracks.map(track => track.trim());
        } else {
            this.tracks = []; // Valor padrão caso 'tracks' seja inválido
        }

        this.genres = genres; // Array de gêneros
    }
}

module.exports = Album;
