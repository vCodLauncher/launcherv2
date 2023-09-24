const path = require('path');

module.exports = function override(config, env) {
    // Exclure Electron de la compilation
    config.externals = {
        electron: 'commonjs electron',
    };

    // Remplacer le chemin de sortie du build
    config.output.path = path.join(__dirname, 'build/renderer');

    return config;
};
