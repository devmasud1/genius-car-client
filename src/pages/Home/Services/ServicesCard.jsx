import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {_id, img, price, title } = service || {};
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="image"
          className="max-h-[300px] object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-neutral">Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
