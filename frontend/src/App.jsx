import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderBlogs from './components/renderBlog';
import PostPage from './components/postPage';
import EditPage from './components/editpage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderBlogs />} />

          <Route path="/post" element={<PostPage name="New Post"/>} />

          <Route path="/edit/:bId" element={<EditPage name="Edit Post" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
