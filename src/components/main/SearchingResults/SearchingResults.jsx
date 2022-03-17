import { useParams } from "react-router-dom";
import Header from "../../header/Header";

export default function SearchingResults() {
  const params = useParams();
  const query = params.query;
  return (
    <div className="border max-w-5xl mx-auto">
      <Header></Header>
      <p className="text-white">You searched for {query}</p>
    </div>
  );
}
