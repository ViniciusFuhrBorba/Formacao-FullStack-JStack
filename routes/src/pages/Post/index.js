import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  handleNavigate = () => {
    this.props.history.push('/posts');
  }

  render() {
    return (
      <>
        <button onClick={this.handleNavigate}>
          Voltar para lista de POSTS
        </button>
        <h1>Post Page {this.queryParams.get("query")}</h1>
      </>
    )
  }
}


// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log(queryParams.get('query'));

//   return (
//     <h1>Post {params.id}</h1>
//   )
// }