import BookService from '#services/book_service'
import type { HttpContext } from '@adonisjs/core/http'
import { toHtml } from '@dimerapp/markdown/utils'

export default class BooksController {
  async bookControllerIndex({ view }: HttpContext) {
    const slugs = await BookService.getSlugs()
    const bookList: Record<string, any>[] = []

    for (const slug of slugs) {
      const md = await BookService.read(slug)

      bookList.push({
        title: md.frontmatter.title,
        authors: md.frontmatter.authors,
        slug,
      })
    }
    return view.render('pages/books/index', { bookList })
  }

  async bookControllerShow({ view, params }: HttpContext) {
    const md = await BookService.read(params.slug)
    const book = toHtml(md).contents

    return view.render('pages/books/show', { book, md })
  }
}
