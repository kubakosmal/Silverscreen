export default function UserInfo(props) {
  return (
    <div className="font-ibm">
      <div className="flex justify-around">
        <div className="border flex flex-col items-center">
          <p className="font-extrabold text-6xl bg-gradient-to-tr from-crayola to-pink-500 bg-clip-text text-transparent">
            {props.averageMovieRating}
          </p>
          <p className="">Average movie rating</p>
        </div>
        <div className="border flex flex-col items-center">
          <p className="font-extrabold text-6xl bg-gradient-to-tr from-crayola to-pink-500 bg-clip-text text-transparent">
            {props.averageShowsRating}
          </p>
          <p>Average shows rating</p>
        </div>
      </div>
    </div>
  );
}
