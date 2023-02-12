import { useState } from 'react'
import UserInfo from './UserInfo';
import UserAbout from './UserAbout';
import UserContrib from './UserContrib';

const API_URL = 'https://www.drupal.org/api-d7/user.json';

const SearchUser = (props) => {
  const [userProfile, setUserProfile] = useState(null)
  const [inputProfile, setInputProfile] = useState('')
  const handleChange = (event) => {
    setInputProfile(event.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputProfile)
    if (!inputProfile) return;
    async function fetchData() {
      const response = await fetch(
        `${API_URL}?name=${inputProfile}`
      );
      const data = await response.json();
      setUserProfile(data);
    }
    fetchData();
  };
  
  const userData = userProfile == null ? props.profileData.list : userProfile.list
  
  return (
    <div className='px-2 py-2'>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            aria-label="Search"
            type="search"
            placeholder="Enter your drupal.org username..."
            value={inputProfile}
            onChange={handleChange}
            required="true"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
      {
        userData.length === 0 ?
          <div className="alert alert-danger" role="alert">
            Invlaid username
          </div>
        : <div>
            <UserAbout profileData={userData[0]} />
            <UserInfo profileData={userData[0]}/>
            {/* <UserContrib profileData={userData[0]}/> */}
          </div>
      }
    </div>
  )
}

export default SearchUser
