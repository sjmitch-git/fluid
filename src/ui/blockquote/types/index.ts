export interface BlockquoteProps {
  text: string;
  author?: string;
  footerAlign?: 'left' | 'right'
  cite?: string;
  size?: 'md' | 'lg' | 'xl'
  className?: string;
  style?: React.CSSProperties
};