import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebaseConfig";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let sub = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
      }
    });
  }, []);

  const handleLogin = async () => {
    let mainuser = await signInWithPopup(auth, provider);
    console.log(mainuser);
    setUser(mainuser.user);
  };
  const handleSignout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="w-full  flex justify-center  mt-[100px]">
      <div className=" w-[600px] h-[500px]  flex  justify-center items-center ">
        {/*  */}
        <div className="first"></div>
        <div className="first-1"></div>
        {user ? (
          <div className=" w-[60%] h-[400px] bg-[#e1e0e632] main  ">
            <h1 className="text-white mt-[70px] flex justify-center text-[1.3rem] font-semibold ">
              Login Succesfully
            </h1>
            <div className="w-[90px] h-[90px]  ms-[38%]  mt-[30px]">
              <img
                src={user.photoURL}
                alt="profile"
                className="w-full h-full rounded-[100%]"
              />
            </div>
            <div className="ms-[%] w-[100%]  mt-3">
              <h1 className="text-white flex justify-center text-[1.1rem] mt-2">
                Username :- {user.displayName}
              </h1>
              <h1 className="text-white flex justify-center text-[1.1rem] mt-2">
                {" "}
                Email :-{user.email}
              </h1>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleSignout}
                  className="w-[110px] h-[32px] border bg-[#626167] text-white rounded"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        ) : (
          //  sddsfff
          <div className=" w-full h-full flex  justify-center items-center">
            <div className="first"></div>
            <div className="first-1"></div>
            <div className="w-[60%] h-[400px] bg-[#e1e0e632] rounded main  ">
              <h1 className="text-white mt-7 flex justify-center text-[1.3rem] font-semibold mb-7">
                Login Here
              </h1>
              <label htmlFor="" className="text-white ms-5  ">
                Username
              </label>
              <input
                type="text"
                placeholder="Email or phone"
                className="bg-[#37363E] block  ms-5 mt-2  py-1 px-1 w-[260px] mb-4 placeholder:text-[13px] opacity-80 rounded"
              />
              <label htmlFor="" className="text-white ms-5   ">
                password
              </label>
              <input
                type="text"
                placeholder="password"
                className="bg-[#37363E] block  ms-5 mt-2  py-1 px-1 w-[260px] placeholder:text-[13px] opacity-80 rounded"
              />
              <button
                onClick={handleLogin}
                className="bg-[white] mt-8 w-[260px] h-[32px]   ms-5 border rounded    btn1"
              >
                Sign in
              </button>

              <div className="flex justify-around mt-9 w-full ">
                <button className="w-[110px]  border bg-[#626167] text-white rounded btn">
                  Google
                </button>
                <button className="w-[110px] border  text-white  bg-[#626167] rounded btn">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
