const Card = (props) => {
  const datas = props.data;
  return (
    <div className="cards flex ml-8 pb-6 space-x-5">
      {datas.map((data) => (
        <div className="mt-12 max-w-[176px]" key={data.id}>
          <img src={`src/assets/${data.img}`} alt="" />
          <div className="rating flex mt-1 text-[#918E9B]">
            <img src="src/assets/star.svg" alt="" className="pr-1" />
            <span className="text-xs text-black pr-1">{data.rating}</span>
            <span className="text-xs">({data.reviewCount})</span>
            <span className="text-xs">•{data.country}</span>
          </div>
          <div className="detail text-[12px] ">
            <p className="">{data.title}</p>
          </div>
          <div className="Price flex text-[12px]">
            <p className="pr-1 font-bold">From ${data.price}</p>
            <p>/ person</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
