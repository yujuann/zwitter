import { dbService } from "../fbase";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [zwitter, setZwitter] = useState("");
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, "zwitter"), {
      zwitter,
      createdAt: Date.now(),
    });
    setZwitter("");
  };
  const handleOnChange = (event) => {
    setZwitter(event.target.value);
    // const {
    //   target: { value },
    // } = event;
    // setTweets(value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          value={zwitter}
          onChange={handleOnChange}
          type="text"
          placeholder="What's on your mind?✨"
          maxLength={120}
        />
        <input type="submit" value="zwitter" />
      </form>
    </div>
  );
};

export default Home;
