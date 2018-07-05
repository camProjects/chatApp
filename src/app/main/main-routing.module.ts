import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'channels'
      },
      {
        path: 'channels',
        component: ChannelsComponent
      },
      {
        path: 'channels/:id',
        component: ChatPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
