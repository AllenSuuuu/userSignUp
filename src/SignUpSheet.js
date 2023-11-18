import React, { useState } from "react"; // Import react and useState hook

function SignUpSheet() {
  // Use the useState hook to set all the needed information to be initially blank
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // set the updated data
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Send the submitted data to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", user);
  };

  // Inline css
  const sheetStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
  };

  // The template for the information user inputs
  return (
    <form onSubmit={handleSubmit} style={sheetStyle}>
      <input
        type="text"
        name="fullName"
        value={user.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        style={inputStyle}
      />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        style={inputStyle}
      />
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleChange}
        placeholder="Address"
        style={inputStyle}
      />
      <input
        type="tel"
        name="phoneNumber"
        value={user.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpSheet;
