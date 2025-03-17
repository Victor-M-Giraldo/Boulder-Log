import InputField from './InputField';
import Form from './Form';
import Button from './Button';
import GeneralError from './GeneralError';
import AuthFooter from './AuthFooter';
import { serializeFormData } from '../utils/formUtils';
import { useLogin } from '../hooks/useLogin';

export default function LogInForm() {
  const { handleLogin, errors, loading } = useLogin();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = serializeFormData(formData);
    await handleLogin(data);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        // Wrap it in an anonymous function since it expects an ElementType.
        // ElementType is something that can be rendered later by calling the function
        // As opposed to a prerendered element which is the result of calling a component type/writing JSX
        // We would need to use ReactNode for above approach.
        FormHeader={() => (
          <h1 className='text-3xl font-bold text-center mb-6'>Log In</h1>
        )}>
        <InputField
          type='email'
          name='email'
          placeholder='Enter your email'
          label='Email'
          error={errors?.email}
          required={true}
          Wrapper='div'
        />

        <InputField
          type='password'
          name='password'
          label='Password'
          placeholder='Enter your password'
          error={errors?.password}
          required={true}
          Wrapper='div'
        />

        <GeneralError error={errors.general} />
        <Button type='submit' disabled={loading} Wrapper='div' width='full'>
          {loading ? 'Logging in...' : 'Log In'}
        </Button>
      </Form>
      <AuthFooter promptText="Don't have an account? " link='/register' linkText='Sign up here'/>
    </>
  );
}
