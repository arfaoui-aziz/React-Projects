import React from "react";

const UserCard = ({ user }) => {
  return (
    <li>
      {user.name} ({user.age} years old)
    </li>
  );
};

export default UserCard;
