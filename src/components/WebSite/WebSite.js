import { useParams } from "react-router-dom";

function LoadWebSite() {
  let { id } = useParams();

  return <div>{id}</div>;
}

export default function WebSite() {
  return (
    <div className="WebSite">
      <div className="header_WebSite">
        <h2>M-INFOSOLUTION</h2>
      </div>
    </div>
  );
}
