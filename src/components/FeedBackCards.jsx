const FeedbackCard = ({ userName, userEmail, userFeedback, dateTimePosted }) => {
    const handleDate = () => {
      const d = new Date(dateTimePosted);
      const dd = d.getDate().toString().padStart(2, "0");
      const mm = (d.getMonth() + 1).toString().padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${dd}-${mm}-${yyyy}`;
    };
  
    const handleTime = () => {
      const t = new Date(dateTimePosted);
      let hr = t.getHours();
      const min = t.getMinutes().toString().padStart(2, "0");
      const ampm = hr >= 12 ? "PM" : "AM";
      hr = hr % 12 || 12;
      return `${hr}:${min} ${ampm}`;
    };
  
    return (
      <div className="bg-white dark:bg-neutral-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 w-full max-w-2xl mx-auto space-y-2 border border-gray-200 dark:border-neutral-700">
        <div className="text-lg font-semibold text-neutral-800 dark:text-white">{userName}</div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">{userEmail}</div>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-2 whitespace-pre-line">{userFeedback}</p>
        <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 pt-4 border-t border-gray-100 dark:border-neutral-700 mt-4">
          <span>{handleDate()}</span>
          <span>{handleTime()}</span>
        </div>
      </div>
    );
  };
  
  export default FeedbackCard;
  