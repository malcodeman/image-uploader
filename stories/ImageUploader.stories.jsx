import React from "react";

import ImageUploader from "../src/ImageUploader";

export default {
  title: "ImageUploader",
  component: ImageUploader,
};

const Template = (args) => <ImageUploader {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
