module.exports = function(plop) {
  plop.setGenerator('class Component', {
    description: 'This creates a basic React class Component',
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `name of new file and Component`
      },
      {
        type: `confirm`,
        name: `addTestFile`,
        message: `Add a test file?`
      }
    ],
    actions: data => [
      {
        type: `add`,
        path: `src/components/{{kebabCase name}}/{{pascalCase name}}.js`,
        templateFile: `plop-templates/classComponent.js.hbs`
      },
      data.addTestFile && {
        type: `add`,
        path: `src/components/{{kebabCase name}}/{{pascalCase name}}.spec.js`,
        templateFile: `plop-templates/componentTest.js.hbs`
      }
    ]
  });

  plop.setGenerator('Function component', {
    description: 'This creates a basic React function Component',
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `name of new file and Component`
      },
      {
        type: `confirm`,
        name: `addTestFile`,
        message: `Add a test file?`
      }
    ],
    actions: data => [
      {
        type: `add`,
        path: `src/components/{{kebabCase name}}/{{pascalCase name}}.js`,
        templateFile: `plop-templates/functionComponent.js.hbs`
      },
      data.addTestFile && {
        type: `add`,
        path: `src/components/{{kebabCase name}}/{{pascalCase name}}.spec.js`,
        templateFile: `plop-templates/componentTest.js.hbs`
      }
    ]
  });
};
