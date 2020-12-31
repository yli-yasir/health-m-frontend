import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MaskedInput from 'react-text-mask';
import HMTextField from '../inputs/HMTextField';
import React from 'react'



export default function PhoneField(props){
    return (
      <HMTextField {...props}
      InputProps={{
        inputComponent: TextMaskCustom
      }}
      InputLabelProps={{
        shrink: true,
      }}/>
      
    );

}

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    React.useImperativeHandle(inputRef, () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }));

    return (
      <MaskedInput
        {...other}
        mask={['(', '0', /\d/, /\d/,/\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={' '}
        showMask
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
      />
    );
  }

