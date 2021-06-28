import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/Api";
import Users from "./components/users/users";
import PostDetails from "./components/postDetails/postDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [postDetails, setDetailsPost] = useState(null);
  useEffect(() => {
    getUsers().then(response => {
      setUsers(response.data)
      console.log(response.data);
        });
  }, [])

  function selectPost(id){
    getUser(id).then(value => setDetailsPost(value.data))
  }

  return (
    <div>
      <Users items={users} selectPost={selectPost}/>
      <hr />
      {
        postDetails && <PostDetails detail={postDetails}/>
      }
      </div>
  );
}

export default App;
