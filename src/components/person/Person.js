import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import ItemPerson from "../item-person/ItemPerson";

const Person = () => {
  const data = useSelector((data) => data);
  const url = useParams();
  const [person, setPerson] = useState();

  useEffect(() => {
    (() => {
      const name = url.slug.toLowerCase().split(" ").join("");
      data.characters.filter((item) => {
        const successSearch = item?.name
          .trim()
          .toLowerCase()
          .split(" ")
          .join("")
          .search(name);
        if (successSearch >= 0) {
          setPerson(item);
        }
      });
    })();
  });

  return (
    <div>
      <Link to="/">
        <h2>Back to home</h2>
      </Link>
      {person && (
        <div style={{ fontSize: "30px" }}>
          <ItemPerson item={person} />
          <p>Name: {person.name}</p>
          <p>Species: {person.species}</p>
          <p>Gender: {person.gender}</p>
          <p>Location: {person.location.name}</p>
          <p>episode:</p>
          <p>Status: {person.status}</p>
          <p>
            Created:{" "}
            {dateFormat(person.created, `dddd dd, mmm, yyyy "at" HH:MM:ss`)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Person;
