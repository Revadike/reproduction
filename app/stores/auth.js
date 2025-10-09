import { onAuthStateChanged, getIdTokenResult } from 'firebase/auth';
import { doc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const claims = ref(null);
  const signedInAt = ref(null);
  const loggedIn = computed(() => claims.value !== undefined);

  const firestore = useFirestore();
  const userData = useDocument(() => {
    return user.value ? doc(firestore, `users/${user.value?.uid}`) : null;
  }, { maxRefDepth: 0 });

  const auth = useFirebaseAuth();
  onAuthStateChanged(auth, async (authUser) => {
    user.value = authUser;

    if (authUser) {
      claims.value = (await getIdTokenResult(authUser)).claims;
      signedInAt.value = Date.now();
    } else {
      claims.value = null;
      signedInAt.value = null;
    }
  });

  return {
    user,
    claims,
    userData,
    signedInAt,
    loggedIn
  };
});
