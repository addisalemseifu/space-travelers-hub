import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRockets } from "./redux/rockets/rocketsSlice";
import Missions from "./components/Missions";
import Rockets from "./components/Rockets";
import Navigation from "./components/Navigation";
import MyProfile from "./components/MyProfile";
import { getMissions } from "./redux/missions/missionsSlice";

function App() {
  const dispatch = useDispatch();
  const {rockets} = useSelector((store)=>store.rocket);
  console.log(rockets);
  const {missions} = useSelector((store)=>store.mission);
  console.log(missions);
  useEffect(()=>{
dispatch(getRockets());
dispatch(getMissions())
  },[]);
  return (
    <div className="App">
      <Navigation/>
     <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions/>}/>
      <Route path="/myprofile" element={<MyProfile/>}/>
     </Routes>
    </div>
  );
}

export default App;
