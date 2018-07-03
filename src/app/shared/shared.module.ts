import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }
}
