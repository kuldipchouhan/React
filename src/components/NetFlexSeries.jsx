export const NetFlexSeries = () => {
  const name = "test11";
  const rating = "8.0";
  let age = "16"

  const returnGenra = () => {
    const genra = "RomCom";
    return genra;
  }


  const canWatch = () => {
    if (age >= 18) return "Watch  Now";
    return "Not Avalable ";
  }


  return (
    <div className="card">
      <img src="m1.jpg" alt="Movie Poster" />
      <div className="card-content">
        <h2 className="card-title">Name : {name}</h2>
        <p className="card-rating">⭐ {rating}</p>
        <p className="card-rating"> {returnGenra()}</p>
        <button>{canWatch()}</button>


      </div>
    </div>
  );
}
export default NetFlexSeries