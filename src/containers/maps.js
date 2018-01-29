import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    return (
      <div className="MapContainer">
      <Map
        style={{height: '50vh'}}
        google={this.props.google}
        initialCenter={{
            lat: 49.2819605, lng: -123.1086604
          }}
        zoom={14}
        >

        {
          this.props.organizations.map(organization => (
            <Marker
              key={organization.id}
              onClick={this.onMarkerClick}
              name={organization.name}
              position={{lat: organization.latitude, lng: organization.longitude}}
            />
          ))
        }

          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className= "InfoWindow">
              <p1>{this.state.selectedPlace.name}</p1>
            </div>
        </InfoWindow>

        </Map>


      </div>

      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    organizations: state.organizationList,
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {

    }
  };


const WrappedContainer = (GoogleApiWrapper({
    apiKey: "AIzaSyCHgbwaK-pbR1UPZGuXge3dhwQTSYCVzv0"
  })(MapContainer))

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);
