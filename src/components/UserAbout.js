const UserAbout = (props) => {
  const userData = props.profileData
  const parse = require('html-react-parser');
  return (
    <>
      {
        userData.field_bio != '' ?
          <div className="user-about row g-0 border rounded overflow-hidden flex-md-row mb-3 mt-3 shadow-sm h-md-250 position-relative px-2 py-2">
            {parse(userData.field_bio.value)}
          </div>
        : ''
      }
    </>
  )
}

export default UserAbout
