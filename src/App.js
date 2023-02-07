//This project is made by following "Framer Motion (React Animation Library) Crash Course" by "Laith Academy" on YT.
//Box 3 is not complete you can see the video again.
//See video for Box5. Used useAnimation hook for animations. And then control function by const control
import "./App.css";
import Box1 from "./components/Box1/Box1";
import Box2 from "./components/Box2/Box2";
import Box4 from "./components/Box4/Box4";
// import Box3 from "./components/Box3/Box3";

function App() {
  return (
    <div className="App">
      <Box1 />
      <Box2 />
      {/* <Box3 /> */}
      <Box4 />
    </div>
  );
}

export default App;
