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
        name: `formik`,
        message: `Will this component be using Formik?`
      },
      {
        type: `confirm`,
        name: `addTestFile`,
        message: `Add a test file?`
      }
    ],
    actions: data =>
      [
        {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{pascalCase name}}.js`,
          templateFile: data.formik
            ? `plop-templates/javascript/formikClassComponent.js.hbs`
            : `plop-templates/javascript/classComponent.js.hbs`
        },
        data.formik && {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{kebabCase name}}FormikSetup.js`,
          templateFile: `plop-templates/javascript/formikSetup.js.hbs`
        },
        data.addTestFile && {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{pascalCase name}}.spec.js`,
          templateFile: `plop-templates/javascript/componentTest.js.hbs`
        }
      ].filter(Boolean)
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
        name: `formik`,
        message: `Will this component be using Formik?`
      },
      {
        type: `confirm`,
        name: `addTestFile`,
        message: `Add a test file?`
      }
    ],
    actions: data =>
      [
        {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{pascalCase name}}.js`,
          templateFile: data.formik
            ? `plop-templates/javascript/formikFunctionComponent.js.hbs`
            : `plop-templates/javascript/functionComponent.js.hbs`
        },
        data.formik && {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{kebabCase name}}FormikSetup.js`,
          templateFile: `plop-templates/javascript/formikSetup.js.hbs`
        },
        data.addTestFile && {
          type: `add`,
          path: `src/components/{{kebabCase name}}/{{pascalCase name}}.spec.js`,
          templateFile: `plop-templates/javascript/componentTest.js.hbs`
        }
      ].filter(Boolean)
  });
};
