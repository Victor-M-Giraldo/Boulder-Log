import InputField from './InputField';
import CheckboxInput from './CheckboxInput';
import SelectInput from './SelectInput';
import FileInput from './FileInput';
import Form from './Form';
import Button from './Button';

interface NewClimbFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SelectOptions = [
  'V0',
  'V1',
  'V2',
  'V3',
  'V4',
  'V5',
  'V6',
  'V7',
  'V8',
  'V9',
  'V10',
  'V12',
];

export default function NewClimbForm({ onSubmit }: NewClimbFormProps) {
  return (
    <div className='p-4 w-full max-w-md'>
      <Form
        onSubmit={onSubmit}
        FormHeader={() => (
          <h1 className='text-2xl font-bold'>Log a new climb.</h1>
        )}>
        <InputField
          type='text'
          name='location'
          label='Location'
          placeholder='Where is this climb located?'
          error=''
          Wrapper='div'
          required={true}
        />
        <SelectInput
          options={SelectOptions}
          label='Difficulty'
          Wrapper='div'
          required={true}></SelectInput>
        <FileInput label='Picture of Climb' Wrapper='div' accept='image/*' required={true}/>

        <CheckboxInput
          label='Completed?'
          Wrapper='div'
          value='completed'
          required={true}>
          Completed?
        </CheckboxInput>
        <Button type='submit' width='auto'>
          Add New Climb
        </Button>
      </Form>
    </div>
  );
}
