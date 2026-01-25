import React from "react";

import { Container, Subtitile, Rate } from './styles'

import PostHeader from "./PostHeader";

export default function Post(props) {
  return (
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
      <Subtitile>{props.post.subtitle}</Subtitile>
      <Rate>Likes: {props.post.likes / 2}</Rate>
    </Container>
  );
}