import React from 'react';
import DefaultSidebarItem from '@theme-original/DocSidebarItem';
import Badge from '../../components/Badge/Badge';

export default function DocSidebarItem(props) {
  const { item } = props;
  const badge = item.customProps?.badge;

  const customProps = badge
    ? {
        ...item,
        label: (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {item.label}
            <Badge text={badge.text} type={badge.type} />
          </span>
        ),
      }
    : item;

  return <DefaultSidebarItem {...props} item={customProps} />;
}
