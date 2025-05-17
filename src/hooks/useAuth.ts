import { Session } from "next-auth";

const useAuth = () => {
  const auth: Session | null = null;

  // const fetchAuth = async () => {
  //   auth = await getServerSession();
  // };

  // if (!auth) {
  //   fetchAuth();
  // }

  return auth;
};

export default useAuth;
