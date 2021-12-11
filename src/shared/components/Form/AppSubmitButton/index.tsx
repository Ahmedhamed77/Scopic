import React from 'react';
import {useFormikContext} from 'formik';

import {CommonButton, CommonButtonProps} from '../../../common';

interface Props extends Omit<CommonButtonProps, 'onPress'> {}

export const AppSubmitButton: React.FC<Props> = ({...props}) => {
  const {handleSubmit} = useFormikContext();
  return <CommonButton onPress={handleSubmit} {...props} />;
};
