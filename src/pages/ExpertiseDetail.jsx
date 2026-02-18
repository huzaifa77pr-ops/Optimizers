import { useParams } from "react-router-dom";

export default function ExpertiseDetail() {
  const { slug } = useParams();

  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-black text-slate-950">{title}</h1>
      
    </div>
  );
}
