import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginRight: 10, padding: 10, borderRadius: 5, border: 1 }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginRight: 10, padding: 10, borderRadius: 5, border: 1 }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setUser({ username, password });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
