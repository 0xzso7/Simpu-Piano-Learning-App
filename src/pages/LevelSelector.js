import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import FloatingText from "../components/FloatingText";
import UserProfile from "../components/UserProfile";

const mockUser = {
  user: "test_user_id",
  name: "0xzso7",
  email: "test@example.com",
  photo: "",
  piano_expertise: ""
};

const LevelSelector = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [allDone, setAllDone] = useState(true); // ← Set this to true to enable all buttons
  const navigate = useNavigate();

  useEffect(() => {
    // Set mock user
    setLoggedInUser(mockUser);

    // If you still want a condition for enabling buttons, simulate tutorial check
    const fakeTutorialData = {
      c: "done", d: "done", e: "done", f: "done", g: "done", a: "done", b: "done",
    };

    const allFieldsDone = Object.values(fakeTutorialData).every(val => val === "done");
    setAllDone(allFieldsDone);
  }, []);

  const handleLevelSelect = (level) => {
    const lvl = level.toLowerCase();
    navigate(`/app/${lvl}`);
  };

  if (!loggedInUser) return null;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
         <UserProfile user={loggedInUser} />
      <div className="flex items-center justify-center w-full">
        <div className="max-w-3xl p-6 bg-white rounded-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center">
              <FloatingText username={loggedInUser.name}></FloatingText>
              <img className="h-40 w-45" src="/simpu.png" alt="logo" />
              <p className="mt-4 text-lg text-gray-500">Tell me what your expertise in using the piano</p>
            </div>
            <div className="flex justify-center space-x-4">
              <a className="big-button" onClick={() => handleLevelSelect('NOVICE')}>Novice</a>
              <a className={`big-button ${allDone ? '' : 'disabled'}`} onClick={() => handleLevelSelect('PROFICIENT')}>Proficient</a>
              <a className={`big-button ${allDone ? '' : 'disabled'}`} onClick={() => handleLevelSelect('MASTER')}>MASTER</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex w-full justify-center p-6`}>
       
      </div>
    </div>
  );
};

export default LevelSelector;
