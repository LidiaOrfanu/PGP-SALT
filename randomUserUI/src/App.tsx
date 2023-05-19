import { useEffect, useState } from 'react'
import './App.css'
import { getUser } from './api/api';
import { IUser } from './interfaces/IUser';
import './styles.css'; 
function App() {
  const [user, setUser] = useState<IUser>();
  const [newName, setNewName] = useState('');
  
  const getUserData = async () => {
    setUser(await getUser());
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user) {
      setUser({ ...user, name: { ...user.name, first: newName } });
      setNewName('');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }
  const { name, location, dob } = user;

   return (
    <div className="container">
  <h1 className="container__title">Random User Generator</h1>
  {user ? (
    <>
      <div className="user-info">
        <strong className="user-info__label">Name:</strong> {user.name.first} {user.name.last}
      </div>
      <div className="user-info">
        <strong className="user-info__label">Age:</strong> {user.dob.age}
      </div>
      <div className="user-info">
        <strong className="user-info__label">Address:</strong> {user.location.street.number} {user.location.street.name}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__label-container">
          <label htmlFor="nameInput" className="form__label">Change First Name:</label>
        </div>
        <div className="form__input-container">
          <input id="nameInput" type="text" value={newName} onChange={handleChangeName} autoComplete="off" className="form__input" />
        </div>
        <div className="form__button-container">
          <button type="submit" className="form__button">Submit</button>
        </div>
      </form>
    </>
  ) : (
    <div className="loading">Loading...</div>
  )}
</div>
  );
};

export default App;