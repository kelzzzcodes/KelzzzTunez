// ~/config/spotify.ts
export const spotifyConfig = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUrl: process.env.SPOTIFY_REDIRECT_URL,
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  scope: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
  ],
}