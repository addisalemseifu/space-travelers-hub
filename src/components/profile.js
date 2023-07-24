import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { dragons } = useSelector((store) => store.dragons);
  const { rockets } = useSelector((store) => store.rocket);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);
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
  );
}

export default Profile;
