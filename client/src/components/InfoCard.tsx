interface InfoCardProps {
    title: string;
    value: string;
}

export default function InfoCard({title, value}: InfoCardProps) {
    return (
      <div className='bg-base-100 p-4 rounded-lg shadow'>
        <p>{title}</p>
        <p className='text-2xl font-bold'>{value}</p>
      </div>
    );
}
