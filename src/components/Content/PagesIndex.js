let maxPages = 6;

let Pages = [];

Pages[0] = require('../../pages/ContentDefault').default;
Pages[0].title = "Welcome";

for (let i = 1; i < maxPages; i++)
    Pages[i] = require('../../pages/Content0' + i).default;
Pages[1].title = "First title";
Pages[2].title = "Second title";
Pages[3].title = "Third title";
Pages[4].title = "Fourth title";
Pages[5].title = "Fifth title";

export default Pages;