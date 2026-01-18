import React from "react";

export default function Post(props) {
  return (
    <>
      <article>
        <strong>
          {!props.post.read && props.post.title}
          {props.post.read && <s>{props.post.title}</s>}
        </strong>
        <button onClick={() => props.onRemove(props.post.id)}>
          Remover
        </button> 
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Likes: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
}