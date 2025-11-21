/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MoviesController = () => import('#controllers/movies_controller')
const BooksController = () => import('#controllers/books_controller')

router.get('/', [MoviesController, 'movieControllerIndex']).as('home')

// router
//   .get('/movies/:slug', [MoviesController, 'show'])
//   .as('movies.show')
//   .where('slug', router.matchers.slug())

// Movies
router.get('/movies', [MoviesController, 'movieControllerIndex']).as('movies.index')
router
  .get('/movies/:slug', [MoviesController, 'movieControllerShow'])
  .as('movies.show')
  .where('slug', router.matchers.slug())

// Books
router.get('/books', [BooksController, 'bookControllerIndex']).as('books.index')
router
  .get('/books/:slug', [BooksController, 'bookControllerShow'])
  .as('books.show')
  .where('slug', router.matchers.slug())
