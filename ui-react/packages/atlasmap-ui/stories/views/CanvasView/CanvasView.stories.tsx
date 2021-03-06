import { number } from '@storybook/addon-knobs';
import React from 'react';
import {
  CanvasView, CanvasViewCanvasProvider,
} from '../../../src/views/CanvasView';

export default {
  title: 'CanvasView/CanvasView',
};

export const interactive = () => (
    <CanvasViewCanvasProvider>
      <CanvasView>
        <circle
          cx={number('cx', 50)}
          cy={number('cy', 50)}
          r={number('r', 20)}
        />
      </CanvasView>
    </CanvasViewCanvasProvider>
);
