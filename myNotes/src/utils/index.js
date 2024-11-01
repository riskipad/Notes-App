const getInitialData = () => ([
  {
    id: 1,
    title: "My Note",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam amet? Rem, vitae. Molestias eligendi, officiis inventore eveniet repellendus quam sint iure sequi. Blanditiis exercitationem magni optio et quaerat!",
    createdAt: showFormattedDate('2022-04-14T04:27:34.572Z'),
    archived: false,
  }
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
