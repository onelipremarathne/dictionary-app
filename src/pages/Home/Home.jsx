import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Home.css";
import MainCard from "../../components/MainCard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Home() {
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
            />
            <Button variant="contained">Search</Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="h6" sx={{ display: "flex" }}>
              Word
            </Typography>
            <Button variant="outlined" endIcon={<PlayCircleIcon />}>
              Play
            </Button>
          </Box>
          <MainCard />
        </Box>
      </Box>
    </div>
  );
}
