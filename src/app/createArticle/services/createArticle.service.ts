import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ArticleInputInterface} from '../../shared/types/articleInput.interface'
import {map, Observable} from 'rxjs'
import {ArticleInterface} from '../../shared/types/article.interface'
import {environment} from '../../../environments/environment'
import {SaveArticleResponseInterface} from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles'

    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, {article: articleInput})
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
