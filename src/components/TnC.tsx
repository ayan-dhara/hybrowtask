import React from 'react';
import useStorage from "../hooks/useStorage";
import './tnc.scss'

const TnC = ({proceed}: any) => {
  const [name, setName] = useStorage("name", "")
  const [phone, setPhone] = useStorage("phone", "")
  const onProceed: any = (e: Event) => {
    e.preventDefault()
    proceed()
  }
  return (
    <div className="terms">
      <div className="greet">Welcome!<span>*</span></div>
      <div className="para">
        You have been shortlisted for the role of UI/UX Intern at Hybrwolabs Technologies. To proceed with the next step
        of Recruitment procedure, we would like you to attempt a small assessment test which will help us to proceed
        further.
      </div>
      <form className="terms-form" onSubmit={onProceed}>
        <div>
          <label htmlFor="name">Name<span>*</span></label>
          <input onChange={(e) => setName(e.target.value)} value={name} required={true}
                 placeholder="Enter full name"
                 id="name" type="text" pattern="[A-Za-z\.\ ]*"/>
        </div>
        <div>
          <label htmlFor="phone">Phone<span>*</span></label>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} required={true}
                 placeholder="Mobile number"
                 id="phone" type="tel" pattern="(\+[0-9]{1,2})?[0-9]{10}"/>
        </div>
        <div className="submit-div">
          <button type="submit">Next &gt;</button>
        </div>
      </form>
    </div>
  );
};

export default TnC;
