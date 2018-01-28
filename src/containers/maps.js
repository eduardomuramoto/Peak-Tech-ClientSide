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
        style={{height: '30vw'}}
        google={this.props.google}
        initialCenter={{
            lat: 49.2819605, lng: -123.1086604
          }}
        zoom={14}
        >

        {/* <Marker /> */}
        <Marker
          onClick={this.onMarkerClick}
          name={'Code Core'}
          position={{lat: 49.2819605, lng: -123.1086604}} />
        <Marker
          onClick={this.onMarkerClick}
          name={'NOT Code Core'}
          position={{lat: 49.2829300, lng: -123.1046604}} />
        <Marker
          onClick={this.onMarkerClick}
          name={'NOT Code Core 2'}
          position={{lat: 49.2529300, lng: -123.1056604}} />

          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className= "InfoWindow">
              <p1>{this.state.selectedPlace.name}</p1>
            </div>
        </InfoWindow>

        </Map>

            <div className="container">
          <form className="searchbar">
            <div className="form-group row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <input type="text" className="form-control" placeholder="Search..."/>
              </div>
            </div>
          </form>

      </div>
      </div>




      );
    }
  }

  const mapStateToProps = (state) => {
    return {
    }
  };

  const mapDispatchToProps = (state) => {
    return {

    }
  };


const WrappedContainer = (GoogleApiWrapper({
    apiKey: "AIzaSyCHgbwaK-pbR1UPZGuXge3dhwQTSYCVzv0"
  })(MapContainer))

export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);
