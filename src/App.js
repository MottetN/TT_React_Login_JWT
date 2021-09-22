import Routes from "./components/routers/Routes";
import useToken from "./useToken";
import Login from "./components/Login/Login";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Routes />
    </div>
  );
}
