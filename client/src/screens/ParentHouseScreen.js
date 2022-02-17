import React from "react";
import Join from "../components/Join";
import Room from "../components/Room";
import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/hms-video-react";

const ParentHouseScreen = () => {
  const SpacesApp = () => {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    return <>{isConnected ? <Room /> : <Join />}</>;
  };

  return (
    <HMSRoomProvider>
      <div className="page">
        <SpacesApp />
      </div>
    </HMSRoomProvider>
  );
};
export default ParentHouseScreen;
