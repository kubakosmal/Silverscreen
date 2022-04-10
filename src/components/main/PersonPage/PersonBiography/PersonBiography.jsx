import { useState } from "react";

export default function PersonBiography({ biography, maxBiographyLength }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className="mt-5">
      <div className="flex items-center">
        <h3 className="font-bold font-lato text-secondary">BIOGRAPHY</h3>
        <div className="h-1 w-full rounded-full bg-secondary ml-2"></div>
      </div>

      <div className="relative  rounded-md mt-1">
        <div className="absolute rounded-md bg-black blur-sm inset-0"></div>
        <div className="relative bg-neutral-900 border border-neutral-800 rounded-md p-2">
          <p className="">
            {biography.length > maxBiographyLength && isReadMore == false
              ? biography.slice(0, maxBiographyLength) + "..."
              : biography}
            {biography?.length > maxBiographyLength ? (
              <button
                className="text-secondary border text-xs px-1  rounded-md hover:opacity-90 border-secondary"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? "Show Less" : "Show More"}
              </button>
            ) : (
              false
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
