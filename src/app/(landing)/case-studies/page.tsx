import CaseStudyListing from '@/components/Landing/CaseStudy';
import Breadcrumb from '@/components/Landing/Breadcrumb'

const Blog = () => {
    return (
        <div>
            <Breadcrumb
                title="Case Studies & Insights"
                description="Stay updated with the latest trends, tips, and insights in the logistics industry."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Case Studies" }
                ]}
            />
            <CaseStudyListing />
        </div>
    );
}
export default Blog;