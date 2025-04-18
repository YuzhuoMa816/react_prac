import { useState, useEffect } from "react";
import UserCard from "./userCard";
import "./githubProfile.css";
function GithubProfileSearch() {
  const [userName, setUserName] = useState("YuzhuoMa816");
  const [loading, setLoading] = useState(false);

  const [noSuchUser, setNoSuchUser] = useState(false);

  const [userData, setUserData] = useState(null);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      setNoSuchUser(false);
      let result = await fetch(`https://api.github.com/users/${userName}`);
      const data = await result.json();

      console.log("result", result);
      console.log("aiate", result.status);

      if (data && result.status !== 404) {
        console.log("INNNN");
        setUserData(data);
      } else {
        setNoSuchUser(true);
      }
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
    setUserName("");
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSearch() {
    fetchGithubUserData();
  }

  console.log(userData);

  if (loading) {
    return (
      <div>
        <p>Loading Data...</p>
      </div>
    );
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search by username.."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>

        <button onClick={handleSearch}>Search</button>
      </div>
      {noSuchUser ? (
        <p>No such user</p>
      ) : (
        userData && <UserCard user={userData} />
      )}
    </div>
  );
}

export default GithubProfileSearch;
