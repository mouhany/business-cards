import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faCakeCandles,
  faHeart,
  faHouseChimney,
  faUtensils,
  faBed,
  faMars,
  faVenus,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import Scores from "./Scores";

function Cards({ data }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-stone-50 shadow-sm hover:shadow-md snap-center flex flex-col w-[300px] h-[600px] lg:w-[600px] lg:h-[300px] rounded-lg lg:flex-row items-center">
        <img
          src={data.pic}
          alt="placeholder"
          className="aspect-square w-[300px] rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg object-cover object-center"
        />
        <div className="h-full w-full flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-1 items-center">
            <div className="text-2xl">{data.name}</div>
            <div className="text-stone-600 mono text-xs flex flex-col gap-1">
              <div className="flex flex-row gap-1 justify-between">
                <FontAwesomeIcon icon={faCakeCandles} />
                {data.dob}
              </div>
              <div className="flex flex-row gap-1 justify-between">
                <FontAwesomeIcon icon={faHouseChimney} />
                {data.adopted}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="bg-stone-300 text-sm rounded-full shadow-sm px-4 py-1 flex flex-row gap-1 items-center justify-center">
              {data.sex == "Male" ? (
                <>
                  <FontAwesomeIcon icon={faMars} /> <span>Male</span>{" "}
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faVenus} /> <span>Female</span>
                </>
              )}
            </div>
            <div className="bg-amber-700 text-sm rounded-full shadow-sm px-4 py-1 flex flex-row gap-1 items-center justify-center">
              <FontAwesomeIcon icon={faWeightScale} />
              {data.weight}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-bold">Stats</div>
            <div
              className="text-sm flex flex-row gap-3 justify-between items-center"
              aria-description="Appetite"
            >
              <FontAwesomeIcon icon={faUtensils} className="text-stone-600" />
              <Scores value={data.stats.appetite} />
            </div>
            <div
              className="text-sm flex flex-row gap-3 justify-between items-center"
              aria-description="Speed"
            >
              <FontAwesomeIcon
                icon={faBoltLightning}
                className="text-stone-600"
              />
              <Scores value={data.stats.speed} />
            </div>
            <div
              className="text-sm flex flex-row gap-3 justify-between items-center"
              aria-description="Sleep"
            >
              <FontAwesomeIcon icon={faBed} className="text-stone-600" />
              <Scores value={data.stats.sleep} />
            </div>
            <div
              className="text-sm flex flex-row gap-3 justify-between items-center"
              aria-description="Affection"
            >
              <FontAwesomeIcon icon={faHeart} className="text-stone-600" />
              <Scores value={data.stats.affection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
