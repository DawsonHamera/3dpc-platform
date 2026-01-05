const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Import path mappings - old path to new path
const importMappings = [
    // Services
    { from: /from ['"]\.\.\/services\//g, to: `from '../shared/services/` },
    { from: /from ['"]\.\.\/\.\.\/services\//g, to: `from '../../shared/services/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/services\//g, to: `from '../../../shared/services/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/services\//g, to: `from '../../../../shared/services/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/services\//g, to: `from '../../../../../shared/services/` },
    { from: /from ['"]\.\/services\//g, to: `from './shared/services/` },

    // Redux
    { from: /from ['"]\.\.\/redux\//g, to: `from '../shared/redux/` },
    { from: /from ['"]\.\.\/\.\.\/redux\//g, to: `from '../../shared/redux/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/redux\//g, to: `from '../../../shared/redux/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/redux\//g, to: `from '../../../../shared/redux/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/redux\//g, to: `from '../../../../../shared/redux/` },
    { from: /from ['"]\.\/redux\//g, to: `from './shared/redux/` },

    // Components
    { from: /from ['"]\.\.\/components\//g, to: `from '../shared/components/` },
    { from: /from ['"]\.\.\/\.\.\/components\//g, to: `from '../../shared/components/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/components\//g, to: `from '../../../shared/components/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/components\//g, to: `from '../../../../shared/components/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/components\//g, to: `from '../../../../../shared/components/` },
    { from: /from ['"]\.\/components\//g, to: `from './shared/components/` },

    // Hooks
    { from: /from ['"]\.\.\/hooks\//g, to: `from '../shared/hooks/` },
    { from: /from ['"]\.\.\/\.\.\/hooks\//g, to: `from '../../shared/hooks/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/hooks\//g, to: `from '../../../shared/hooks/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/hooks\//g, to: `from '../../../../shared/hooks/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/hooks\//g, to: `from '../../../../../shared/hooks/` },
    { from: /from ['"]\.\/hooks\//g, to: `from './shared/hooks/` },

    // Types
    { from: /from ['"]\.\.\/types\//g, to: `from '../shared/types/` },
    { from: /from ['"]\.\.\/\.\.\/types\//g, to: `from '../../shared/types/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/types\//g, to: `from '../../../shared/types/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/types\//g, to: `from '../../../../shared/types/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/types\//g, to: `from '../../../../../shared/types/` },
    { from: /from ['"]\.\/types\//g, to: `from './shared/types/` },

    // Theme
    { from: /from ['"]\.\.\/theme\//g, to: `from '../shared/theme/` },
    { from: /from ['"]\.\.\/\.\.\/theme\//g, to: `from '../../shared/theme/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/theme\//g, to: `from '../../../shared/theme/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/theme\//g, to: `from '../../../../shared/theme/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/theme\//g, to: `from '../../../../../shared/theme/` },
    { from: /from ['"]\.\/theme\//g, to: `from './shared/theme/` },

    // Features (now in member-app) - from deepest to shallowest
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/features\//g, to: `from '../../../../../member-app/features/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/features\//g, to: `from '../../../../member-app/features/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/features\//g, to: `from '../../../member-app/features/` },
    { from: /from ['"]\.\.\/\.\.\/features\//g, to: `from '../../member-app/features/` },
    { from: /from ['"]\.\.\/features\//g, to: `from '../member-app/features/` },

    // baseApi (now in shared/lib)
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/features\/baseApi['"]/g, to: `from '../../../../../shared/lib/baseApi'` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/features\/baseApi['"]/g, to: `from '../../../../shared/lib/baseApi'` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/features\/baseApi['"]/g, to: `from '../../../shared/lib/baseApi'` },
    { from: /from ['"]\.\.\/\.\.\/features\/baseApi['"]/g, to: `from '../../shared/lib/baseApi'` },
    { from: /from ['"]\.\.\/features\/baseApi['"]/g, to: `from '../shared/lib/baseApi'` },
    { from: /from ['"]\.\/features\/baseApi['"]/g, to: `from './shared/lib/baseApi'` },

    // Pages - old structure to new
    { from: /from ['"]\.\.\/pages\/app\//g, to: `from '../member-app/pages/` },
    { from: /from ['"]\.\.\/\.\.\/pages\/app\//g, to: `from '../../member-app/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/pages\/app\//g, to: `from '../../../member-app/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/pages\/app\//g, to: `from '../../../../member-app/pages/` },

    { from: /from ['"]\.\.\/pages\/shop\//g, to: `from '../shop/pages/` },
    { from: /from ['"]\.\.\/\.\.\/pages\/shop\//g, to: `from '../../shop/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/pages\/shop\//g, to: `from '../../../shop/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/pages\/shop\//g, to: `from '../../../../shop/pages/` },

    { from: /from ['"]\.\.\/pages\/site\//g, to: `from '../landing/pages/` },
    { from: /from ['"]\.\.\/\.\.\/pages\/site\//g, to: `from '../../landing/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/pages\/site\//g, to: `from '../../../landing/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/pages\/site\//g, to: `from '../../../../landing/pages/` },

    { from: /from ['"]\.\.\/pages\/workstation\//g, to: `from '../workstation/pages/` },
    { from: /from ['"]\.\.\/\.\.\/pages\/workstation\//g, to: `from '../../workstation/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/pages\/workstation\//g, to: `from '../../../workstation/pages/` },
    { from: /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/pages\/workstation\//g, to: `from '../../../../workstation/pages/` },

    // Dashboard
    { from: /from ['"]\.\/Dashboard['"]/g, to: `from './member-app/Dashboard'` },
    { from: /from ['"]\.\.\/Dashboard['"]/g, to: `from '../member-app/Dashboard'` },
];

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    for (const mapping of importMappings) {
        if (mapping.from.test(content)) {
            content = content.replace(mapping.from, mapping.to);
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            updateFile(filePath);
        }
    }
}

console.log('Starting import path updates...');
walkDir(srcDir);
console.log('Import path updates complete!');
