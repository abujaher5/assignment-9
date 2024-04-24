import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ResidenceContext } from "../../providers/AuthProvider";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log("error", error.message));
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log("error", error.message));
  };
  const { signIn } = useContext(ResidenceContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center p-4">
              Don't have an Account?
              <span className="text-lg font-semibold">Please</span>
              <Link to="/register">
                <a className="text-blue-600 underline ml-6">Register</a>
              </Link>
            </p>
            <div className="p-4 space-y-3 mx-auto">
              <h2 className="text-xl text-center font-semibold">Login With</h2>
              <button onClick={handleGoogleSignIn} className="btn  w-full">
                <FaGoogle></FaGoogle>
                Login With Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline w-full"
              >
                <FaGithub></FaGithub>
                Login With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
