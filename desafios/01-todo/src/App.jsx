import React, { useState } from 'react';

const App = () => {
  const [comments, setComments] = useState(['Comentário muito legal.']);

  return (
    <div>
      <input type="text" />
      <button>Enviar</button>
    </div>
  );
};

export default App;
