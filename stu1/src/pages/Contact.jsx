import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "#fff",
          borderRadius: "20px",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            background: "#2563eb",
            color: "#fff",
            padding: "40px",
          }}
        >
          <h1>Contact Us </h1>
          <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
            Have questions or suggestions? We'd love to hear from you.
          </p>

          <div style={{ marginTop: "30px" }}>
            <h3>📍 Address </h3>
            <p>Bhiwandi, Maharashtra, India</p>

            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>

            <h3>📧 Email</h3>
            <p>info@college.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            padding: "40px",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "20px" }}>
            Send Message
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default Contact;