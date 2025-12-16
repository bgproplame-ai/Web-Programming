function User(props) {
  return (
    <header id="user">
      <h2>
        {props.firstName} {props.lastName}
      </h2>

      <img src={props.image} alt="user" />

      <p>{props.classInfo}</p>
      <p>{props.number}</p>
    </header>
  );
}

export default User;
