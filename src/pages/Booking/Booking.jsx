import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/provide/AuthProvider";
import BookingTable from "./BookingTable";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleBookingConfirm = () => {};
  const handleDelete = () => {};
  return (
    <div className="w-11/12 mx-auto min-h-[70vh] mt-10">
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((book) => (
              <BookingTable
                key={book._id}
                book={book}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Booking;
