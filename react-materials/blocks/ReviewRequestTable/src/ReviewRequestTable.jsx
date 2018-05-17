import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table } from '@icedesign/base';

const mockDataSource = [
  {
    invite: {
      name: '李经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '王总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月12日',
    status: '已发送',
  },
  {
    invite: {
      name: '王经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '张总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月11日',
    status: '等待接受',
  },
  {
    invite: {
      name: '张经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '于总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月10日',
    status: '已完成',
  },
  {
    invite: {
      name: '于经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '马总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月9日',
    status: '已发送',
  },
  {
    invite: {
      name: '马经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '刘总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月8日',
    status: '已发送',
  },
  {
    invite: {
      name: '刘经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '陈总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月6日',
    status: '已发送',
  },
  {
    invite: {
      name: '陈经理',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    email: 'hi@example.com',
    sent: {
      name: '许总',
      avatar:
        'https://img.alicdn.com/tfs/TB1xiYhm1GSBuNjSspbXXciipXa-620-620.png_80x80.jpg',
    },
    date: '2018年3月3日',
    status: '已完成',
  },
];

export default class ReviewRequestTable extends Component {
  static displayName = 'ReviewRequestTable';

  renderInviteInfo = (value, index, record) => {
    return (
      <div style={styles.inviteInfo}>
        <span style={styles.avatarWrapper}>
          <img
            style={styles.avatar}
            width="40"
            height="40"
            src={record.invite.avatar}
            alt=""
          />
        </span>
        <span style={styles.inviteName}>{record.invite.name}</span>
      </div>
    );
  };

  renderSentInfo = (value, index, record) => {
    return (
      <div style={styles.sentInfo}>
        <span style={styles.avatarWrapper}>
          <img
            style={styles.avatar}
            width="40"
            height="40"
            src={record.sent.avatar}
            alt=""
          />
        </span>
        <span style={styles.sentName}>{record.sent.name}</span>
      </div>
    );
  };

  render() {
    return (
      <IceContainer title="最近邀评数据">
        <Table dataSource={mockDataSource} hasBorder={false}>
          <Table.Column title="被邀请人" cell={this.renderInviteInfo} />
          <Table.Column title="被邀请人邮件" dataIndex="email" />
          <Table.Column title="邀请人" cell={this.renderSentInfo} />
          <Table.Column title="邀请时间" dataIndex="date" />
          <Table.Column title="状态" dataIndex="status" />
        </Table>
      </IceContainer>
    );
  }
}

const styles = {
  inviteInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  sentInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarWrapper: {
    borderRadius: '40px',
    overflow: 'hidden',
    display: 'inline-block',
    marginRight: 10,
  },
  avatar: {
    display: 'block',
  },
};
