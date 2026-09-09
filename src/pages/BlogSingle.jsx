import { useParams, Navigate } from "react-router-dom";

import blogsData from "../data/blogsData";

import BlogSingleHero from "../components/BlogsSingle/BlogSingleHero/BlogSingleHero";


function BlogSingle() {
    const { slug } = useParams();


    /* =============================================
       GET CURRENT BLOG
    ============================================= */

    const blog = blogsData.find(
        (item) => item.slug === slug
    );


    /* =============================================
       INVALID BLOG
    ============================================= */

    if (!blog) {
        return <Navigate to="/blogs" replace />;
    }


    return (
        <>

            {/* =============================================
                BLOG HERO
            ============================================= */}

            <BlogSingleHero
                category={blog.category}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                readTime={blog.readTime}
            />

        </>
    );
}


export default BlogSingle;