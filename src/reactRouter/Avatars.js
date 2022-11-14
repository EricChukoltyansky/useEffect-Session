import React from 'react';
import Avatar from './Avatar';

function Avatars({ avatarsArr, inputValue }) {
  const insertAvatars = () => {
    let filteredAvatars = avatarsArr;
    if (inputValue) {
      filteredAvatars = avatarsArr.filter((avatar) => avatar.name.includes(inputValue));
    }
    return filteredAvatars.map((avatar) => <Avatar key={avatar.name} data={avatar} />);
  };
  return <>{insertAvatars()}</>;
}

export default Avatars;
