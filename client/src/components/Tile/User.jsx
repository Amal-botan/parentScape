import React from 'react';
import UserTile from './UserTile';
import UserWrapper from './UserWrapper';
import UserInfo from './UserInfo';
import {
  useHMSStore,
  selectPeerAudioByID,
  selectIsPeerAudioEnabled,
} from '@100mslive/hms-video-react';



const User = ({ peer }) => {
  const level = useHMSStore(selectPeerAudioByID(peer.id)) || 0;
  const audioEnabled = useHMSStore(selectIsPeerAudioEnabled(peer.id));
  return (
    <UserTile>
      <UserWrapper level={level}>
        <UserInfo audioEnabled={audioEnabled} peer={peer} />
      </UserWrapper>
    </UserTile>
  );
};

export default User;
