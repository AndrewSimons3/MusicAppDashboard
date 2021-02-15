import React from 'react';
import Online from './Online'
import Quality from './Quality'
import Volume from './Volume'
// import Volume from '../components/Volume'

class Dashboard extends React.Component {
  state = {
    notifications: [],
    online: true,
    volume: 0,
    quality: 'normal',
  }


updateNotifications() {
  let notifications = [];
  if(!this.state.online) {
    notifications.push('our application is offline. You wont be able to share or stream music to other devices.')
  }
  if(this.state.volume > 80) {
    notifications.push('Listening to music at a high volume could cause long-term hearing loss.')
  }
  if(this.state.quality === 'low') {
    notifications.push('Music quality is degraded. Increase quality if your connection allows it.')
  }
  return notifications
}

handleChangeOnline(event) {
  console.log(event)
  this.setState({online: !this.state.online})
}

handleSliderVolume(event, volume) {
  this.setState({volume: volume})
}

handleQualitySelector(event) {
  console.log(event.target.value)
  this.setState({quality: event.target.value})
}
 


  render() {
    const notifications = this.updateNotifications()

  return (
    
    <div>
      <h2>Welcome User</h2>
      <Online online={this.state.online} handleChangeOnline={this.handleChangeOnline.bind(this)}/>
      <Volume handleSliderVolume={this.handleSliderVolume.bind(this)}/>
      <Quality handleQualitySelector={this.handleQualitySelector.bind(this)}/>
      <div>
        <h2>System Notifications:</h2>
        <div>
        {notifications.map((message, index) => {
          return (<div key={index}>
            {message}
          </div>)
        })}
        </div>
      </div>
    </div>
  )
}
}

export default Dashboard

