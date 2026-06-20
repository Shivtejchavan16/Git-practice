import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful!");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  const handleForgotPassword = () => {
    alert("Password reset link will be sent to your email.");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.email}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.password}
              </p>
            )}
          </div>

          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <span
              onClick={handleForgotPassword}
              style={{
                color: "#667eea",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#667eea",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;