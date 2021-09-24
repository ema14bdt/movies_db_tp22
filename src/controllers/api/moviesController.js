const db = require('../../database/models');
const getURL = (req) => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

const moviesController = {
    create: async (req, res) => {
        try {
            const newMovie = await db.Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
            });
            let response = {
                meta: {
                    status: 200,
                    total: newMovie.length,
                    url: getURL(req),
                },
                data: newMovie,
            };
            res.json(response);
        } catch (error) {
            res.send(error);
        }
    },
    delete: async (req, res) => {
        try {
            let movieToDelete = await db.Movie.destroy({where: {id: req.params.id}, force: true});
            let response = {
                meta: {
                    status: 200,
                    total: movieToDelete.length,
                    url: getURL(req),
                },
                data: movieToDelete,
            };
            res.json(response);
        } catch (error) {
            res.send(error);
        }
    },
};

module.exports = moviesController;
