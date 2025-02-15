import Image from "../Image";
import ReviewsData from "../../../src/Data/ReviewsData.json";

function Comments() {
  return (
    <div className="flex flex-col gap-6">
      {ReviewsData.map((item, index) => (
        <>
          <div key={index} className="flex gap-6">
            <div className="w-22 mt-1">
              <Image addImg={item.reviewAvatar} />
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <div>
                  <h2 className="paraDark mn-2">{item.reviewTitle}</h2>
                  <h6 className="paraSkys">{item.reviewSubTitle}</h6>
                </div>
                <h6 className="paraSkys">{item.reviewTime}</h6>
              </div>
              <h5 className="paraSecond">{item.reviewText}</h5>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Comments;
