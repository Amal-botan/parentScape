function PostUser() {
  const user = {
    user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSN0LzT35OFBzyTtlHIl876rIsAcWWen9nA&usqp=CAU",
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
