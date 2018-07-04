import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ChannelsComponent } from './channels/channels.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'channels',
        component: ChannelsComponent
      },
      {
        path: 'channels/:id',
        component: RoomComponent
      },
      {
        path: '',
        redirectTo: 'channels'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
