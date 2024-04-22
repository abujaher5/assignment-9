import { useContext } from "react";
import { ResidenceContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(ResidenceContext);
  console.log(user);

  const { displayName, photoURL, email } = user;
  return (
    <div>
      <div className="card w-full lg:w-1/2 mx-auto  bg-base-100 my-10 shadow-xl">
        <figure>
          <img src={photoURL} alt="User Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">User Name : {displayName}</h2>
          <p> User Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
