import Image from "next/image";
const UserInfo = (props) => {
  const userData = props.profileData
  // Convert 10 digit timestamp to milliseconds
  const dateFormat = new Date(parseInt(userData.created) * 1000);
  const year  = dateFormat.getFullYear();
  const month = (dateFormat.getMonth() + 1).toString().padStart(2, "0");
  const day   = dateFormat.getDate().toString().padStart(2, "0");

  const userName = (userData.field_first_name !== null || userData.field_last_name !== null) ? 
    <h3>{userData.field_first_name} {userData.field_last_name} </h3>
    : <h3> {userData.name} </h3>

  return (
    <div className="row g-0 border rounded overflow-hidden shadow-sm position-relative">
      <div className="col-autod-lg-block col-md-3">
        <Image 
          src="https://www.drupal.org/files/styles/grid-2-2x-square/public/announcements/drupal-evergreen-logo-280X280px_2.png?itok=xgcEltlR"
          alt="Profile picture"
          width={280}
          height={280}
        />
      </div>
      <div className="d-flex flex-column position-static col-md-9">
          {userName}
          <p> <a href={userData.url} className="link-primary">@{userData.name}</a> Joined on {year}-{month}-{day}</p>
          <div className="row">
            <div className="col-md-6">
              <p>Location: {userData.field_user_location}</p>
              <p>Pronouns:  {userData.field_user_pronouns}</p>
              <p>Primary Language:  {userData.field_user_primary_language}</p>
              <p>Other languages: {userData.field_languages.join(', ')}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UserInfo
