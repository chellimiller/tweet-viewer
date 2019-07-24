import React from 'react';
import { TableComponent } from './lib/table';

const App: React.FC = () => {
  return (
    <div className="App">
      <TableComponent componentId={'tweets'}></TableComponent>
    </div>
  );
}

export default App;
