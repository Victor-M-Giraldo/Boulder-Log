import Form from './Form';
import TextArea from './TextArea';
import Button from './Button';

interface NewNoteFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function NewNoteForm({ onSubmit }: NewNoteFormProps) {
  return (
    <Form
      onSubmit={onSubmit}
      FormHeader={() => (
        <h1 className='text-2xl font-bold mb-6'>Create Your Account</h1>
      )}>
      <TextArea label='Note' required={true} placeholder='Enter your note' name='note'/>
      <Button type='submit' Wrapper='div' width='full'>
        Add Note
      </Button>
    </Form>
  );
}
