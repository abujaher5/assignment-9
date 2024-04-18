import { createContext, useState } from "react";

const ResidenceContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const estateInfo = { user };
  return <ResidenceContext.Provider>{children}</ResidenceContext.Provider>;
};

export default AuthProvider;
