// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access_token: null as string | null,
    token_type: null as string | null,
    expires_in: null as number | null,
    refresh_token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.access_token,
  },
  actions: {
    setAuthData(authData: { access_token: string; token_type: string; expires_in: number; refresh_token: string }) {
      this.access_token = authData.access_token;
      this.token_type = authData.token_type;
      this.expires_in = authData.expires_in;  // Fixed this line
      this.refresh_token = authData.refresh_token;
    },
    clearAuthData() {
      this.access_token = null;
      this.token_type = null;
      this.expires_in = null;
      this.refresh_token = null;  // Added refresh_token clearing as well
    },
  },
  persist: true,  // Enable persistence for this store
});
