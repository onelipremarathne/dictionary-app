import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Home.css";
import MainCard from "../../componnets/MainCard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Home() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function handleInputChange(event) {
    setWord(event.target.value);
  }

  function fetchWord() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((res) => res.json())
      .then((data) => setResult(data[0]))
       setWord("");
  }

  function playMusic() {
    const audio = new Audio(result.phonetics[0].audio);
    audio.play();
  }

  const cardElements = result
    ? result.meanings.map((meaning, index) => (
        <MainCard key={index} content={meaning} color="color" />
      ))
    : null;

  return (
    <div>
      <Box
        sx={{
          mx: "auto",
          my: "80px",
          width: "600px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "cursive",
              color:'#dd0076'
            }}
          >
            Free Dictionary
          </Typography>

          <Box sx={{ alignItems: "center", display: "flex", gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              className="textBox"
              id="outlined-search"
              label="Search..."
              type="search"
              value={word}
              onChange={handleInputChange}
            />
            <Button variant="contained" onClick={fetchWord}>
              Search
            </Button>
          </Box>
          {result ? (
            <>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6" sx={{ display: "flex" }}>
                  {result.word}
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<PlayCircleIcon />}
                  onClick={playMusic}
                >
                  Play
                </Button>
              </Box>
              {cardElements}
            </>
          ) : null}
        </Box>
      </Box>
    </div>
  );
}
