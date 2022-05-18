import "./Button.scss";

const Button = (props: any) => {
  const btnClass = `btn + ${props.className}`;

  return (
    <a href={props.link} className={btnClass}>
      {props.children}
    </a>
  );
};

export default Button;
