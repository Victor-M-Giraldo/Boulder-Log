export default function ClimbFilters() {
    return (
      <div className='flex gap-4 mb-8 flex-wrap'>
        <select defaultValue='All Climbs' className='select max-md:w-full'>
          <option>All Climbs</option>
          <option>Sent</option>
          <option>Projects</option>
        </select>
        <select defaultValue='Sort by Date' className='select max-md:w-full'>
          <option>Sort by Date</option>
          <option>Sort by Grade</option>
        </select>
      </div>
    );
}
