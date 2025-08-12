import Breadcrumb from '@/components/Landing/Breadcrumb'
import PricingPage from '@/components/Landing/Pricing';

const Pricing = () => {
    return (
        <div>
            <Breadcrumb
                title="Pricing Plans"
                description="Join our trusted network of logistics partners and grow your business."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Pricing" }
                ]}
            />

            <PricingPage />
        </div>
    )
}
export default Pricing;