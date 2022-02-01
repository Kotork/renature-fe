import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Season, Preview, Title, Episode } from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 625,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SeasonTwoPage: React.FC<IPage> = (props) => {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState("");
  const [videoName, setVideoName] = useState("");

  const handleOpen = (videoURL: string, name: string) => {
    setVideo(videoURL);
    setVideoName(name);

    setOpen(true);
  };

  const handleClose = () => {
    setVideo("");
    setVideoName("");

    setOpen(false);
  };

  return (
    <Season>
      <Preview
        onClick={() =>
          handleOpen("https://www.youtube.com/embed/G8JOPa3AVqU", "O Reinício")
        }
      >
        <Title>O Reinício</Title>
        <Episode>Episódio 1</Episode>
      </Preview>

      <Preview
        onClick={() =>
          handleOpen("https://www.youtube.com/embed/G8JOPa3AVqU", "O dia a dia")
        }
      >
        <Title>O dia a dia</Title>
        <Episode>Episódio 2</Episode>
      </Preview>

      <Preview
        onClick={() =>
          handleOpen("https://www.youtube.com/embed/G8JOPa3AVqU", "O Resultado")
        }
      >
        <Title>O Resultado</Title>
        <Episode>Episódio 3</Episode>
      </Preview>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>{videoName}</h1>
          <iframe
            width="560"
            height="315"
            src={video}
            title={videoName}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Season>
  );
};

export default SeasonTwoPage;
