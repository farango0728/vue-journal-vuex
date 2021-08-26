export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "DayBookLayout" */ "@/modules/daybook/layouts/DayBookLayout"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "@/modules/daybook/views/NoEntrySelected"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-entry" */ "@/modules/daybook/views/EntryView.vue"
        ),
      props: (router) => {
        return {
          id: router.params.id,
        };
      },
    },
  ],
};
