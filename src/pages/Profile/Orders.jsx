import React from 'react'
import NoItems from './NoItems'
import ProfileTable from './ProfileTable'

const Orders = () => {
  return (
    <div>
      {false && <NoItems />}
      <ProfileTable />
    </div>
  )
}

export default Orders
