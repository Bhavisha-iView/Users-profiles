import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import Ratingstar from '../StarsRating/RatingStar'
import UserCard from './UserCard'
import profileImage from '../../Assets/anonymous.png'
const UsersProfile = () => {
    const params = useParams()
    // console.log(params)

    const filteredData = data.filter((item) => item.Id === params.id )

    // console.log(filteredData)

  return (
    <div className='profile'>
        <div className='profile-data' >
            <div className='profile-details' >
                <div>
                    <pre className='profile-head-name' >
                        Hello I'm <br />
                        {filteredData[0].Developer_Name}
                    
                    </pre>
                </div>
                <div className='user-details' >
                    <p>I'm a {filteredData[0].Skills} Developer. I am working on a {filteredData[0].Vendor}. 
                    I have {filteredData[0].Experience} years of experience. {filteredData[0].summary}</p>
                </div>
                <div className='profile-box'>
                        <div className='profile-exp exp-box' >
                            <div className='profile-year' >{filteredData[0].Experience} Year.</div><br />
                            <div className='exp' >Experience</div>
                        </div>
                        <div className='profile-exp rating-box' >
                            <div className='rating-star' >
                                <Ratingstar rank={filteredData[0].Ranked} />
                            </div>
                        </div>
                </div>
            </div>
            <div className='profile-image' >
                <img src={profileImage} alt="profile image" />
            </div>
        </div>
        <div className='user-card'>
        <UserCard />
        </div>
    </div>
  )
}

export default UsersProfile