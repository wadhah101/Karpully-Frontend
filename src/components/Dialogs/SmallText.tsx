import clsx from 'clsx';

const SmallTextComp: React.FC<{ data: string[]; error?: boolean }> = ({ data, error }) => {
  if (data.length === 0) return null;
  return (
    <div
      className={clsx(
        'text-sm font-semibold text-center',
        error ? 'text-red-400' : 'text-kgreen-400',
      )}
    >
      {data.map((e, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={ind}>{e}</p>
      ))}
    </div>
  );
};

export default SmallTextComp;
