import MaskedInput from 'react-text-mask';
import TextField from './TextField';
import React from 'react'



export default function PhoneField(props){
    return (
      <TextField {...props}
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

