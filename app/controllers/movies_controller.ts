import Movie from '#models/movie'
import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async movieControllerIndex({ view }: HttpContext) {
    const movies = await Movie.all()
    return view.render('pages/home', { movies })
  }

  async movieControllerShow({ view, params }: HttpContext) {
    const movie = await Movie.find(params.slug)
    return view.render('pages/movies/show', { movie })
  }
}
