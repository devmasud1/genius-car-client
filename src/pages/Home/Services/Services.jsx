import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return(
        <div>
             <p> This is Services </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
             </div>
        </div>
    )}
export default Services;