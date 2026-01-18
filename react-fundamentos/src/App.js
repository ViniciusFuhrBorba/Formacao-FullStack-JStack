import React from "react";
import Post from "./Post";

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h1>Posts da Semana</h1>

      <hr />

      <Post
        title="Título da Notícia 01"
        subtitle="Javascript"
      />
      <Post
        title="Título da Notícia 02"
        subtitle="ReactJS"
      />
      <Post
        title="Título da Notícia 03"
        subtitle="NodeJS"
      />
      <Post
        title="Título da Notícia 04"
        subtitle="NextJS"
      />
    </>
  )
}

export default App;