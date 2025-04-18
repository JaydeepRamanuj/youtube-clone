import { formatDistanceToNow } from "date-fns";

function TimeAgo({ publishTime }) {
  const timeAgo = formatDistanceToNow(new Date(publishTime), {
    addSuffix: true,
  });

  return <span>{timeAgo}</span>;
}

export default TimeAgo;
