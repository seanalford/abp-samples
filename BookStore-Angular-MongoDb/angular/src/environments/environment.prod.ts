export const environment = {
  production: true,
  application: {
    name: 'BookStore',
    logoUrl: ''
  },
  oAuthConfig: {
    issuer: 'https://localhost:44314',
    clientId: 'BookStore_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'BookStore',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44314'
    }
  },
  localization: {
    defaultResourceName: 'BookStore'
  }
};
