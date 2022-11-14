import axios from 'axios';
import { useEffect, useState } from 'react';
import Avatars from './Avatars';

function App() {
  const [avatarsArr, setAvatarsArr] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // make original avatar array
  // useEffect
  // check if the input has changed
  // debounce
  // setAvatarsArr to filtered avatars

  const destructData = (data) => {
    return data.map((avatar) => {
      return { name: `${avatar.name.first} ${avatar.name.last}`, img: avatar.picture.large };
    });
  };

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then(({ data }) => {
        setAvatarsArr(destructData(data.results));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInput} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
          gap: `1rem`,
          marginBottom: '1rem',
        }}
      >
        {avatarsArr && <Avatars avatarsArr={avatarsArr} inputValue={inputValue} />}
      </div>
    </div>
  );
}

export default App;
