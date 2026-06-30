import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../../components/auth/AuthCard";
import { Button, Input } from "../../components/ui";
import useAuth from "../../hooks/useAuth";
import { authService } from "../../services/authService";
import { ROLES } from "../../constants";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = authService.register({
      name,
      email,
      password,
      role: ROLES.EMPLOYEE,
    });

    if (!result.success) {
      alert(result.message);
      return;
    }

    login(result.user);

    navigate("/");
  };

  return (
    <AuthCard title="Register">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="w-full">
          Register
        </Button>

        <p className="text-center text-sm">
          Already have an account?
          <Link to="/login" className="ml-1 text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}

export default Register;
