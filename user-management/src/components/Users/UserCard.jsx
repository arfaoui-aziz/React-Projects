import React from "react";

const UserCard = ({ user }) => {
  return (
    <li>
      {user.username} ({user.age} years old)
    </li>
  );
};

export default UserCard;
