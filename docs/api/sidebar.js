module.exports = [
  { type: "doc", id: "api/introduction" },
  {
    type: "category",
    label: "Subscribers",
    link: { type: "doc", id: "api/subscribers" },
    items: [
      { type: "doc", id: "api/create-subscriber", label: "Create a subscriber", className: "api-method post" },
      { type: "doc", id: "api/get-subscriber", label: "Get a subscriber", className: "api-method get" },
      { type: "doc", id: "api/update-subscriber", label: "Update a subscriber", className: "api-method put" },
    ],
  },
  {
    type: "category",
    label: "Segmentations",
    link: { type: "doc", id: "api/segmentations" },
    items: [
      {
        type: "doc",
        id: "api/add-subscriber-to-segment",
        label: "Add a subscriber to segmentation lists",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/remove-subscriber-from-segment",
        label: "Remove a subscriber from a segmentation list",
        className: "api-method delete",
      },
    ],
  },
];
