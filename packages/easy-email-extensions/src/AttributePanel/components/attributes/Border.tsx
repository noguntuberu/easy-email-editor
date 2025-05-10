import React, { useMemo } from 'react';
import {
  InputWithUnitField,
  SelectField,
  SliderField,
  TextField,
} from '../../../components/Form';
import { useFocusIdx } from 'easy-email-editor';
import { Grid } from '@arco-design/web-react';
import { percentAdapter } from '../adapter/percent.adapter';
import { pixelAdapter } from '../adapter';

const borderStyleOptions = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: 'solid',
    label: 'Solid',
  },
  {
    value: 'dotted',
    label: 'Dotted',
  },
  {
    value: 'dashed',
    label: 'Dashed',
  },
  {
    value: 'double',
    label: 'Double',
  },
  {
    value: 'inset',
    label: 'Inset',
  },
  {
    value: 'groove',
    label: 'Groove',
  },
];

export function Border() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <Grid.Row>
        <Grid.Col span={11}>
          <SelectField
            label={t('Border')}
            name={`${focusIdx}.attributes.border`}
            options={borderStyleOptions}
          />
        </Grid.Col>
        <Grid.Col
          offset={1}
          span={11}
        >
          <SliderField
            label={t('Border radius')}
            name={`${focusIdx}.attributes.border-radius`}
            value_type='number'
            config={pixelAdapter}
          />
        </Grid.Col>
      </Grid.Row>
    );
  }, [focusIdx]);
}
