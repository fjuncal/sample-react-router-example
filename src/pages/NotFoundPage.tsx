import { Link } from "react-router-dom";

//tag link its really more performatic

export default function NotFoundPage() {
  return (
    <>
      <div>
        <div>404 Not Found</div>
        <Link to={"/"}>Home from tag Link</Link>
      </div>
      <div>
        <a href="/">Home from tag A</a>
      </div>
    </>
  );
}
