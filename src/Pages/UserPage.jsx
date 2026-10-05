
import { useEffect, useState } from "react";
import UserCard from "../Components/UserCard";
import { axiosInstance } from "../Config/axiosinstance";



const UserPage = () => {

  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let getUserData = async () => {
    try {
      let res = await axiosInstance.get("/users");
      console.log(res);
      setUserData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log("error in users api", error);
    }
  };
  useEffect(() => {
    getUserData();
  },[])

  if(isLoading) return<h1 className="text-3xl"> Loading users</h1>

  return (
    <div className="grid grid-cols-4 gap-5">
      {userData.map((val) =>(
        <UserCard key={val.id} user={val}/>
      ))}
    </div>
  );
};

export default UserPage;
