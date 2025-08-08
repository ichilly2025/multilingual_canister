import { useState } from 'react';
import { multilingual_canister_motoko } from 'declarations/multilingual_canister_motoko';
import { multilingual_canister_rust } from 'declarations/multilingual_canister_rust';

function App() {
  const [message, setMessage] = useState('');

  function handleAddUser(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    multilingual_canister_motoko.addUser(username).then((result) => {
      setMessage(result);
      event.target.elements.username.value = '';
    });
    return false;
  }

  function handleGreetUser(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    multilingual_canister_motoko.greet(name).then((greeting) => {
      setMessage(greeting);
    });
    return false;
  }

  return (
    <main style={{ textAlign: 'center', padding: '20px' }}>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      
      <div style={{ marginBottom: '20px' }}>
        <form action="#" onSubmit={handleAddUser} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <label htmlFor="username" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Add user:</label>
          <input 
            id="username" 
            alt="Username" 
            type="text" 
            placeholder="Enter username" 
            style={{ width: '200px', padding: '8px' }}
          />
          <button type="submit" style={{ width: '100px', padding: '8px', marginLeft: '2px' }}>Add User</button>
        </form>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <form action="#" onSubmit={handleGreetUser} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <label htmlFor="name" style={{ width: '150px', textAlign: 'right', marginRight: '10px' }}>Greet user:</label>
          <input 
            id="name" 
            alt="Name" 
            type="text" 
            placeholder="Enter name" 
            style={{ width: '200px', padding: '8px' }}
          />
          <button type="submit" style={{ width: '100px', padding: '8px', marginLeft: '2px' }}>Greet</button>
        </form>
      </div>

      <div style={{ 
        marginTop: '30px', 
        fontSize: '18px', 
        fontWeight: 'bold',
        minHeight: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {message}
      </div>
    </main>
  );
}

export default App;
