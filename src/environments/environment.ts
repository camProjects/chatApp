// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyASrvdcW1PZAB3dR3N9m7_I8TboxB5WdeU',
    authDomain: 'angular-chat-app-ce532.firebaseapp.com',
    databaseURL: 'https://angular-chat-app-ce532.firebaseio.com',
    projectId: 'angular-chat-app-ce532',
    storageBucket: '',
    messagingSenderId: '257616915936'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
