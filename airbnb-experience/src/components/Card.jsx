const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="mt-12 max-w-[176px]" key={props.id}>
      {badgeText && (
        <div className="text-[10.24px] absolute bg-white px-2 py-1 mt-1 ml-1 rounded-sm">
          {badgeText}
        </div>
      )}
      <img src={`src/assets/${props.img}`} alt="" />
      <div className="rating flex mt-1 text-[#918E9B]">
        <img src="src/assets/star.svg" alt="" className="pr-1" />
        <span className="text-xs text-black pr-1">{props.rating}</span>
        <span className="text-xs">({props.reviewCount})</span>
        <span className="text-xs">•{props.country}</span>
      </div>
      <div className="detail text-[12px] ">
        <p className="">{props.title}</p>
      </div>
      <div className="Price flex text-[12px]">
        <p className="pr-1 font-bold">From ${props.price}</p>
        <p>/ person</p>
      </div>
    </div>
  );
};

export default Card;
