import React from 'react';
import Header from '../../Shared/Header/Header';
import './Blog.css'
import blog1 from '../../images/Blog/blog-item-image-1.jpg'

const Blog = () => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <div className='grid md:grid-cols-2 my-4 md:gap-4 sm:gap-1 justufy-center container'>
                    {/* Blog  */}
                    <div>
                        <img src={blog1} alt="" />
                        <div>
                            <h3 className='mt-3 text-xl uppercase font-bold'> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6 className='mt-1 mb-4 text-sm text-gray-400'>Posted By <span className='font-bold text-black'>Admin</span> | Jul 11TH, 2018 | <span className='font- text-black'>Natural</span></h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ad numquam aut perferendis fugit at vero et? Hic, repudiandae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, ad enim perferendis aliquam eligendi.</p>
                        </div>
                    </div>
                    <div>
                        <img src={blog1} alt="" />
                        <div>
                            <h3> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6>Posted By <span className='font-bold'>Admin</span> Jul 11TH, 2018 Fashion</h6>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <img src={blog1} alt="" />
                        <div>
                            <h3> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6>Posted By <span className='font-bold'>Admin</span> Jul 11TH, 2018 Fashion</h6>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <img src={blog1} alt="" />
                        <div>
                            <h3> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6>Posted By <span className='font-bold'>Admin</span> Jul 11TH, 2018 Fashion</h6>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <img src={blog1} alt="" />
                        <div>
                            <h3> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6>Posted By <span className='font-bold'>Admin</span> Jul 11TH, 2018 Fashion</h6>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div>
                    catagory
                </div>
            </div>
        </div>
    );
};

export default Blog;