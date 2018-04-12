/*
  The MIT License
  
  Copyright (c) 2018 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import * as React from 'react';
import * as _ from 'lodash';
import {
  GroupLayout,
  mapStateToLayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from '@jsonforms/core';
import { addVanillaLayoutProps } from '../util';
import { connectToJsonForms } from '@jsonforms/react';
import { VanillaLayoutProps } from '../index';
import { renderChildren } from './util';

/**
 * Default tester for a group layout.
 *
 * @type {RankedTester}
 */
export const groupTester: RankedTester = rankWith(1, uiTypeIs('Group'));

export const GroupLayoutRenderer = (
  {
    schema,
    uischema,
    path,
    visible,
    getStyle,
    getStyleAsClassName
  }: VanillaLayoutProps) => {
  const group = uischema as GroupLayout;
  const elementsSize = group.elements ? group.elements.length : 0;
  const classNames = getStyleAsClassName('group.layout');
  const childClassNames = getStyle('group.layout.item', elementsSize)
    .concat(['group-layout-item'])
    .join(' ');

  return (
    <fieldset
      className={classNames}
      hidden={visible === undefined || visible === null ? false : !visible}
    >
      {
        !_.isEmpty(group.label) ?
          <legend className={getStyleAsClassName('group.label')}>
            {group.label}
          </legend> : ''
      }
      {renderChildren(group, schema, childClassNames, path)}
    </fieldset>
  );
};

const ConnectedGroupLayout =  connectToJsonForms(
  addVanillaLayoutProps(mapStateToLayoutProps),
  null
)(GroupLayoutRenderer);

export default ConnectedGroupLayout;