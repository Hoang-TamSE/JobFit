import React from "react";

export default function TextMessage(props) {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="small mb-1 text-muted">23 Jan 6:10 pm</p>
        <p className="small mb-1">Johny Bullock</p>
      </div>
      <div className="d-flex flex-row justify-content-end mb-4 pt-1">
        <div>
          <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">
            {props.message}
          </p>
        </div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "100%" }}
        />
      </div>
    </div>
  );
}
