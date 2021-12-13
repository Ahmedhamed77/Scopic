import React from 'react';
import {useFormikContext} from 'formik';

import {CommonButton, CommonButtonProps} from '@Shared/common';

interface Props extends Omit<CommonButtonProps, 'onPress'> {}

export const AppSubmitButton: React.FC<Props> = ({...props}) => {
  const {handleSubmit, isValid, dirty} = useFormikContext();
  return (
    <CommonButton
      onPress={handleSubmit}
      isDisabled={!isValid || !dirty}
      {...props}
    />
  );
};
