// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // Check if user is authenticated
  if (authStore.isAuthenticated && to.path === '/signin') {
    return navigateTo('/'); // Redirect to home if authenticated and trying to access /signin
  }
});
