const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <div className="flex mx-8 mt-8 pb-8 border-b-2">
        <img src={`src/assets/${props.img_url}`} alt="" />
        <div className="content p-4">
          <div className="flex text-[10.24px]">
            <img src="src/assets/location.svg" alt="" />
            <p className="pl-1 pr-3 text-[#2B283A]">{props.country}</p>
            <p className="underline underline-offset-3 text-[#918E9B]">
              View on Google Maps
            </p>
          </div>
          <h1 className="text-[25px] font-bold">{props.location}</h1>
          <span className="text-[10.24px] font-bold">
            {props.start_date.day} {props.start_date.month},{" "}
            {props.start_date.year} - {props.end_date.day}{" "}
            {props.end_date.month}, {props.end_date.year}
          </span>
          <p className="text-[10.24px] text-[#2B283A]">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
