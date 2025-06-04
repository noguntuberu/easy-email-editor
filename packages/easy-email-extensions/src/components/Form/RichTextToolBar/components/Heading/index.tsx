import { IconFont } from '@go-mailer/easy-email-editor';
import { Menu, Popover } from '@arco-design/web-react';
import React, { useCallback } from 'react';
import { ToolItem } from '../ToolItem';

export interface HeadingProps {
  execCommand: (cmd: string, value: any) => void;
  getPopupContainer: () => HTMLElement;
}

export function Heading(props: HeadingProps) {
  const list = [
    {
      value: 'H1',
      label: 'Heading 1',
    },
    {
      value: 'H2',
      label: 'Heading 2',
    },
    {
      value: 'H3',
      label: 'Heading 3',
    },
    {
      value: 'H4',
      label: 'Heading 4',
    },
    {
      value: 'H5',
      label: 'Heading 5',
    },
    {
      value: 'H6',
      label: 'Heading 6',
    },
    {
      value: 'P',
      label: t('Paragraph'),
    },
  ];

  const { execCommand } = props;
  const [visible, setVisible] = React.useState(false);

  const onChange = useCallback(
    (val: string) => {
      execCommand('formatBlock', val);
      setVisible(false);
    },
    [execCommand],
  );

  const onVisibleChange = useCallback((v: boolean) => {
    setVisible(v);
  }, []);

  return (
    <Popover
      trigger='click'
      color='#fff'
      position='left'
      className='easy-email-extensions-Tools-Popover'
      popupVisible={visible}
      onVisibleChange={onVisibleChange}
      content={
        <>
          <div
            style={{
              maxWidth: 200,
              maxHeight: 350,
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            <Menu
              onClickMenuItem={onChange}
              selectedKeys={[]}
              style={{ border: 'none' }}
            >
              {list.map(item => (
                <Menu.Item
                  style={{ lineHeight: '30px', height: 30 }}
                  key={item.value}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </>
      }
      getPopupContainer={props.getPopupContainer}
    >
      <ToolItem
        title={t('Heading')}
        icon={<IconFont iconName='icon-heading' />}
      />
    </Popover>
  );
}
