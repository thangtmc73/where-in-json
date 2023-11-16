import { useState } from "react";
import JSONViewer from "./components/JSONViewer";
import { isParsable } from "./utils";

function App() {
  const [content, setContent] = useState("");
  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-base-300 py-4">
      <h1 className="base-content text-center text-lg font-bold">
        Where in JSON
      </h1>
      <div className="flex h-full">
        <div className="h-full flex-1 p-4">
          <textarea
            className="h-300px textarea textarea-primary h-3/6 w-full	"
            placeholder="Input the raw JSON"
            onChange={onInputChange}
          />
        </div>
        <div className="h-full flex-1 overflow-hidden p-4">
          <div className="flex h-full w-full flex-col flex-nowrap overflow-auto whitespace-nowrap rounded-lg	bg-white	p-4	">
            {isParsable(content) ? (
              <JSONViewer data={JSON.parse(content)} />
            ) : (
              <span>Lỗi</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
