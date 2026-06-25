import "./ProfileCard.css";

function ProfileCard() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const categories =
    JSON.parse(
      localStorage.getItem(
        "categories"
      )
    ) || [];

  return (
    <div className="profile-card">

      <h2>
        {user?.name}
      </h2>

      <p>
        {user?.email}
      </p>

      <div className="tags">

        {categories.map(
          (
            item,
            index
          ) => (
            <span key={index}>
              {item}
            </span>
          )
        )}

      </div>

    </div>
  );
}

export default ProfileCard;