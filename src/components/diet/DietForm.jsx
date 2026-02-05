function DietForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      age: 20,
      weight: 65,
      goal: "muscle_gain",
    };

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Get Diet Plan</button>
    </form>
  );
}

export default DietForm;
