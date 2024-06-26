import { useLayoutEffect, useState } from 'react';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function App() {
  const [users, setUsers] = useState();

  useLayoutEffect(() => {
      fetch('/api/users')
          .then(response => response.json())
          .then(users => setUsers(users))
  }, []);

  return (
    <>
        {
          users ?
            <JsonView data={users} shouldExpandNode={allExpanded} style={defaultStyles} />
          : <div>Загрузка...</div>}
    </>
  )
}

export default App
