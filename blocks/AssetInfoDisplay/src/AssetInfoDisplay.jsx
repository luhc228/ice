import React, { Component } from 'react';
import IceCard from '@icedesign/card';
import { Icon } from '@icedesign/base';
import './AssetInfoDisplay.scss';

export default class AssetInfoDisplay extends Component {
  static displayName = 'AssetInfoDisplay';

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="asset-info-display" style={styles.container}>
        <IceCard style={styles.card}>
          <div style={styles.title}>资产展示</div>
          <div style={styles.assets}>
            <div style={styles.assetItem}>
              <div style={styles.price}>$46.24</div>
              <a href="##" style={styles.subItem}>可用额度 <Icon type="help" size="s" /></a>
            </div>
            <div style={styles.assetItem}>
              <div style={styles.price}>$46.24</div>
              <a href="##" style={styles.subItem}>现金余额 <Icon type="help" size="s" /></a>
            </div>
            <div style={{
              ...styles.assetItem,
              borderRight: '0',
            }}>
              <div style={styles.price}>$46.24</div>
              <a href="##" style={styles.subItem}>信用额度 <Icon type="help" size="s" /></a>
            </div>
          </div>
          <div style={styles.cardItem}>
            <h1 style={styles.subTitle}>优惠卡券</h1>
            <div style={styles.assetsGroup}>
              <div style={styles.assetItem}>
                <div style={styles.item}>$100</div>
                <div style={styles.subItem}>储值卡</div>
              </div>
              <div style={styles.assetItem}>
                <div style={styles.item}>$0</div>
                <div style={styles.subItem}>优惠券</div>
              </div>
              <div style={{
                ...styles.assetItem,
                borderRight: '0',
              }}>
                <div style={styles.item}>$3000</div>
                <div style={styles.subItem}>代金券</div>
              </div>
            </div>
          </div>
        </IceCard>
        <div style={styles.gap} />
        <IceCard style={styles.card}>
          <div style={styles.title}>合同发票</div>
          <div style={{
            ...styles.cardItem,
            borderBottom: '1px solid #eee',
          }}>
            <h1 style={styles.subTitle}>合同</h1>
            <div style={styles.assetsGroup}>
              <a href="##" style={styles.assetItem}>
                <div style={styles.item}>0</div>
                <div style={styles.subItem}>正式</div>
              </a>
              <a
                href="##"
                style={{
                  ...styles.assetItem,
                  borderRight: '0',
                }}
              >
                <div style={styles.item}>1</div>
                <div style={styles.subItem}>草稿</div>
              </a>
            </div>
          </div>
          <div style={styles.cardItem}>
            <h1 style={styles.subTitle}>发票</h1>
            <div style={styles.assetsGroup}>
              <a href="##" style={styles.assetItem}>
                <div style={styles.item}>$182.13</div>
                <div style={styles.subItem}>正式</div>
              </a>
              <a
                href="##"
                style={{
                  ...styles.assetItem,
                  borderRight: '0',
                }}
              >
                <div style={styles.item}>$0</div>
                <div style={styles.subItem}>发票</div>
              </a>
            </div>
          </div>
        </IceCard>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  gap: {
    flex: '0 0 20px',
  },
  card: {
    flex: 1,
    padding: 0,
  },
  title: {
    color: '#6ca1ee',
    fontSize: '16px',
    padding: '20px',
    borderBottom: '1px solid #eee',
  },
  subTitle: {
    color: '#666',
    fontWeight: '400',
    borderLeft: '4px solid #6ca1ee',
    fontSize: '16px',
    lineHeight: '1.4em',
    paddingLeft: '5px',
    marginBottom: '12px',
  },
  assets: {
    height: '116px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardItem: {
    // height: '100px',
    padding: '5px 20px',
  },
  assetsGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  assetItem: {
    flex: 1,
    borderRight: '1px solid #ddd',
    textAlign: 'center',
    color: '#666',
  },
  price: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#fbb848',
  },
  item: {
    marginBottom: '10px',
    fontWeight: '800',
    fontSize: '16px',
  },
  subItem: {
    color: '#999',
    marginBottom: '12px',
  },
};
