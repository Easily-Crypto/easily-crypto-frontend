import { Container } from './styled';

const Card = ({
  img,
  title,
  description,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <img src={img} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default Card;
