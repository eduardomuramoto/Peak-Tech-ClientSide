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
        style={{height: '31vh'}}
        google={this.props.google}
        initialCenter={{
            lat: this.props.currentOrganizationInfo.latitude, lng: this.props.currentOrganizationInfo.longitude
          }}
        zoom={1}
        >


            <Marker
              key={this.props.currentOrganizationInfo.id}
              onClick={this.onMarkerClick}
              name={this.props.currentOrganizationInfo.name}
              position={{lat: this.props.currentOrganizationInfo.latitude, lng: this.props.currentOrganizationInfo.longitude}}
            />

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
      currentOrganizationInfo: state.currentOrganizationInfo,
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {

    }
  };


const WrappedCurrentMap = (GoogleApiWrapper({
    apiKey: "AIzaSyCHgbwaK-pbR1UPZGuXge3dhwQTSYCVzv0"
  })(MapContainer))

export default connect(mapStateToProps, mapDispatchToProps)(WrappedCurrentMap);
