function PostUser() {
  const user = {
    user_image: "https://cdn-icons.flaticon.com/png/512/2645/premium/2645633.png?token=exp=1644982519~hmac=a842388ac59dd284f82fe28d9b2b335f",
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
