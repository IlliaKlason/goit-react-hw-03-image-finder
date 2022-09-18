import { Component } from 'react';

import PixabayAPIRequest from './PixabayAPI';
import Button from './ButtonLM';
import ImageGallery from './ImageGallery/';
import Searchbar from './Searchbar';
import Loader from './Loader';

import { AppStyled } from './App.styled';

export class App extends Component {
  state = { query: '', page: 1, totalHits: 0, hits: [], loading: false };

  componentDidUpdate(past, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.formFetch(query);
    }
    if (this.state.query === '') {
      console.log('first');
      alert('dadasdasda');
      return;
    }

    if (prevState.page !== page && page !== 1) {
      this.loadMore(prevState, page);
    }
  }

  render() {
    const { hits, page, totalHits, loading } = this.state;
    const maxPage = Math.ceil(+totalHits / 12);
    return (
      <AppStyled>
        <Searchbar updateQuery={this.updateQuery} />
        <ImageGallery images={hits} imageClick={this.showBigImage} />
        {page < maxPage && (
          <Button title="Load more" onClick={this.updatePage} />
        )}
        {loading && <Loader />}
      </AppStyled>
    );
  }

  updateQuery = query => {
    this.setState({ query });
  };

  updatePage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  formFetch = async query => {
    if (query === '') {
      this.setState({ ...this.state });
    } else {
      this.setState({ loading: true });
      const { totalHits, hits } = await PixabayAPIRequest(query, 1);
      this.setState({ totalHits, hits, page: 1, loading: false });
    }
  };

  loadMore = async (prevState, page) => {
    this.setState({ loading: true });
    const query = this.state.query;
    const { hits } = await PixabayAPIRequest(query, page);
    this.setState({ hits: [...prevState.hits, ...hits], page });
    this.setState({ loading: false });
  };
}
