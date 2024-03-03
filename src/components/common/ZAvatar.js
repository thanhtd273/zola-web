import React from "react";

import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup"; //Optional for grouping

const ZAvatar = ({ image }) => {
  return (
    <Avatar
      image={image}
      icon={!image && "pi pi-user"}
      size="large"
      shape="circle"
      style={{ border: "1px solid white" }}
    />
  );
};

export default ZAvatar;
