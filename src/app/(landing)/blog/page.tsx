import BlogListing from '@/components/Landing/Blog';
import Breadcrumb from '@/components/Landing/Breadcrumb'

const Blog = () => {
    return (
        <div>
            <Breadcrumb
                title="Blogs & Insights"
                description="Stay updated with the latest trends, tips, and insights in the logistics industry."
                items={[
                    { name: "Home", href: "/" },
                    { name: "Blogs" }
                ]}
            />
            <BlogListing />
        </div>
    );
}
export default Blog;