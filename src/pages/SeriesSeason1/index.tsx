import React, { useState } from "react";
import { Box, Modal } from '@mui/material';

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Season, Preview, Title, Episode } from "./styles";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 625,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SeasonOnePage: React.FC<IPage> = props => {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState('');
  const [videoName, setVideoName] = useState('');

  const handleOpen = (videoURL: string, name: string) => {
    setVideo(videoURL)
    setVideoName(name)

    setOpen(true)
  }

  const handleClose = () => {
    setVideo('')
    setVideoName('')

    setOpen(false)
  };

  return (
    <Season>
      <Preview onClick={ () => handleOpen("https://www.youtube.com/embed/GVaIZj08LhM", "The Why")}>
        <Title>The Why</Title>
        <Episode>Episódio 1</Episode>
      </Preview>

      <Preview onClick={ () => handleOpen("https://www.youtube.com/embed/6mG2YIQ3ZAE", "The Who")}>
        <Title>The Who</Title>
        <Episode>Episódio 2</Episode>
      </Preview>

      <Preview onClick={ () => handleOpen("https://www.youtube.com/embed/LOSB81kbdtc", "The How - Part 1")}>
        <Title>The How - Part 1</Title>
        <Episode>Episódio 3</Episode>
      </Preview>

      <Preview onClick={ () => handleOpen("https://www.youtube.com/embed/LOSB81kbdtc", "The How - Part 2")}>
        <Title>The How - Part 2</Title>
        <Episode>Episódio 4</Episode>
      </Preview>

      <Preview onClick={ () => handleOpen("https://www.youtube.com/embed/KV0bd6zi4as", "The Vision")}>
        <Title>The Vision</Title>
        <Episode>Episódio 5</Episode>
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
  )
}

export default SeasonOnePage