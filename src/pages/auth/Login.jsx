import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import { Button, Input } from "../../components/ui";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { authService } from "../../services/authService";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authService.login(email, password);
    if (!user) {
      alert("Invalid Credentials");
      return;
    }
    login(user);
    navigate("/");
  };
  return (
    <AuthCard title="Login">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>

        <p className="text-center text-sm">
          Don't have an account?
          <Link to="/register" className="ml-1 text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}

export default Login;
