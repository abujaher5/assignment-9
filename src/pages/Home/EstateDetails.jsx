import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estateDetails = useLoaderData();
  const { id } = useParams();
  const [aUser, setAUser] = useState();

  useEffect(() => {
    const estateInfo = estateDetails.find((property) => property.id == id);
    setAUser(estateInfo);
  }, []);

  const {
    estate_title,
    description,
    status,
    location,
    image,
    price,
    area,
    facilities,
    segment_name,
  } = aUser || {};

  console.log(id);
  return (
    <div className="p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex  items-center">
          <h3 className="text-xl  font-semibold dark:text-violet-600">
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
          <div className="flex items-center justify-between ">
            <span className="text-xs font-bold">Location : {location}</span>
            <span className="font-bold">Price : {price}</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="leading-snug dark:text-gray-600">{description}</p>

          <p>Area : {area} sq ft</p>
        </div>
        <div>
          {/* <ul>
            {facilities.map((item, index) => (
              <li key={index} className="block">
                {item}
              </li>
            ))}
          </ul> */}
          {/* <ul>
            <li>{facilities[0]}</li>
            <li>{facilities[1]}</li>
            <li>{facilities[2]}</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
