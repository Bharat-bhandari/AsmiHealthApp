import React, { useState, Fragment } from "react";

const PsychoIntern = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [dcs, setDcs] = useState("");
  const [qnMember, setQnMember] = useState("");
  const [whyPsycho, setWhyPsycho] = useState("");
  const [dedtime, setDedtime] = useState("");
  const [aoi, setAoi] = useState("");
  const [prevworked, setPrevworked] = useState("");
  const [prevworkdet, setPrevworkdetail] = useState("");

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
      <div>
        {/* <div className="programdetail-block">
          <div>About Us</div>
          <p>
            Asmi™, a product in development, is India’s first mobile application
            that will provide Mental Health Counselling Instantly, enabling a
            User to connect to a qualified counsellor within a matter of
            seconds. Asmi™ will also provide User Experience & Counselling in
            regional & international languages while keeping the cost per
            session low and affordable. Asmi™ is a brand of Anjanajyoti
            Healthtech Private Limited.
          </p>
          <div>Internship Overview</div>
          <p>
            Gain hands-on experience in social media, working alongside our
            in-house Psychologists and learn how to create SOPs, conduct
            training and workshops, observe online realtime counselling sessions
            and understand how to handle escalated cases.
          </p>
          <div>What do we expect from you?</div>
          <p>
            We expect you to bring your energy and enthusiasm to the workspace.
            We also expect you to come with an open mind enabling you to adapt
            to ral world Counselling sessions and combine them with the
            theoretical knowledge you are gaining or have gained in your
            University.
          </p>
          <div>What do you gain?</div>
          <p>
            As an intern in our Psychology Internship program, you'll gain
            invaluable hands-on experience in the ever-evolving Mental Health
            landscape. You'll work closely with experienced professionals,
            gaining insights into industry best practices and developing your
            own skills in Counselling Psychology. You will also gain the
            experience to learn how to structure your own independent practise,
            should you choose to start one. Upon successful completion of the
            program, you'll receive a certificate of completion, further
            enhancing your credentials and demonstrating your expertise to
            potential employers.
          </p>
          <div>Recognition and Rewards</div>
          <p>
            We recognize excellence and award a "Best Performing Intern" title
            each month to the intern who demonstrates exceptional dedication,
            creativity, and contribution to the team's success.
          </p>
          <div>Work Schedule and Expectations</div>
          <p>
            We prioritize flexibility and empower our interns to manage their
            time effectively. You will primarily work part-time hours on-site.
            This arrangement will allow you to balance your internship
            responsibilities with other commitments. Throughout the program,
            clear guidelines and expectations will be provided to ensure the
            program's smooth and productive execution.
          </p>
          <div>Orientation and Support</div>
          <p>
            We will conduct a virtual orientation to introduce you to our
            company culture and team members. Throughout your internship, expect
            constant communication, guidance, and advice to foster a supportive
            learning environment.
          </p>
          <div>Your Growth, Our Success</div>
          <p>
            This internship isn't just about what you'll contribute to us; it's
            about what we'll offer you in return. The experience gained here
            will be a stepping stone towards your future success.</p>
          <div>Eligibility:</div>
          <p>
            Must be studying "Full Time" in a recognised college. Preferred
            <br />
            Courses: Psychology Batch/Years: All batches/years, that is, 1st,
            2nd and 3rd year students.
            <br /> Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div>Time Commitments (Per Week):</div>
          <p>
            Part Time On-site 20 hours week, Complete flexibility prior and
            during exams.
          </p>
          <div>Upon Completion:</div>
          <p>
            An opportunity to convert the internship to a full time job.
            Completion Certificate Letter of Recommendation
          </p>
          <div>Duration:</div>
          <p>3 months (Option to convert into Full Time)</p>
          <div>Application Deadline:</div>
          <p>No deadline. It's an ongoing open opportunity.</p>
        </div> */}

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
                <div>
                  <label>Name of University</label>
                  <input
                    type="text"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label>Name of College</label>
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label>Dept, Course & Semester</label>
                  <input
                    type="text"
                    value={dcs}
                    onChange={(e) => setDcs(e.target.value)}
                    placeholder="plz ener all 3 ie dept,course, sem"
                    required
                  />
                </div>
                <div>
                  <label>
                    Are you a member of Societies in your College or Uni?
                  </label>
                  <textarea
                    type="text"
                    value={qnMember}
                    onChange={(e) => setQnMember(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label>
                    Are you a member of Societies in your College or Uni?
                  </label>
                  <textarea
                    type="text"
                    value={qnMember}
                    onChange={(e) => setQnMember(e.target.value)}
                    placeholder="Plz write name of society , reason for joining and experience so far"
                    required
                  />
                </div>
                <div>
                  <label>Why did you choose Psychology as a Subject?</label>
                  <textarea
                    type="text"
                    value={whyPsycho}
                    onChange={(e) => setWhyPsycho(e.target.value)}
                    placeholder="Give detail answer"
                    required
                  />
                </div>

                <div>
                  <fieldset>
                    <legend>
                      Are you ready to dedicate 20 hours a week for your
                      internship?
                    </legend>
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="No"
                        onChange={(e) => setDedtime(e.target.value)}
                      />
                      <label>Yes</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="Yes"
                        onChange={(e) => setDedtime(e.target.value)}
                      />
                      <label>No</label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label>What areas of Psychology interest you the most?</label>
                  <textarea
                    type="text"
                    value={aoi}
                    onChange={(e) => setAoi(e.target.value)}
                    placeholder="Give detail answer"
                    required
                  />
                </div>
                <div>
                  <fieldset>
                    <legend>
                      Have you previously worked/interned in a similar program?
                    </legend>
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="No"
                        onChange={(e) => setPrevworked(e.target.value)}
                      />
                      <label>Yes</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="Yes"
                        onChange={(e) => setPrevworked(e.target.value)}
                      />
                      <label>No</label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label>If so, please provide details</label>
                  <textarea
                    type="text"
                    value={prevworkdet}
                    onChange={(e) => setPrevworkdetail(e.target.value)}
                    placeholder="Give detail of Employer, contact detail and Reference"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="Submission">
              <div>
                <input type="checkbox" required />
                <label>
                  I understand and accept the Terms &amp; Conditions of
                  application, data and its usage.
                </label>
              </div>
              <div>
                <input type="checkbox" required />
                <label>
                  I give my consent for the Company and its employees to contact
                  me regarding this intership opporunity.
                </label>
              </div>
              <div>
                <input type="checkbox" required />
                <label>
                  I understand that this is a Part-Time On-Site internship that
                  requires my physical presence in the office/workspace 20 hours
                  a week
                </label>
              </div>
              <input type="button" value="Submit" />
            </div>
          </form>
        </div>

        {/* <div className="generalinfo-block">
          <div className="generalinfo-header">General Information</div>
          <div>Eligibility:</div>
          <p>
            Must be studying "Full-Time" with a recognised college.
            <br />
            Preferred Courses: Psychology Batch/Years: All batches/years, that
            is, 1st, 2nd and 3rd year students.
            <br />
            Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div>Remuneration (Per Month):</div>
          <p>This is an unpaid internship</p>
          <div>Upon Completion:</div>
          <p>
            An opportunity to convert the internship to a full/part time job.
            <br />
            Completion Certificate
            <br />
            Letter of Recommendation
          </p>
          <div>Duration:</div>
          <p>3 months</p>
          <div>Application Deadline:</div>
          <p>No deadline. It's an ongoing open opportunity.</p>
        </div> */}
      </div>
    </Fragment>
  );
};

export default PsychoIntern;
