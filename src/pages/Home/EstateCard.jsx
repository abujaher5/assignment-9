// import { useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";

const EstateCard = ({ aboutState }) => {
  //   const info = useLoaderData();
  //   console.log(info);

  const {
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area_sq_ft,
    location,
    image,
    facilities,
  } = aboutState;

  console.log(aboutState);
  return (
    <div className="p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold dark:text-violet-600">
            {estate_title}
          </h3>
        </div>
        <button className="bg-green-500 px-4 py-1 rounded-lg">{status}</button>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>{location}</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="leading-snug dark:text-gray-600">{description}</p>

          <button className="btn font-semibold text-green-800 bg-yellow-400 btn-ghost lg:btn-wide">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
