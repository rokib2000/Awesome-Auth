import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const LogIn = () => {
  const { userLogin, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => [
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      }),
  ];

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
            <br />
            <hr />
            <div className="form-control mt-6">
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                Login with Google
              </button>
            </div>
            <label className="label">
              <span className="label-text-alt ">
                New to this website? Please{" "}
                <Link to="/register" className="link link-hover text-blue-500	">
                  Register
                </Link>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
