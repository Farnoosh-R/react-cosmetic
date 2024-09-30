
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import BlogItem from "./BlogItem";

const Blog = () => {

    const [post, setPost] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [ativePage, setAtivePage] = useState(1);

const handleGetPosts = async () => {

    const respost = await fetch('https://run.mocky.io/v3/a3ba3348-4035-4bf0-994a-2a89076a193e');
    const postData = await respost.json()
    setPost(postData);
}


const calculatePages = () => {
    if (post.length % 6 > 0){
        return parseInt(post.length / 6 + 1)
    } else{
        return parseInt(post.length / 6)
    }
}
const handleActivePage = (active) => {
    setAtivePage(active);
    console.log(active);
}

useEffect(() => {
    setPageCount(calculatePages);
    console.log(pageCount)
}, [post])

    return(
        <div className="Blog">
        <Button handleClick={handleGetPosts} btnContent={'Show Posts'}/>
        <div className="row my-2">
        {post && post.slice((ativePage - 1) * 6,6 * ativePage).map((post) => {
            return(
                <BlogItem data={post} />
            )
        })}
        </div>
        <div className="row justify-content-center">
        {new Array(pageCount).fill(0).map((item, index) => {
            return(
                <div className={ativePage === (index + 1) ? 'active-page col-auto p-1' : 'col-auto p-1'}>
                <button onClick={() => handleActivePage(index + 1)}>{index + 1}</button>
                </div>
            )
        })}
        </div>

        </div>
    )
}
export default Blog;