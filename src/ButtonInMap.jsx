import React from "react";

const object = {
  Ilya: {
    age: 25,
    job: "Frontend",
    id: 1,
  },
  Alex: {
    age: 24,
    job: "Backend",
    id: 2,
  },
  Dima: {
    age: 23,
    job: "Fullstack",
    id: 3,
  },
};

function Example() {
  const [showMore, setShowMore] = React.useState(false);
  const [showMoreId, setShowMoreId] = React.useState(null);

  const handleShowMore = (e, index) => {
    e.preventDefault();
    setShowMore(!showMore);
    setShowMoreId(index);
  };
  return (
    <div>
      {Object.keys(object).map((key, index) => {
        const { age, job, id } = object[key];
        return (
          <div key={id}>
            <p>name: {key}</p>
            <button onClick={(e) => handleShowMore(e, index)}>Show more</button>
            {showMore && showMoreId === index && (
              <div>
                <p>age: {age}</p>
                <p>job: {job}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Example;
