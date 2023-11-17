// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: "https://pokeapi.co/api/v2/",
  pokestatisticsBaseUrl: "wss://pokemon-statistics-be19c4542f3c.herokuapp.com/",
  firebaseConfig:{
    apiKey: "AIzaSyDqQNHl_ztaZGuOcIWx_0579hKtZIRdG1Y",
    authDomain: "advanced-web-apps-ea027.firebaseapp.com",
    projectId: "advanced-web-apps-ea027",
    storageBucket: "advanced-web-apps-ea027.appspot.com",
    messagingSenderId: "1079660341949",
    appId: "1:1079660341949:web:357a5d71ac19865382e5d4",
    measurementId: "G-D09G9DHKTH"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
