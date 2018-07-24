import './app.less';

var img1 = require('./assets/logo.png');
export default {
  name: 'App',
  data() {
    return {
      img: require('./assets/logo.png')
    };
  },
  render(h) {
    return (<router-view />)
  }
}
