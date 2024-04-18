import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import EstateCard from "./EstateCard";
import LeftSideNav from "./LeftSideNav";

const Home = () => {
  const aboutState = useLoaderData();

  return (
    <div>
      <h2 className="text-xl">this is home</h2>
      <Banner></Banner>

      {/* <EstateCard></EstateCard> */}

      {/* {aboutState.map((singleInfo) => (
        <EstateCard key={singleInfo.id} aboutState={singleInfo}></EstateCard>
      ))} */}

      <div className="grid grid-cols-1 lg:grid lg:grid-cols-4 lg:gap-2">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-3">
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
