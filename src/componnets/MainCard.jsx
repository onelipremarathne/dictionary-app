import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./styles.css";

export default function MainCard({ content }) {
  const defElements = content.definitions.map((def, index) => (
    <div key={index} className="definition">
      <Typography variant="h7" component="div" sx={{ color: "#dd0076" }}>
        Definition:
        <br />
      </Typography>
      {def.definition}

      {def.example ? (
        <div>
          <Typography variant="h7" component="div" sx={{ color: "#dd0076", marginTop:'5px'}}>
            Example:
            <br />
          </Typography>
          {def.example}
        </div>
      ) : null}
    </div>
  ));
  return (
    <div>
      <Box sx={{ minWidth: 355 }}>
        <Card variant="outlined">
          <CardContent sx={{ backgroundColor: "#f5cff2" }}>
            <div className="speech">
              <Typography variant="h7" >
                Part of Speech:
                <br /> 
              </Typography>
              {content.partOfSpeech}
            </div>
            {defElements}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
