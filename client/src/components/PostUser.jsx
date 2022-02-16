function PostUser() {
  const user = {
    user_image: "https://cdn-icons-png.flaticon.com/512/265/265674.png",
    username: "steph.bob"
  }
  
  return (
    <aside>
    <div className="profile">
      <img className="profile_image" src={user.user_image} alt="" />
    </div>
    <br />
    <div className="profile__name">
      {user.username}
    </div>
  </aside>
  );
}

export default PostUser;
