async function getSuggestedVideos() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Array.from({ length: 10 }, (_, index) => "Video");
}

export default async function SuggestedVideos() {
  const suggestedVideos = await getSuggestedVideos();
  return suggestedVideos.map((video, index) => {
    return (
      <div
        className={`flex flex-row items-center ${
          index != 0 ? "p-4" : "px-4 pb-4"
        }`}
      >
        <div className="rounded bg-slate-700 w-44 h-20"></div>
        <p className="p-2">Video {index + 1}</p>
      </div>
    );
  });
}
