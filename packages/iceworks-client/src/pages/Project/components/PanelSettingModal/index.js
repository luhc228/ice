import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@alifd/next';
import Modal from '@components/Modal';
import styles from './index.module.scss';

const PanelSettingModal = ({
  on, onCancel, panels, onChange,
}) => {
  return (
    <Modal
      title="面板设置"
      visible={on}
      onCancel={onCancel}
      footer={false}
    >
      <div className={styles.wrapper}>
        {
          panels.map(({ title, description, cover, isAvailable, name }) => {
            return (
              <div key={name}>
                <div>
                  <img src={cover} alt={name} />
                </div>
                <div>
                  <div>{title}</div>
                  <div>{description}</div>
                </div>
                <Switch
                  checked={isAvailable}
                  onChange={async (checked) => {
                    await onChange(name, checked);
                  }}
                />
              </div>
            );
          })
        }
      </div>
    </Modal>
  );
};

PanelSettingModal.propTypes = {
  on: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  panels: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PanelSettingModal;
