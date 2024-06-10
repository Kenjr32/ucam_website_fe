

type ImageProps = {
    alt: string;
    source: string;
    styling: string;
   
}

export default function Image({alt, source, styling}: ImageProps) {
  return (
 
      <img src={source} alt={alt} className={styling} />
    
  );
}
