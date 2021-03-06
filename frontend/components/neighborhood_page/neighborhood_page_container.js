import { connect } from 'react-redux';
import NeighborhoodPage from './neighborhood_page';
import { fetchNeighborhood } from '../../actions/neighborhoods_actions';
import { postReview, clearReviewErrors, deleteReview, updateReview } from '../../actions/reviews_actions';
import { uploadImage, fetchImages } from '../../actions/images_actions';

const mapStateToProps = state => ({
  neighborhood: state.neighborhood,
  images: state.images,
  reviews: state.reviews.allReviews,
  currentUser: state.session.currentUser,
  errors: state.reviews.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNeighborhood: (id) => dispatch(fetchNeighborhood(id)),
  postReview: (review, neighborhoodId) => dispatch(postReview(review, neighborhoodId)),
  uploadImage: (image, neighborhoodId) => dispatch(uploadImage(image, neighborhoodId)),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
  deleteReview: (reviewId, neighborhoodId) => dispatch(deleteReview(reviewId, neighborhoodId)),
  fetchImages: (neighborhoodId) => dispatch(fetchImages(neighborhoodId)),
  updateReview: (reviewId, neighborhoodId, review) => dispatch(updateReview(reviewId, neighborhoodId, review))
});

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodPage);
