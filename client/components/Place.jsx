import React from 'react';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Object.keys(this.props.place).length > 0) {
      return (
        <div id='place'>
          <div id="placeContent">
            <button onClick={this.props.addItem}>Add to Itinerary</button>
            <h2>{this.props.place.name}</h2>
            <table>
              <tbody>
                <tr id="place-address-row" className="place_row">
                  <td className="place_attribute_name">Address:</td>
                  <td id="place-address">{this.props.place.formatted_address}</td>
                </tr>
                <tr id="place-phone-row" className="place_row">
                  <td className="place_attribute_name">Telephone:</td>
                  <td id="place-phone">{this.props.place.formatted_phone_number}</td>
                </tr>
                <tr id="place-rating-row" className="place_row">
                  <td className="place_attribute_name">Rating:</td>
                  <td id="place-rating">{this.props.place.rating}</td>
                </tr>
                <tr id="place-website-row" className="place_row">
                  <td className="place_attribute_name">Website:</td>
                  <td id="place-website">{this.props.place.website}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}
