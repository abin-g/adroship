import Breadcrumb from '@/components/Landing/Breadcrumb'
import ServiceDetail from '@/components/Landing/Services/ServiceDetail';

const ServiceList = () => {
    return (
        <div>
            <Breadcrumb
                title="Esteemed Service"
                description=" Our Esteemed Service offers world-class logistics solutions tailored to meet your unique business needs."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Services", href: "/services" },
                    { name: "Esteemed Service" }
                ]}
            />
            <ServiceDetail />
        </div>
    );
}

export default ServiceList;