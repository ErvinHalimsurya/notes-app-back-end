const {
    addNoteHandler,
    getNoteHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
// Menambah catatan
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
// Menampilkan daftar catatan
    {
        method: 'GET',
        path: '/notes',
        handler: getNoteHandler,
    },
// Menampilkan isi catatan
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
// Mengubah catatan
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
// Menghapus catatan
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;
