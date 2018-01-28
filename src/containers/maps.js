
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    return (
    <article>
      <div className="MapContainer container">
        <div className="row">
          <div className="col-md-12">
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
              name={'Code Core'}
              position={{lat: 49.2819605, lng: -123.1086604}} />
            <Marker
              name={'Code Core'}
              position={{lat: 49.26382, lng: -123.104321}} />
            </Map>
          </div>
        </div>
      </div>

      <div className="container">
          <form className="searchbar">
            <div className="form-group row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <input type="text" className="form-control" placeholder="Search..."/>
              </div>
            </div>
          </form>
      </div>



    </article>
      );
    }
  }


const WrappedContainer = (GoogleApiWrapper({
    apiKey: "AIzaSyCHgbwaK-pbR1UPZGuXge3dhwQTSYCVzv0"
  })(MapContainer))

  export default WrappedContainer
