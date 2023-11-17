import { useState } from "react";
import JSONViewer from "./components/JSONViewer";
import { isParsable } from "./utils";

function App() {
  const [content, setContent] = useState("");
  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-base-300">
      <div className="bg-primary p-4">
        <h1 className="base-content text-center text-lg font-bold text-white">
          Where in JSON
        </h1>
        <div className="mt-1 flex w-full items-center gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered flex w-full"
          />
          <div className="w-[150]px form-control">
            <select className="select select-bordered">
              <option>Query</option>
              <option>Value</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex grow overflow-hidden bg-base-300">
        <div className="h-full flex-1 p-4">
          <textarea
            className="h-300px textarea textarea-primary h-3/6 w-full	"
            placeholder="Input the raw JSON"
            onChange={onInputChange}
            value={content}
          />
        </div>
        <div className="h-full flex-1 overflow-hidden p-4">
          <div className="flex h-full w-full flex-col flex-nowrap overflow-auto rounded-lg	bg-white	p-4	">
            {isParsable(content) ? (
              <>
                <div className="flex grow flex-col flex-nowrap overflow-auto whitespace-nowrap	rounded-lg	bg-white	p-4">
                  <JSONViewer data={JSON.parse(content)} />
                </div>
              </>
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
