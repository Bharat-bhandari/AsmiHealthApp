import { useState, Fragment } from "react";
import "./Careers.css";
const Careers = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [highDegree, setHighDegree] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [yog, setYog] = useState("");
  const [lanKnown, setLanKnown] = useState("");

  const [Rci, setRci] = useState("");
  const [noyPractice, setNoyPractice] = useState("");
  const [expRes, setExpRes] = useState("");
  const [expText, setExpText] = useState("");
  const [shareSession, setshareSession] = useState("");
  const [noh, setNoh] = useState("");
  const [available, setAvailable] = useState("");
  const [specialization, setSpecialization] = useState("");

  const sendMail = async (event) => {
    try {
      const response = await fetch("http://localhost:4000/send-career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Reset input fields
    } catch (error) {
      console.error("Error sending mail:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <Fragment>
      <div className="Careersblock">
        <div className="mainheader">
          Application - Psychologist (Independent/Remote)
        </div>
        <div className="subheader">
          On Play Store currently, application requires an Android device.
        </div>
        <div className="formblock">
          <div className="formheader">Asmi - Psychology Internship Form</div>
          <form onSubmit={sendMail}>
            <div className="personalinfo">
              <div>Personal Information</div>
              <div className="piformelement formelement">
                <div>
                  <label>FirstName*</label>
                  <input
                    type="text"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label>LastName*</label>
                  <input
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Email*</label>
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label>PhoneNo*</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    placeholder="enter mobile-no with countrycode"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label>Address</label>
                  <textarea
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Type your Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="educationalbackground">
              <div>Educational Background</div>
              <div className="edformelement formelement">
                <div>
                  <label> High Degree Earned*</label>
                  <input
                    type="text"
                    value={highDegree}
                    required
                    onChange={(e) => setHighDegree(e.target.value)}
                  />
                </div>
                <div>
                  <label> Name of University*</label>
                  <input
                    type="text"
                    value={universityName}
                    required
                    onChange={(e) => setUniversityName(e.target.value)}
                  />
                </div>
                <div>
                  <label> Year of Graduation*</label>
                  <input
                    type="text"
                    value={yog}
                    required
                    onChange={(e) => setYog(e.target.value)}
                  />
                </div>
                <div>
                  <label> Languages Known</label>
                  <input
                    type="text"
                    value={lanKnown}
                    required
                    onChange={(e) => setLanKnown(e.target.value)}
                  />
                </div>
                {/* <DegreeUploader /> */}
              </div>
            </div>
            <div className="professionalbackground">
              <div>Professional Credintials</div>
              <div className="pdformelement formelement">
                <div>
                  <label> RCI Number</label>
                  <input
                    type="text"
                    value={Rci}
                    onChange={(e) => setRci(e.target.value)}
                  />
                </div>
                <div>
                  <label> No. of years practising as a Psycholigst*</label>
                  <input
                    type="text"
                    value={noyPractice}
                    required
                    onChange={(e) => setNoyPractice(e.target.value)}
                  />
                </div>
                <div>
                  <label>Do you have experience in Online Counselling?</label>
                  <input
                    type="text"
                    value={expRes}
                    required
                    onChange={(e) => setExpRes(e.target.value)}
                  />
                </div>
                <div>
                  <label>
                    if yes, please describe your experience in online
                    counselling
                  </label>
                  <textarea
                    type="text"
                    value={expText}
                    onChange={(e) => setExpText(e.target.value)}
                  />
                </div>
                <div>
                  <label>Share a challenging counselling session*</label>
                  <textarea
                    type="text"
                    value={shareSession}
                    placeholder="without disclosing confidential information, describe a session that was challenging"
                    required
                    onChange={(e) => setshareSession(e.target.value)}
                  />
                </div>
                <div>
                  <label>
                    How many hours a day can you dedicate to our App?*
                  </label>
                  <input
                    type="text"
                    value={noh}
                    placeholder=""
                    required
                    onChange={(e) => setNoh(e.target.value)}
                  />
                </div>
                <div>
                  <label>
                    Are you available for online sessions during night hours?*
                  </label>
                  <input
                    type="text"
                    value={available}
                    placeholder="Fee for night hour is more than day fee"
                    required
                    onChange={(e) => setAvailable(e.target.value)}
                  />
                </div>
                <div>
                  <label>Please list your specialisations*</label>
                  <textarea
                    type="text"
                    value={specialization}
                    placeholder="Queer, Couple, Adolence etc."
                    required
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                </div>
                {/* <CvUploader /> */}
              </div>
            </div>
            <div className="Submission">
              <div>
                <input type="checkbox" required />
                <label>
                  I understand that I am applying for a Independent Contracter
                  Position
                </label>
              </div>
              <div>
                <input type="checkbox" required />
                <label>
                  I give my consent to Asmi team to contact me through SMS,
                  Whatsapp,Email regarding this application
                </label>
              </div>
              <input type="button" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Careers;
