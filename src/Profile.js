import React, { Profiler } from "react";

function Profile(props) {
  //   console.log(props);
  return (
    <div>
      <div className="container-center-horizontal">
        {/* <div className="layout"> */}
        <div className="view">
          <img className="ellipse-1" src={props.img} />
          <div className="text-1">{props.details}</div>
          <div className="button">
            <div className="button-text">{props.button}</div>
          </div>
          <div className="close">{props.close}</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Profile;
