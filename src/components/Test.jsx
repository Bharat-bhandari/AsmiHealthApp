import React, { useState } from "react";
import BASE_URL from "../apis/Config";

const Test = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  console.log(file);

  const handleSubmit = async () => {
    const formData = new FormData();
    // formData.append("email", "bharatbhandari0302@gmail.com");
    // formData.append("subject", "Test Email with Attachment");
    // formData.append("text", "This is a test email with attachment.");
    formData.append("attachment", file);

    console.log("formdata", formData);

    try {
      const response = await fetch(`${BASE_URL}/testmail`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="my-40">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Send Email</button>
    </div>
  );
};

export default Test;
