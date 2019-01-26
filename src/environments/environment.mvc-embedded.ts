export const environment = {
  name: 'mvc-embedded',
  production: false,
  paypalID: '',
  dataUrl: 'https://localhost:63374',
  authUrl: 'https://localhost:63374/id',
  baseRef: '/V2',
  oidc_client_settings: {
    authority: 'https://localhost:63374/id',
    client_id: 'machete-ui-local-embedded',
    redirect_uri: 'https://localhost:4213/V2/authorize',
    post_logout_redirect_uri: 'https://localhost:4213/V2',
    response_type: 'id_token token',
    scope: 'openid email roles api profile',
    silent_redirect_uri: 'https://localhost:4213/V2/silent-renew.html',
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 4,
    // silentRequestTimeout:10000,
    filterProtocolClaims: true,
    loadUserInfo: true
  }
};
