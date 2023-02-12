const UserContrib = (props) => {
  const userData = props.profileData
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-3 mt-3 shadow-sm h-md-250 position-relative px-2 py-2">
        <h3>Contributions</h3>
        <div className="row g-0 overflow-hidden position-relative">
          <h5>Contributor roles</h5>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div className="row g-0 overflow-hidden position-relative">
          <h5>Drupal Contributions</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do nt look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. 
          </p>
        </div>
      </div>
  )
}

export default UserContrib
