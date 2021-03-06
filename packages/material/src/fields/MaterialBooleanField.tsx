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
import {
    FieldProps,
    isBooleanControl,
    mapDispatchToFieldProps,
    mapStateToFieldProps,
    RankedTester,
    rankWith,
    WithClassname
} from '@jsonforms/core';
import { connectToJsonForms } from '@jsonforms/react';
import Checkbox from '@material-ui/core/Checkbox';

export const MaterialBooleanField = (props: FieldProps & WithClassname) => {
  const { data, className, id, enabled, uischema, path, handleChange } = props;
  const config = {'autoFocus': uischema.options && uischema.options.focus};

  return (
    <Checkbox
      checked={data || ''}
      onChange={(_ev, checked) => handleChange(path, checked)}
      className={className}
      id={id}
      disabled={!enabled}
      inputProps={config}
    />
  );
};

export const materialBooleanFieldTester: RankedTester = rankWith(2, isBooleanControl);

export default connectToJsonForms(
  mapStateToFieldProps,
  mapDispatchToFieldProps
)(MaterialBooleanField);
