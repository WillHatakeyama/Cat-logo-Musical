const Artist = require('../models/artist');

let artists = [];

// Função para obter todos os artistas
exports.getArtists = (req, res) => {
    res.render('artists', { artists });
};

// Função para adicionar um novo artista
exports.addArtist = (req, res) => {
    const { name, genre, albums } = req.body;
    const newArtist = new Artist(name, genre, albums.split(',').map(album => album.trim()));
    artists.push(newArtist);
    res.redirect('/artists');
};

// Função para buscar artistas
exports.searchArtists = (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredArtists = artists.filter(artist => 
        artist.name.toLowerCase().includes(query) || 
        artist.genre.toLowerCase().includes(query)
    );
    res.render('artists', { artists: filteredArtists });
};

// Função para editar um artista
exports.editArtist = (req, res) => {
    const index = req.params.index;
    const { name, genre, albums } = req.body;
    const updatedArtist = new Artist(name, genre, albums.split(',').map(album => album.trim()));
    artists[index] = updatedArtist;
    res.redirect('/artists');
};

// Função para remover um artista (opcional)
exports.removeArtist = (req, res) => {
    const index = req.params.index;
    artists.splice(index, 1);
    res.redirect('/artists');
};