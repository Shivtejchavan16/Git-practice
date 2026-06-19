function Login() {
  return (
    <div className="login-page">
      <h1>Admin Login</h1>

      <form>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;