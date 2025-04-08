import { GET_URL } from "../constants/constant";
import { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import FeedbackCard from "./FeedBackCards";

const Admin = () => {
  const [loaderState, setLoaderState] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("Fetching Data");
  const [fetchedFeedbacks, setFetchedFeedBacks] = useState([]);
  const navigate = useNavigate();

  const handleShowFeedback = async () => {
    setLoaderState(true);
    if (fetchedFeedbacks.length > 0) {
      setFetchedFeedBacks([]);
      navigate("/");
    }
    try {
      const response = await fetch(GET_URL);
      const result = await response.json();
      if (!response.ok) {
        setSubmitted(true);
        setText(result.message);
        return;
      }
      setLoaderState(false);
      setFetchedFeedBacks(result.data);
    } catch (error) {
      setLoaderState(false);
      setText("Something went wrong!");
      setSubmitted(true);
    }
  };

  return (
    <>
      {loaderState && (
        <div>
          <Loader
            text={text}
            submitted={submitted}
            setloaderState={setLoaderState}
          />
        </div>
      )}
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 px-4 py-8">
        <div className="flex justify-center mb-8">
          <button
            onClick={handleShowFeedback}
            className="bg-neutral-800 cursor-pointer text-white dark:bg-neutral-700 dark:text-white px-6 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300"
          >
            {fetchedFeedbacks.length > 0 ? "Back" : "Show Feedbacks"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">

          {fetchedFeedbacks.length > 0 &&
            fetchedFeedbacks.map((user) => (
              <FeedbackCard
                key={user._id}
                userName={user.fullName}
                userEmail={user.email}
                userFeedback={user.feedBackMsg}
                dateTimePosted={user.dateTime}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Admin;