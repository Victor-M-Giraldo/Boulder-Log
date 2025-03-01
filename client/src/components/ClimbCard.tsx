import CompletedStatus from "./CompletedStatus";
import ClimbNotes from "./ClimbNotes";
import { Climb } from "../types/climb";

interface ClimbCardProps {
    climb: Climb;
}

export default function ClimbCard({ climb }: ClimbCardProps) {
    return (
      <div className='bg-base-100 p-4 rounded-lg shadow flex flex-col sm:flex-row items-start gap-4'>
        <img
          src={climb.image}
          alt={climb.grade}
          className='w-full sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0'
        />
        <div className='flex-1 min-w-0 w-f  ull'>
          <div className='flex flex-col sm:flex-row justify-between items-start gap-2'>
            <div className='min-w-0'>
              <p className='text-xl font-bold'>{climb.grade}</p>
              <p>{climb.location}</p>
              <p className='text-sm'>{climb.date}</p>
            </div>
            <CompletedStatus completed={climb.completed} />
          </div>
          <ClimbNotes notes={climb.notes} />
        </div>
      </div>
    );
}
