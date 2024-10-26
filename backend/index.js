import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

var blogs=[
    {
      id: 1,
      title: "The Rise of Decentralized Finance",
      content:
        "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
      author: "Alex Thompson",
      date: "2023-08-01T10:00:00Z",
    },
    {
      id: 2,
      title: "The Impact of Artificial Intelligence on Modern Businesses",
      content:
        "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
      author: "Mia Williams",
      date: "2023-08-05T14:30:00Z",
    },
    {
      id: 3,
      title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
      content:
        "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
      author: "Samuel Green",
      date: "2023-08-10T09:15:00Z",
    }
  ];

var countId=3;

app.get("/",(req,res)=>{
    res.json(blogs);
});

app.post("/post",(req,res)=>{
   const newPost={
    id:++countId,
    title:req.body.title,
    content:req.body.content,
    author:req.body.author
   }
   blogs.push(newPost);
   res.json(newPost);
});

app.patch("/edit/:id",(req,res)=>{
  const id=parseInt(req.params.id);
  const index=blogs.findIndex(i=>i.id===id);
  const editedPost={
    id:id,
    title:req.body.title || blogs[index].title,
    content:req.body.content || blogs[index].content,
    author:req.body.author ||  blogs[index].content
  }
  blogs[index]=editedPost;
  res.json(editedPost);
})

app.delete("/delete/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=blogs.findIndex(i=>i.id===id);
    blogs.splice(index,1);
    res.json(blogs);
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});


