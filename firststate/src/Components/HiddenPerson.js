import React from "react";

const HiddenPerson = ({ person }) => {
  const { fullName, profession } = person;
  return (
    <div className="container">
      <div
        class="card w-75"
        style={{ width: "90vw", marginTop: 50, marginBottom: 50 }}
      >
        <div class="card-body">
          <h5 class="card-title">{fullName}</h5>
          <p class="card-text">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPerson;
