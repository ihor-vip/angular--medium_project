import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {SettingsComponent} from 'src/app/settings/components/settings/settings.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

const routes = [{path: 'settings', component: SettingsComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
