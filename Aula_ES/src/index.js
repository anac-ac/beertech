import { CustomPlayer } from "./components/CustomPlayer";

const video = new CustomPlayer(320, 240, "Your browser does not support the video tag.");

video.setSources([
  {src: "movie.mp4", type: "video/mp4"},
  {src: "movie.ogg", type: "video/ogg"}
]);

video.render("MyPlayerId");