const ServicesCard = ({ service }) => {
  const { img, price, title } = service || {};
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
          <button className="btn btn-neutral">Book now</button>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
