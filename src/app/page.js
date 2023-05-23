import { Suspense } from "react";
import SuggestedVideos from "./SuggestedVideos";
import VideoPlayer from "./VideoPlayer";
import Comments from "./Comments";

export default function Homepage() {
  return (
    <div className="flex flex-row justify-between px-20 py-10">
      <div className="pr-6 flex flex-col flex-grow-2 w-2/3">
        <div className="flex flex-col">
          <VideoPlayer></VideoPlayer>
        </div>
        <div className="pt-6">
          <Suspense fallback={<p>Loading suggested videos...</p>}>
            <Comments></Comments>
          </Suspense>
        </div>
      </div>
      <div className="flex-grow">
        <Suspense fallback={<p>Loading suggested videos...</p>}>
          <SuggestedVideos></SuggestedVideos>
        </Suspense>
      </div>
    </div>
  );
}
