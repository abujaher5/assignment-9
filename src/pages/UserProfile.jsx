import { useContext } from "react";
import { ResidenceContext } from "../providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(ResidenceContext);
  console.log(user);

  const { displayName, photoURL, email } = user;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{displayName}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
