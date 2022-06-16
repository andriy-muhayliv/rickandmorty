import React, { setState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import CircularProgress from "@mui/material/CircularProgress";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import ItemPerson from "../item-person/ItemPerson";

const Main = () => {
  const data = useSelector((data) => data.characters);
  const filter = useSelector((data) => data.filterData);
  const dispatch = useDispatch();
  const [copyArr, setCopyArr] = useState(filter);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    setCopyArr(data);
  }, [data]);

  const search = (inputText) => {
    const value = inputText.toLowerCase().split(" ").join("");
    const search = data?.filter((item) => {
      const successSearch = item?.name
        .trim()
        .toLowerCase()
        .split(" ")
        .join("")
        .search(value);
      if (successSearch >= 0) {
        return item;
      } else if (!value.length) {
        return data.slice();
      }
    });
    setCopyArr(search);
  };
  return (
    <>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          onChange={(event, text) => search(text)}
          freeSolo
          options={data.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              onChange={(e) => search(e.target.value)}
              {...params}
              label="Search by name"
            />
          )}
        />
      </Stack>
      <ImageList gap={20}>
        {copyArr?.length ? (
          copyArr.map((item, index) => <ItemPerson key={index} item={item} />)
        ) : (
          <CircularProgress />
        )}
      </ImageList>
    </>
  );
};

export default Main;
