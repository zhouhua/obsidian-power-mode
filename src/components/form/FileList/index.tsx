import classNames from 'classnames';
import type { FC } from 'react';
import React, { useState } from 'react';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import L from 'src/L';

const FileList: FC<{
  list?: string[];
  update: (list: string[]) => void;
  viewType: 'preview' | 'list';
}> = ({ list = [], update, viewType }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent): void => {
    const { active } = event;
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    setActiveId(active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    setActiveId(null);
    const { active, over } = event;
    if (over?.id !== undefined) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const oldIndex = list.indexOf(active.id as string);
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const newIndex = list.indexOf(over.id as string);

      if (oldIndex !== newIndex) {
        const reorderedList = Array.from(list);
        const [removed] = reorderedList.splice(oldIndex, 1);
        reorderedList.splice(newIndex, 0, removed);
        update(reorderedList);
      }
    }
  };

  return (
    <div>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={list} strategy={verticalListSortingStrategy}>
          <div className={classNames({
            'power-mode-setting-preview': viewType === 'preview',
            'power-mode-setting-list': viewType === 'list',
          })}
          >
            {list.map(item => (
              <SortableItem key={item} id={item}>
                <div className="power-mode-setting-item">
                  {
                    viewType === 'preview'
                      ? <img src={item} alt={`Preview of ${item}`} />
                      : <div>{item}</div>
                  }
                  <div
                    className="power-mode-setting-remove"
                    onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                      update(list.filter(i => i !== item));
                    }}
                  >
                    &times;
                  </div>
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId && (
            <div className={classNames('power-mode-setting-item', 'dragging')}>
              {viewType === 'preview' && <img src={activeId} alt={`Preview of ${activeId}`} />}
              {viewType === 'list' && <div>{activeId}</div>}
            </div>
          )}
        </DragOverlay>
      </DndContext>
      {list.length > 1 && (
        <div className="power-mode-setting-drag-info">{L.settings.dragInfo()}</div>
      )}
    </div>
  );
};

export default FileList;
