

type ImageProps = {
    alt: string;
    source: string;
    styling: string;
    onClick: () => void;
}

export default function Image({alt, source, styling, onClick}: ImageProps) {
  return (
 
      <img src={source} alt={alt} className={styling} onClick={onClick}/>
    
  );
}
