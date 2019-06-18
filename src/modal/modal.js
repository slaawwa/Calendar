import React from 'react'

import './modal.css'

const modal = props => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div className="modal-header">
          <h3>Добавьте событие </h3>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>{props.children}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>
            ОТМЕНА
          </button>
          <button className="btn-continue" onClick={props.save}>СОХРАНИТЬ</button>
        </div>
      </div>
    </div>
  )
}

export default modal
