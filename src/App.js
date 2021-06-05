import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile
        img="./ellipse-1@2x.png"
        details={
          <div className="text-1">
            Name : QWERTY <br />
            Age : 56
            <br />
            P_id : 1234567
            <br />
            Place : zxcvb
          </div>
        }
        button="View Profile"
        close="CLOSE"
      />
    </div>
  );
}

export default App;
