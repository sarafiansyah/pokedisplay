import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, TextField, Box, Alert } from "@mui/material";
import { users } from "@/data/user"; // Import the users array

function ResponsiveCarousel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      await Swal.fire({
        title: "Login Successful",
        text: `Welcome!`,
        icon: "success",
      });
      // Introduce a 2-second delay before redirecting
      await delay(2000);
      // Redirect to the dashboard or admin page
      router.push(user.role === "admin" ? "/admin" : "/dashboard");
    } else {
      await Swal.fire({
        title: "Login Failed",
        text: "Invalid username or password.",
        icon: "error",
      });
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/"); // Redirect to login page or another appropriate page
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: "20px" }}
      >
        Login
      </Button>
      {error && (
        <Alert severity="error" style={{ marginTop: "20px" }}>
          {error}
        </Alert>
      )}
      {/* Add a logout button */}
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleLogout}
        style={{ marginTop: "20px" }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default ResponsiveCarousel;
