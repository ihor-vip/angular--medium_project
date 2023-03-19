import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {AddToFavoritesComponent} from './components/addToFavorites/addToFavorites.component'

@NgModule({
  imports: [CommonModule],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [],
})
export class AddToFavoritesModule {}
