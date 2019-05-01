import React from 'react';

const Profile = () => {
	return <div className="profile">
          <img src="https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg" />
          <div className="user-info">
            <div className="user-name">Mr. Fox</div>
            <div className="user-info-details">
              <div className="user-dob">Date of birth: June 7</div>
              <div className="user-city">City: Kyiv</div>
              <div className="user-edu">Education: KNU'14</div>
              <div className="user-website">Wesite: https://www.lorem.ipsum</div>
            </div>
          </div>
        </div>
}

export default Profile;