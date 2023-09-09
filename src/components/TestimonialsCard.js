import "./TestimonialsCard.css";

const TestimonialsCard = ({ data }) => {
  return (
    <div className="col-25 col-50 col light">
      <div className="center mt-3">
        <img className="test-img" src={data.picture.large} alt="" />
      </div>
      <h5 className="center my-2">{data.name.first}</h5>
      {/* TODO: Update quotes to have unique data */}
      <p className="pd">&quot;Recommended by our local community&quot;</p>
    </div>
  );
};

export default TestimonialsCard;
