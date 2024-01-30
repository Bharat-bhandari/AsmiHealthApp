import { useState, Fragment } from "react";

const MarketingIntern = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [dcs, setDcs] = useState("");
  const [internpref, setInternpref] = useState("");
  const [noh, setNoh] = useState("");
  const [qnMember, setQnMember] = useState("");
  const [viewSm, setViewSm] = useState("");
  const [smc, setSmc] = useState("");
  const [smcl, setSmcl] = useState("");
  const [dpw, setDpw] = useState("");

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
        <div className="programdetail-block">
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
            Gain hands-on experience in social media, working alongside our team
            to create engaging content, analyse performance, and contribute to
            strategic campaigns.
          </p>
          <div>What do we expect from you?</div>
          <p>
            Your innovative minds will craft engaging visual short format
            content aligned with our brand voice. Dive into the realm of social
            media, community interaction, and research, aiding us in campaign
            development and implementation.
          </p>
          <div>What do you gain?</div>
          <p>
            As an intern in our Marketing Internship program, you'll be
            compensated with a stipend while gaining invaluable hands-on
            experience in the ever-evolving social media landscape. You'll work
            closely with experienced professionals, gaining insights into
            industry best practices and developing your own skills in social
            media marketing and content creation. Upon successful completion of
            the program, you'll receive a certificate of completion, further
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
            time effectively. You will primarily work part-time hours remotely,
            with on-site presence scheduled in accordance with your availability
            and our company's needs. This arrangement will allow you to balance
            your internship responsibilities with other commitments. Throughout
            the program, clear guidelines and expectations will be provided to
            ensure the program's smooth and productive execution.
          </p>
          <div>Orientation and Support</div>
          <p>
            We will conduct a virtual orientation to introduce you to our
            company culture, social media strategy, and team members. Throughout
            your internship, expect constant communication, guidance, and advice
            to foster a supportive learning environment.
          </p>
          <div>Your Growth, Our Success</div>
          <p>
            This internship isn't just about what you'll contribute to us; it's
            about what we'll offer you in return. The experience gained here
            will be a stepping stone towards your future success.
          </p>
          <div>Eligibility:</div>
          <p>
            Must be studying "Full Time" in a recognised college.
            <br />
            Preferred Courses: Psychology, English, Sociology, Journalism,
            Economics and/or History.
            <br />
            Batch/Years: All batches/years, that is, 1st, 2nd and 3rd year
            students.
            <br />
            Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div>Time Commitments (Per Week):</div>
          <p>
            Part Time On-site 20 hours week, Complete flexibility prior and
            during exams.
          </p>
          <div>Remuneration (Per Month):</div>
          <p>Stipend & Allowances</p>
          <div>Upon Completion:</div>
          <p>
            An opportunity to convert the internship to a full time job.
            <br />
            Completion Certificate
            <br />
            Letter of Recommendation
          </p>
          <div>Duration:</div>
          <p>3 months (Option to convert into Full Time)</p>
          <div>Application Deadline:</div>
          <p>No deadline. It's an ongoing open opportunity.</p>
        </div>

        <div className="formblock">
          <div className="formheader">Asmi - Marketing Internship Form</div>
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
                  <fieldset>
                    <legend>Type of Internship*</legend>
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="FullTimeOnsite"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label>FullTime Onsite</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="FullTimeRemote"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label>FullTime Remote</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="PartTime Onsite"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label>PartTime Onsite</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="PartTimeRemote"
                        onChange={(e) => setInternpref(e.target.value)}
                      />
                      <label>PartTime Remote</label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label>
                    In case of Part Time, how many hours/day can you devote to
                    the Internship?
                  </label>
                  <text
                    type="text"
                    value={noh}
                    onChange={(e) => setNoh(e.target.value)}
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
                    placeholder="Please write the name of Society(ies), reason for joining and experience so far."
                    required
                  />
                </div>
                <div>
                  <label>
                    Your views on Social Media and its importance in Marketing
                    and Branding*
                  </label>
                  <textarea
                    type="text"
                    value={viewSm}
                    onChange={(e) => setViewSm(e.target.value)}
                    placeholder="Give Detail Answer"
                    required
                  />
                </div>
                <div>
                  <fieldset>
                    <legend>
                      Have you created any Social Media Video Content?
                    </legend>
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="No"
                        onChange={(e) => setSmc(e.target.value)}
                      />
                      <label>Yes</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value="Yes"
                        onChange={(e) => setSmc(e.target.value)}
                      />
                      <label>No</label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label>If Yes, please provide links to some content*</label>
                  <textarea
                    type="text"
                    value={smcl}
                    onChange={(e) => setSmcl(e.target.value)}
                    placeholder="Give detail answer"
                    required
                  />
                </div>

                <div>
                  <label>
                    How many days per weel can you come to the office?
                  </label>
                  <input
                    type="text"
                    value={dpw}
                    onChange={(e) => setDpw(e.target.value)}
                    placeholder="Give detail of Employer, contact detail and Reference"
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

              <input type="button" value="Submit" />
            </div>
          </form>
        </div>
        <div className="generalinfo-block">
          <div className="generalinfo-header">General Information</div>
          <div>Eligibility:</div>
          <p>
            Must be studying "Full-Time" with a recognised college.
            <br />
            Preferred Courses: Psychology, English, Sociology, Journalism,
            Economics and/or History. Batch/Years: All batches/years, that is,
            1st, 2nd and 3rd year students.
            <br />
            Strong communication skills and a good command of the English
            language is an essential requirement.
          </p>
          <div>Remuneration (Per Month):</div>
          <p>Paid along with allowances.</p>
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
        </div>
      </div>
    </Fragment>
  );
};

export default MarketingIntern;
