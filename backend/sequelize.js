const Sequelize = require('sequelize');

const UserModel = require('./models/user');
const MovieModel = require('./models/movie');
const ProductionCompanyModel = require('./models/productionCompanies');
const MovieGenreModel = require('./models/movieGenres');
const ProductionCountryModel = require('./models/productionCountry');
const SpokenLanguageModel = require('./models/spokenLanguage');

require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const pg_username = process.env.POSTGRES_USER;
const pg_pw = process.env.POSTGRES_PASSWORD;
const pg_ip = process.env.POSTGRES_IP;
const pg_port = process.env.POSTGRES_PORT;
const pg_db = process.env.POSTGRES_DB_NAME;
const DB_CONN_STR = `postgres://${pg_username}:${pg_pw}@${pg_ip}:${pg_port}/${pg_db}`;

const sequelize = new Sequelize(DB_CONN_STR, {
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);
const ProductionCompany = ProductionCompanyModel(sequelize, Sequelize);
const MovieGenre = MovieGenreModel(sequelize, Sequelize);
const ProductionCountry = ProductionCountryModel(sequelize, Sequelize);
const SpokenLanguage = SpokenLanguageModel(sequelize, Sequelize);

// Use these for tables that are just used for many to many relationships
const UserFav = sequelize.define('user_fav', {});
const MovieProdCompany = sequelize.define('movie_prod_company', {});
const MovieProdCountry = sequelize.define('movie_prod_country', {});
const MoviesGenres = sequelize.define('movie_genre', {});
const MovieLanguages = sequelize.define('movie_spoken_languages', {});

Movie.belongsToMany(MovieGenre, { through: MoviesGenres, unique: false});
MovieGenre.belongsToMany(Movie, { through: MoviesGenres, unique: false});
Movie.belongsToMany(ProductionCountry, { through: MovieProdCountry, unique: false});
ProductionCountry.belongsToMany(Movie, { through: MovieProdCountry, unique: false});
Movie.belongsToMany(ProductionCompany, { through: MovieProdCompany, unique: false});
ProductionCompany.belongsToMany(Movie, { through: MovieProdCompany, unique: false});
Movie.belongsToMany(SpokenLanguage, { through: MovieLanguages, unique: false});
SpokenLanguage.belongsToMany(Movie, { through: MovieLanguages, unique: false});

sequelize.sync()
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = {
    User,
    Movie,
    ProductionCompany,
    MovieGenre,
    ProductionCountry,
    SpokenLanguage
};