import "@/App.css";
import useProfile from "./hooks/use-profile";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const {
    data: profile,
    isLoading,
    error,
  } = useProfile({ staleTime: 5000, enabled: isLoggedin });

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedin);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile :{error.message}</div>;

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={toggleLogin}>Login</button>
      {profile && (
        <div>
          <p>Title: {profile.title}</p>
          <p>Body: {profile.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
