import React, { useState, useEffect } from "react";

const Person = ({ person }) => {
  const { fullName, bio, imageSrc, profession } = person;

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div class="card mb-5" style={{ width: "90vw", marginTop: "50px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={imageSrc}
              class="img-fluid rounded-start"
              alt="a medic"
              style={{ height: "100%" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">{fullName}</h4>
              <h5>{profession}</h5>
              <p class="card-text">{bio}</p>
              <p class="card-text">
                <small class="text-muted">
                  Last mounted {count} seconds ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
