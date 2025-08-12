import Breadcrumb from '@/components/Landing/Breadcrumb'
import PartnerList from '@/components/Landing/Partners'

const Partners = () => {
    return (
        <div>
            <Breadcrumb
                title="Partner With Us"
                description="Join our trusted network of logistics partners and grow your business."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Partner With Us" }
                ]}
            />
            <PartnerList />
        </div>
    )
}

export default Partners;