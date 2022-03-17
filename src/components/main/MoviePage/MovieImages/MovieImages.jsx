import * as constants from "../../../../constants";

export default function MovieImages(props) {
  console.log(props.imagesUrls);
  return (
    <div className="flex flex-wrap">
      {props.imagesUrls.map((imageObj) => {
        return (
          <div>
            {" "}
            <img
              className="h-24"
              src={constants.IMAGES_BASE_PATH + "original" + imageObj.file_path}
            ></img>{" "}
          </div>
        );
      })}
    </div>
  );
}
