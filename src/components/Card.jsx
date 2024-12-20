import React, { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await res.json();
      setUsers(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-8 bg-gray-100 rounded-lg shadow-lg flex gap-6"
        >
          <img
            src={user.picture.large}
            alt="user-image"
            className="mb-4 mx-auto"
          />
          <div>
            <div>
              <p className="text-lg font-bold">
                {user.name.first} {user.name.last}
              </p>
              <p className="text-gray-600 my-2">{user.gender}</p>
              <p className="text-gray-600 my-2">{user.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
