import React, { Component, Fragment } from 'react';
import Icon from './Icon';

class Brands extends Component {
  render() {
    const icons = [
      "android",
      "android-o",
      "apple",
      "apple-o",
      "windows",
      "windows-o",
      "ie",
      "chrome",
      "github",
      "aliwangwang",
      "aliwangwang-o",
      "dingding",
      "dingding-o",
      "weibo-square",
      "weibo-circle",
      "taobao-circle",
      "html5",
      "weibo",
      "twitter",
      "wechat",
      "youtube",
      "alipay-circle",
      "taobao",
      "skype",
      "qq",
      "medium-workmark",
      "gitlab",
      "medium",
      "linkedin",
      "google-plus",
      "dropbox",
      "facebook",
      "codepen",
      "amazon",
      "google",
      "codepen-circle",
      "alipay",
      "ant-design"
    ];
    return (
      <Fragment>
        <h3 className="title">Brand and Logos</h3>
        <section className="icons">
          {
            icons.map((icon, i) => <Icon key={i} icon={icon} />)
          }
        </section>
      </Fragment>
    );
  }
}
 
export default Brands;