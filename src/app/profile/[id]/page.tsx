import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div>
      profile page of id : {params.id}
    </div>
  )
}

export default UserProfile