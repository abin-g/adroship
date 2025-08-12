import Services from '@/components/Landing/Services'
import Breadcrumb from '@/components/Landing/Breadcrumb'
import ExcellenceSection from '@/components/Landing/ExcellenceSection';
import Testimonials from '@/components/Landing/Testimonials';

const Service = () => {
    return (
        <>
            <Breadcrumb
                title="Logistics Request"
                description="Easily create and manage your shipping requests."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Logistics Request" }
                ]}
            />
            <Services />
            <ExcellenceSection />
            <Testimonials />
        </>
    );
};

export default Service;
