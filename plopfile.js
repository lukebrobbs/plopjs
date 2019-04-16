module.exports = function(plop) {
  plop.setGenerator("class Component", {
    description: "This creates a basic React class Component",
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `name of new Component`
      }
    ],
    actions: () =>
      [
        {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{pascalCase name}}.js`,
          templateFile: `plop-templates/javascript/functionComponent.js.hbs`
        },
        {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{kebabCase name}}.css`
        },
        {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{pascalCase name}}.spec.js`,
          templateFile: `plop-templates/javascript/componentTest.js.hbs`
        }
      ].filter(Boolean)
  });
};
