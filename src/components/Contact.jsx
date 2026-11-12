import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { profile, sectionIntros } from "../data/portfolioData.js";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email, like name@example.com.";
  if (!values.subject.trim()) errors.subject = "Enter a subject.";
  if (!values.message.trim()) errors.message = "Write a message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(emptyForm);
    }
  };

  const field = (name, label, Tag = "input", extra = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Tag id={name} name={name} value={values[name]} onChange={handleChange} aria-invalid={Boolean(errors[name])} {...extra} />
      {errors[name] && <span className="field__error" role="alert">{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <h2>Contact</h2>
        <p className="muted">Open to Junior SQA Engineer and Python roles. Send me a message.</p>
        <form onSubmit={handleSubmit} noValidate className="card form">
          {field("name", "Name", "input", { type: "text", autoComplete: "name" })}
          {field("email", "Email", "input", { type: "email", autoComplete: "email" })}
          {field("subject", "Subject", "input", { type: "text" })}
          {field("message", "Message", "textarea", { rows: 5 })}
          <button type="submit" className="btn btn--primary">Send message</button>
          {sent && (
            <p className="success" role="status">
              Message sent. Thank you, I will reply soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
