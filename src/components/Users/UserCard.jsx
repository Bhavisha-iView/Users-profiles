import React from 'react'
import { useParams } from 'react-router-dom'
import profileImage from '../../Assets/anonymous.png'
import data from '../../data.json'
import {BsDownload} from 'react-icons/bs'
import Demo_CV from '../../Assets/Demo_CV.pdf'



const UserCard = () => {

  const params = useParams()
    // console.log(params)

    const filteredData = data.filter((item) => item.Id === params.id)


  return (
    <div className='profile-card' >
        <div className='profile-card-image' >
          <img src={profileImage} alt="profile image" />
        </div>
        <div className='profile-card-data' >
          <div>
            <p className='profile-card-heading' >I am Professional {filteredData[0].Skills}Developer</p>
          </div>
          <div>
            <p className='profile-card-summary' >Senior Tech Lead with 18+ Years hands on experience with
                                                 almost all popular web and mobile app
                                                 technologies. Worked with Internet Giants like Yahoo, Mindtree etc.
              </p>
          </div>
          <div>
            <a href={Demo_CV} className='cv-btn' download><BsDownload />  <p>DownLoad CV</p></a>
          </div>
        </div>
    </div>
  )
}

export default UserCard
 