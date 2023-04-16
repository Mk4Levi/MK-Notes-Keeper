//
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
