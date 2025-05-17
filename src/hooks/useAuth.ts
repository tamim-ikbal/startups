import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState<Session | null>(null);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      setAuth(session);
    })();
  }, []);
  return auth;
};

export default useAuth;
