import { Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import Room from "./components/Room";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/hms-video-react";
import Navbars from "./components/Navbar.jsx";
import HomeScreen from "./screens/HomeScreen";
import ParentHouseScreen from "./screens/ParentHouseScreen";
import ParentFeedScreen from "./screens/ParentFeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import BabySitterSignUpScreen from "./screens/BabySitterSignUpScreen"; 
import BabySitterFinderScreen from "./screens/BabySitterFinderScreen"; 
import BabySitterFinderParent from "./screens/BabySitterFinderParent";
import BabySitterLogin from "./screens/BabySitterLogin";
import AdminDashboard from "./screens/AdminDashboard";

// const SpacesApp = () => {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   return <>{isConnected ? <Room /> : <Join />}</>;
// };

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomeScreen styles={{ color: "red" }} />} />
        <Route path="/parenthouse" element={<ParentHouseScreen />} />
        <Route path="/parentfeed" element={<ParentFeedScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path='/babysittersignup' element={<BabySitterSignUpScreen />} />
        <Route path='/babysitterfinder' element={<BabySitterFinderParent/>} />
        <Route path='/babysitterfinderlogin' element={<BabySitterLogin/>} />
        <Route path='/admindashboard' element={<AdminDashboard/>} />
      </Routes>
    </>
  );
}

export default App;

// <HMSRoomProvider>
//   <div className="page">
//     <SpacesApp />
//   </div>
// </HMSRoomProvider>
