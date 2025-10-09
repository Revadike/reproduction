export default defineNuxtRouteMiddleware(async (to) => {
  const user = await getCurrentUser();

  // redirect the user to the login page
  if (!user) {
    return navigateTo({
      path: '/inloggen',
      query: {
        redirect: to.fullPath
      }
    });
  }
});
