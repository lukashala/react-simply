import React from 'react';
import { matches } from '../../src';
import Button from './index';

describe('Button', () => {
  it('matches snapshot', () => {
    matches(<Button>Submit</Button>);
  });
});
