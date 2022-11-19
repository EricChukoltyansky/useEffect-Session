import { useEffect, useReducer, useState } from "react";
// useReducer why we do it

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add_artist":
//       return { ...state, artist: [...state.artist, action.newArtist] };
//     case "delete_artist":
//       return {
//         ...state,
//         artist: state.artist.filter((artist) => artist.id !== action.id),
//       };
//     case "add_like":
//       return {
//         ...state,
//         artist: state.artist.map((artist) => {
//           if (artist.id === action.id) {
//             return { ...artist, like: artist.like + 1 };
//           }
//           return artist;
//         }),
//       };

//     default:
//       return state;
//   }
// };

// const initialState = {
//   artist: [
//     { name: "Bob", song: "One Love", id: 1, like: 0 },
//     { name: "Micheal", song: "Black or white", id: 2, like: 10 },
//     { name: "Roger", song: "We don't need no education", id: 3, like: 2 },
//   ],
// };
const App = () => {
  // const [stateReducer, dispatch] = useReducer(reducer, initialState);
  const [state, setArtist] = useState([
    { name: "Bob", song: "One Love", id: 1, like: 0 },
    { name: "Micheal", song: "Black or white", id: 2, like: 10 },
    { name: "Roger", song: "We don't need no education", id: 3, like: 2 },
  ]);
  const addArtist = (newArtist) => {
    setArtist([...state, newArtist]);
    // dispatch({ type: "add_artist", newArtist: newArtist });
  };
  const deleteArtist = (id) => {
    setArtist(state.filter((artist) => artist.id !== id));
    // dispatch({ type: "delete_artist", id: id });
  };
  const addLikeToArtist = (id) => {
    setArtist(
      state.map((artist) => {
        if (artist.id === id) {
          return { ...artist, like: artist.like + 1 };
        }
        return artist;
      })
    );
    // dispatch({ type: "add_like", id: id });
  };

  return (
    <div>
      <button
        onClick={() =>
          addArtist({
            name: "Roger",
            song: "We don't need no education",
            id: 3,
            like: 2,
          })
        }
      >
        Add Artist
      </button>
      <button onClick={() => deleteArtist(1)}>Delete Artist</button>
      <button onClick={() => addLikeToArtist(1)}>Add Like</button>

      {/* {stateReducer.artist.map((artist) => (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <h2>{artist.song}</h2>
          <h3>{artist.like}</h3>
        </div>
      ))} */}
      {state.map((artist) => (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <h2>{artist.song}</h2>
          <h3>{artist.like}</h3>
        </div>
      ))}
    </div>
  );
};
export default App;
