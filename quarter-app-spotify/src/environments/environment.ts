// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: any = {
  production: false,
  apiBaseUrl: 'https://api.spotify.com/v1',
  token: 'token',
  spotifyParams: {
    grant_type: 'client_credentials',
    client_id: '361794b4f2b3495c80987639d2ef347e',
    client_secret: 'fd105a9c997c4e8d8e223753419bfae7'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
