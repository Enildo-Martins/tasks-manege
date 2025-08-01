import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center ">
      <div className="w-[500px] space-y-4 ">
        <div className="relative mb-6">
          <button onClick={() => navigate(-1)} className="bg-slate-400 rounded-md text-white absolute left-0 top-0 bottom-0 ">
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
