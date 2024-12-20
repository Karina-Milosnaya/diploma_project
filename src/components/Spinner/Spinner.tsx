import "./Spinner.css";

function Spinner() {
  return (
    <>
      <div className="spinner">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
