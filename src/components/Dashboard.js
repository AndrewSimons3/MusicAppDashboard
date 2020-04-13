import React from 'react';
import Online from '../components/Online'
import Quality from '../components/Quality'
import Volume from '../components/Volume'
// import Volume from '../components/Volume'

class Dashboard extends React.Component {
  state = {
    notifications: [],
    online: true,
    volume: 0,
    quality: 'normal',
  }


handleChangeOnline(event) {
  console.log(event)
  this.setState({online: !this.state.online})
}

handleSliderVolume(event, target) {
  target >= 80 && 
  this.setState({
    notifications: [...this.state.notifications, 
      "Listening to music at a high volume could cause long-term hearing loss."]
  });
  this.setState({ volume: target});
}


handleQualitySelector(event) {

}
 


  render() {
    let offline = !this.state.online
  return (
    
    <div>
      <h2>Welcome User</h2>
      <Online online={this.state.online} handleChangeOnline={this.handleChangeOnline.bind(this)}/>
      <Volume handleSliderVolume={this.handleSliderVolume.bind(this)}/>
      <Quality handleQualitySelector={this.handleQualitySelector.bind(this)}/>
      <div>
        <h2>System Notifications:</h2>
        {offline && 
        <div>Your application is offline. You wont be able to share or stream music to other devices.</div>}
      </div>
    </div>
  )
}
}

export default Dashboard

