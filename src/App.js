import { useEffect, useState } from "react";

const App = () => {
  const [secret, setSecret] = useState({ value: "", countSecrets: 0 });
  useEffect(() => {
    if (secret.value === 'secret') {
      setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
    }
  }, [secret.value]);
  const onChange = ({ target }) => {
    setSecret(s => ({ ...s, value: target.value }));
  };
  return (
    <div>
      <input type="text" value={secret.value} onChange={onChange} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
};

export default App;
