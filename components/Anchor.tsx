type Props = {
  children: React.ReactNode;
  href: string;
};

export const Anchor = ({ href, children }: Props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} className="a">
      {children}
    </a>
  );
};
