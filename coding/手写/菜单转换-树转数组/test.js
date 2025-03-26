function treeToArray(tree) {}

const tree = {
  id: 1,
  name: "部门A",
  children: [
    {
      id: 2,
      name: "部门B",
      children: [
        {
          id: 4,
          name: "部门D",
          children: [
            {
              id: 7,
              name: "部门G",
              children: [],
            },
            {
              id: 8,
              name: "部门H",
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: "部门E",
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: "部门C",
      children: [
        {
          id: 6,
          name: "部门F",
          children: [],
        },
      ],
    },
  ],
};
console.log(treeToArray(tree));
