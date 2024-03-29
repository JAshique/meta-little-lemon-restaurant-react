import "./Card.css";

// TODO: Replace static data using Redux
const defaultData = "Default placeholder testimmonial data";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
        <div className="content">
          <span className="price">
            <span>{`${data.price}`}</span>
          </span>
          <div className="pd white">
            <h5>{data.name}</h5>
            <p>{data.description ? data.description : defaultData}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
