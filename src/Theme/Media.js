import { generateMedia } from "styled-media-query";

const Media = generateMedia({
    xs: "250px",
    sm: "450px",
    md: "768px",
    lg: "1200px"
});

export default Media