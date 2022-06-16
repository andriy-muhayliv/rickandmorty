import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ImageListItem from "@mui/material/ImageListItem";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const ItemPerson = ({ item }) => {
  const { image, name, status } = item;
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem(image)));
  useEffect(() => {
    try {
      setLocal(JSON.parse(localStorage.getItem(image)));
    } catch (err) {}
    if (local) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [, item, name]);

  useEffect(() => {
    dispatch({
      type: "SET_LOCAL_LIKE",
      like,
      image,
    });
  }, [like]);

  return (
    <div className="relative">
      <FavoriteIcon
        color={like ? "secondary" : "action"}
        className="absolute right-6 z-50 top-6 cursor-pointer"
        onClick={() => setLike(!like)}
        style={{ fontSize: "60px" }}
      />
      <Link to={`/${name}`} onClick={() => dispatch({ type: "PERSON", item })}>
        <ImageListItem>
          <img
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={name}
            loading="lazy"
          />
        </ImageListItem>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
      </Link>
    </div>
  );
};

export default ItemPerson;
