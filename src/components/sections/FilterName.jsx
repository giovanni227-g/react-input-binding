import { useState } from 'react';
import { namesList } from '../../lib/vars';

export default function FilterName() {
  const [name, setName] = useState('');
  const filteredList = namesList.filter((item) =>
    item.toLowerCase().includes(name.toLowerCase()),
  );

  return (
    <section className="container">
      <h2>Filter by name</h2>
      <p>Use the input to filter the list of names</p>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <ul className="list-group">
        {filteredList.map((currentName) => (
          <li key={currentName} className="list-group-item">
            {currentName}
          </li>
        ))}
      </ul>
    </section>
  );
}
