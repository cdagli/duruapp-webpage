import React, {Component} from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import AppContainer from './AppContainer';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    let apps = [
      {
        description: 'This is the app you need to get prepared for the New Year & Christmas! You can d' +
            'esign labels, stickers & cards with Christmas & New Year themes. You can use the' +
            'm in your social media accounts, send them to your friends or how ever you want.',
        iconPath: 'icon_labelrXmas.jpg',
        name: 'Labelr - Christmas Labels',
        mockPath: 'mock_labelrXmas.png',
        storeUrl: 'https://itunes.apple.com/app/labelr-design-and-print/id1315579683'
      }, {
        description: 'Labelr is a quick way to prepare print ready labels, stickers, cards, and many o' +
            'ther kinds of printables. Design your own and print them out by using generated ' +
            'PDF through the app.',
        iconPath: 'icon_labelr.jpg',
        name: 'Labelr - Design and Print',
        mockPath: 'mock_labelr.png',
        storeUrl: 'https://itunes.apple.com/app/labelr-design-and-print/id1045257719'
      }, {
        description: 'SellerLab is designed for online sellers who wants promote their products in soc' +
            'ial media easily and effectively.',
        iconPath: 'icon_sellerlab.jpg',
        name: 'SellerLab - Editor for Online Sellers',
        mockPath: 'mock_sellerlab.png',
        storeUrl: 'https://itunes.apple.com/app/labelr-design-and-print/id1091255749'
      }
    ];;

    return (
      <div>
        <div className="wrapper">
          <header className='text-center'>
            <h1>Welcome to DuruApp</h1>
            <h3>We are building apps!</h3>
          </header>
          <Grid>
            {apps
              .map(function (data, index) {
                return <div key={index}><hr/>
                  <AppContainer data={data}></AppContainer>
                </div>
              })}
          </Grid>
        </div>
        <div className="push"></div>
        <div className="text-center">
          <h2>
            <span>Contact</span>
          </h2>
          <a href="mailto:duruapp@gmail.com">
            <h4>
              <FontAwesome name="envelope-o"></FontAwesome>
              duruapp@gmail.com</h4>
          </a>
        </div>
        <div className="footer">
          <hr/>
          <p>Copyright DuruApp @ 2017</p>
        </div>
      </div>
    );
  }
}

export default App;