import ExpressDelivery from '@/components/Landing/Express'
import PricingPage from '@/components/Landing/Pricing';
import BlogListing from '@/components/Landing/Blog';

const Express = () => {
    return (
        <div>
            <ExpressDelivery />
            <PricingPage />
            <BlogListing />
        </div>
    )
}

export default Express;