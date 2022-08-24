import { Component } from 'react';

import './styles.css';

import Posts from '../../components/Posts'
import { loadPostsApi } from '../../utils/load-posts';

class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  };

  loadPosts = async () => {
    const postsAndPhotos = await loadPostsApi();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default Home;
