import { Link } from "react-router-dom";
import img from "../../../src/assets/images/login/login.svg";

const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
      };
    return (
        <div className="hero min-h-[70vh] bg-base-200 py-20">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row w-full justify-center">
          <div className="hidden lg:block lg:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100 mx-auto lg:mx-0">
            <form className="card-body" onSubmit={handleRegister}>
              <h1 className="text-2xl font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center mb-3">Already have an account? <Link to='/logIn' className="text-orange-400">Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;