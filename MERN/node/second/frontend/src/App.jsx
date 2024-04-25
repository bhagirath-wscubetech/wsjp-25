import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditForm from "./EditForm";

function App() {
  const [users, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState(null);

  useEffect(
    () => {
      const d = users.find((user) => user._id == editUserId);
      setEditUserData(d);
    }, [editUserId]
  )

  const openToast = (msg, flag) => {
    toast(msg, {
      type: flag ? 'success' : 'warning'
    });
  }
  useEffect(
    () => {
      fetchUser()
    },
    []
  )

  const fetchUser = () => {
    axios.get("http://localhost:5000/user-data")
      .then(
        (success) => {
          if (success.data.status == 1) {
            setUser(success.data.users);
          }
        }
      ).catch(
        () => {

        }
      )
  }

  const editUser = (user_id) => {
    setEdit(true);
    setEditUserId(user_id);
  }
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000} />
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-3">
        <div className="col-span-3">
          <Table editUser={editUser} users={users} openToast={openToast} fetchUser={fetchUser} />
        </div>
        <div>
          {
            edit == true && editUserId != null
              ? <EditForm data={editUserData} fetchUser={fetchUser} openToast={openToast} />
              : <Form fetchUser={fetchUser} openToast={openToast} />
          }

        </div>
      </div>
    </>
  );
}

export default App;
