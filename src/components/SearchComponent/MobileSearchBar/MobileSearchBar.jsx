export default function MobileSearchBar(props) {
  return (
    <div className="relative">
      <div className="absolute rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 inset-0 blur-sm"></div>
      <div
        className="relative rounded-xl p-1 px-2 flex items-center bg-neutral-900"
        onClick={props.openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
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
