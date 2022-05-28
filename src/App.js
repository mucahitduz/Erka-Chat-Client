import Container from "./components/Container";
import { ChatContextProvider } from "./contexts/ChatContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <ChatContextProvider>
      <div className="App">
        <Container />
      </div>
    </ChatContextProvider>
  ) : (
    <button className="login-button" onClick={() => setIsLoggedIn(true)}>
      Login
    </button>
  );
}

export default App;
