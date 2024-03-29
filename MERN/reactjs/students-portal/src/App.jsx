import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [userData, setUserData] = useState(
    [
      { name: 'Bhagirath', email: 'lms@wscubetech.com', contact: '1234567890', gender: '1', flag: true },
      { name: 'Nikita', email: 'nikita@wscubetech.com', contact: '765432111', gender: '0', flag: false },
    ]
  );

  const addUserHandler = (data) => {
    const newUserData = [...userData, data];
    setUserData(newUserData);
  }

  const statusChangeHandler = (index) => {
      const newUserData = [...userData];
      newUserData[index].flag = !userData[index].flag;
      setUserData(newUserData);
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <Table userData={userData} statusChangeHandler={statusChangeHandler} />
        <Form addUserHandler={addUserHandler} />
      </div>
    </div>
  );
}

export default App;
