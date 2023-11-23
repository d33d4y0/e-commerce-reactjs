import { RxSlash } from "react-icons/rx";

const SloganLogo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex w-[643px] flex-col">
        <div className="flex">
          <span className="text-7xl font-medium text-neutral-900">
            Simply Unique
          </span>
          <RxSlash className="text-7xl text-zinc-500" />
        </div>
        <div className="flex">
          <span className="text-7xl font-medium text-neutral-900">
            Simply Better
          </span>
          <span className="text-7xl font-medium text-zinc-500">.</span>
        </div>
      </div>
      <div className="w-[424px] mr-10">
        <span className="text-neutral-700 text-base font-semibold font-['Inter'] leading-relaxed">
          3legant{" "}
        </span>
        <span className="text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">
          is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </span>
      </div>
    </div>
  );
};

export default SloganLogo;
