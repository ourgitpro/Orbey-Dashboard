import React from "react";
import { Alert, Button } from "antd";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <Alert
        message="Page Not Found"
        description="The URL you requested was not found in the database.Please type the URL you want."
        type="error"
        showIcon
      />
      <Link to="/">
        <Button type="dashed">Back To Home</Button>
      </Link>
    </>
  );
};

export default Error;
