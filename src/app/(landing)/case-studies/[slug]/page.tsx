import BlogDetail from '@/components/Landing/Blog/BlogDetail';
import Breadcrumb from '@/components/Landing/Breadcrumb'

const CaseStudy = () => {
    return (
        <div>
            <Breadcrumb
                title="Blog Detail"
                description="Stay updated with the latest trends, tips, and insights in the logistics industry."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Blog", href: "/blog" },
                    { name: "Blog Detail" }
                ]}
            />
            <BlogDetail />
        </div>
    );
}
export default CaseStudy;