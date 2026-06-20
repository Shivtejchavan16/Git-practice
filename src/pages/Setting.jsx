import {useState} from "react";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile Settings" },
    { id: "system", label: "System Settings" },
    { id: "notifications", label: "Notifications" },
    { id: "security", label: "Security" },
    { id: "academic", label: "Academic Settings" },
    { id: "backup", label: "Backup & Restore" },
    
  ];

  const tabStyle = {
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "20px",
      }}
    >
      <div
  style={{
    background: "linear-gradient(135deg, #2563eb, #4f46e5)",
    color: "white",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 8px 20px rgba(37,99,235,0.2)",
  }}
>
  <h1 style={{ margin: 0 }}>⚙️ Settings</h1>
  <p style={{ marginTop: "8px" }}>
    Manage your account and system preferences
  </p>
</div>

      {/* Settings Categories */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          marginBottom: "20px",
          paddingBottom: "10px",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...tabStyle,
              background:
                activeTab === tab.id ? "#2563eb" : "#ffffff",
              color: activeTab === tab.id ? "#fff" : "#000",
              border:
                activeTab === tab.id
                  ? "none"
                  : "1px solid #ddd",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        {activeTab === "profile" && (
          <>
            <h2>Profile Settings</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(250px,1fr))",
                gap: "15px",
              }}
            >
              <input
                placeholder="Full Name"
                style={inputStyle}
              />
              <input
                placeholder="Email"
                style={inputStyle}
              />
              <input
                placeholder="Phone Number"
                style={inputStyle}
              />
              <select style={inputStyle}>
                <option>Administrator</option>
                <option>Teacher</option>
                <option>Student</option>
              </select>
            </div>

            <button style={saveBtn}
               onClick={() => alert("Profile is updated")}>
              Update Profile
            </button>
          </>
        )}

        {activeTab === "system" && (
          <>
            <h2>System Settings</h2>

            <label>
              <input type="checkbox" /> Enable System Maintenance Mode
            </label>

            <br />
            <br />

            <button style={saveBtn}
            onClick={() => alert("Enable System Maintenance Mode is ON")}>
              Save System Settings
            </button>
          </>
        )}

        {activeTab === "notifications" && (
          <>
            <h2>Notification Settings</h2>

            <label>
              <input type="checkbox" /> Email
              Notifications
            </label>

            <br />

            <label>
              <input type="checkbox" /> SMS
              Notifications
            </label>

            <br />
            <br />

            <button style={saveBtn}
            onClick={() => alert("Notification Mode is Changed")}>
              Save Notifications
            </button>
          </>
        )}

        {activeTab === "security" && (
          <>
            <h2>Security Settings</h2>

            <input
              type="password"
              placeholder="Current Password"
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="New Password"
              style={inputStyle}
            />

            <button style={saveBtn}
            onClick={() => alert("Password is Change to New Password")}>
              Change Password
            </button>
          </>
        )}

        {activeTab === "academic" && (
          <>
            <h2>Academic Settings</h2>

            <select style={inputStyle}>
              <option>Semester System</option>
              <option>Yearly System</option>
            </select>

            <button style={saveBtn}
            onClick={() => alert("Academic is saved")}>
              Save Academic Settings
            </button>
          </>
        )}

        {activeTab === "backup" && (
          <>
            <h2>Backup & Restore</h2>

            <button style={saveBtn}
            onClick={() => alert("Backup is Created")}>
              Create Backup
            </button>

            <button
              style={{
                ...saveBtn,
                marginLeft: "10px",
              }}
              onClick={() => alert("Restore all Files")}
            >
              Restore Backup
            </button>
          </>
        )}

        
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  boxSizing: "border-box",
};

const saveBtn = {
  marginTop: "15px",
  padding: "12px 20px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
  export default Setting;
