import React from "react";
import PostHeader from "./PostHeader";

export default function Post(props) {
  return (
    <>
      <article>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Likes: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
}