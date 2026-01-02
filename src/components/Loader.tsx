import { Loader2 } from "lucide-react";

const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange">
        <Loader2 className="text-orange" />
      </div>
    </div>
  );
};

export default LoaderComponent;
