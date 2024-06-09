import { InitializeData } from "./components";
import { Roulettes } from "./components/roulettes";
import { User } from "./components/user";

function App() {
  return (
    <div style={{
      margin: "20px 40px",
    }}>
      <InitializeData />

      <div style={{
        display: "flex",
        gap: "30px"
      }}>
        <User />

        <Roulettes />
      </div>
    </div>
  );
}

export default App;
