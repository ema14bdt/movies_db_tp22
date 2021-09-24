const db = require('../../database/models');
const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

const genresController = {
    list: async (req, res) => {
        try {
            const genres = await db.Genre.findAll();
            let response = {
                status: 200,
                meta: {
                    lenght: genres.length,
                    url: getURL(req),
                },
                data: genres,
            };
            return res.status(200).json(response);
        } catch (error) {
            return res.status(error.status || 500).json({
                status: error.status || 500,
                message: error.message,
            });
        }
    },

    detail: async (req, res) => {
        try {
            const genre = await db.Genre.findByPk(req.params.id);
            let response = {
                status: 200,
                meta: {
                    lenght: genre.length,
                    url: getURL(req),
                },
                data: genre,
            };
            return res.status(200).json(response);
        } catch (error) {
            return res.status(error.status || 500).json({
                status: error.status || 500,
                message: error.message,
            });
        }
    }
}

module.exports = genresController;