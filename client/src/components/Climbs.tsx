import { Climb } from '../types/climb';
import ClimbCard from './ClimbCard';

interface ClimbsProps {
  climbs: Climb[];
}
export default function Climbs({ climbs }: ClimbsProps) {
  return (
    <div className='space-y-4'>
      {climbs.map((climb) => (
        <ClimbCard key={climb.id} climb={climb} />
      ))}
    </div>
  );
}
