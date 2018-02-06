import { configure } from '@storybook/react';
import '../css/style.css';
import '../css/icons.css';

function loadStories() {
  require('../stories/General/');
  require('../stories/Navigation/');
  require('../stories/Data Entry/');
  require('../stories/Data Display/');
  require('../stories/Feedback/');
  require('../stories/Other/');
  // You can require as many stories as you need.
}

configure(loadStories, module);