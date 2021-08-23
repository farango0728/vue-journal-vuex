export default () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "lorem",
      picture: null,
    },
  ],
});
