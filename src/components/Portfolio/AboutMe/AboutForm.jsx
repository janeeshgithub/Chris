import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const AboutForm = (props) => {
  const form = useRef();
  const [inputs, setInputs] = useState({
    from_name: "",
    number: "",
    user_email: "",
    company_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure props.handleSubmit is defined and is a function before calling it
    if (props.handleSubmit && typeof props.handleSubmit === "function") {
      props.handleSubmit();
    } else {
      console.error("handleSubmit is not a function or not defined");
    }

    alert("Mail sent.");

    emailjs
      .sendForm(
        "service_g7im0rz", // Service ID
        "template_evkx5hk", // Template ID
        form.current,
        "IcPPmqwrfWUWzy6Qj" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear form inputs after submission
    setInputs({
      from_name: "",
      number: "",
      user_email: "",
      company_name: "",
      message: "",
    });
  };

  return (
    <div className="w-full flex justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-6 w-full max-w-lg"
      >
        <label className="text-xl font-medium text-gray-200">Your Name</label>
        <input
          type="text"
          name="from_name"
          placeholder="Enter your Name"
          value={inputs.from_name}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-slate-950"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-200">
          Phone Number
        </label>
        <input
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          value={inputs.number}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-slate-950"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-200">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Mail"
          value={inputs.user_email}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-slate-950"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-200">
          Company Name
        </label>
        <input
          type="text"
          name="company_name"
          placeholder="Enter your College name"
          value={inputs.company_name}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none bg-white text-slate-950"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        />

        <label className="text-xl font-medium text-gray-200">Message</label>
        <textarea
          name="message"
          value={inputs.message}
          onChange={handleChange}
          required
          className="w-full text-xl p-4 rounded-md border-2 border-lightblue-400 outline-none h-40 bg-white text-slate-950"
          style={{ borderColor: "#ADD8E6" }} // Change border color to light blue
        ></textarea>

        <button
          type="submit"
          className="bg-purple-950 text-purple-400 border border-purple-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-purple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Send
        </button>
      </form>
    </div>
  );
};

export default AboutForm;
