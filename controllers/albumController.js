const Album = require('../models/album');

let albums = [];

// Função para obter todos os álbuns
exports.getAlbums = (req, res) => {
    res.render('index', { albums });
};

// Função para adicionar um novo álbum
exports.addAlbum = (req, res) => {
    const { title, year, cover, tracks, genres } = req.body;
    const trackList = Array.isArray(tracks) ? tracks : [tracks]; // Se for um array, use-o; caso contrário, coloque em um array
    const newAlbum = new Album(title, year, cover, trackList.map(track => track.trim()), genres.split(',').map(genre => genre.trim()));
    albums.push(newAlbum);
    res.redirect('/');
};

// Função para remover um álbum
exports.removeAlbum = (req, res) => {
    const index = req.params.index;
    albums.splice(index, 1);
    res.redirect('/');
};

// Função para buscar álbuns
exports.searchAlbums = (req, res) => {
    const query = req.query.query.toLowerCase();
    // Filtra os álbuns com base no termo de busca
    const filteredAlbums = albums.filter(album => 
        album.title.toLowerCase().includes(query) || 
        album.genres.some(genre => genre.toLowerCase().includes(query))
    );
    // Renderiza a página inicial (index) passando os álbuns filtrados como contexto
    res.render('index', { albums: filteredAlbums });
};

// Função para editar um álbum
exports.editAlbum = (req, res) => {
    const index = req.params.index;
    const { title, year, cover, tracks, genres } = req.body;
    const trackList = Array.isArray(tracks) ? tracks : [tracks]; // Se for um array, use-o; caso contrário, coloque em um array
    const updatedAlbum = new Album(title, year, cover, trackList.map(track => track.trim()), genres.split(',').map(genre => genre.trim()));
    albums[index] = updatedAlbum;
    res.redirect('/');
};