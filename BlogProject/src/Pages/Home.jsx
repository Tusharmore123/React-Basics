import React ,{useState,useEffect} from 'react'
import {service}from '../../Appwrite/service'
import Container from '../container/container'
import PostCard from '../components/PostCard'

function Home() {
  const [post,setPost]=useState([])
  
  useEffect(()=>{
    service.getPosts().then((posts)=>{if(posts){setPost(posts.documents)}});
  },[])
  if (post.length==0){
        return(<>
      <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                                
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        </>
        )
  }
  return (

    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {post.map((posts) => (
                <div key={posts.$id} className='p-2 w-1/4'>
                    <PostCard {...posts} />
                </div>
            ))}
        </div>
    </Container>
</div>
  )
}

export default Home