import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

const FileList: FC<{
  list?: string[];
  update: (list: string[]) => void;
  viewType: 'preview' | 'list';
}> = ({ list = [], update, viewType }) => {
  return (
    <div
      className={classNames({
        'power-mode-setting-preview': viewType === 'preview',
        'power-mode-setting-list': viewType === 'list',
      })}
    >
      {list.map(item => (
        <div key={item} className="power-mode-setting-item">
          {
            viewType === 'preview'
              ? <img src={item} />
              : <div>{item}</div>
          }
          <div className="power-mode-setting-remove" onClick={() => { update(list.filter(i => i !== item)); }}>
            &times;
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;
