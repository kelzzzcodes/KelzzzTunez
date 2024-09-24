// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  // Check if user is authenticated
  if (authStore.isAuthenticated) {
    // If authenticated, redirect to home page if not already on it
    if (to.path === '/signin') {
      return navigateTo('/') // Redirect to home if trying to access /signin
    }
  } else {
    // If not authenticated, redirect to sign-in page if not already on it
    if (to.path !== '/signin') {
      return navigateTo('/signin') // Redirect to /signin if not authenticated and trying to access any other route
    }
  }
})
