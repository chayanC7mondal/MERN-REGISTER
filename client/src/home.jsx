import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Our App</h1>
      <p>Click below to register or log in.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
