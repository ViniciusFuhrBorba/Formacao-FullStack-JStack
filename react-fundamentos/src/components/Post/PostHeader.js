import React from "react";
import Button from "../Button";

export default function PostHeader(props) {
  return (
    <>
      <strong>
        {!props.post.read && props.post.title}
        {props.post.read && <s>{props.post.title}</s>}
      </strong>
      <Button
        onClick={() => props.onRemove(props.post.id)}
      >
        Remover
      </Button>
    </>
  )
}