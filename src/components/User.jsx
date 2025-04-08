import { useState } from "react";
import { POST_URL } from "../constants/constant";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const nameRex = /^[a-zA-Z\s.'-]{2,50}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const User = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loaderState, setLoaderState] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("Submitting");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoaderState(true);
    e.preventDefault();
    if(!emailRegex.test(email) || !nameRex.test(fullName)){
        setErr("Name or Email is not Valid. Kindly Enter Valid Details.");
        setLoaderState(false);
        return;
    }
    setErr("")
    if (fullName && email && feedback) {
      const data = {
        fullName: fullName,
        email: email,
        feedBackMsg: feedback,
        dateTime: Date.now(),
      };
      try {
        const response = await fetch(POST_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) {
          setSubmitted(true);
          setText(result.message);
          setErr(result.message);
          return;
        }
        setSubmitted(true);
        setText("Submitted");
        setFullName("");
        setEmail("");
        setFeedback("");
      } catch (error) {
        setErr(error.message);
      }
    }
  };

  return (
    <>
      {loaderState && (
        <div>
          <Loader text={text} submitted={submitted} setloaderState={setLoaderState} />
        </div>
      )}
      <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center text-neutral-800 dark:text-white">
            User Feedback
          </h2>

          <input
            placeholder="Enter Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />

          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />

          <div>
            <textarea
              maxLength={300}
              placeholder="Enter Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 resize-none"
              rows={5}
            />
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-right">{feedback.length}/300</p>
          </div>

          <div className="flex justify-between gap-4">
          <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full border cursor-pointer border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-white py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full cursor-pointer bg-neutral-800 text-white dark:bg-neutral-700 py-2 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300"
            >
              Submit
            </button>
            
          </div>

          {err && <p className="text-red-500 text-sm text-center">{err}</p>}
        </form>
      </div>
    </>
  );
};

export default User;