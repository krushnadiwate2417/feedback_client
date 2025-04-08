import ProceedCard from "./ProceedCard";
import { ADMIN_IMG, USER_IMG } from "../constants/constant";

const Goto = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 px-4">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <ProceedCard post="User" imgSrc={USER_IMG} />
          <ProceedCard post="Admin" imgSrc={ADMIN_IMG} />
        </div>
      </div>
    </>
  );
};

export default Goto;