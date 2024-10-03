function Login() {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col min-h-screen">
      <div className="border px-10 py-5 w-1/3">
        <h4 className="md:text-5xl text-3xl md:mb-9 mb-6 text-center font-bold">
          Login
        </h4>
        <div >
          <div className="pt-5 pb-2 border-b-2">
            <label className="pr-24">Username</label>
            
            <div className="">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                className="border-b outline-none border-none"
                placeholder="Type your username"
              />
            </div>
          </div>

          <div className="pt-5 pb-2 border-b-2">
            <label className="pr-24">Password</label>
            <div className="">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                className="border-b outline-none border-none"
                placeholder="Type your username"
              />
            </div>
          </div>

          <p className="text-end my-3">
            <a href="/">Forget password?</a>
          </p>

            <div className="text-center">
            <button className=" border rounded-full px-2 w-full py-2">LOGIN</button>
            </div>

          <p className="text-center my-5">Or Sign Up Using</p>

          <div className="soical-icons">
            <a href="/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>

          <div className="footer">
            <p>Or Sign Up Using</p>
            <a href="">SIGN UP</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
