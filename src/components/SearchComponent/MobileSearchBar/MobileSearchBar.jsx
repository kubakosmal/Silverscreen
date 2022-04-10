export default function MobileSearchBar(props) {
  return (
    <div className="absolute top-2 right-12">
      <div
        className="relative rounded-xl p-1 px-2 flex items-center bg-transparent border-2 border-slate-1100 bg-gradient-to-tr from-crayola to-pink-600"
        onClick={props.openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-slate-1100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
