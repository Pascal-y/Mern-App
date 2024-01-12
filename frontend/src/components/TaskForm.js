const TaskForm = ({
  createTask,
  name,
  handleInputChange,
  isEditing,
  updateTask
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateTask(e);
    } else {
      createTask(e);
    }
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Add a Task"
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
