import React from "react";
import "./ProjectCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import gitHub from "../../../images/icons/GitHub-Mark-32px.png";

const ProjectCard = ({ name, description, picture, tech, url }) => {
  return (
    <Card className="card" sx={{ borderRadius: 15 }}>
      <CardMedia component="img" height="140" image={picture} />
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{name}</Typography>
        <Typography
          className="description"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {description}
        </Typography>
        <Typography>Technology Used</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {tech}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={url}>
          <img src={gitHub} alt="Github" className="githubButton"></img>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
