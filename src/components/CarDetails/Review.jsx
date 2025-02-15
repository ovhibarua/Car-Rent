import Comments from "./Comments";

function Review() {
  return (
    <div className="p-8 bg-white rounded-[10px] shadow-xs">
      <h2 className="paraDark flex items-center gap-3 mb-8">
        Reviews
        <span className="bg-[#3563E9] text-white font-bold py-1.5 px-4 rounded-[4px]">
          13
        </span>
      </h2>
      <Comments />
    </div>
  );
}

export default Review;
