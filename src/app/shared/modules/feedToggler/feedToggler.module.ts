import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeeedTogglerComponent} from './components/feedToggler/feeedToggler.component'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeeedTogglerComponent],
  exports: [FeeedTogglerComponent],
})
export class FeedTogglerModule {}
