import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import EstateCard from "./EstateCard";
import LeftSideNav from "./LeftSideNav";

const Home = () => {
  const aboutState = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      {/* <EstateCard></EstateCard> */}

      {/* {aboutState.map((singleInfo) => (
        <EstateCard key={singleInfo.id} aboutState={singleInfo}></EstateCard>
      ))} */}

      <div className="grid  lg:grid lg:grid-cols-3 lg:gap-2">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-2 space-y-2 ">
          {aboutState.map((singleInfo) => (
            <EstateCard
              key={singleInfo.id}
              aboutState={singleInfo}
            ></EstateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
