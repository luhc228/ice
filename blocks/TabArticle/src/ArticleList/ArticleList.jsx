import React, { Component } from 'react';
import IceCard from '@icedesign/card';
import { Pagination, Button } from '@icedesign/base';
import './ArticleList.scss';

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTagClick = () => {
    // handler
  };

  renderTag = (text, onClick, idx) => {
    return (
      <Button size="small" onClick={onClick} key={idx} style={styles.button}>
        {text}
      </Button>
    );
  };

  renderItem = (data, idx) => {
    const wrapperStyle = { ...styles.item };
    const informationStyle = { ...styles.information };
    return (
      <div key={idx} style={wrapperStyle}>
        <div style={styles.title}>
          {data.title}
          <span style={styles.datetime}>{data.datetime}</span>
        </div>
        <div style={styles.desc}>{data.description}</div>
        <div style={informationStyle}>
          <div style={styles.tagList}>
            {data.tags.map((item) => {
              return this.renderTag(
                item,
                this.handleTagClick.bind(this, idx, item),
                idx
              );
            })}
          </div>
          <div style={styles.operator}>
            <span style={styles.operatorItem}>点赞: {data.star}</span>
            <span style={styles.operatorItem}>喜爱: {data.like}</span>
            <span style={styles.operatorItem}>评论: {data.comment}</span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { dataSource = [] } = this.props;
    return (
      <IceCard className="article-list">
        {dataSource.map(this.renderItem)}
        <div style={styles.paginationWrap}>
          <Pagination />
        </div>
      </IceCard>
    );
  }
}

const styles = {
  item: {
    borderBottom: '1px solid #F4F4F4',
    marginBottom: '15px',
  },
  title: {
    color: '#333',
    fontSize: '16px',
    marginBottom: '15px',
    position: 'relative',
  },
  datetime: {
    position: 'absolute',
    right: '10px',
    fontSize: '12px',
    color: '#9B9B9B',
  },
  desc: {
    color: '#999',
    fontSize: '14px',
    paddingBottom: '15px',
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  button: {
    marginRight: '10px',
  },
  operator: {
    paddingTop: '8px',
    fontSize: '12px',
    color: '#9B9B9B',
  },
  operatorItem: {
    marginRight: '5px',
  },
  paginationWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '15px',
  },
};
