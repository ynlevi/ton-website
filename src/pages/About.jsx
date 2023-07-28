// import mainVideo from "../static/media/mainVideo.mp4";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import blogs from "../data/objects/blogs";
export default function About() {
  const { id } = useParams();

  const data = blogs.flatMap((elm) => elm.dataArr);

  const blog = data.find((i) => i.url === id);
  console.log(blog, id);
  if (blog) {
    return (
      <div className="about">
        <NavBar />
        <h1>{id}</h1>
        <h2>{blog.hl}</h2>
        <img {...blog.mainImg} />
        {/* <video className="main-video" src={mainVideo} autoPlay loop muted /> */}
      </div>
    );
  } else {
    return <div>not working as expected</div>;
  }
}
