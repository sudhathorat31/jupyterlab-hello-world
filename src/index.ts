import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the hello-world extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'hello-world:plugin',
  description: 'A Hello World JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension hello-world is activated!');
  }
};

export default plugin;
