import Join from "./components/Join";
import Room from "./components/Room";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/hms-video-react";
import Navbar from "./components/Navbar.jsx";

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return <>{isConnected ? <Room /> : <Join />}</>;
};

function App() {
  return (
    
        <>
     <Navbar/>
    <HMSRoomProvider>

      <div className="page">

        <SpacesApp />
      </div>
    </HMSRoomProvider>
    </>
  
  );
}

export default App;
