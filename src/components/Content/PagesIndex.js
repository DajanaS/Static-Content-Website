let Pages = [];

Pages[0] = require('../../pages/ContentDefault').default;
for (let i = 1; i < 6; i++)
    Pages[i] = require('../../pages/Content0' + i).default;

export default Pages;