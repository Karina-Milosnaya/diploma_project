import "./Title.css";

function Title({ titleContent }: { titleContent: string }) {
  return (
    <>
      <h1 className="main-title">{titleContent}</h1>
    </>
  );
}

export default Title;
