const heroesController = {

    list: function (req, res) {
        let heroes = require("../data/heroes.json");
        res.send(heroes);
    },

    profesion: function (req, res) {
        let heroes = require("../data/heroes.json");

        let resultado = heroes.filter(function (heroeId) {
            return heroeId.id == req.params.id
        })

        res.render("heroes-profesion", {
            profesion: resultado
        });
    },

    resenia: function (req, res) {
        let heroes = require("../data/heroes.json");
        let reseniaFinal = "";
        

        let resultado = heroes.filter(function (heroeId) {
            return heroeId.id == req.params.id
        });

        if (resultado.length !== 0 && req.params.tipo == undefined) {
            let reseniaSlice = resultado[0].resenia;
            reseniaFinal = reseniaSlice.slice(0,29);
        }
        else {
            if (resultado.length !== 0 && req.params.tipo !== undefined) {
            reseniaFinal = resultado[0].resenia;
            }
            else {
                reseniaFinal = "";
            }
        };

        res.render("heroes-resenia", {resultado: resultado, resenia: reseniaFinal});
    },

};

module.exports = heroesController;