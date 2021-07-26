const badge = require('./license-renderer');

// a function to generate markdown for README
const generate = ({
  title, description, installation, usage, license, contribution, tests, email, github
}) => {
  return `# ${title}

${badge.createBadge(license)}

---

## <h2 id="description"> Description </h2>

${description}

---

## <h2 id="table-of-contents"> Table of Contents </h2>

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution)
- [Tests](#tests)
- [License](#license)

---

## <h2 id="installation"> Installation </h2>
[(Back to top)](#table-of-content)

${installation}

---

## <h2 id="usage"> Usage </h2>
[(Back to top)](#table-of-content)

${usage}

---

## <h2 id="contribution"> Contributing </h2>
[(Back to top)](#table-of-content)

${contribution}

---

## <h2 id="tests"> Tests </h2>
[(Back to top)](#table-of-content)

${tests}

---

## <h2 id="license"> License </h2>
[(Back to top)](#table-of-content)

${badge.createSection(license)}

---

## <h2 id="questions"> Questions </h2>
[(Back to top)](#table-of-content)

Here is the [link](https://www.github.com/${github}) to my GitHub profile. If you have 
any question, you can contact me via this [email](mailto:${email}).
`
};

module.exports = {
  generate
}