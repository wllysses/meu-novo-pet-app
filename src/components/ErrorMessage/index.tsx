interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <span className="text-red-500 text-sm font-bold">{message}</span>;
}
