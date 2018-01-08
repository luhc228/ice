import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IceCard from '@icedesign/card';
import { Button, Balloon, Icon } from '@icedesign/base';
import './UserInfoCard.scss';

export default class UserInfoCard extends Component {
  static displayName = 'UserInfoCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-info-card" style={styles.container}>
        <Balloon
          trigger={<a href="javascript:;">更多信息</a>}
          closable={false}
          visible={true}
        >
          <div style={styles.content}>
            <div style={styles.head}>
              <img
                src="https://img.alicdn.com/tfs/TB1nf.WjyqAXuNjy1XdXXaYcVXa-245-245.gif"
                style={styles.avatar}
              />
              <div style={styles.baseInfo}>
                <h5 style={styles.name}>张三</h5>
                <p style={styles.deptName}>
                  搜索事业部-工程效率-技术质量-质量系统平台
                </p>
              </div>
            </div>
            <ul style={styles.body}>
              <li style={styles.profileItem}>
                <Icon type="map" size="xs" style={styles.itemIcon} /> 杭州
              </li>
              <li style={styles.profileItem}>
                <Icon type="discount" size="xs" style={styles.itemIcon} />
                算法专家
              </li>
              <li style={styles.profileItem}>
                <Icon type="phone" size="xs" style={styles.itemIcon} />
                871066160
              </li>
              <li style={styles.profileItem}>
                <Icon type="mobile-phone" size="xs" style={styles.itemIcon} />
                13867894321
              </li>
              <li style={{ ...styles.profileItem, width: '100%' }}>
                <Icon type="email" size="xs" style={styles.itemIcon} />
                ice-admin@alibaba-inc.com
              </li>
              <li style={{ ...styles.profileItem, width: '100%' }}>
                <Icon type="account" size="xs" style={styles.itemIcon} />
                主管：李四
              </li>
            </ul>
          </div>
        </Balloon>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '100px',
    textAlign: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  head: {
    display: 'flex',
    paddingBottom: '10px',
    borderBottom: '1px dotted #eee'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50px'
  },
  name: {
    padding: '0 10px',
    margin: '0'
  },
  deptName: {
    padding: '0 10px',
    margin: '0',
    fontSize: '12px'
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10px'
  },
  profileItem: {
    width: '50%',
    lineHeight: '26px',
    fontSize: '13px'
  },
  itemIcon: {
    color: '#8a9099',
    marginRight: '5px'
  }
};
