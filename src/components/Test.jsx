import React, { useState } from "react";
import BASE_URL from "../apis/Config";

const Test = () => {
  const [files1, setFiles1] = useState(null);
  const [files2, setFiles2] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

    formData.append("file1", files1[0]);
    formData.append("file2", files2[0]);

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    console.log([...formData.entries()]);

    try {
      const response = await fetch(`${BASE_URL}/testform`, {
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
        <div className="mt-3 mb-1">
          <label className="block text-[#374151] pr-8 pb-1">FirstName*</label>
          <input
            className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
            type="text"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-1">
          <label className="block text-[#374151] pr-8 pb-1">LastName*</label>
          <input
            className="sm:w-[30rem] pr-2 border border-[#d1d5db] w-max-[20rem]"
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button>Send Email</button>
      </form>

      <div>hello</div>
    </div>
  );
};

export default Test;
