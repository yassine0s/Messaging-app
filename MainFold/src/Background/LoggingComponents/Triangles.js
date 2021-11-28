import { ReactComponent as Triangle } from "./Polygon1.svg";
import { ReactComponent as Triangle2 } from "./Polygon2.svg";
import { ReactComponent as Triangle3 } from "./Polygon3.svg";
import "./Triangles.css";

const Triangles = () => {
  return (
    <div>
      <div className="Triangle2">
        <Triangle2 />
        
      </div>
      <div className="Triangle">
        <Triangle />
      </div>
      <div className="Triangle3">
        <Triangle3 />
      </div>
    </div>
  );
};

export default Triangles;
