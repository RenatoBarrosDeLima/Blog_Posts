import { Component } from 'react';

import './styles.css';

import Posts from '../../components/Posts'
import Button from '../../components/Button';
import { loadPostsApi } from '../../utils/load-posts';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  };

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPostsApi();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({
      posts,
      page: nextPage
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        )
      })
      :
      posts;

    return (
      <section className="container">

        {!!searchValue && (
          <>
            <h1> Search value: {searchValue} </h1>
            <br />
            <br />
          </>
        )}

        <input
          type="search"
          onChange={this.handleChange}
          value={searchValue}
        />
        <br /> <br />

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p> Não existe posts (</p>
        )}

        <div className="button-container">
          {!searchValue && (
            < Button
              text={"Load more posts"}
              loadMorePosts={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
