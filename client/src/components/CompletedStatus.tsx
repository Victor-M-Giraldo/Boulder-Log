interface CompletedStatusProps {
  completed: boolean;
}

export default function CompletedStatus({ completed }: CompletedStatusProps) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm whitespace-nowrap flex-shrink-0 ${
        completed
          ? 'bg-green-100 text-green-800'
          : 'bg-yellow-100 text-yellow-800'
      }`}>
      {completed ? 'Sent ✅' : 'Project 🚩'}
    </span>
  );
}
