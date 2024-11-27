// Importa os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const albumController = require('./controllers/albumController');
const artistController = require('./controllers/artistController');

const app = express(); // Cria uma instância do aplicativo Express
const PORT = 3000; // Define a porta onde o servidor será executado

// Configuração da visualização (view engine)
app.set('view engine', 'ejs');
app.set('views', './views');

// Configuração de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas para discos
app.get('/', albumController.getAlbums);
app.post('/add-album', albumController.addAlbum);
app.post('/remove-album/:index', albumController.removeAlbum);
app.get('/search-albums', albumController.searchAlbums); // Rota de busca
app.post('/edit-album/:index', albumController.editAlbum); // Rota de edição

// Rotas para artistas
app.get('/artists', artistController.getArtists);
app.post('/add-artist', artistController.addArtist);
app.get('/search-artists', artistController.searchArtists); // Rota de busca
app.post('/edit-artist/:index', artistController.editArtist); // Rota de edição
app.post('/remove-artist/:index', artistController.removeArtist); // Rota para remover artista (opcional)

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});