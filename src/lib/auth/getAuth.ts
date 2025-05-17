import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

const getAuth = async () => {
  return await getServerSession(authOptions);
};

export default getAuth;
