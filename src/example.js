import { initDatabase } from "./db/init.js";
import { Post } from "./db/models/post.js";

await initDatabase()
const post=new Post({
    title:'Hello Mongoose',
    author:'Daniel Bug',
    contents:'This is a post stored in MongoDB Database',
    tags:['mongose','nodejs'],
})
await post.save()
const createdPost=await post.save()
await Post.findByIdAndUpdate(createdPost._id,{
    $set:{title:"Chapter3 Backend Service"}
})
const posts=await Post.find()
console.log(posts);