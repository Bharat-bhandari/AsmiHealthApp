import React, { useState } from "react";
import BASE_URL from "../apis/Config";

const Test = () => {
  const [files1, setFiles1] = useState(null);
  const [files2, setFiles2] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // console.log(files);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (!files) {
    //   console.error("No file selected.");
    //   return;
    // }

    const formData = new FormData();

    formData.append("file1", files1[0]); // Use the same field name as expected by Multer
    formData.append("file2", files2[0]); // Use the same field name as expected by Multer

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
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file" // Change this to "file"
          onChange={(ev) => setFiles1(ev.target.files)}
        />
        <input
          type="file"
          name="file" // Change this to "file"
          onChange={(ev) => setFiles2(ev.target.files)}
        />
        <button>Send Email</button>
      </form>
    </div>
  );
};

export default Test;
