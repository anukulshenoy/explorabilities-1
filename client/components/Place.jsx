import React from 'react';
import Review from './Review.jsx';
import PlaceItem from './PlaceItem.jsx';
import StarRatingComponent from 'react-star-rating-component';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
  }

/*
  renderReviews () {
    if (!this.props.reviews) {
      if (this.props.place.reviews) {
        return this.props.place.reviews.map((review, index) =>
          <Review
            key={index}
            review={review.text}
            reviewer={review.author_name}
            rating={review.rating}
            date={review.relative_time_description}/>
        );
      } else {
        return;
      }
    } else {
      return (
        <Review />
      );
    }
  }*/

  render() {
    if (this.props.place.length > 0) {
      return (
        <div>
        {this.props.place.map((placeitem) => (
          <PlaceItem 
            key={placeitem.id}
            thePlaceId={placeitem.place_id}
            type={placeitem.types[0]}
            name={placeitem.name}
            rating={placeitem.rating} 
            vicinity={placeitem.vicinity}
            saveItinerary={this.props.saveItinerary}
            getPlaceId={this.props.getPlaceId}
          />
        ))}
        </div>
      );
    }
    return (
      <div id='place'>
        <div id="placeContent">
          <h3 className="placeHeader">Itinerary Item</h3>
        </div>
      </div>
    );
  }




}
