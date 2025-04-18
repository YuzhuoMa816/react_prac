function UserCard({ user }) {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
  } = user;
  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="img"></img>
      </div>

      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>

        <p>
          User Join at{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>

      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
