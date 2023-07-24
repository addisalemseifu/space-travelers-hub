import React from 'react'
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const { rockets } = useSelector((store) => store.rocket);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="pro-container">
    <div className="dragons-list">
      <h4 className="profile-header">My Rockets</h4>
      <table className="profile_table">
        <tbody className="body">
          { filteredRockets.length === 0 && <p>You have no reserved rockets</p>}
          {filteredRockets.map((rocket) => {
            const rocketId = rocket.id;
            return (
              <tr key={rocketId}>
                <td className="text">{rocket.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
}
