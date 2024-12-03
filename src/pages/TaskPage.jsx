import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <Title>
            <button
              className="bg-slate-400 text-white p-2 rounded-md absolute left-0"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft />
            </button>
            Detalhes da tarefa
          </Title>
        </div>
        <div className=" bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className=" text-slate-800">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
