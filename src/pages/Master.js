import { useState, useEffect } from "react";
import UserProfile from "../components/UserProfile";

const Master = () => {
  const storedUser = localStorage.getItem('user');
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setLoggedInUser(userData);
    }
  }, [storedUser]);

  if (!loggedInUser) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-4">
      {/* Progress bar */}
      <UserProfile user={loggedInUser} />
      
      {/* Quiz section */}
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4"></h2>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center">
              <div className="mb-10">
                <span className="bubble">Incredible! You've reached the Master level. Your dedication and hard work have truly paid off. Now, it's time to conquer the most challenging songs. Are you ready to push your limits?</span>
              </div>
              <img className="w-45 h-40" src="/simpu-whole.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback section */}
      <div className="flex w-full justify-center my-4 w-full bg-green border-t-2 mt-10">
        <div className="flex items-center justify-between w-full mt-4 px-4">
        <div>
                <span href="/app/levelsele"className="text-lg ml-3 text-green-800 font-bold flex items-center">
      <img className="w-20 h-20 mr-2" src="/simpu.png" alt="logo" />
      <a href="/app/levelselector" className="text-sm">➡️ Go back to level select?</a>
    </span>
            </div>
          <a href="/app/master/steps" className="button-19">LETS GO!</a>
        </div>
      </div>
    </div>
  );
};

export default Master;
