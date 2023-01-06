import React from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { InputWrapper } from './components/Input/InputWrapper';

function App() {
  return (
    <div className="App">
      <h1>Input Component</h1>
      <div className='flexContainer'>
        <InputWrapper text={"<Input/>"}>
          <Input />
        </InputWrapper>
        <InputWrapper text={"&:hover"}>
          <Input />
        </InputWrapper>
        <InputWrapper text={"&:focus"}>
          <Input />
        </InputWrapper>
      </div>
      <div className='flexContainer'>
        <InputWrapper text={"<Input error />"}>
          <Input hasError />
        </InputWrapper>
        <InputWrapper text={"&:hover"}>
          <Input hasError />
        </InputWrapper>
        <InputWrapper text={"&:focus"}>
          <Input hasError />
        </InputWrapper>
      </div>
      <div className='flexContainer'>
        <InputWrapper text={"<Input disabled />"}>
          <Input disabled />
        </InputWrapper>
      </div>

      <div className='flexContainer'>
        <InputWrapper text={"<Input helperText=”Some interesting text” />"}>
          <Input content="Some interesting test" />
        </InputWrapper>
        <InputWrapper text={"<Input helperText=”Some interesting text” error />"}>
          <Input content="Some interesting test" hasError />
        </InputWrapper>
      </div>
      <div className='flexContainer'>
        <InputWrapper text={"<Input startIcon />"}>
          <Input startIcon />
        </InputWrapper>
        <InputWrapper text={"<Input endIcon />"}>
          <Input endIcon />
        </InputWrapper>
      </div>
      <div className='flexContainer'>
        <InputWrapper text={"<Input value=”text” />"}>
          <Input value="text" />
        </InputWrapper>
      </div>
      <div className='flexContainer'>
        <InputWrapper text={"<Input size=”sm” />"}>
          <Input size="sm" />
        </InputWrapper>
        <InputWrapper text={"<Input size=”sm” />"}>
          <Input size="lg" />
        </InputWrapper>
      </div>

      <InputWrapper text={"<Input fullWidth />"}>
        <Input fullWidth />
      </InputWrapper>


    </div>
  );
}

export default App;
