import { Link } from "react-router-dom";
import img from "../../../src/assets/images/login/login.svg";

const LogIn = () => {
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-[70vh] bg-base-200 py-20">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row w-full justify-center">
          <div className="hidden lg:block lg:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100 mx-auto lg:mx-0">
            <form className="card-body" onSubmit={handleLogIn}>
              <h1 className="text-2xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p className="text-center mb-3">Do not have an account? <Link to='/register' className="text-orange-400">register now!</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
