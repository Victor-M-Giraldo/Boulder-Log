import CompletedStatus from './CompletedStatus';
import ClimbNotes from './ClimbNotes';
import { Climb } from '../types/climb';
import Button from './Button';
import { format } from 'date-fns';

interface ClimbCardProps {
  climb: Climb;
  onAddNote?: (climbId: number) => void;
}

export default function ClimbCard({ climb, onAddNote }: ClimbCardProps) {
  climb.createdAt = format(new Date(climb.createdAt), 'MMMM dd, yyyy');
  console.log(climb);
  return (
    <div className='bg-base-100 p-4 rounded-lg shadow flex flex-col sm:flex-row items-start gap-4'>
      <img
        src={climb.imageUrl}
        alt={climb.grade}
        className='w-full sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0'
      />
      <div className='flex-1 min-w-0 w-full'>
        <div className='flex flex-col sm:flex-row justify-between items-start gap-2'>
          <div className='min-w-0'>
            <p className='text-xl font-bold'>{climb.grade}</p>
            <p>{climb.location}</p>
            <p className='text-sm'>{climb.createdAt}</p>
          </div>
          <CompletedStatus completed={climb.completed} />
        </div>
        <div className='mt-3'>
          <ClimbNotes notes={climb.notes} />
          <Button type='button' width='auto' onClick={() => onAddNote && onAddNote(climb.id)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 4v16m8-8H4'
              />
            </svg>
            <span className='inline-block'>Add Note</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
