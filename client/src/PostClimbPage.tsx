import React, { useState } from 'react';

export default function PostClimbPage() {
  const [grade, setGrade] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [status, setStatus] = useState<string>('sent');
  const [notes, setNotes] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!grade || !location || !date) {
      setError('Please fill out all required fields.');
      return;
    }

    // Clear error and proceed with submission
    setError('');
    console.log('Climb data:', { grade, location, date, status, notes });

    // Here you would typically send the data to your backend API
  };

  return (
    <section className='h-full flex items-center justify-center p-6'>
      <div className='bg-base-100 rounded-lg shadow-md w-full max-w-2xl p-8'>
        <h1 className='text-2xl font-bold mb-6'>Post a New Climb</h1>

        {/* Error Message */}
        {error && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4'>
            {error}
          </div>
        )}

        {/* Climb Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Grade Field */}
          <div>
            <label htmlFor='grade' className='block text-sm font-medium'>
              Grade <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='grade'
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className='input w-full mt-1'
              placeholder='Enter the climb grade (e.g., V4)'
              required
            />
          </div>

          {/* Location Field */}
          <div>
            <label htmlFor='location' className='block text-sm font-medium'>
              Location <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='input w-full mt-1'
              placeholder='Enter the climb location'
              required
            />
          </div>

          {/* Date Field */}
          <div>
            <label htmlFor='date' className='block text-sm font-medium'>
              Date <span className='text-red-500'>*</span>
            </label>
            <input
              type='date'
              id='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='input w-full mt-1'
              required
            />
          </div>

          {/* Status Field */}
          <div>
            <label htmlFor='status' className='block text-sm font-medium'>
              Status <span className='text-red-500'>*</span>
            </label>
            <select
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='input w-full mt-1'
              required>
              <option value='sent'>Sent</option>
              <option value='project'>Project</option>
            </select>
          </div>

          {/* Notes Field */}
          <div>
            <label htmlFor='notes' className='block text-sm font-medium'>
              Notes
            </label>
            <textarea
              id='notes'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className='input w-full mt-1'
              placeholder='Add any notes about the climb (e.g., beta, conditions)'
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type='submit' className='w-full btn btn-primary'>
              Post Climb
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
